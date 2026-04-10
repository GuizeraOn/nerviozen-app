import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';


export function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      if (navigator.vibrate) navigator.vibrate([50, 50, 50]); // Error vibration
      return;
    }

    // Save to localStorage
    localStorage.setItem('nz_user_session', email);
    
    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(50);
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 mb-2">
          <img 
            src="/logo_nerviozen.png" 
            alt="NervioZen Logo" 
            className="w-52 h-auto drop-shadow-xl dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
          />
          <p className="text-muted-foreground text-center font-medium">Protocolo de Regeneración Nerviosa</p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Acceso al Programa</CardTitle>
            <CardDescription>
              Introduce el correo con el que realizaste tu compra.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className={error ? 'border-destructive' : ''}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <Button type="submit" className="w-full font-semibold text-md h-12">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
