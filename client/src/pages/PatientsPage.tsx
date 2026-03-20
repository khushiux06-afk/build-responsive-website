import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Mail, Phone, Eye, X, Save, User } from 'lucide-react';
import { useData, Patient } from '../contexts/DataContext';
import { useConfirm } from '../components/ConfirmDialog';

const COLORS = ['#3b82f6','#6366f1','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#ec4899','#14b8a6','#f97316'];
const EMPTY: Omit<Patient, 'id'> = { fullName: '', phone: '', email: '', dob: '', gender: 'Male', blood: 'B+', lastVisit: '' };

export const PatientsPage: React.FC = () => {
  const { patients, addPatient, updatePatient, deletePatient } = useData();
  const confirm = useConfirm();
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editPat, setEditPat] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<Omit<Patient, 'id'>>(EMPTY);
  const [viewPat, setViewPat] = useState<Patient | null>(null);

  const filtered = patients.filter(p => {
    const matchSearch = p.fullName.toLowerCase().includes(search.toLowerCase()) || p.phone.includes(search) || p.id.includes(search);
    const matchGender = genderFilter === 'All' || p.gender === genderFilter;
    return matchSearch && matchGender;
  });

  const openAdd = () => { setFormData(EMPTY); setEditPat(null); setShowForm(true); };
  const openEdit = (p: Patient) => { setFormData({ ...p }); setEditPat(p); setShowForm(true); };

  const handleDelete = async (id: string, name: string) => {
    const ok = await confirm({ title: 'Delete Patient', message: `Remove ${name} from patient records? This cannot be undone.`, confirmLabel: 'Delete', danger: true });
    if (ok) deletePatient(id);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editPat) {
      updatePatient(editPat.id, formData);
    } else {
      const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      addPatient({ ...formData, id: `P${String(patients.length + 1).padStart(3, '0')}`, lastVisit: today });
    }
    setShowForm(false);
  };

  const inputCls = 'w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-gray-900">Patients</h1><p className="text-gray-500">Manage patient records</p></div>
        <button onClick={openAdd} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md shadow-blue-100">
          <Plus size={18} className="mr-2" /> Add New Patient
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[{ label: 'Total', value: patients.length, color: 'text-blue-600' }, { label: 'Male', value: patients.filter(p => p.gender === 'Male').length, color: 'text-indigo-600' }, { label: 'Female', value: patients.filter(p => p.gender === 'Female').length, color: 'text-pink-600' }].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center"><p className="text-xs text-gray-500">{s.label}</p><p className={`text-2xl font-bold ${s.color}`}>{s.value}</p></div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input type="text" placeholder="Search by name, phone or ID..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
        </div>
        <select value={genderFilter} onChange={e => setGenderFilter(e.target.value)} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-600 outline-none text-sm">
          <option>All</option><option>Male</option><option>Female</option><option>Other</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Patient</th><th className="px-6 py-4">Contact</th><th className="px-6 py-4">DOB</th>
              <th className="px-6 py-4">Last Visit</th><th className="px-6 py-4">Blood</th><th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((pat, idx) => (
              <tr key={pat.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}>
                      {pat.fullName[0]?.toUpperCase()}
                    </div>
                    <div><div className="font-semibold text-gray-900">{pat.fullName}</div><div className="text-xs text-gray-400">{pat.id} · {pat.gender}</div></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center text-sm text-gray-600"><Phone size={12} className="mr-2 text-gray-400" />{pat.phone || '—'}</div>
                    <div className="flex items-center text-sm text-gray-400"><Mail size={12} className="mr-2 text-gray-300" />{pat.email || '—'}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{pat.dob ? new Date(pat.dob).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pat.lastVisit || '—'}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold rounded">{pat.blood}</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <button onClick={() => setViewPat(pat)} title="View" className="p-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-all"><Eye size={14} /></button>
                    <button onClick={() => openEdit(pat)} title="Edit" className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-all"><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(pat.id, pat.fullName)} title="Delete" className="p-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} className="py-14 text-center text-gray-400"><User size={32} className="mx-auto mb-2 opacity-25" /><p className="font-medium">No patients found</p></td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View modal */}
      {viewPat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setViewPat(null); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <h2 className="text-lg font-bold">Patient Details</h2>
              <button onClick={() => setViewPat(null)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center space-x-4 pb-3 border-b border-gray-100">
                <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">{viewPat.fullName[0]}</div>
                <div><h3 className="text-lg font-bold text-gray-900">{viewPat.fullName}</h3><p className="text-sm text-gray-500">{viewPat.id} · {viewPat.gender}</p></div>
              </div>
              {[['Phone', viewPat.phone], ['Email', viewPat.email], ['Date of Birth', viewPat.dob], ['Blood Group', viewPat.blood], ['Last Visit', viewPat.lastVisit]].map(([l, v]) => (
                <div key={l} className="flex justify-between py-1.5 border-b border-gray-50"><span className="text-sm text-gray-500">{l}</span><span className="text-sm font-semibold text-gray-900">{v || '—'}</span></div>
              ))}
              <button onClick={() => setViewPat(null)} className="w-full mt-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-100">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <h2 className="text-lg font-bold">{editPat ? 'Edit Patient' : 'Add New Patient'}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2"><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name *</label>
                  <input required type="text" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} placeholder="Patient full name" className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                  <input type="text" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date of Birth</label>
                  <input type="date" value={formData.dob} onChange={e => setFormData(p => ({ ...p, dob: e.target.value }))} className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Gender</label>
                  <select value={formData.gender} onChange={e => setFormData(p => ({ ...p, gender: e.target.value }))} className={inputCls}>
                    <option>Male</option><option>Female</option><option>Other</option></select></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Blood Group</label>
                  <select value={formData.blood} onChange={e => setFormData(p => ({ ...p, blood: e.target.value }))} className={inputCls}>
                    {['A+','A-','B+','B-','O+','O-','AB+','AB-'].map(b => <option key={b}>{b}</option>)}</select></div>
                <div className="col-span-2"><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                  <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="patient@email.com" className={inputCls} /></div>
              </div>
              <div className="flex space-x-3 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 flex items-center justify-center">
                  <Save size={14} className="mr-1.5" /> {editPat ? 'Update' : 'Add Patient'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
