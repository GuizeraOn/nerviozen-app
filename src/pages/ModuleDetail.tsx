import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PDFViewer } from '@/components/PDFViewer';
import { ArrowLeft, Eye, Clock, FileText, Star, CheckCircle2, Lock } from 'lucide-react';
import { modulesData } from '@/data/modules';

export function ModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isViewing, setIsViewing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const module = modulesData.find(m => m.id === id);

  if (!module) {
    return (
      <div className="p-6 text-center">
        <p>Módulo no encontrado.</p>
        <Button onClick={() => navigate('/ritual')} className="mt-4">Volver</Button>
      </div>
    );
  }

  const handleComplete = () => {
    if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-6 animate-in fade-in duration-300">
      <Button 
        variant="ghost" 
        className="mb-2 -ml-4 text-muted-foreground hover:text-foreground" 
        onClick={() => navigate('/ritual')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver al Ritual
      </Button>

      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`inline-flex p-3 rounded-2xl bg-muted/50 border border-border/50 shadow-sm ${module.iconColor}`}>
            <module.icon className="w-8 h-8" />
          </div>
          {isCompleted && (
            <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Completado
            </Badge>
          )}
        </div>
        
        <h1 className="text-3xl font-heading font-bold leading-tight">{module.title}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{module.description}</p>
      </div>

      {/* Metadata Cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-card/50 border-border/50 shadow-sm">
          <CardContent className="p-3 flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Tiempo</span>
              <span className="text-sm font-medium">{module.metadata.duration}</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50 shadow-sm">
          <CardContent className="p-3 flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <FileText className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Formato</span>
              <span className="text-sm font-medium">{module.metadata.format}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-border/50" />

      {/* Benefits Section */}
      <div className="space-y-4">
        <h3 className="font-heading font-semibold text-lg flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          ¿Qué aprenderás?
        </h3>
        <ul className="space-y-3">
          {module.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="mt-0.5 mr-3 bg-primary/20 p-1 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground/90 leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Section */}
      <div className="pt-4 space-y-4">
        {!isViewing ? (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Button 
              className="relative w-full h-14 text-lg font-semibold shadow-lg" 
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(20);
                setIsViewing(true);
              }}
            >
              <Eye className="w-5 h-5 mr-2" />
              Desbloquear Material
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between border-b border-border/50 pb-2">
              <h3 className="font-heading font-semibold text-lg">Documento Oficial</h3>
              <Badge variant="outline" className="text-xs font-normal">
                <Lock className="w-3 h-3 mr-1" /> Seguro
              </Badge>
            </div>
            
            <PDFViewer driveUrl={module.driveUrl} title={module.title} />
            
            <Button 
              variant={isCompleted ? "outline" : "default"}
              className={`w-full h-12 ${isCompleted ? 'border-emerald-500 text-emerald-500 hover:bg-emerald-500/10' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
              onClick={handleComplete}
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              {isCompleted ? 'Marcar como Incompleto' : 'Marcar como Completado'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
