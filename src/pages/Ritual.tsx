import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { groupedModules } from '@/data/modules';

export function Ritual() {
  const navigate = useNavigate();

  const handleModuleClick = (id: string) => {
    if (navigator.vibrate) navigator.vibrate(20);
    navigate(`/ritual/${id}`);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-heading font-bold">Tu Ritual</h1>
        <p className="text-muted-foreground text-sm">
          Sigue los módulos en orden para maximizar tu recuperación paso a paso.
        </p>
      </div>

      <div className="w-full space-y-8 animate-in fade-in duration-500">
        {groupedModules.map((modulo, index) => (
          <div key={modulo.id} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-heading font-bold text-foreground">
                {modulo.title}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {modulo.focus}
              </p>
            </div>

            <div className="space-y-3">
              {modulo.items.map((mod) => (
                <Card 
                  key={mod.id} 
                  className="cursor-pointer hover:bg-muted/50 transition-colors active:scale-95 border-border/50 shadow-sm"
                  onClick={() => handleModuleClick(mod.id)}
                >
                  <CardContent className="p-3 pl-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-2.5 rounded-xl bg-muted/60 ${mod.iconColor}`}>
                        <mod.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 pr-2">
                        <h3 className="font-semibold text-sm line-clamp-2 leading-tight mb-1">{mod.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-1">{mod.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
