import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import { AuthLayout } from './components/layout/AuthLayout'
import { DashboardLayout } from './components/layout/DashboardLayout'

// Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DoctorDashboard from './pages/doctor/Dashboard'
import DoctorPatientDetail from './pages/doctor/PatientDetail'
import AdminDashboard from './pages/admin/Dashboard'
import PatientDashboard from './pages/patient/Dashboard'
import AiSymptomChecker from './pages/patient/SymptomChecker'
import DoctorConsultation from './pages/patient/Consultation'
import ChatInterface from './pages/patient/Chat'
import PatientReports from './pages/patient/Reports'

import Appointments from './pages/doctor/Appointments'
import PatientRequests from './pages/doctor/Requests'

import ManageDoctors from './pages/admin/ManageDoctors'
import ManagePatients from './pages/admin/ManagePatients'
import SystemLogs from './pages/admin/SystemLogs'

import ProfilePage from './pages/shared/Profile'

import LandingPage from './pages/public/LandingPage'

// Icons for Navigation
import { LayoutDashboard, Users, User, FileText, MessageSquare, Activity, ShieldCheck, Stethoscope } from 'lucide-react'

// Dummy Dashboard Pages (to be implemented)
const DummyPage = ({ title }) => <div className="p-8"><h1 className="text-2xl font-bold">{title}</h1></div>

export default function App() {
  const patientNavigation = [
    { name: 'Dashboard', href: '/patient/dashboard', icon: LayoutDashboard },
    { name: 'AI Symptom Checker', href: '/patient/ai-checker', icon: Activity },
    { name: 'My Reports', href: '/patient/reports', icon: FileText },
    { name: 'Doctor Consultation', href: '/patient/doctors', icon: Stethoscope },
    { name: 'Chat', href: '/patient/chat', icon: MessageSquare },
    { name: 'Profile', href: '/patient/profile', icon: User },
  ]

  const doctorNavigation = [
    { name: 'Dashboard', href: '/doctor/dashboard', icon: LayoutDashboard },
    { name: 'Appointments', href: '/doctor/appointments', icon: Users },
    { name: 'Patient Requests', href: '/doctor/requests', icon: Activity },
    { name: 'Chat', href: '/doctor/chat', icon: MessageSquare },
    { name: 'Profile', href: '/doctor/profile', icon: User },
  ]

  const adminNavigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Doctors', href: '/admin/doctors', icon: Stethoscope },
    { name: 'Manage Patients', href: '/admin/patients', icon: Users },
    { name: 'System Logs', href: '/admin/logs', icon: ShieldCheck },
  ]

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Patient Dashboard */}
      <Route path="/patient" element={<DashboardLayout navigation={patientNavigation} role="Patient" userName="John Doe" />}>
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="ai-checker" element={<AiSymptomChecker />} />
        <Route path="reports" element={<PatientReports />} />
        <Route path="doctors" element={<DoctorConsultation />} />
        <Route path="chat" element={<ChatInterface />} />
        <Route path="profile" element={<ProfilePage userRole="Patient" />} />
      </Route>

      {/* Doctor Dashboard */}
      <Route path="/doctor" element={<DashboardLayout navigation={doctorNavigation} role="Doctor" userName="Dr. Aditya Joshi" />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="patients/:id" element={<DoctorPatientDetail />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="requests" element={<PatientRequests />} />
        <Route path="chat" element={<ChatInterface />} />
        <Route path="profile" element={<ProfilePage userRole="Doctor" />} />
      </Route>

      {/* Admin Dashboard */}
      <Route path="/admin" element={<DashboardLayout navigation={adminNavigation} role="Admin" userName="System Admin" />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="doctors" element={<ManageDoctors />} />
        <Route path="patients" element={<ManagePatients />} />
        <Route path="logs" element={<SystemLogs />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
