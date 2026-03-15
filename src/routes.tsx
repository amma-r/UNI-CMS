import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/* public routes */}
      <Route index element={<Navigate to="auth/login" replace />} />
      <Route path="/auth/login" element={<Login />} />
      {/*      <Route path="/auth/register" element={<RegistrationPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} /> */}

      {/* protected routes - wrapped in layout*/}
      <Route element={<AppLayout />}>
        {/* <Route element={<Navigate to="dashboard" replace />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
