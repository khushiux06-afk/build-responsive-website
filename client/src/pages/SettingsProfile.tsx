import React from 'react';

export const SettingsPage: React.FC = () => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Clinic Settings</h1>
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Clinic Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg" defaultValue="Dental Dashboard" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg" defaultValue="contact@dentaldashboard.com" />
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Localization & Currency</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Currency Symbol</label>
          <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
            <option>INR (₹)</option>
            <option>USD ($)</option>
          </select>
        </div>
      </section>

      <div className="pt-6">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export const ProfilePage: React.FC = () => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto text-center">
    <div className="h-24 w-24 rounded-full bg-blue-600 mx-auto flex items-center justify-center text-4xl text-white font-bold mb-4">
      K
    </div>
    <h1 className="text-2xl font-bold text-gray-900">Dr. Khushi</h1>
    <p className="text-gray-500 mb-6">Administrator</p>
    
    <div className="text-left space-y-4 pt-6 border-t border-gray-50">
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Username</label>
        <p className="text-gray-900 font-medium">admin</p>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Role</label>
        <p className="text-gray-900 font-medium">System Administrator</p>
      </div>
    </div>
    
    <button className="mt-8 w-full py-2 bg-gray-50 text-gray-700 rounded-lg font-bold hover:bg-gray-100 border border-gray-200 transition-all">
      Edit Profile
    </button>
  </div>
);
