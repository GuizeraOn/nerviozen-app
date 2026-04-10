import { BookOpen, AlertTriangle, Moon, ShieldAlert } from 'lucide-react';

export const modulesData = [
  {
    id: 'mod-1',
    title: 'El Ritual de 11 Segundos',
    description: 'El núcleo del programa. Aprende la técnica exacta para estimular la regeneración nerviosa diariamente.',
    icon: BookOpen,
    iconColor: 'text-primary',
    driveUrl: '/pdfs/El-Protocolo-de-Regeneracion-Nerviosa.pdf',
    metadata: {
      duration: '15 min de lectura',
      format: 'Guía Práctica (PDF)',
      level: 'Esencial'
    },
    benefits: [
      'Técnica de respiración celular',
      'Activación del nervio vago',
      'Reducción inmediata del dolor punzante'
    ]
  },
  {
    id: 'mod-2',
    title: 'Guía de Alimentos Prohibidos',
    description: 'Descubre qué alimentos están saboteando tu recuperación y causando inflamación en tus nervios.',
    icon: AlertTriangle,
    iconColor: 'text-destructive',
    driveUrl: '/pdfs/Guia-Alimentaria-para-Pacientes-con-Neuropatia-Recupera-la-Salud-de-tus-Nervios.pdf',
    metadata: {
      duration: '10 min de lectura',
      format: 'Lista de Referencia (PDF)',
      level: 'Importante'
    },
    benefits: [
      'Identificación de neurotoxinas ocultas',
      'Sustitutos saludables y deliciosos',
      'Plan de desintoxicación de 3 días'
    ]
  },
  {
    id: 'mod-3',
    title: 'El Protocolo del Sueño Delta',
    description: 'Optimiza tu descanso para que tu cuerpo repare el daño nervioso mientras duermes.',
    icon: Moon,
    iconColor: 'text-indigo-500',
    driveUrl: '/pdfs/Recupera-Tu-Descanso-Optimizacion-del-Sueno-para-Vivir-sin-Dolor-Cronico.pdf',
    metadata: {
      duration: '20 min de lectura',
      format: 'Protocolo Nocturno (PDF)',
      level: 'Avanzado'
    },
    benefits: [
      'Inducción de ondas Delta profundas',
      'Reparación de mielina durante el sueño',
      'Despertar sin entumecimiento'
    ]
  },
  {
    id: 'mod-4',
    title: 'Lista Negra de Neurotóxicos',
    description: 'Identifica y elimina las toxinas ambientales y productos de uso diario que dañan tu sistema nervioso.',
    icon: ShieldAlert,
    iconColor: 'text-slate-500',
    driveUrl: '/pdfs/Tu-Hogar-Tu-Santuario-Desintoxica-Tu-Entorno-para-una-Salud-Nerviosa-Optima.pdf',
    metadata: {
      duration: '12 min de lectura',
      format: 'Auditoría del Hogar (PDF)',
      level: 'Prevención'
    },
    benefits: [
      'Limpieza de productos de higiene',
      'Peligros en utensilios de cocina',
      'Creación de un santuario de sanación'
    ]
  }
];
