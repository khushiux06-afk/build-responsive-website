import { Injectable } from '@nestjs/common';
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
    return this.prisma.appointment.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.appointment.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
