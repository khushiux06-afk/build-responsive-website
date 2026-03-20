import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('api/v1/patients')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll(@Query('search') search: string, @Query('page') page: string, @Query('limit') limit: string) {
    return this.patientsService.findAll(search, +page || 1, +limit || 10);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @Post()
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  create(@Body() createPatientDto: any) {
    return this.patientsService.create(createPatientDto);
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  update(@Param('id') id: string, @Body() updatePatientDto: any) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
