import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(date?: string, doctorId?: string, status?: any) {
    const where: any = {};
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      where.scheduledAt = { gte: startOfDay, lte: endOfDay };
    }
    if (doctorId) where.doctorId = doctorId;
    if (status) where.status = status;

    return this.prisma.appointment.findMany({
      where,
      include: { patient: true, doctor: true },
      orderBy: { scheduledAt: 'asc' },
    });
  }

  async create(data: any) {
    const conflict = await this.prisma.appointment.findFirst({
      where: {
        doctorId: data.doctorId,
        scheduledAt: data.scheduledAt,
        status: { not: 'CANCELLED' }
      }
    });

    if (conflict) {
      throw new ConflictException('Doctor already has an appointment at this time');
    }

    return this.prisma.appointment.create({ data });
  }

  async update(id: string, data: any) {
    if (data.scheduledAt || data.doctorId) {
      const current = await this.prisma.appointment.findUnique({ where: { id } });
      const doctorId = data.doctorId || current.doctorId;
      const scheduledAt = data.scheduledAt || current.scheduledAt;

      const conflict = await this.prisma.appointment.findFirst({
        where: {
          id: { not: id },
          doctorId,
          scheduledAt,
          status: { not: 'CANCELLED' }
        }
      });

      if (conflict) {
        throw new ConflictException('Doctor already has an appointment at this time');
      }
    }
    return this.prisma.appointment.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
