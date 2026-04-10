import { useState, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { WifiOff } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('nz_user_session');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="w-full max-w-md mx-auto min-h-screen relative shadow-2xl bg-background overflow-x-hidden">
        {isOffline && (
          <div className="bg-destructive/90 text-destructive-foreground px-4 py-2 text-xs flex items-center justify-center sticky top-0 z-50 backdrop-blur-sm">
            <WifiOff className="w-3 h-3 mr-2" />
            Estás en modo offline. Algunos contenidos pueden no cargar.
          </div>
        )}
        <Outlet />
        {isAuthenticated && <BottomNav />}
      </main>
    </div>
  );
}
