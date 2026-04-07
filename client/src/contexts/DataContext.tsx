import React, { createContext, useContext, useState, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Appointment {
  id: string;
  patient: string;
  phone?: string;
  doctor: string;
  date: string;          // e.g. "11 Mar 2024"
  rawDate: string;       // yyyy-mm-dd for sorting
  time: string;          // e.g. "09:30"
  treatment: string;
  notes?: string;
  status: string;        // SCHEDULED | CONFIRMED | ONGOING | COMPLETED | CANCELLED
  duration: number;      // minutes
}

export interface Patient {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  blood: string;
  lastVisit: string;
}

export interface Doctor {
  id: string;
  fullName: string;
  specialization: string;
  experienceYears: number;
  phone: string;
  email: string;
  photoKey: string;
}

export const PHOTOS: Record<string, string> = {
  male_1: 'https://randomuser.me/api/portraits/men/32.jpg',
  male_2: 'https://randomuser.me/api/portraits/men/75.jpg',
  male_3: 'https://randomuser.me/api/portraits/men/46.jpg',
  female_1: 'https://randomuser.me/api/portraits/women/44.jpg',
  female_2: 'https://randomuser.me/api/portraits/women/68.jpg',
  female_3: 'https://randomuser.me/api/portraits/women/90.jpg',
};

// ─── Seed data ────────────────────────────────────────────────────────────────

const SEED_APPOINTMENTS: Appointment[] = [
  { id: 'APT-001', patient: 'Rahul Sharma', phone: '+91 98765 43210', doctor: 'Dr. Ankit Sharma', date: '11 Mar 2024', rawDate: '2024-03-11', time: '09:00', treatment: 'Root Canal', status: 'CONFIRMED', duration: 45, notes: '' },
  { id: 'APT-002', patient: 'Priya Verma', phone: '+91 87654 32109', doctor: 'Dr. Neha Kapoor', date: '11 Mar 2024', rawDate: '2024-03-11', time: '10:30', treatment: 'Tooth Cleaning', status: 'COMPLETED', duration: 30, notes: '' },
  { id: 'APT-003', patient: 'Amit Gupta', phone: '+91 76543 21098', doctor: 'Dr. Rajiv Mehta', date: '11 Mar 2024', rawDate: '2024-03-11', time: '12:00', treatment: 'Braces Fitting', status: 'ONGOING', duration: 60, notes: '' },
  { id: 'APT-004', patient: 'Neha Singh', phone: '+91 65432 10987', doctor: 'Dr. Priya Das', date: '12 Mar 2024', rawDate: '2024-03-12', time: '14:00', treatment: 'Dental Filling', status: 'SCHEDULED', duration: 30, notes: '' },
  { id: 'APT-005', patient: 'Vikram Sinha', phone: '+91 54321 09876', doctor: 'Dr. Suresh Patel', date: '12 Mar 2024', rawDate: '2024-03-12', time: '15:30', treatment: 'Extraction', status: 'SCHEDULED', duration: 45, notes: '' },
  { id: 'APT-006', patient: 'Ananya Roy', phone: '+91 43210 98765', doctor: 'Dr. Kavita Joshi', date: '13 Mar 2024', rawDate: '2024-03-13', time: '11:00', treatment: 'General Checkup', status: 'SCHEDULED', duration: 30, notes: '' },
  { id: 'APT-007', patient: 'Mohan Yadav', phone: '+91 32109 87654', doctor: 'Dr. Ankit Sharma', date: '13 Mar 2024', rawDate: '2024-03-13', time: '10:00', treatment: 'Root Canal', status: 'CONFIRMED', duration: 60, notes: '' },
];

const SEED_PATIENTS: Patient[] = [
  { id: 'P001', fullName: 'Rahul Sharma', phone: '+91 98765 43210', email: 'rahul.sharma@gmail.com', dob: '1990-05-15', gender: 'Male', blood: 'B+', lastVisit: '10 Mar 2024' },
  { id: 'P002', fullName: 'Priya Verma', phone: '+91 87654 32109', email: 'priya.verma@gmail.com', dob: '1985-09-22', gender: 'Female', blood: 'A+', lastVisit: '09 Mar 2024' },
  { id: 'P003', fullName: 'Amit Gupta', phone: '+91 76543 21098', email: 'amit.gupta@gmail.com', dob: '1978-03-10', gender: 'Male', blood: 'O+', lastVisit: '08 Mar 2024' },
  { id: 'P004', fullName: 'Neha Singh', phone: '+91 65432 10987', email: 'neha.singh@gmail.com', dob: '1995-11-28', gender: 'Female', blood: 'AB+', lastVisit: '07 Mar 2024' },
  { id: 'P005', fullName: 'Vikram Sinha', phone: '+91 54321 09876', email: 'vikram.sinha@gmail.com', dob: '1982-07-04', gender: 'Male', blood: 'B-', lastVisit: '06 Mar 2024' },
  { id: 'P006', fullName: 'Ananya Roy', phone: '+91 43210 98765', email: 'ananya.roy@gmail.com', dob: '1992-01-17', gender: 'Female', blood: 'O-', lastVisit: '05 Mar 2024' },
  { id: 'P007', fullName: 'Mohan Yadav', phone: '+91 32109 87654', email: 'mohan.yadav@gmail.com', dob: '1970-12-08', gender: 'Male', blood: 'A-', lastVisit: '04 Mar 2024' },
  { id: 'P008', fullName: 'Kavya Reddy', phone: '+91 21098 76543', email: 'kavya.reddy@gmail.com', dob: '1998-06-30', gender: 'Female', blood: 'B+', lastVisit: '03 Mar 2024' },
  { id: 'P009', fullName: 'Suresh Kumar', phone: '+91 10987 65432', email: 'suresh.kumar@gmail.com', dob: '1965-04-19', gender: 'Male', blood: 'AB-', lastVisit: '02 Mar 2024' },
  { id: 'P10', fullName: 'Deepa Nair', phone: '+91 09876 54321', email: 'deepa.nair@gmail.com', dob: '1988-08-25', gender: 'Female', blood: 'O+', lastVisit: '01 Mar 2024' },
];

const SEED_DOCTORS: Doctor[] = [
  { id: 'D01', fullName: 'Dr. Ankit Sharma', specialization: 'Orthodontist', experienceYears: 12, phone: '+91 98765 43210', email: 'ankit.sharma@dentaldashboard.com', photoKey: 'male_1' },
  { id: 'D02', fullName: 'Dr. Neha Kapoor', specialization: 'Endodontist', experienceYears: 8, phone: '+91 87654 32109', email: 'neha.kapoor@dentaldashboard.com', photoKey: 'female_1' },
  { id: 'D03', fullName: 'Dr. Rajiv Mehta', specialization: 'Periodontist', experienceYears: 15, phone: '+91 76543 21098', email: 'rajiv.mehta@dentaldashboard.com', photoKey: 'male_2' },
  { id: 'D04', fullName: 'Dr. Priya Das', specialization: 'Prosthodontist', experienceYears: 10, phone: '+91 65432 10987', email: 'priya.das@dentaldashboard.com', photoKey: 'female_2' },
  { id: 'D05', fullName: 'Dr. Suresh Patel', specialization: 'Oral Surgeon', experienceYears: 18, phone: '+91 54321 09876', email: 'suresh.patel@dentaldashboard.com', photoKey: 'male_3' },
  { id: 'D06', fullName: 'Dr. Kavita Joshi', specialization: 'Pediatric Dentist', experienceYears: 7, phone: '+91 43210 98765', email: 'kavita.joshi@dentaldashboard.com', photoKey: 'female_3' },
];

// ─── Context ──────────────────────────────────────────────────────────────────

interface DataCtx {
  appointments: Appointment[];
  addAppointment: (a: Appointment) => void;
  updateAppointment: (id: string, patch: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  isSlotBooked: (doctor: string, rawDate: string, time: string, excludeId?: string) => boolean;

  patients: Patient[];
  addPatient: (p: Patient) => void;
  updatePatient: (id: string, patch: Partial<Patient>) => void;
  deletePatient: (id: string) => void;

  doctors: Doctor[];
  addDoctor: (d: Doctor) => void;
  updateDoctor: (id: string, patch: Partial<Doctor>) => void;
  deleteDoctor: (id: string) => void;
}

const DataContext = createContext<DataCtx | undefined>(undefined);

// ─── Helper ───────────────────────────────────────────────────────────────────

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, val: T) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => load('clinic_appointments', SEED_APPOINTMENTS));
  const [patients, setPatients] = useState<Patient[]>(() => load('clinic_patients', SEED_PATIENTS));
  const [doctors, setDoctors] = useState<Doctor[]>(() => load('clinic_doctors', SEED_DOCTORS));

  // Persist to localStorage whenever data changes
  useEffect(() => { save('clinic_appointments', appointments); }, [appointments]);
  useEffect(() => { save('clinic_patients', patients); }, [patients]);
  useEffect(() => { save('clinic_doctors', doctors); }, [doctors]);

  // Check if a slot is already booked for a specific doctor+date+time
  const isSlotBooked = (doctor: string, rawDate: string, time: string, excludeId?: string): boolean => {
    return appointments.some(a =>
      a.doctor === doctor &&
      a.rawDate === rawDate &&
      a.time === time &&
      a.status !== 'CANCELLED' &&
      (excludeId ? a.id !== excludeId : true)
    );
  };

  const addAppointment = (a: Appointment) => setAppointments(prev => [a, ...prev]);
  const updateAppointment = (id: string, patch: Partial<Appointment>) =>
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, ...patch } : a));
  const deleteAppointment = (id: string) => setAppointments(prev => prev.filter(a => a.id !== id));

  const addPatient = (p: Patient) => setPatients(prev => [p, ...prev]);
  const updatePatient = (id: string, patch: Partial<Patient>) =>
    setPatients(prev => prev.map(p => p.id === id ? { ...p, ...patch } : p));
  const deletePatient = (id: string) => setPatients(prev => prev.filter(p => p.id !== id));

  const addDoctor = (d: Doctor) => setDoctors(prev => [d, ...prev]);
  const updateDoctor = (id: string, patch: Partial<Doctor>) =>
    setDoctors(prev => prev.map(d => d.id === id ? { ...d, ...patch } : d));
  const deleteDoctor = (id: string) => setDoctors(prev => prev.filter(d => d.id !== id));

  return (
    <DataContext.Provider value={{ appointments, addAppointment, updateAppointment, deleteAppointment, isSlotBooked, patients, addPatient, updatePatient, deletePatient, doctors, addDoctor, updateDoctor, deleteDoctor }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
