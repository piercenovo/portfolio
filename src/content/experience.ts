import type { ExperienceEntry } from '@/types/content'

// Most recent first; no `end` = current position
export const experience: ExperienceEntry[] = [
  {
    role: { es: 'Mobile Software Engineer', en: 'Mobile Software Engineer' },
    company: 'Mission Produce Perú',
    location: { es: 'Trujillo, Perú', en: 'Trujillo, Peru' },
    start: '2024-05',
    bullets: {
      es: [
        'Desarrollé app Flutter para medición de productividad en cosecha de arándanos, procesando más de 500 operaciones diarias con arquitectura offline-first, lectura QR/barras y sincronización en segundo plano.',
        'Lideré sistema de evaluación de campo y laboratorio con cartillas dinámicas, formularios personalizables, gráficos y mapas con visualización offline mediante caché automático de tiles.',
        'Diseñé arquitectura modular con Clean Architecture, principios SOLID, GetIt e inyección de dependencias con estructura feature-first escalable a múltiples unidades de negocio.'
      ],
      en: [
        'Built a Flutter app for blueberry harvest productivity, processing 500+ daily field operations with offline-first architecture, QR/barcode scanning, and automatic background sync.',
        'Led a field and lab evaluation system with dynamic forms, data charts, and maps with offline tile caching.',
        'Designed modular Clean Architecture with SOLID principles, GetIt, and a feature-first structure scalable across multiple business units.'
      ]
    }
  },
  {
    role: { es: 'Mobile Software Engineer', en: 'Mobile Software Engineer' },
    company: 'Grupo Mendieta',
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    start: '2023-03',
    end: '2024-03',
    bullets: {
      es: [
        'Lideré migración completa de app financiera de Xamarin a Flutter, logrando rendimiento nativo con reducción del 30% en tiempos de carga mediante lazy loading y caching estratégico.',
        'Implementé autenticación segura con JWT/OAuth, manejo encriptado de tokens y notificaciones push/locales para alertas de transacciones y vencimientos.',
        'Establecí Clean Architecture con separación clara de capas (presentación, dominio, datos), DTOs y mappers, principios SOLID y gestión de estado con Cubit.'
      ],
      en: [
        'Led full migration of a financial app from Xamarin to Flutter, achieving near-native performance with a 30% reduction in load times via lazy loading and strategic caching.',
        'Implemented secure JWT/OAuth authentication, encrypted token handling, and push/local notifications for transaction and payment alerts.',
        'Established Clean Architecture with clear layer separation (presentation, domain, data), DTOs and mappers, SOLID principles, and Cubit state management.'
      ]
    }
  },
  {
    role: { es: 'Mobile Developer', en: 'Mobile Developer' },
    company: 'I.E. Nuestra Señora de Lourdes',
    location: { es: 'Ascope, Perú', en: 'Ascope, Peru' },
    start: '2022-07',
    end: '2022-12',
    bullets: {
      es: [
        'Desarrollé app educativa con juegos interactivos (puzzles, memoria) para mejorar concentración en niños con TDAH, logrando +30% en engagement diario.',
        'Gestioné publicación exitosa en Play Store y App Store cumpliendo normativas de privacidad infantil (COPPA) y validación pedagógica con educadores.'
      ],
      en: [
        'Developed an educational app with interactive games (puzzles, memory) to improve focus in children with ADHD, achieving a 30% increase in daily engagement.',
        'Managed successful Play Store and App Store releases, ensuring COPPA compliance and pedagogical validation with educators.'
      ]
    }
  }
]
