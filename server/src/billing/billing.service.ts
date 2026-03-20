import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}

  async createInvoice(data: { patientId: string; treatmentIds: string[]; discount?: number; tax?: number }) {
    const treatments = await this.prisma.treatment.findMany({
      where: { id: { in: data.treatmentIds } },
    });

    const subtotal = treatments.reduce((sum, t) => sum.add(t.cost), new Decimal(0));
    const tax = new Decimal(data.tax || 0);
    const discount = new Decimal(data.discount || 0);
    const total = subtotal.add(tax).minus(discount);

    return this.prisma.invoice.create({
      data: {
        patientId: data.patientId,
        subtotal,
        tax,
        discount,
        total,
        status: 'UNPAID',
        items: {
          create: treatments.map((t) => ({
            treatmentId: t.id,
            amount: t.cost,
          })),
        },
      },
      include: { items: { include: { treatment: true } } },
    });
  }

  async findOne(id: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
      include: { patient: true, items: { include: { treatment: true } } },
    });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  async markAsPaid(id: string, paymentMethod: string) {
    return this.prisma.invoice.update({
      where: { id },
      data: { status: 'PAID', paymentMethod },
    });
  }
}
