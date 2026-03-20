import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TreatmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.treatment.create({ data });
  }

  async findByPatient(patientId: string) {
    return this.prisma.treatment.findMany({
      where: { patientId },
      include: { doctor: true, appointment: true },
      orderBy: { performedAt: 'desc' },
    });
  }
}
