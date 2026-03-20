import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('api/v1/treatments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.RECEPTIONIST) // Receptionists might add recorded treatments
  create(@Body() createTreatmentDto: any) {
    return this.treatmentsService.create(createTreatmentDto);
  }

  @Get('patient/:patientId')
  findByPatient(@Param('patientId') patientId: string) {
    return this.treatmentsService.findByPatient(patientId);
  }
}
