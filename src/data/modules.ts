import { Coffee, ShieldCheck, Flame, Sparkles, Sunrise, Crosshair, Waves, Activity, Moon, LifeBuoy, Brain, Eye, Filter, ShieldAlert, Shield, BookOpen, AlertTriangle } from 'lucide-react';

export const groupedModules = [
  {
    id: 'modulo-principal',
    title: 'PROGRAMA PRINCIPAL: NervioZen',
    focus: 'Foco: Protocolos Fundamentales',
    items: [
      {
        id: 'mod-1',
        title: 'El Ritual de 11 Segundos',
        description: 'El núcleo del programa. Aprende la técnica exacta para estimular la regeneración nerviosa diariamente.',
        icon: BookOpen,
        iconColor: 'text-primary',
        driveUrl: '/pdfs/El-Protocolo-de-Regeneracion-Nerviosa.pdf',
        metadata: { duration: '15 min de lectura', format: 'Guía Práctica (PDF)', level: 'Esencial' },
        benefits: ['Técnica de respiración celular', 'Activación del nervio vago', 'Reducción inmediata del dolor punzante']
      },
      {
        id: 'mod-2',
        title: 'Guía de Alimentos Prohibidos',
        description: 'Descubre qué alimentos están saboteando tu recuperación y causando inflamación en tus nervios.',
        icon: AlertTriangle,
        iconColor: 'text-destructive',
        driveUrl: '/pdfs/Guia-Alimentaria-para-Pacientes-con-Neuropatia-Recupera-la-Salud-de-tus-Nervios.pdf',
        metadata: { duration: '10 min de lectura', format: 'Lista de Referencia (PDF)', level: 'Importante' },
        benefits: ['Identificación de neurotoxinas ocultas', 'Sustitutos saludables y deliciosos', 'Plan de desintoxicación de 3 días']
      },
      {
        id: 'mod-3',
        title: 'El Protocolo del Sueño Delta',
        description: 'Optimiza tu descanso para que tu cuerpo repare el daño nervioso mientras duermes.',
        icon: Moon,
        iconColor: 'text-indigo-500',
        driveUrl: '/pdfs/Recupera-Tu-Descanso-Optimizacion-del-Sueno-para-Vivir-sin-Dolor-Cronico.pdf',
        metadata: { duration: '20 min de lectura', format: 'Protocolo Nocturno (PDF)', level: 'Avanzado' },
        benefits: ['Inducción de ondas Delta profundas', 'Reparación de mielina durante el sueño', 'Despertar sin entumecimiento']
      },
      {
        id: 'mod-4',
        title: 'Lista Negra de Neurotóxicos',
        description: 'Identifica y elimina las toxinas ambientales y productos de uso diario que dañan tu sistema nervioso.',
        icon: ShieldAlert,
        iconColor: 'text-slate-500',
        driveUrl: '/pdfs/Tu-Hogar-Tu-Santuario-Desintoxica-Tu-Entorno-para-una-Salud-Nerviosa-Optima.pdf',
        metadata: { duration: '12 min de lectura', format: 'Auditoría del Hogar (PDF)', level: 'Prevención' },
        benefits: ['Limpieza de productos de higiene', 'Peligros en utensilios de cocina', 'Creación de un santuario de sanación']
      },
    ]
  },
  {
    id: 'modulo-1',
    title: 'MÓDULO 1: La Farmacia en tu Cocina',
    focus: 'Foco: Nutrición Regenerativa',
    items: [
      {
        id: 'ebook-1',
        title: 'Elixires de Mielina',
        description: '7 Batidos Matutinos para Regenerar tus Nervios',
        icon: Coffee,
        iconColor: 'text-amber-500',
        driveUrl: '/pdfs/Elixires de Mielina_ 7 Batidos Matutinos para Regenerar tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-2',
        title: 'El Escudo Anti-Azúcar',
        description: 'Cómo Detener el Daño Nervioso sin Dejar de Comer Rico',
        icon: ShieldCheck,
        iconColor: 'text-emerald-500',
        driveUrl: '/pdfs/El Escudo Anti-Azúcar_ Cómo Detener el Daño Nervioso sin Dejar de Comer Rico.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-3',
        title: 'Cenas Apaga-Fuego',
        description: 'Recetas Nocturnas para Dormir sin Ardor en los Pies',
        icon: Flame,
        iconColor: 'text-orange-500',
        driveUrl: '/pdfs/Cenas Apaga-Fuego_ Recetas Nocturnas para Dormir sin Ardor en los Pies.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-4',
        title: 'El Botiquín de Especias',
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
        title: 'El Despertar Sin Dolor',
        description: 'Rutina de 3 Minutos en la Cama para Pies y Manos',
        icon: Sunrise,
        iconColor: 'text-rose-500',
        driveUrl: '/pdfs/El Despertar Sin Dolor_ Rutina de 3 Minutos en la Cama para Pies y Manos.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-6',
        title: 'El Botón de Apagado',
        description: 'Puntos de Presión en Casa para Aliviar el Hormigueo',
        icon: Crosshair,
        iconColor: 'text-red-500',
        driveUrl: '/pdfs/El Botón de Apagado_ Puntos de Presión en Casa para Aliviar el Hormigueo.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-7',
        title: 'El Milagro Termal',
        description: 'Cómo Usar el Agua en Casa para Revivir tus Nervios',
        icon: Waves,
        iconColor: 'text-cyan-500',
        driveUrl: '/pdfs/El Milagro Termal_ Cómo Usar el Agua en Casa para Revivir tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-8',
        title: 'Movimiento Cero Impacto',
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
        title: 'Noches de Seda',
        description: 'El Protocolo para Vencer el Insomnio por Dolor Nervioso',
        icon: Moon,
        iconColor: 'text-indigo-500',
        driveUrl: '/pdfs/Noches de Seda_ El Protocolo para Vencer el Insomnio por Dolor Nervioso.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-10',
        title: 'Protocolo SOS',
        description: 'Qué hacer en los 5 minutos de peor dolor o punzadas',
        icon: LifeBuoy,
        iconColor: 'text-red-600',
        driveUrl: '/pdfs/Protocolo SOS_ Qué hacer en los 5 minutos de peor dolor o punzadas.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-11',
        title: 'El Peso del Dolor',
        description: 'Cómo Liberar la Frustración y Acelerar tu Sanación',
        icon: Brain,
        iconColor: 'text-purple-500',
        driveUrl: '/pdfs/El Peso del Dolor_ Cómo Liberar la Frustración y Acelerar tu Sanación.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-12',
        title: 'La Mente que Sana',
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
        title: 'El Filtro de Oro',
        description: 'Cómo Limpiar tu Hígado de Años de Pastillas Químicas',
        icon: Filter,
        iconColor: 'text-yellow-600',
        driveUrl: '/pdfs/El Filtro de Oro_ Cómo Limpiar tu Hígado de Años de Pastillas Químicas.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-14',
        title: 'Enemigos Invisibles',
        description: 'Los 10 Tóxicos en tu Casa que Destruyen tus Nervios',
        icon: ShieldAlert,
        iconColor: 'text-orange-600',
        driveUrl: '/pdfs/Enemigos Invisibles_ Los 10 Tóxicos en tu Casa que Destruyen tus Nervios.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-15',
        title: 'El Escudo Inmune 50+',
        description: 'Cómo Blindar tu Cuerpo para que los Nervios Sanen en Paz',
        icon: Shield,
        iconColor: 'text-green-500',
        driveUrl: '/pdfs/El Escudo Inmune 50+_ Cómo Blindar tu Cuerpo para que los Nervios Sanen en Paz.pdf',
        metadata: { duration: 'Lectura', format: 'Guía Práctica (PDF)', level: 'Todos los niveles' },
        benefits: ['Conocimiento especializado', 'Fácil de implementar en casa', 'Respaldado por estudios']
      },
      {
        id: 'ebook-16',
        title: 'El Diccionario del Nervio Sano',
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
