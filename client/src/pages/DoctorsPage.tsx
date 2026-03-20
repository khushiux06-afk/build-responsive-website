import React, { useState } from 'react';
import { Plus, Award, Phone, Mail, Edit2, Trash2, Calendar, X, Save } from 'lucide-react';
import { useConfirm } from '../components/ConfirmDialog';
import { useData, Doctor, PHOTOS } from '../contexts/DataContext';

const SPEC_BADGE: Record<string, { bg: string; text: string }> = {
  Orthodontist: { bg: '#eff6ff', text: '#1d4ed8' },
  Endodontist: { bg: '#f5f3ff', text: '#6d28d9' },
  Periodontist: { bg: '#ecfdf5', text: '#065f46' },
  Prosthodontist: { bg: '#fffbeb', text: '#92400e' },
  'Oral Surgeon': { bg: '#fef2f2', text: '#991b1b' },
  'Pediatric Dentist': { bg: '#ecfeff', text: '#155e75' },
};

const SPEC_COLOR: Record<string, string> = {
  Orthodontist: '#3b82f6', Endodontist: '#8b5cf6', Periodontist: '#10b981',
  Prosthodontist: '#f59e0b', 'Oral Surgeon': '#ef4444', 'Pediatric Dentist': '#06b6d4',
};

const EMPTY: Omit<Doctor, 'id'> = { fullName: '', specialization: 'Orthodontist', experienceYears: 5, phone: '', email: '', photoKey: 'male_1' };

export const DoctorsPage: React.FC = () => {
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useData();
  const confirm = useConfirm();
  const [showForm, setShowForm] = useState(false);
  const [editDoc, setEditDoc] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState<Omit<Doctor, 'id'>>(EMPTY);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const openAdd = () => { setFormData(EMPTY); setEditDoc(null); setShowForm(true); };
  const openEdit = (d: Doctor) => { setFormData({ ...d }); setEditDoc(d); setShowForm(true); };

  const handleDelete = async (id: string, name: string) => {
    const ok = await confirm({ title: 'Remove Doctor', message: `Remove ${name} from the system?`, confirmLabel: 'Remove', danger: true });
    if (ok) deleteDoctor(id);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editDoc) {
      updateDoctor(editDoc.id, formData);
    } else {
      addDoctor({ ...formData, id: `D${Date.now()}` });
    }
    setShowForm(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(p => ({ ...p, photoKey: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const inputCls = 'w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-gray-900">Doctors</h1><p className="text-gray-500">Medical staff and specializations</p></div>
        <button onClick={openAdd} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md">
          <Plus size={18} className="mr-2" /> Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doc => {
          const color = SPEC_COLOR[doc.specialization] || '#3b82f6';
          const badge = SPEC_BADGE[doc.specialization] || { bg: '#f9fafb', text: '#374151' };
          const photo = doc.photoKey.startsWith('data:') ? doc.photoKey : (PHOTOS[doc.photoKey] || PHOTOS.male_1);
          const imgFailed = imgErrors[doc.id];
          return (
            <div key={doc.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
              <div style={{ backgroundColor: color + '18', height: 56 }} className="relative">
                <span style={{ backgroundColor: badge.bg, color: badge.text }} className="absolute top-2 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  {doc.specialization}
                </span>
              </div>
              <div className="px-5 pb-5">
                <div style={{ marginTop: -32, marginBottom: 10 }}>
                  {!imgFailed ? (
                    <img
                      src={photo}
                      alt={doc.fullName}
                      style={{ width: 64, height: 64, borderRadius: 14, border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', objectFit: 'cover', display: 'block' }}
                      onError={() => setImgErrors(prev => ({ ...prev, [doc.id]: true }))}
                    />
                  ) : (
                    <div style={{ width: 64, height: 64, borderRadius: 14, border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="text-white text-lg font-bold">
                      {doc.fullName.split(' ').filter(w => w !== 'Dr.').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{doc.fullName}</h3>
                <div className="text-sm text-gray-500 mt-0.5 mb-3 flex items-center">
                  <Award size={13} className="mr-1 text-amber-400" /> {doc.experienceYears} yrs experience
                </div>
                <div className="space-y-1.5 py-3 border-t border-gray-50">
                  <div className="flex items-center text-sm text-gray-600"><Phone size={13} className="mr-2 text-gray-400 shrink-0" />{doc.phone}</div>
                  <div className="flex items-center text-sm text-gray-500 break-all"><Mail size={13} className="mr-2 text-gray-400 shrink-0" />{doc.email}</div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button onClick={() => openEdit(doc)} className="flex-1 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all flex items-center justify-center">
                    <Edit2 size={13} className="mr-1" /> Edit
                  </button>
                  <button onClick={() => alert(`📅 Schedule for ${doc.fullName}`)} className="flex-1 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-all flex items-center justify-center">
                    <Calendar size={13} className="mr-1" /> Schedule
                  </button>
                  <button onClick={() => handleDelete(doc.id, doc.fullName)} className="py-2 px-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <h2 className="text-lg font-bold">{editDoc ? 'Edit Doctor' : 'Add Doctor'}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Select Profile Picture</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {Object.entries(PHOTOS).map(([key, url]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, photoKey: key }))}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${formData.photoKey === key ? 'border-blue-600 scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      {formData.photoKey === key && <div className="absolute inset-0 bg-blue-600/10" />}
                    </button>
                  ))}
                  
                  {/* Upload from device trigger */}
                  <label className={`relative w-12 h-12 rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${formData.photoKey.startsWith('data:') ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'}`}>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    {formData.photoKey.startsWith('data:') ? (
                      <img src={formData.photoKey} alt="" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <Plus size={16} className="text-gray-400" />
                    )}
                  </label>
                </div>
                <p className="text-[10px] text-gray-400">Preset avatar or upload custom image</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2"><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name *</label>
                  <input required type="text" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} placeholder="Dr. Full Name" className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Specialization</label>
                  <select value={formData.specialization} onChange={e => setFormData(p => ({ ...p, specialization: e.target.value }))} className={inputCls}>
                    {Object.keys(SPEC_BADGE).map(s => <option key={s}>{s}</option>)}</select></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Experience (yrs)</label>
                  <input type="number" min="0" value={formData.experienceYears} onChange={e => setFormData(p => ({ ...p, experienceYears: +e.target.value }))} className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                  <input type="text" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                  <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="dr@clinic.in" className={inputCls} /></div>
              </div>
              <div className="flex space-x-3 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 flex items-center justify-center">
                  <Save size={14} className="mr-1.5" /> {editDoc ? 'Update' : 'Add Doctor'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
