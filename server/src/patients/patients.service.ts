import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async findAll(search?: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const where = search ? {
      OR: [
        { fullName: { contains: search, mode: 'insensitive' as const } },
        { phone: { contains: search, mode: 'insensitive' as const } },
      ],
    } : {};

    const [patients, total] = await Promise.all([
      this.prisma.patient.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.patient.count({ where }),
    ]);

    return {
      data: patients,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    return this.prisma.patient.findUnique({
      where: { id },
      include: {
        appointments: { include: { doctor: true } },
        treatments: true,
        invoices: true,
      },
    });
  }

  async create(data: any) {
    return this.prisma.patient.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.patient.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.patient.delete({ where: { id } });
  }
}
