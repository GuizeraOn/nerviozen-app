import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { User, Moon, Sun, Shield, LogOut } from 'lucide-react';

export function Settings() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const session = localStorage.getItem('nz_user_session');
    if (session) {
      setEmail(session);
    }
  }, []);

  const handleLogout = () => {
    if (navigator.vibrate) navigator.vibrate(50);
    localStorage.removeItem('nz_user_session');
    navigate('/login');
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-heading font-bold">Configuración</h1>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <User className="w-4 h-4 mr-2" />
            Perfil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium truncate">{email || 'Usuario no identificado'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <Sun className="w-4 h-4 mr-2 dark:hidden" />
            <Moon className="w-4 h-4 mr-2 hidden dark:block" />
            Preferencias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Modo Oscuro</span>
            <Switch 
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Seguridad y Legal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="link" className="px-0 h-auto text-muted-foreground hover:text-foreground">
            Términos y Condiciones
          </Button>
          <br />
          <Button variant="link" className="px-0 h-auto text-muted-foreground hover:text-foreground">
            Política de Privacidad
          </Button>
        </CardContent>
      </Card>

      <Button 
        variant="destructive" 
        className="w-full" 
        onClick={handleLogout}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Cerrar Sesión
      </Button>
    </div>
  );
}
