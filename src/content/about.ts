import photoLight from '@/assets/about-light.webp'
import photo from '@/assets/about.webp'
import type { About } from '@/types/content'

export const about: About = {
  photo,
  photoLight,
  paragraphs: {
    es: [
      'Me motiva construir productos que resuelven problemas reales, participando en todo el ciclo: levantamiento de requisitos con el cliente, diseño de arquitectura, desarrollo, despliegue en producción y capacitación de usuarios.',
      'Aplico Clean Architecture, principios SOLID y buenas prácticas de escalabilidad, y disfruto los retos de integración: sincronización offline-first, modelado de datos en PostgreSQL y SQL Server, e incluso conectar hardware industrial como balanzas por RS-485.'
    ],
    en: [
      "I'm driven by building products that solve real problems, taking part in the whole cycle: gathering requirements with the client, designing the architecture, building, deploying to production and training users.",
      'I apply Clean Architecture, SOLID principles and scalability best practices, and I enjoy integration challenges: offline-first synchronization, data modeling in PostgreSQL and SQL Server, and even connecting industrial hardware such as scales over RS-485.'
    ]
  },
  education: [
    {
      title: { es: 'Ingeniería de Sistemas', en: 'B.Sc. in Systems Engineering' },
      institution: 'Universidad César Vallejo (UCV)',
      period: '2018 – 2022'
    },
    {
      title: { es: 'Bootcamp: Clean Architecture con Riverpod', en: 'Bootcamp: Clean Architecture with Riverpod' },
      institution: 'Flutter Masters',
      period: '2024'
    }
  ],
  languages: {
    es: 'Español (nativo) · Inglés (profesional)',
    en: 'Spanish (native) · English (professional working proficiency)'
  }
}
