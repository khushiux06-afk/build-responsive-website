import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query, Request } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('api/v1/appointments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(@Query('date') date: string, @Query('doctor') doctorId: string, @Query('status') status: any) {
    return this.appointmentsService.findAll(date, doctorId, status);
  }

  @Post()
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  create(@Body() createAppointmentDto: any, @Request() req: any) {
    return this.appointmentsService.create({
      ...createAppointmentDto,
      createdById: req.user.userId,
    });
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  update(@Param('id') id: string, @Body() updateAppointmentDto: any) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}
