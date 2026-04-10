import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2, Download, ExternalLink, X, Loader2, FileText, BookOpen, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PDFViewerProps {
  driveUrl: string;
  title?: string;
}

// Mobile browsers (iOS Safari, Android Chrome/WebView) do not support
// rendering PDFs inline via <object> or <iframe>. We detect mobile and
// serve a native-open UI instead.
const isMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export function PDFViewer({ driveUrl, title = 'Documento' }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isMobile] = useState(isMobileDevice);

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

  const toggleFullscreen = useCallback(() => {
    if (navigator.vibrate) navigator.vibrate(10);
    setIsFullscreen(prev => !prev);
  }, []);

  const handleOpenExternal = useCallback(() => {
    if (navigator.vibrate) navigator.vibrate(20);
    window.open(driveUrl, '_blank', 'noopener,noreferrer');
  }, [driveUrl]);

  const handleDownload = useCallback(() => {
    const a = document.createElement('a');
    a.href = driveUrl;
    a.download = title + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [driveUrl, title]);

  // ─── MOBILE UI ───────────────────────────────────────────────────────────────
  // Mobile browsers cannot embed PDFs. We show a premium "open natively" screen
  // that opens the PDF in the device's native app (best mobile UX).
  const MobileViewer = () => (
    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-0 shrink-0">
            <div className="flex items-center space-x-3">
              <Button size="icon" variant="ghost" onClick={toggleFullscreen} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
              <div className="flex flex-col">
                <span className="text-sm font-semibold truncate max-w-[200px]">{title}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  Documento PDF
                </span>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={handleDownload} title="Descargar" className="rounded-full">
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="w-28 h-28 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10">
                <FileText className="w-14 h-14 text-primary" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-background">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-center space-y-2"
            >
              <h2 className="text-xl font-heading font-bold">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Tu material está listo. Ábrelo con el lector de PDF de tu dispositivo para una experiencia de lectura óptima.
              </p>
            </motion.div>

            {/* Mobile hint badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/50"
            >
              <Smartphone className="w-3.5 h-3.5" />
              Optimizado para lectura móvil
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="w-full max-w-xs space-y-3"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <Button
                  className="relative w-full h-14 text-base font-semibold rounded-xl gap-3"
                  onClick={handleOpenExternal}
                >
                  <ExternalLink className="w-5 h-5" />
                  Abrir PDF
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full h-11 text-sm text-muted-foreground gap-2"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                Descargar archivo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ─── DESKTOP UI ──────────────────────────────────────────────────────────────
  // Desktop browsers support <object type="application/pdf"> for inline rendering.
  // We use <object> (not <iframe>) so it's sent as a 'subresource' fetch,
  // bypassing the PWA Service Worker's navigation interception.
  const DesktopViewer = () => (
    <>
      {/* Inline viewer (shown when not fullscreen) */}
      {!isFullscreen && (
        <div className="relative group w-full h-[65vh] rounded-2xl overflow-hidden border border-border/50 bg-muted/20 shadow-inner">
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

          <object
            data={driveUrl}
            type="application/pdf"
            className="w-full h-full border-none"
            onLoad={() => setLoadState('loaded')}
            onError={() => setLoadState('error')}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
              <FileText className="w-12 h-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No se puede mostrar el PDF aquí.</p>
              <Button onClick={handleOpenExternal} className="gap-2">
                <ExternalLink className="w-4 h-4" /> Abrir PDF
              </Button>
            </div>
          </object>

          {loadState !== 'loading' && (
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button size="icon" variant="secondary"
                className="rounded-full shadow-lg bg-background/80 backdrop-blur-md border border-border/50"
                onClick={handleOpenExternal} title="Abrir en nueva pestaña">
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="secondary"
                className="rounded-full shadow-lg bg-background/80 backdrop-blur-md border border-border/50"
                onClick={toggleFullscreen} title="Pantalla completa">
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-0 shrink-0">
              <div className="flex items-center space-x-3">
                <Button size="icon" variant="ghost" onClick={toggleFullscreen} className="rounded-full">
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
                <Button size="icon" variant="ghost" onClick={handleDownload} className="rounded-full">
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={handleOpenExternal} className="rounded-full">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="secondary" onClick={toggleFullscreen}
                  className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  <Minimize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 w-full bg-muted/10 relative min-h-0">
              <object
                data={driveUrl}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
                  <FileText className="w-12 h-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">No se puede mostrar el PDF aquí.</p>
                  <Button onClick={handleOpenExternal} className="gap-2">
                    <ExternalLink className="w-4 h-4" /> Abrir PDF
                  </Button>
                </div>
              </object>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return isMobile ? <MobileViewer /> : <DesktopViewer />;
}
