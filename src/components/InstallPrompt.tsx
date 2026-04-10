import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Share, MoreVertical } from 'lucide-react';

export function InstallPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsStandalone(true);
    }
  }, []);

  if (isStandalone) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <Download className="w-4 h-4 mr-2" />
          📲 Instalar App en tu Pantalla
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Instalar NervioZen</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="ios" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ios">iPhone (Safari)</TabsTrigger>
            <TabsTrigger value="android">Android (Chrome)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ios" className="space-y-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md">
                <Share className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm">1. Toca el botón <strong>Compartir</strong> en la parte inferior de Safari.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md font-bold text-primary text-center w-9 h-9 flex items-center justify-center">+</div>
              <p className="text-sm">2. Desliza hacia arriba y selecciona <strong>'Añadir a la pantalla de inicio'</strong>.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md text-primary font-bold text-xs flex items-center justify-center w-9 h-9">Add</div>
              <p className="text-sm">3. Toca <strong>'Añadir'</strong> en la esquina superior derecha.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="android" className="space-y-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md">
                <MoreVertical className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm">1. Toca los <strong>tres puntos</strong> en la esquina superior derecha de Chrome.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm">2. Selecciona <strong>'Instalar aplicación'</strong> o <strong>'Añadir a inicio'</strong>.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-muted p-2 rounded-md font-bold text-primary text-center w-9 h-9 flex items-center justify-center">✓</div>
              <p className="text-sm">3. Confirma la instalación.</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
