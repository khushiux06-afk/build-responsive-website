import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { ConfirmProvider } from './components/ConfirmDialog';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardPage } from './pages/DashboardPage';
import { PatientsPage } from './pages/PatientsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { BillingPage } from './pages/BillingPage';
import { ReportsPage } from './pages/ReportsPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { SettingsPage, ProfilePage } from './pages/SettingsProfile';

const queryClient = new QueryClient();

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <ConfirmProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="/dashboard" />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="patients" element={<PatientsPage />} />
                  <Route path="appointments" element={<AppointmentsPage />} />
                  <Route path="appointments/new" element={<BookAppointmentPage />} />
                  <Route path="doctors" element={<DoctorsPage />} />
                  <Route path="billing" element={<BillingPage />} />
                  <Route path="reports" element={<ReportsPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ConfirmProvider>
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
