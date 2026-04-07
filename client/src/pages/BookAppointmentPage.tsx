import React, { useState, useMemo } from 'react';
import { X, Save, User, Calendar, Clock, Stethoscope, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData, Appointment } from '../contexts/DataContext';

// Generate 30-min time slots from 09:00 to 18:00
const TIME_SLOTS = Array.from({ length: 18 }, (_, i) => {
  const hour = Math.floor(i / 2) + 9;
  const min = (i % 2) * 30;
  const h24 = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const h12 = hour % 12 || 12;
  const display = `${String(h12).padStart(2, '0')}:${String(min).padStart(2, '0')} ${ampm}`;
  return { value: h24, display };
});

export const BookAppointmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { addAppointment, doctors, isSlotBooked } = useData();

  const [form, setForm] = useState({ patient: '', phone: '', doctor: '', date: '', time: '', treatment: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [conflictError, setConflictError] = useState('');

  // Compute which slots are booked for the selected doctor+date
  const bookedSlots = useMemo(() => {
    if (!form.doctor || !form.date) return new Set<string>();
    const set = new Set<string>();
    TIME_SLOTS.forEach(slot => {
      if (isSlotBooked(form.doctor, form.date, slot.display)) {
        set.add(slot.value);
      }
    });
    return set;
  }, [form.doctor, form.date, isSlotBooked]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.patient.trim()) e.patient = 'Patient name is required';
    if (!form.doctor.trim()) e.doctor = 'Doctor is required';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time slot';
    if (!form.treatment.trim()) e.treatment = 'Treatment type is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConflictError('');
    if (!validate()) return;

    // Convert 24h time to 12h for display
    const [h, m] = form.time.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    const displayTime = `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;

    // Final conflict check (safety net)
    if (isSlotBooked(form.doctor, form.date, displayTime)) {
      setConflictError(`❌ ${form.doctor} already has an appointment at ${displayTime} on this date. Please choose a different time slot.`);
      return;
    }

    const dateObj = new Date(form.date);
    const formatted = dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    const newAppt: Appointment = {
      id: `APT-${Date.now()}`,
      patient: form.patient.trim(),
      phone: form.phone.trim(),
      doctor: form.doctor.trim(),
      date: formatted,
      rawDate: form.date,
      time: displayTime,
      treatment: form.treatment.trim(),
      notes: form.notes.trim(),
      status: 'SCHEDULED',
      duration: 30,
    };

    addAppointment(newAppt);
    setSubmitted(true);
  };

  const selectTimeSlot = (slotValue: string) => {
    if (bookedSlots.has(slotValue)) return;
    setForm(p => ({ ...p, time: slotValue }));
    setConflictError('');
  };

  const inputCls = (field: string) =>
    `w-full px-3 py-2.5 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-colors ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200'}`;

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto mt-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-10 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={40} className="text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Appointment Booked!</h2>
          <p className="text-gray-500 text-sm mb-5">It will now appear in the Appointments page</p>
          <div className="bg-gray-50 rounded-xl p-5 text-left space-y-2 mb-6">
            {[['Patient', form.patient], ['Phone', form.phone || '—'], ['Doctor', form.doctor], ['Date', new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })], ['Time', (() => { const [hh,mm] = form.time.split(':').map(Number); const ap = hh >= 12 ? 'PM' : 'AM'; return `${String(hh%12||12).padStart(2,'0')}:${String(mm).padStart(2,'0')} ${ap}`; })()], ['Treatment', form.treatment]].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-gray-900">{val}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-3">
            <button onClick={() => { setSubmitted(false); setForm({ patient: '', phone: '', doctor: '', date: '', time: '', treatment: '', notes: '' }); }} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-gray-600 font-semibold text-sm hover:bg-gray-50">Book Another</button>
            <button onClick={() => navigate('/appointments')} className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all">View Appointments ›</button>
          </div>
        </div>
      </div>
    );
  }

  const doctorAndDateSelected = form.doctor && form.date;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5 text-white flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Book New Appointment</h1>
            <p className="text-blue-100 text-sm mt-0.5">Fill in all details — it will appear instantly in Appointments</p>
          </div>
          <button onClick={() => navigate('/appointments')} className="p-2 hover:bg-white/20 rounded-lg" title="Close"><X size={22} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {conflictError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3">
              <AlertCircle size={20} className="text-red-500 mt-0.5 shrink-0" />
              <p className="text-red-700 text-sm font-medium">{conflictError}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><User size={14} className="mr-1.5 text-blue-500" /> Patient Full Name *</label>
              <input type="text" value={form.patient} onChange={e => setForm(p => ({ ...p, patient: e.target.value }))} placeholder="e.g. Rahul Sharma" className={inputCls('patient')} />
              {errors.patient && <p className="text-red-500 text-xs mt-1">{errors.patient}</p>}
            </div>
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><User size={14} className="mr-1.5 text-blue-500" /> Phone Number</label>
              <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><Stethoscope size={14} className="mr-1.5 text-blue-500" /> Attending Doctor *</label>
            <select value={form.doctor} onChange={e => setForm(p => ({ ...p, doctor: e.target.value, time: '' }))} className={inputCls('doctor')}>
              <option value="">— Select a Doctor —</option>
              {doctors.map(d => <option key={d.id} value={d.fullName}>{d.fullName} ({d.specialization})</option>)}
            </select>
            {errors.doctor && <p className="text-red-500 text-xs mt-1">{errors.doctor}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><Calendar size={14} className="mr-1.5 text-blue-500" /> Date *</label>
              <input type="date" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => setForm(p => ({ ...p, date: e.target.value, time: '' }))} className={inputCls('date')} />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><Stethoscope size={14} className="mr-1.5 text-blue-500" /> Treatment / Purpose *</label>
              <input type="text" list="treatment-list" value={form.treatment} onChange={e => setForm(p => ({ ...p, treatment: e.target.value }))} placeholder="Type or select treatment" className={inputCls('treatment')} />
              <datalist id="treatment-list">
                {['Root Canal', 'Tooth Cleaning', 'Dental Filling', 'Braces Fitting', 'Extraction', 'X-Ray + Checkup', 'Crown Fitting', 'Teeth Whitening', 'Dentures', 'General Checkup'].map(t => <option key={t} value={t} />)}
              </datalist>
              {errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
            </div>
          </div>

          {/* Time Slot Grid */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2"><Clock size={14} className="mr-1.5 text-blue-500" /> Select Time Slot *</label>
            {!doctorAndDateSelected ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-gray-400 text-sm">
                <Clock size={20} className="mx-auto mb-1 opacity-40" />
                Please select a <b>Doctor</b> and <b>Date</b> first to see available slots
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {TIME_SLOTS.map(slot => {
                  const booked = bookedSlots.has(slot.value);
                  const selected = form.time === slot.value;
                  return (
                    <button
                      key={slot.value}
                      type="button"
                      disabled={booked}
                      onClick={() => selectTimeSlot(slot.value)}
                      className={`px-2 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                        booked
                          ? 'bg-red-50 text-red-400 border-red-200 cursor-not-allowed line-through'
                          : selected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200 scale-105'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 cursor-pointer'
                      }`}
                      title={booked ? `Booked — ${form.doctor} already has an appointment` : slot.display}
                    >
                      {slot.display}
                      {booked && <span className="block text-[9px] mt-0.5 font-medium no-underline" style={{ textDecoration: 'none' }}>Booked</span>}
                    </button>
                  );
                })}
              </div>
            )}
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-1.5"><FileText size={14} className="mr-1.5 text-blue-500" /> Notes (Optional)</label>
            <textarea rows={3} value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Symptoms, history, special instructions..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none" />
          </div>

          <div className="flex space-x-4 pt-2">
            <button type="button" onClick={() => navigate('/appointments')} className="flex-1 py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 text-sm">Cancel</button>
            <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center">
              <Save size={16} className="mr-2" /> Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
