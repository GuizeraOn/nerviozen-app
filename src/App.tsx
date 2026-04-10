import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Layout } from '@/components/Layout';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { Ritual } from '@/pages/Ritual';
import { ModuleDetail } from '@/pages/ModuleDetail';
import { Community } from '@/pages/Community';
import { Settings } from '@/pages/Settings';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nz-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ritual" element={<Ritual />} />
            <Route path="/ritual/:id" element={<ModuleDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

