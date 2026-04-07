import React, { useState } from 'react';
import { Search, Plus, Clock, User, Edit2, Trash2, Check, X, Save, Calendar as CalendarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData, Appointment, PHOTOS } from '../contexts/DataContext';
import { useConfirm } from '../components/ConfirmDialog';
import { AlertCircle } from 'lucide-react';

const TREATMENTS = ['Root Canal', 'Tooth Cleaning', 'Dental Filling', 'Braces Fitting', 'Extraction', 'X-Ray + Checkup', 'Crown Fitting', 'Teeth Whitening', 'General Checkup'];

const STATUS_STYLES: Record<string, string> = {
  CONFIRMED: 'bg-blue-100 text-blue-700',
  SCHEDULED: 'bg-amber-100 text-amber-700',
  COMPLETED: 'bg-emerald-100 text-emerald-700',
  ONGOING: 'bg-purple-100 text-purple-700',
  CANCELLED: 'bg-red-100 text-red-700',
};

export const AppointmentsPage: React.FC = () => {
  const navigate = useNavigate();
  const confirm = useConfirm();
  const { appointments, updateAppointment, deleteAppointment, doctors, isSlotBooked } = useData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [editAppt, setEditAppt] = useState<Appointment | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [editError, setEditError] = useState('');

  // Sort newest-added first
  const sorted = [...appointments].sort((a, b) => b.id.localeCompare(a.id));

  const filtered = sorted.filter(a => {
    const matchSearch =
      a.patient.toLowerCase().includes(search.toLowerCase()) ||
      a.doctor.toLowerCase().includes(search.toLowerCase()) ||
      a.treatment.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || a.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const markComplete = (id: string) => updateAppointment(id, { status: 'COMPLETED' });

  const handleDelete = async (id: string, patient: string) => {
    const ok = await confirm({ title: 'Cancel Appointment', message: `Cancel appointment for ${patient}?`, confirmLabel: 'Cancel Appointment', danger: true });
    if (ok) deleteAppointment(id);
  };

  const openEdit = (a: Appointment) => { setEditAppt({ ...a }); setEditError(''); setShowEdit(true); };

  const saveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editAppt) {
      // Check for conflict: same doctor, same date, same time (excluding this appointment)
      if (isSlotBooked(editAppt.doctor, editAppt.rawDate, editAppt.time, editAppt.id)) {
        setEditError(`❌ ${editAppt.doctor} already has an appointment at ${editAppt.time} on ${editAppt.date}. Change the time or doctor.`);
        return;
      }
      updateAppointment(editAppt.id, editAppt);
    }
    setEditError('');
    setShowEdit(false);
  };

  const counts = {
    total: appointments.length,
    confirmed: appointments.filter(a => a.status === 'CONFIRMED').length,
    completed: appointments.filter(a => a.status === 'COMPLETED').length,
    scheduled: appointments.filter(a => a.status === 'SCHEDULED').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-500">All appointments — newest first</p>
        </div>
        <button onClick={() => navigate('/appointments/new')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md whitespace-nowrap">
          <Plus size={18} className="mr-2" /> Book Appointment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total', value: counts.total, col: 'text-gray-900' },
          { label: 'Confirmed', value: counts.confirmed, col: 'text-blue-600' },
          { label: 'Completed', value: counts.completed, col: 'text-emerald-600' },
          { label: 'Scheduled', value: counts.scheduled, col: 'text-amber-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm py-3 text-center">
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className={`text-2xl font-bold ${s.col}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex items-center space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input type="text" placeholder="Search patient, doctor, treatment..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 outline-none shadow-sm">
          <option>All</option>
          {['SCHEDULED', 'CONFIRMED', 'ONGOING', 'COMPLETED', 'CANCELLED'].map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <CalendarIcon size={36} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">No appointments found</p>
            <p className="text-sm mt-1 mb-4">Book your first appointment below</p>
            <button onClick={() => navigate('/appointments/new')} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">Book Appointment</button>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {filtered.map(apt => (
              <div key={apt.id} className="p-5 hover:bg-gray-50/80 transition-colors flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Date/Time block */}
                  <div className="w-16 h-14 bg-blue-50 text-blue-700 rounded-xl flex flex-col items-center justify-center font-bold shrink-0">
                    <span className="text-[9px] uppercase opacity-60 leading-none">{apt.date.split(' ').slice(1).join(' ')}</span>
                    <span className="text-xs font-bold leading-tight">{apt.time}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 flex-wrap">
                      <span className="font-bold text-gray-900">{apt.patient}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${STATUS_STYLES[apt.status] || 'bg-gray-100 text-gray-600'}`}>{apt.status}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 space-x-3 mt-0.5 flex-wrap">
                      <span className="flex items-center">
                        <img
                          src={PHOTOS[doctors.find(d => d.fullName === apt.doctor)?.photoKey || ''] || `https://ui-avatars.com/api/?name=${apt.doctor}&background=random`}
                          className="w-5 h-5 rounded-full mr-1 object-cover border border-gray-100"
                          alt=""
                        />
                        {apt.doctor}
                      </span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{apt.treatment}</span>
                      {apt.phone && <span className="text-xs text-gray-400">{apt.phone}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 shrink-0">
                  {apt.status !== 'COMPLETED' && (
                    <button onClick={() => markComplete(apt.id)} title="Mark Complete" className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"><Check size={15} /></button>
                  )}
                  <button onClick={() => openEdit(apt)} title="Edit" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit2 size={15} /></button>
                  <button onClick={() => handleDelete(apt.id, apt.patient)} title="Cancel" className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={15} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showEdit && editAppt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setShowEdit(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <h2 className="text-lg font-bold">Edit Appointment</h2>
              <button onClick={() => setShowEdit(false)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <form onSubmit={saveEdit} className="p-6 space-y-4">
              {editError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start space-x-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-red-700 text-xs font-medium">{editError}</p>
                </div>
              )}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Patient Name</label>
                  <input type="text" value={editAppt.patient} onChange={e => setEditAppt(p => p ? { ...p, patient: e.target.value } : p)} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Doctor</label>
                  <input type="text" list="edit-doctor-list" value={editAppt.doctor} onChange={e => setEditAppt(p => p ? { ...p, doctor: e.target.value } : p)} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                  <datalist id="edit-doctor-list">{doctors.map(d => <option key={d.fullName} value={d.fullName} />)}</datalist>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Treatment</label>
                  <input type="text" list="edit-treatment-list" value={editAppt.treatment} onChange={e => setEditAppt(p => p ? { ...p, treatment: e.target.value } : p)} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                  <datalist id="edit-treatment-list">{TREATMENTS.map(t => <option key={t} value={t} />)}</datalist>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Status</label>
                  <select value={editAppt.status} onChange={e => setEditAppt(p => p ? { ...p, status: e.target.value } : p)} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                    {['SCHEDULED', 'CONFIRMED', 'ONGOING', 'COMPLETED', 'CANCELLED'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 pt-2">
                <button type="button" onClick={() => setShowEdit(false)} className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 flex items-center justify-center"><Save size={14} className="mr-1.5" /> Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
