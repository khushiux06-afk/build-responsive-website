import React, { useState } from 'react';
import { Receipt, Search, Download, Trash2, Plus, IndianRupee, AlertCircle, Check, X, Save } from 'lucide-react';
import { useConfirm } from '../components/ConfirmDialog';

interface Invoice {
  id: string;
  patient: string;
  treatment: string;
  date: string;
  amount: number;
  status: string;
}

const INITIAL_INVOICES: Invoice[] = [
  { id: 'INV-2024-001', patient: 'Rahul Sharma', treatment: 'Root Canal', date: '10 Mar 2024', amount: 3500, status: 'Paid' },
  { id: 'INV-2024-002', patient: 'Priya Verma', treatment: 'Tooth Cleaning', date: '09 Mar 2024', amount: 1200, status: 'Unpaid' },
  { id: 'INV-2024-003', patient: 'Amit Gupta', treatment: 'Braces Fitting', date: '08 Mar 2024', amount: 18000, status: 'Partial' },
  { id: 'INV-2024-004', patient: 'Neha Singh', treatment: 'Dental Filling', date: '07 Mar 2024', amount: 2100, status: 'Paid' },
  { id: 'INV-2024-005', patient: 'Vikram Sinha', treatment: 'Extraction', date: '06 Mar 2024', amount: 800, status: 'Unpaid' },
  { id: 'INV-2024-006', patient: 'Ananya Roy', treatment: 'X-Ray + Checkup', date: '05 Mar 2024', amount: 500, status: 'Paid' },
  { id: 'INV-2024-007', patient: 'Mohan Yadav', treatment: 'Crown Fitting', date: '04 Mar 2024', amount: 7500, status: 'Partial' },
];

const STATUS_STYLES: Record<string, string> = {
  Paid: 'bg-emerald-100 text-emerald-700',
  Unpaid: 'bg-red-100 text-red-700',
  Partial: 'bg-amber-100 text-amber-700',
};

// Opens a new browser tab with a printable clinic-branded invoice
const openInvoicePrint = (inv: Invoice) => {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${inv.id}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;color:#1f2937;padding:48px;max-width:680px;margin:auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:36px;padding-bottom:20px;border-bottom:3px solid #2563eb}
.clinic{font-size:26px;font-weight:900;color:#2563eb}.sub{font-size:12px;color:#6b7280;margin-top:4px;line-height:1.6}
.inv-label{background:#2563eb;color:#fff;padding:8px 20px;border-radius:8px;font-size:17px;font-weight:700}
.inv-id{text-align:right;font-size:12px;color:#6b7280;margin-top:6px}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px}
.section-title{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;font-weight:700;margin-bottom:8px}
.field{margin-bottom:6px}.field-label{font-size:11px;color:#6b7280}.field-value{font-size:14px;font-weight:600}
table{width:100%;border-collapse:collapse;margin-top:8px}
th{background:#eff6ff;padding:10px 14px;text-align:left;font-size:11px;text-transform:uppercase;color:#2563eb}
td{padding:12px 14px;border-bottom:1px solid #f3f4f6;font-size:13px}
.total{font-weight:700;background:#f9fafb}.total-amount{color:#2563eb;font-size:16px}
.status-badge{display:inline-block;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700}
.paid{background:#d1fae5;color:#065f46}.unpaid{background:#fee2e2;color:#991b1b}.partial{background:#fef3c7;color:#92400e}
.footer{margin-top:40px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;font-size:11px;color:#9ca3af}
.print-btn{display:block;margin:24px auto;background:#2563eb;color:#fff;border:none;padding:10px 30px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer}
@media print{.print-btn{display:none}}
</style></head><body>
<div class="header">
  <div><div class="clinic">🦷 Dental Dashboard</div><div class="sub">📍 123, MG Road, Bengaluru – 560001<br>📞 +91 80 1234 5678 &nbsp;|&nbsp; ✉ contact@dentaldashboard.com<br>GSTIN: 29ABCDE1234F1Z5</div></div>
  <div><div class="inv-label">INVOICE</div><div class="inv-id">${inv.id}</div></div>
</div>
<div class="grid-2">
  <div><div class="section-title">Bill To</div><div class="field"><div class="field-value" style="font-size:18px">${inv.patient}</div></div><div class="field"><div class="field-label">Patient</div></div></div>
  <div>
    <div class="section-title">Invoice Details</div>
    <div class="field"><div class="field-label">Invoice Date</div><div class="field-value">${inv.date}</div></div>
    <div class="field"><div class="field-label">Status</div>
      <span class="status-badge ${inv.status === 'Paid' ? 'paid' : inv.status === 'Unpaid' ? 'unpaid' : 'partial'}">${inv.status.toUpperCase()}</span>
    </div>
  </div>
</div>
<table>
  <tr><th>Description</th><th>Treatment</th><th style="text-align:right">Amount</th></tr>
  <tr><td>Dental Treatment</td><td>${inv.treatment}</td><td style="text-align:right">₹${inv.amount.toLocaleString('en-IN')}.00</td></tr>
  <tr class="total"><td colspan="2" style="text-align:right">Total</td><td style="text-align:right" class="total-amount">₹${inv.amount.toLocaleString('en-IN')}.00</td></tr>
</table>
<button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
<div class="footer">Thank you for choosing Dental Dashboard! &nbsp;·&nbsp; Computer-generated invoice &nbsp;·&nbsp; No signature required</div>
</body></html>`;
  const w = window.open('', '_blank');
  if (w) { w.document.write(html); w.document.close(); }
};

const EMPTY_INV = { patient: '', treatment: '', date: '', amount: 0, status: 'Unpaid' };

export const BillingPage: React.FC = () => {
  const confirm = useConfirm();
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Invoice, 'id'>>(EMPTY_INV);
  const [viewInv, setViewInv] = useState<Invoice | null>(null);

  const filtered = invoices.filter(inv => {
    const matchSearch = inv.patient.toLowerCase().includes(search.toLowerCase()) || inv.id.includes(search);
    const matchStatus = statusFilter === 'All' || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPaid = invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const totalUnpaid = invoices.filter(i => i.status === 'Unpaid').reduce((s, i) => s + i.amount, 0);
  const totalPartial = invoices.filter(i => i.status === 'Partial').reduce((s, i) => s + i.amount, 0);

  const markPaid = (id: string) => setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status: 'Paid' } : inv));

  const handleDelete = async (id: string, patient: string) => {
    const ok = await confirm({ title: 'Delete Invoice', message: `Delete invoice for ${patient}? This cannot be undone.`, confirmLabel: 'Delete', danger: true });
    if (ok) setInvoices(prev => prev.filter(inv => inv.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const nextId = `INV-2024-${String(invoices.length + 1).padStart(3, '0')}`;
    const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    setInvoices(prev => [{ ...formData, id: nextId, date: formData.date || today }, ...prev]);
    setShowForm(false);
    setFormData(EMPTY_INV);
  };

  const inputCls = 'w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-sm';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-gray-900">Billing & Invoices</h1><p className="text-gray-500">Track payments and manage patient billing</p></div>
        <button onClick={() => { setFormData(EMPTY_INV); setShowForm(true); }} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
          <Plus size={18} className="mr-2" /> Create Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Collected', val: totalPaid, count: invoices.filter(i => i.status === 'Paid').length, suffix: 'paid', bg: 'bg-emerald-50', col: 'text-emerald-600', icon: <IndianRupee size={16} className="text-emerald-600" /> },
          { label: 'Unpaid', val: totalUnpaid, count: invoices.filter(i => i.status === 'Unpaid').length, suffix: 'pending', bg: 'bg-red-50', col: 'text-red-600', icon: <AlertCircle size={16} className="text-red-500" /> },
          { label: 'Partial', val: totalPartial, count: invoices.filter(i => i.status === 'Partial').length, suffix: 'partial', bg: 'bg-amber-50', col: 'text-amber-600', icon: <Receipt size={16} className="text-amber-500" /> },
        ].map((s, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-2 mb-2"><div className={`${s.bg} p-2 rounded-lg`}>{s.icon}</div><p className="text-sm text-gray-500 font-medium">{s.label}</p></div>
            <h3 className={`text-2xl font-bold ${s.col}`}>₹{s.val.toLocaleString('en-IN')}</h3>
            <p className="text-xs text-gray-400 mt-1">{s.count} {s.suffix} invoices</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input type="text" placeholder="Search by patient or invoice ID..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 outline-none shadow-sm">
          <option>All</option><option>Paid</option><option>Unpaid</option><option>Partial</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
            <tr>
              <th className="px-5 py-3">Invoice #</th><th className="px-5 py-3">Patient</th><th className="px-5 py-3">Treatment</th>
              <th className="px-5 py-3">Date</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">Status</th><th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(inv => (
              <tr key={inv.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-600 font-semibold">{inv.id}</td>
                <td className="px-5 py-3.5 font-medium text-gray-900 cursor-pointer hover:text-blue-600" onClick={() => setViewInv(inv)}>{inv.patient}</td>
                <td className="px-5 py-3.5 text-sm text-gray-500">{inv.treatment}</td>
                <td className="px-5 py-3.5 text-sm text-gray-500">{inv.date}</td>
                <td className="px-5 py-3.5 font-bold text-gray-900">₹{inv.amount.toLocaleString('en-IN')}</td>
                <td className="px-5 py-3.5"><span className={`px-2 py-1 rounded-full text-xs font-bold ${STATUS_STYLES[inv.status]}`}>{inv.status}</span></td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end space-x-1">
                    <button onClick={() => openInvoicePrint(inv)} title="Download / Print Invoice" className="p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all font-medium text-xs flex items-center">
                      <Download size={13} className="mr-1" /> Print
                    </button>
                    {inv.status !== 'Paid' && (
                      <button onClick={() => markPaid(inv.id)} title="Mark as Paid" className="p-2 text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all font-medium text-xs flex items-center">
                        <Check size={13} className="mr-1" /> Paid
                      </button>
                    )}
                    <button onClick={() => handleDelete(inv.id, inv.patient)} title="Delete" className="p-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={7} className="py-14 text-center text-gray-400"><Receipt size={30} className="mx-auto mb-2 opacity-30" /><p className="font-medium">No invoices found</p></td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Invoice Modal */}
      {viewInv && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setViewInv(null); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <div><h2 className="text-lg font-bold">Invoice Details</h2><p className="text-xs text-blue-100">{viewInv.id}</p></div>
              <button onClick={() => setViewInv(null)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-3">
              {[['Patient', viewInv.patient], ['Treatment', viewInv.treatment], ['Date', viewInv.date], ['Amount', `₹${viewInv.amount.toLocaleString('en-IN')}`], ['Status', viewInv.status]].map(([l, v]) => (
                <div key={l} className="flex justify-between py-2 border-b border-gray-50"><span className="text-sm text-gray-500">{l}</span><span className="text-sm font-semibold text-gray-900">{v}</span></div>
              ))}
              <div className="flex space-x-3 pt-3">
                <button onClick={() => setViewInv(null)} className="flex-1 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50">Close</button>
                <button onClick={() => { openInvoicePrint(viewInv); setViewInv(null); }} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 flex items-center justify-center">
                  <Download size={14} className="mr-1.5" /> Print Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Invoice Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex items-center justify-between text-white">
              <h2 className="text-lg font-bold">Create New Invoice</h2>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-white/20 rounded-lg"><X size={20} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Patient Name *</label>
                <input required type="text" value={formData.patient} onChange={e => setFormData(p => ({ ...p, patient: e.target.value }))} placeholder="Type patient full name" className={inputCls} /></div>
              <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Treatment *</label>
                <input required type="text" value={formData.treatment} onChange={e => setFormData(p => ({ ...p, treatment: e.target.value }))} placeholder="e.g. Root Canal, Tooth Cleaning..." className={inputCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Amount (₹) *</label>
                  <input required type="number" min="1" value={formData.amount || ''} onChange={e => setFormData(p => ({ ...p, amount: +e.target.value }))} placeholder="0" className={inputCls} /></div>
                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Invoice Date</label>
                  <input type="date" value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} className={inputCls} /></div>
              </div>
              <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Payment Status</label>
                <select value={formData.status} onChange={e => setFormData(p => ({ ...p, status: e.target.value }))} className={inputCls}>
                  <option>Unpaid</option><option>Partial</option><option>Paid</option>
                </select></div>
              <div className="flex space-x-3 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 flex items-center justify-center">
                  <Save size={14} className="mr-1.5" /> Create Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
