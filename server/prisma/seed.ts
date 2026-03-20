import { PrismaClient, Role, Gender, AppointmentStatus, Doctor, Patient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.auditLog.deleteMany({});
  await prisma.invoiceItem.deleteMany({});
  await prisma.invoice.deleteMany({});
  await prisma.treatment.deleteMany({});
  await prisma.appointment.deleteMany({});
  await prisma.doctor.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.user.deleteMany({});

  // Create Admin User
  const adminPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      passwordHash: adminPassword,
      role: Role.ADMIN,
      name: 'Dr. Khushi',
    },
  });

  // Real Indian Doctor Data
  const doctorData = [
    {
      fullName: 'Dr. Ankit Sharma',
      specialization: 'Orthodontist',
      phone: '9876543201',
      email: 'ankit.sharma@dentalhub.in',
      experienceYears: 8,
    },
    {
      fullName: 'Dr. Neha Kapoor',
      specialization: 'Dental Surgeon',
      phone: '9876543202',
      email: 'neha.kapoor@dentalhub.in',
      experienceYears: 10,
    },
    {
      fullName: 'Dr. Rajiv Mehta',
      specialization: 'Pediatric Dentist',
      phone: '9876543203',
      email: 'admin@dentaldashboard.com',
      experienceYears: 6,
    },
    {
      fullName: 'Dr. Priya Das',
      specialization: 'Endodontist',
      phone: '9876543204',
      email: 'priya.das@dentalhub.in',
      experienceYears: 12,
    },
    {
      fullName: 'Dr. Sameer Khan',
      specialization: 'General Dentist',
      phone: '9876543205',
      email: 'sameer.khan@dentalhub.in',
      experienceYears: 5,
    },
  ];

  const doctors: Doctor[] = [];
  for (const data of doctorData) {
    doctors.push(await prisma.doctor.create({ data }));
  }

  // Real Indian Patient Data
  const patientData = [
    { fullName: 'Rahul Sharma', phone: '9876543210', email: 'rahul.s@gmail.com', gender: Gender.MALE, dob: new Date('1990-05-15'), address: 'Sector 15, Gurgaon' },
    { fullName: 'Priya Verma', phone: '9812345678', email: 'priya.v@outlook.com', gender: Gender.FEMALE, dob: new Date('1985-11-20'), address: 'Hauz Khas, Delhi' },
    { fullName: 'Amit Gupta', phone: '9898989898', email: 'amit.g@yahoo.com', gender: Gender.MALE, dob: new Date('1995-02-10'), address: 'Bandra West, Mumbai' },
    { fullName: 'Neha Singh', phone: '9988776655', email: 'neha.s@gmail.com', gender: Gender.FEMALE, dob: new Date('1988-08-30'), address: 'Indiranagar, Bangalore' },
    { fullName: 'Rohit Kumar', phone: '9123456789', email: 'rohit.k@gmail.com', gender: Gender.MALE, dob: new Date('1992-12-05'), address: 'Salt Lake, Kolkata' },
    { fullName: 'Anjali Mehta', phone: '9878654321', email: 'anjali.m@gmail.com', gender: Gender.FEMALE, dob: new Date('2000-03-25'), address: 'Kothrud, Pune' },
    { fullName: 'Suresh Iyer', phone: '9444455555', email: 'suresh.i@gmail.com', gender: Gender.MALE, dob: new Date('1975-06-12'), address: 'Adyar, Chennai' },
    { fullName: 'Kavita Reddy', phone: '9888877777', email: 'kavita.r@gmail.com', gender: Gender.FEMALE, dob: new Date('1982-10-18'), address: 'Banjara Hills, Hyderabad' },
    { fullName: 'Vikram Singh', phone: '9777766666', email: 'vikram.s@gmail.com', gender: Gender.MALE, dob: new Date('1998-01-01'), address: 'Malviya Nagar, Jaipur' },
    { fullName: 'Deepa Nair', phone: '9666655555', email: 'deepa.n@gmail.com', gender: Gender.FEMALE, dob: new Date('1993-04-20'), address: 'Palayam, Trivandrum' },
  ];

  const patients: Patient[] = [];
  for (const data of patientData) {
    patients.push(await prisma.patient.create({ data }));
  }

  // Create initial appointments & treatments
  for (let i = 0; i < 5; i++) {
    const appointment = await prisma.appointment.create({
      data: {
        patientId: patients[i].id,
        doctorId: doctors[i % 5].id,
        scheduledAt: new Date(Date.now() + i * 24 * 60 * 60 * 1000), // Next 5 days
        durationMinutes: 30,
        status: AppointmentStatus.SCHEDULED,
        createdById: admin.id,
      },
    });

    // Add some treatments
    const treatmentDescriptions = ['Tooth Cleaning', 'Root Canal', 'Tooth Extraction', 'Dental Filling', 'Ortho Consultation'];
    const costs = [1200, 3500, 1800, 1500, 1000];
    
    await prisma.treatment.create({
      data: {
        appointmentId: appointment.id,
        patientId: patients[i].id,
        doctorId: doctors[i % 5].id, // Required by schema
        description: treatmentDescriptions[i],
        cost: costs[i],
      }
    });
  }

  console.log('Seed completed with Indian names and currency context successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
