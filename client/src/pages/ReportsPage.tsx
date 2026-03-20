import React, { useState } from 'react';
import { Users, Calendar, IndianRupee, Stethoscope, ArrowUpRight, ArrowDownRight, TrendingUp, Printer } from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const revenueData = [42000, 65000, 48000, 80000, 57000, 85000];
const maxRevenue = Math.max(...revenueData);

const treatments = [
  { name: 'Root Canal', count: 124, color: '#3b82f6', pct: 75 },
  { name: 'Tooth Cleaning', count: 98, color: '#6366f1', pct: 60 },
  { name: 'Dental Filling', count: 64, color: '#10b981', pct: 40 },
  { name: 'Extraction', count: 32, color: '#f59e0b', pct: 20 },
  { name: 'Braces', count: 18, color: '#ef4444', pct: 12 },
];

// Opens the current page in a print dialog (works reliably across all browsers)
const handleExportPDF = () => {
  const printContent = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Clinic Report – DentalHub</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; color: #1f2937; padding: 48px; }
h1 { font-size: 24px; color: #2563eb; margin-bottom: 4px; }
.sub { color: #6b7280; font-size: 13px; margin-bottom: 32px; }
.kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
.kpi { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; }
.kpi-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
.kpi-value { font-size: 22px; font-weight: 800; color: #1f2937; margin-top: 4px; }
.kpi-trend { font-size: 11px; color: #059669; margin-top: 4px; }
h2 { font-size: 16px; font-weight: 700; color: #1f2937; margin-bottom: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; }
.section { margin-bottom: 32px; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th { background: #eff6ff; padding: 10px 12px; text-align: left; color: #2563eb; font-size: 11px; text-transform: uppercase; }
td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; }
.rev { font-weight: 700; color: #2563eb; }
.pct { font-size: 11px; }
.up { color: #059669; } .dn { color: #dc2626; }
.footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center; }
</style></head><body>
<h1>🦷 DentalHub Clinic — Clinic Report</h1>
<div class="sub">Generated on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>

<div class="kpi-grid">
  <div class="kpi"><div class="kpi-label">Daily Appointments</div><div class="kpi-value">12</div><div class="kpi-trend">↑ +15%</div></div>
  <div class="kpi"><div class="kpi-label">Monthly Revenue</div><div class="kpi-value">₹85,000</div><div class="kpi-trend">↑ +8.2%</div></div>
  <div class="kpi"><div class="kpi-label">Total Patients</div><div class="kpi-value">230</div><div class="kpi-trend">↑ +12 new</div></div>
  <div class="kpi"><div class="kpi-label">Active Treatments</div><div class="kpi-value">47</div><div class="kpi-trend">↓ -2%</div></div>
</div>

<div class="section">
<h2>Monthly Revenue Summary</h2>
<table>
  <tr><th>Month</th><th>Appointments</th><th>New Patients</th><th>Revenue</th><th>Growth</th></tr>
  ${months.map((m, i) => {
    const growth = i === 0 ? '—' : ((revenueData[i] - revenueData[i - 1]) / revenueData[i - 1] * 100).toFixed(1);
    const isUp = i > 0 && parseFloat(growth) > 0;
    return `<tr>
      <td>${m} 2024</td>
      <td>${[120, 145, 130, 170, 155, 190][i]}</td>
      <td>${[18, 24, 20, 35, 28, 42][i]}</td>
      <td class="rev">₹${revenueData[i].toLocaleString('en-IN')}</td>
      <td class="pct ${i === 0 ? '' : isUp ? 'up' : 'dn'}">${i === 0 ? '—' : `${isUp ? '+' : ''}${growth}%`}</td>
    </tr>`;
  }).join('')}
</table>
</div>

<div class="section">
<h2>Top Treatments</h2>
<table>
  <tr><th>Treatment</th><th>Cases</th></tr>
  ${treatments.map(t => `<tr><td>${t.name}</td><td>${t.count}</td></tr>`).join('')}
</table>
</div>

<div class="footer">DentalHub Clinic · 123, MG Road, Bengaluru · Auto-generated report · ${new Date().toISOString()}</div>
</body></html>`;

  const w = window.open('', '_blank', 'width=900,height=700');
  if (w) {
    w.document.write(printContent);
    w.document.close();
    // Auto-trigger print dialog after content loads
    w.onload = () => w.print();
  }
};

export const ReportsPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-gray-900">Clinic Reports</h1><p className="text-gray-500">Analytics and performance overview</p></div>
        <button
          onClick={handleExportPDF}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
        >
          <Printer size={16} className="mr-2" /> Export / Print PDF
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: 'Daily Appointments', value: '12', change: '+15%', up: true, icon: <Calendar size={20} />, bg: 'bg-blue-50', col: 'text-blue-600' },
          { title: 'Monthly Revenue', value: '₹85,000', change: '+8.2%', up: true, icon: <IndianRupee size={20} />, bg: 'bg-emerald-50', col: 'text-emerald-600' },
          { title: 'Total Patients', value: '230', change: '+12', up: true, icon: <Users size={20} />, bg: 'bg-indigo-50', col: 'text-indigo-600' },
          { title: 'Active Treatments', value: '47', change: '-2%', up: false, icon: <Stethoscope size={20} />, bg: 'bg-amber-50', col: 'text-amber-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className={`${s.bg} ${s.col} p-2.5 rounded-xl`}>{s.icon}</div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center ${s.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {s.up ? <ArrowUpRight size={12} className="mr-0.5" /> : <ArrowDownRight size={12} className="mr-0.5" />}{s.change}
              </span>
            </div>
            <p className="text-sm text-gray-500">{s.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-0.5">{s.value}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Dental Dashboard
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-gray-800 flex items-center"><TrendingUp size={16} className="mr-2 text-blue-500" /> Revenue Growth</h2>
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Last 6 Months</span>
          </div>
          <div style={{ height: 200 }} className="flex items-end gap-2 px-2">
            {revenueData.map((val, i) => {
              const pct = (val / maxRevenue) * 100;
              const isH = hovered === i;
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                  <div className={`text-[10px] font-bold mb-1 px-1 py-0.5 rounded text-white transition-all ${isH ? 'opacity-100 bg-gray-800' : 'opacity-0'}`}>
                    ₹{(val / 1000).toFixed(0)}K
                  </div>
                  <div className="w-full rounded-t-md transition-all duration-300" style={{ height: `${pct}%`, minHeight: 8, backgroundColor: isH ? '#2563eb' : '#bfdbfe' }} />
                  <span className="text-[10px] text-gray-400 mt-1.5 font-medium">{months[i]}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-300 pt-2 mt-1 border-t border-gray-50">
            <span>₹0</span><span>₹42K</span><span>₹85K</span>
          </div>
        </div>

        {/* Treatment Bars */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-bold text-gray-800 mb-5">Top Treatments</h2>
          <div className="space-y-4">
            {treatments.map((t, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700 flex items-center">
                    <span style={{ backgroundColor: t.color }} className="w-2 h-2 rounded-full mr-2 inline-block" />{t.name}
                  </span>
                  <span className="text-gray-400 font-medium">{t.count}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${t.pct}%`, backgroundColor: t.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50"><h2 className="text-base font-bold text-gray-800">Monthly Revenue Summary</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr><th className="px-6 py-3">Month</th><th className="px-6 py-3">Appointments</th><th className="px-6 py-3">New Patients</th><th className="px-6 py-3">Revenue</th><th className="px-6 py-3">Growth</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {months.map((m, i) => {
                const growth = i === 0 ? null : ((revenueData[i] - revenueData[i - 1]) / revenueData[i - 1] * 100).toFixed(1);
                const isUp = growth !== null && parseFloat(growth) > 0;
                return (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3 font-medium text-gray-900">{m} 2024</td>
                    <td className="px-6 py-3 text-gray-600">{[120, 145, 130, 170, 155, 190][i]}</td>
                    <td className="px-6 py-3 text-gray-600">{[18, 24, 20, 35, 28, 42][i]}</td>
                    <td className="px-6 py-3 font-semibold text-gray-900">₹{revenueData[i].toLocaleString('en-IN')}</td>
                    <td className="px-6 py-3">
                      {growth === null ? <span className="text-xs text-gray-400">—</span> : (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {isUp ? '+' : ''}{growth}%
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
