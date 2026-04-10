import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2, Download, ExternalLink, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PDFViewerProps {
  driveUrl: string;
  title?: string;
}

export function PDFViewer({ driveUrl, title = 'Documento' }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Handle ESC key to exit fullscreen and scroll locking
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    // Manage body scroll lock
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // Always clean up
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (navigator.vibrate) navigator.vibrate(10);
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    // Check if it's a Google Drive URL
    if (driveUrl.includes('drive.google.com')) {
      const downloadUrl = driveUrl.replace('/preview', '/view').replace('/file/d/', '/uc?export=download&id=');
      window.open(downloadUrl, '_blank');
    } else {
      // For local files, just open in new tab
      window.open(driveUrl, '_blank');
    }
  };

  return (
    <div className={`relative group transition-all duration-300 ${isFullscreen ? '' : 'w-full h-[60vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-border/50 bg-muted/20 shadow-inner'}`}>
      
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-sm font-medium text-muted-foreground animate-pulse">Cargando material premium...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Iframe */}
      <iframe 
        ref={iframeRef}
        src={driveUrl} 
        className={`w-full h-full border-none transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        allow="autoplay"
        title={title}
        onLoad={() => setIsLoading(false)}
      ></iframe>

      {/* Inline Controls (only visible when not fullscreen) */}
      {!isFullscreen && !isLoading && (
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full shadow-lg bg-background/80 backdrop-blur-md border border-border/50 hover:bg-background"
            onClick={toggleFullscreen}
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col pt-safe"
          >
            {/* Fullscreen Toolbar */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0">
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
                  <span className="text-sm font-semibold truncate max-w-[150px]">{title}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Modo Lectura</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={handleDownload}
                  title="Descargar"
                  className="rounded-full"
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => window.open(driveUrl, '_blank')}
                  title="Abrir Original"
                  className="rounded-full"
                >
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

            {/* Fullscreen Content */}
            <div className="flex-1 w-full bg-muted/10 relative">
              <iframe 
                src={driveUrl} 
                className="w-full h-full border-none"
                allow="autoplay"
                title={title}
              ></iframe>
              
              {/* Bottom Navigation Hint for Mobile */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 animate-bounce group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 text-white px-4 py-2 rounded-full text-xs backdrop-blur-sm">
                  Desliza para leer
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

