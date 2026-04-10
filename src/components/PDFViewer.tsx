import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2, Download, ExternalLink, X, Loader2, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PDFViewerProps {
  driveUrl: string;
  title?: string;
}

export function PDFViewer({ driveUrl, title = 'Documento' }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');

  // Handle ESC key to exit fullscreen and scroll locking
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleEsc);

    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (navigator.vibrate) navigator.vibrate(10);
    setIsFullscreen(prev => !prev);
  };

  const handleOpenExternal = () => {
    window.open(driveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = driveUrl;
    a.download = title + '.pdf';
    a.click();
  };

  // We use <object> instead of <iframe> because browsers send PDF requests from
  // <object> as "subresource" fetches, NOT as "navigate" requests. This prevents
  // the PWA Service Worker from intercepting the request and serving index.html
  // (which would cause the React app/Dashboard to render inside the viewer).
  const PDFObject = ({ className }: { className: string }) => (
    <object
      data={driveUrl}
      type="application/pdf"
      className={className}
      onLoad={() => setLoadState('loaded')}
      onError={() => setLoadState('error')}
    >
      {/* Fallback for browsers that can't embed PDF */}
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
        <AlertCircle className="w-12 h-12 text-muted-foreground" />
        <p className="text-sm text-muted-foreground font-medium">
          Tu navegador no puede mostrar el PDF directamente.
        </p>
        <Button onClick={handleOpenExternal} className="gap-2">
          <ExternalLink className="w-4 h-4" />
          Abrir PDF
        </Button>
      </div>
    </object>
  );

  return (
    <>
      {/* Inline viewer */}
      {!isFullscreen && (
        <div className="relative group w-full h-[65vh] rounded-2xl overflow-hidden border border-border/50 bg-muted/20 shadow-inner">

          {/* Loading overlay */}
          <AnimatePresence>
            {loadState === 'loading' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm"
              >
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-sm font-medium text-muted-foreground animate-pulse">
                  Cargando material premium...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <PDFObject className="w-full h-full border-none" />

          {/* Inline controls */}
          {loadState !== 'loading' && (
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full shadow-lg bg-background/80 backdrop-blur-md border border-border/50 hover:bg-background"
                onClick={handleOpenExternal}
                title="Abrir en nueva pestaña"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full shadow-lg bg-background/80 backdrop-blur-md border border-border/50 hover:bg-background"
                onClick={toggleFullscreen}
                title="Pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen overlay — rendered outside the inline wrapper via portal-like pattern */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-0 shrink-0">
              <div className="flex items-center space-x-3">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleFullscreen}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold truncate max-w-[180px]">{title}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold flex items-center gap-1">
                    <FileText className="w-3 h-3" /> Modo Lectura
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <Button size="icon" variant="ghost" onClick={handleDownload} title="Descargar" className="rounded-full">
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={handleOpenExternal} title="Abrir Original" className="rounded-full">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={toggleFullscreen}
                  className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* PDF content */}
            <div className="flex-1 w-full bg-muted/10 relative min-h-0">
              <PDFObject className="w-full h-full border-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
