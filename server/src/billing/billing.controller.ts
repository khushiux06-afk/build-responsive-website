import { Controller, Get, Post, Body, Param, UseGuards, Res } from '@nestjs/common';
import { BillingService } from './billing.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import type { Response } from 'express';

@Controller('api/v1/invoices')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  create(@Body() body: { patientId: string; treatmentIds: string[]; discount?: number; tax?: number }) {
    return this.billingService.createInvoice(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingService.findOne(id);
  }

  @Post(':id/pay')
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  pay(@Param('id') id: string, @Body() body: { paymentMethod: string }) {
    return this.billingService.markAsPaid(id, body.paymentMethod);
  }

  @Get(':id/download')
  async download(@Param('id') id: string, @Res() res: Response) {
    // PDF generation mock for now
    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from('Mock PDF Content'));
  }
}
