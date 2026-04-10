import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, ExternalLink } from 'lucide-react';

export function Community() {
  const faqs = [
    {
      q: '¿Cuándo empezaré a notar resultados?',
      a: 'La mayoría de nuestros usuarios reportan mejoras iniciales entre los días 14 y 21, siempre que sigan el ritual diario de 11 segundos de forma consistente.'
    },
    {
      q: '¿Puedo tomar mis medicamentos actuales?',
      a: 'Sí. El protocolo NervioZen es 100% natural y está diseñado para complementar, no reemplazar, las indicaciones de tu médico.'
    },
    {
      q: '¿Qué pasa si me salto un día del ritual?',
      a: 'No te preocupes. Simplemente retoma el ritual al día siguiente. La consistencia a largo plazo es más importante que la perfección diaria.'
    },
    {
      q: '¿Cómo accedo al grupo VIP?',
      a: 'Haz clic en el botón superior "Unirme al Grupo VIP" y serás redirigido a nuestra comunidad privada donde podrás interactuar con otros miembros.'
    }
  ];

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-heading font-bold">Comunidad y Soporte</h1>
        <p className="text-muted-foreground text-sm">
          No estás solo en este viaje. Conecta y resuelve tus dudas.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span>Comunidad VIP</span>
          </CardTitle>
          <CardDescription>
            Únete a cientos de personas que ya están regenerando sus nervios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={() => window.open('https://chat.whatsapp.com/placeholder', '_blank')}>
            Unirme al Grupo VIP
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-heading font-semibold">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border bg-card rounded-lg px-4">
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
