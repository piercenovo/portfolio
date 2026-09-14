import photo from '@/assets/about.webp'
import type { About } from '@/types/content'

export const about: About = {
  photo,
  paragraphs: {
    es: [
      'Me motiva construir software que resuelve problemas reales: apps que funcionan sin internet, que escalan con el negocio y que los usuarios disfrutan usar. Disfruto el ciclo completo, desde el diseño arquitectónico hasta el despliegue en producción.'
    ],
    en: [
      "I'm driven by building software that solves real problems: apps that work without internet, scale with the business, and that users actually enjoy. I like the full cycle — from architectural design to production deployment."
    ]
  },
  achievement: {
    es: {
      prefix: 'Uno de mis logros destacados es el desarrollo de una ',
      linkText: 'aplicación móvil para la gestión de productividad en la cosecha agrícola',
      linkTitle: '¡Visualiza la App!',
      suffix: ', mejorando la eficiencia y trazabilidad en el sector agroindustrial a través de herramientas digitales innovadoras.'
    },
    en: {
      prefix: 'One of my key achievements is developing a ',
      linkText: 'mobile app for agricultural harvest productivity management',
      linkTitle: 'View the App!',
      suffix: ', improving efficiency and traceability in the agribusiness sector through innovative digital tools.'
    }
  },
  achievementUrl: 'https://play.google.com/store/apps/details?id=com.missionproduce.productividadcampo&hl=es'
}
