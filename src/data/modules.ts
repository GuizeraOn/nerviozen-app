import { Coffee, ShieldCheck, Flame, Sparkles, Sunrise, Crosshair, Waves, Activity, Moon, LifeBuoy, Brain, Eye, Filter, ShieldAlert, Shield, BookOpen } from 'lucide-react';

export const groupedModules = [
  {
    id: 'modulo-1',
    title: 'MÓDULO 1: La Farmacia en tu Cocina',
    focus: 'Foco: Nutrición Regenerativa',
    items: [
      {
        id: 'ebook-1',
        title: 'eBook 1: Elixires de Mielina',
        description: '7 Batidos Matutinos para Regenerar tus Nervios',
        icon: Coffee,
        iconColor: 'text-amber-500',
        driveUrl: '/pdfs/Elixires de Mielina_ 7 Batidos Matutinos para Regenerar tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-2',
        title: 'eBook 2: El Escudo Anti-Azúcar',
        description: 'Cómo Detener el Daño Nervioso sin Dejar de Comer Rico',
        icon: ShieldCheck,
        iconColor: 'text-emerald-500',
        driveUrl: '/pdfs/El Escudo Anti-Azúcar_ Cómo Detener el Daño Nervioso sin Dejar de Comer Rico.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-3',
        title: 'eBook 3: Cenas Apaga-Fuego',
        description: 'Recetas Nocturnas para Dormir sin Ardor en los Pies',
        icon: Flame,
        iconColor: 'text-orange-500',
        driveUrl: '/pdfs/Cenas Apaga-Fuego_ Recetas Nocturnas para Dormir sin Ardor en los Pies.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-4',
        title: 'eBook 4: El Botiquín de Especias',
        description: 'Los 5 Polvos Mágicos que Calman el Dolor Nervioso',
        icon: Sparkles,
        iconColor: 'text-amber-400',
        driveUrl: '/pdfs/El Botiquín de Especias_ Los 5 Polvos Mágicos que Calman el Dolor Nervioso.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
    ]
  },
  {
    id: 'modulo-2',
    title: 'MÓDULO 2: Movimiento Sanador',
    focus: 'Foco: Destrabar el cuerpo sin impacto',
    items: [
      {
        id: 'ebook-5',
        title: 'eBook 5: El Despertar Sin Dolor',
        description: 'Rutina de 3 Minutos en la Cama para Pies y Manos',
        icon: Sunrise,
        iconColor: 'text-rose-500',
        driveUrl: '/pdfs/El Despertar Sin Dolor_ Rutina de 3 Minutos en la Cama para Pies y Manos.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-6',
        title: 'eBook 6: El Botón de Apagado',
        description: 'Puntos de Presión en Casa para Aliviar el Hormigueo',
        icon: Crosshair,
        iconColor: 'text-red-500',
        driveUrl: '/pdfs/El Botón de Apagado_ Puntos de Presión en Casa para Aliviar el Hormigueo.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-7',
        title: 'eBook 7: El Milagro Termal',
        description: 'Cómo Usar el Agua en Casa para Revivir tus Nervios',
        icon: Waves,
        iconColor: 'text-cyan-500',
        driveUrl: '/pdfs/El Milagro Termal_ Cómo Usar el Agua en Casa para Revivir tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-8',
        title: 'eBook 8: Movimiento Cero Impacto',
        description: 'Yoga en Silla para Liberar la Columna y las Piernas',
        icon: Activity,
        iconColor: 'text-teal-500',
        driveUrl: '/pdfs/Movimiento Cero Impacto_ Yoga en Silla para Liberar la Columna y las Piernas.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
    ]
  },
  {
    id: 'modulo-3',
    title: 'MÓDULO 3: Apagando el Dolor Mental',
    focus: 'Foco: Sueño, Estrés y Cortisol',
    items: [
      {
        id: 'ebook-9',
        title: 'eBook 9: Noches de Seda',
        description: 'El Protocolo para Vencer el Insomnio por Dolor Nervioso',
        icon: Moon,
        iconColor: 'text-indigo-500',
        driveUrl: '/pdfs/Noches de Seda_ El Protocolo para Vencer el Insomnio por Dolor Nervioso.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-10',
        title: 'eBook 10: Protocolo SOS',
        description: 'Qué hacer en los 5 minutos de peor dolor o punzadas',
        icon: LifeBuoy,
        iconColor: 'text-red-600',
        driveUrl: '/pdfs/Protocolo SOS_ Qué hacer en los 5 minutos de peor dolor o punzadas.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-11',
        title: 'eBook 11: El Peso del Dolor',
        description: 'Cómo Liberar la Frustración y Acelerar tu Sanación',
        icon: Brain,
        iconColor: 'text-purple-500',
        driveUrl: '/pdfs/El Peso del Dolor_ Cómo Liberar la Frustración y Acelerar tu Sanación.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-12',
        title: 'eBook 12: La Mente que Sana',
        description: 'Guía Práctica de Visualización para Regenerar la Mielina',
        icon: Eye,
        iconColor: 'text-blue-500',
        driveUrl: '/pdfs/La Mente que Sana_ Guía Práctica de Visualización para Regenerar la Mielina.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
    ]
  },
  {
    id: 'modulo-4',
    title: 'MÓDULO 4: Escudo de Longevidad',
    focus: 'Foco: Detox y Protección a largo plazo',
    items: [
      {
        id: 'ebook-13',
        title: 'eBook 13: El Filtro de Oro',
        description: 'Cómo Limpiar tu Hígado de Años de Pastillas Químicas',
        icon: Filter,
        iconColor: 'text-yellow-600',
        driveUrl: '/pdfs/El Filtro de Oro_ Cómo Limpiar tu Hígado de Años de Pastillas Químicas.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-14',
        title: 'eBook 14: Enemigos Invisibles',
        description: 'Los 10 Tóxicos en tu Casa que Destruyen tus Nervios',
        icon: ShieldAlert,
        iconColor: 'text-orange-600',
        driveUrl: '/pdfs/Enemigos Invisibles_ Los 10 Tóxicos en tu Casa que Destruyen tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-15',
        title: 'eBook 15: El Escudo Inmune 50+',
        description: 'Cómo Blindar tu Cuerpo para que los Nervios Sanen en Paz',
        icon: Shield,
        iconColor: 'text-green-500',
        driveUrl: '/pdfs/El Escudo Inmune 50+_ Cómo Blindar tu Cuerpo para que los Nervios Sanen en Paz.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-16',
        title: 'eBook 16: El Diccionario del Nervio Sano',
        description: 'Qué Vitaminas Tomar y Dónde Encontrarlas en la Comida',
        icon: BookOpen,
        iconColor: 'text-emerald-600',
        driveUrl: '/pdfs/El Diccionario del Nervio Sano_ Qué Vitaminas Tomar y Dónde Encontrarlas en la Comida.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
    ]
  },
];

export const modulesData = groupedModules.flatMap(m => m.items);
