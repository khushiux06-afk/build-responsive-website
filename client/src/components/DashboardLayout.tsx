import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  Receipt, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SidebarItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
        isActive 
          ? "bg-blue-600 text-white shadow-lg" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <span className={cn(isActive ? "text-white" : "text-gray-400")}>{icon}</span>
      <span className="font-medium">{label}</span>
      {isActive && <ChevronRight size={14} className="ml-auto" />}
    </Link>
  );
};

export const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col pt-8">
        <div className="px-6 mb-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Dental Dashboard
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <SidebarItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem to="/patients" icon={<Users size={20} />} label="Patients" />
          <SidebarItem to="/appointments" icon={<Calendar size={20} />} label="Appointments" />
          <SidebarItem to="/doctors" icon={<Stethoscope size={20} />} label="Doctors" />
          <SidebarItem to="/billing" icon={<Receipt size={20} />} label="Billing" />
          <SidebarItem to="/reports" icon={<BarChart3 size={20} />} label="Reports" />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Welcome Back, {user?.name || 'User'}</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/settings')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Settings size={20} />
            </button>
            <div 
              onClick={() => navigate('/profile')}
              className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors"
            >
              {user?.name?.[0] || 'U'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
