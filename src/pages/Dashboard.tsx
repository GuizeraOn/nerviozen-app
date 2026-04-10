import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, BookOpen, Pill, CheckCircle2, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { InstallPrompt } from '@/components/InstallPrompt';

export function Dashboard() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('nz_user_session');
    if (!session) {
      navigate('/login');
    } else {
      setEmail(session);
    }
  }, [navigate]);

  const handleNavigate = (path: string) => {
    if (navigator.vibrate) navigator.vibrate(50);
    navigate(path);
  };

  return (
    <div className="pb-24 pt-2 px-4 max-w-md mx-auto space-y-6">
      
      {/* App Logo Display */}
      <div className="flex justify-center pb-2 border-b border-border/50">
        <img 
          src="/logo_nerviozen.png" 
          alt="NervioZen Logo" 
          className="w-40 h-auto drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all"
        />
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <h1 className="text-2xl font-heading font-bold">Hola,</h1>
          <p className="text-muted-foreground text-sm truncate max-w-[200px]">{email}</p>
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-6 h-6" />
          </Button>
          <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-background"></span>
        </div>
      </div>

      <InstallPrompt />

      {/* Progress Card */}
      <Card className="border-border/50 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Estado de Regeneración Nerviosa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between mb-2">
            <span className="text-3xl font-bold font-heading text-primary">12%</span>
            <span className="text-xs text-muted-foreground mb-1">Fase 1</span>
          </div>
          <Progress value={12} className="h-2" />
        </CardContent>
      </Card>

      {/* Task of the Day */}
      <Card className="border-primary/20 shadow-md bg-gradient-to-br from-card to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
        <CardHeader>
          <CardTitle className="text-lg font-heading">Tarea del Día</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-medium">Ritual de 11 Segundos - Fase 1</p>
          <Button 
            className="w-full" 
            onClick={() => handleNavigate('/ritual')}
          >
            Comenzar Ahora
          </Button>
        </CardContent>
      </Card>

      {/* Grid Shortcuts */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95" onClick={() => handleNavigate('/ritual')}>
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2 text-center h-24">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">Guía Maestro</span>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95">
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2 text-center h-24">
            <Pill className="w-6 h-6 text-accent" />
            <span className="text-xs font-medium">Suplementos</span>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95">
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2 text-center h-24">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <span className="text-xs font-medium">Hábitos</span>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95" onClick={() => handleNavigate('/community')}>
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2 text-center h-24">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            <span className="text-xs font-medium">Soporte</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
