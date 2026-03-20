import React from 'react';
import {
  Users,
  Calendar,
  Clock,
  IndianRupee,
  ArrowUpRight,
  TrendingUp,
  MoreVertical,
  Plus,
  ChevronLeft,
  ChevronRight,
  Receipt,
  Stethoscope
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData, PHOTOS } from '../contexts/DataContext';

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  color: string;
}> = ({ title, value, icon, trend, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
      <div className="flex items-center text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
        <TrendingUp size={14} className="mr-1" />{trend}
      </div>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const UPCOMING = [
  { name: 'Rahul Sharma', doctor: 'Dr. Ankit Sharma', time: '10:30 AM', status: 'Confirmed' },
  { name: 'Priya Verma', doctor: 'Dr. Neha Kapoor', time: '11:15 AM', status: 'Ongoing' },
  { name: 'Amit Gupta', doctor: 'Dr. Rajiv Mehta', time: '01:00 PM', status: 'Scheduled' },
  { name: 'Neha Singh', doctor: 'Dr. Priya Das', time: '02:30 PM', status: 'Confirmed' },
];

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { doctors } = useData();
  const [page, setPage] = React.useState(1);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Patients" value="1,284" icon={<Users className="text-blue-600" size={24} />} trend="+12%" color="bg-blue-50" />
        <StatCard title="Appointments Today" value="30" icon={<Calendar className="text-indigo-600" size={24} />} trend="+4%" color="bg-indigo-50" />
        <StatCard title="Monthly Revenue" value="₹86,000" icon={<IndianRupee className="text-emerald-600" size={24} />} trend="+18%" color="bg-emerald-50" />
        <StatCard title="Avg. Wait Time" value="15m" icon={<Clock className="text-amber-600" size={24} />} trend="-2%" color="bg-amber-50" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Upcoming Appointments</h2>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                <button 
                  onClick={() => setPage(p => p > 1 ? p - 1 : 3)}
                  className="p-1 hover:bg-white rounded transition-all text-gray-400 hover:text-blue-600"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-bold text-gray-500 px-1">{page} / 3</span>
                <button 
                  onClick={() => setPage(p => p < 3 ? p + 1 : 1)}
                  className="p-1 hover:bg-white rounded transition-all text-gray-400 hover:text-blue-600"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <button onClick={() => navigate('/appointments')} className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Patient</th>
                  <th className="px-6 py-3 text-left font-semibold">Doctor</th>
                  <th className="px-6 py-3 text-left font-semibold">Time</th>
                  <th className="px-6 py-3 text-left font-semibold">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {UPCOMING.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src={PHOTOS[doctors.find(d => d.fullName === item.doctor)?.photoKey || ''] || `https://ui-avatars.com/api/?name=${item.doctor}&background=random`} 
                          className="w-6 h-6 rounded-full mr-2 object-cover border border-gray-100" 
                          alt=""
                        />
                        <span className="text-gray-600 text-sm">{item.doctor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' : item.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => navigate('/appointments')} className="text-gray-300 hover:text-blue-500 transition-colors"><ArrowUpRight size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-5">Quick Actions</h2>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/appointments/new')}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              <Calendar size={18} className="mr-2" /> New Appointment
            </button>
            <button
              onClick={() => navigate('/patients')}
              className="w-full py-3 px-4 bg-gray-50 text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center"
            >
              <Users size={18} className="mr-2" /> Add Patient
            </button>
            <button
              onClick={() => navigate('/billing')}
              className="w-full py-3 px-4 bg-gray-50 text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center"
            >
              <Receipt size={18} className="mr-2" /> Create Invoice
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Clinic Notice</h3>
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-amber-800 text-sm leading-relaxed">
              🔔 Dr. Neha Kapoor is on leave from March 15-18. Please reschedule conflicting appointments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
