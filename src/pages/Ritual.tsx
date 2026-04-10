import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { modulesData } from '@/data/modules';

export function Ritual() {
  const navigate = useNavigate();

  const handleModuleClick = (id: string) => {
    if (navigator.vibrate) navigator.vibrate(20);
    navigate(`/ritual/${id}`);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-heading font-bold">Tu Ritual</h1>
        <p className="text-muted-foreground text-sm">
          Sigue los módulos en orden para maximizar tu recuperación.
        </p>
      </div>

      <div className="w-full space-y-4">
        {modulesData.map((mod) => (
          <Card 
            key={mod.id} 
            className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95"
            onClick={() => handleModuleClick(mod.id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-muted ${mod.iconColor}`}>
                  <mod.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{mod.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
