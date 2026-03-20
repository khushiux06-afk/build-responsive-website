import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { BillingModule } from './billing/billing.module';
import { AuditModule } from './audit/audit.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, PatientsModule, DoctorsModule, AppointmentsModule, TreatmentsModule, BillingModule, AuditModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
