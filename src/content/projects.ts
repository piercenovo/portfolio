import airbnbCloneCover from '@/assets/projects/airbnb-clone.webp'
import brainconcentCover from '@/assets/projects/brainconcent.webp'
import linktreeCloneCover from '@/assets/projects/linktree-clone.webp'
import productividadCampoCover from '@/assets/projects/productividad-campo.webp'
import type { Project } from '@/types/content'

// Array order = display order
export const projects: Project[] = [
  {
    slug: 'productividad-campo',
    name: 'Productividad campo',
    kind: 'mobile',
    year: 2025,
    cover: productividadCampoCover,
    links: {
      store: 'https://play.google.com/store/apps/details?id=com.missionproduce.productividadcampo&hl=es'
    },
    techs: ['flutter', 'nodejs', 'nestjs', 'mysql'],
    summary: {
      es: 'Aplicación móvil para el sector agroindustrial que optimiza la gestión de la cosecha de arándanos mediante el registro digital de envases y la recepción de guías con códigos QR.',
      en: 'Mobile app for the agribusiness sector optimizing blueberry harvest management through digital container registration and QR/barcode-based guide reception with automatic background sync.'
    }
  },
  {
    slug: 'airbnb-clone',
    name: 'Airbnb Clone',
    kind: 'web',
    year: 2024,
    cover: airbnbCloneCover,
    links: {
      live: 'https://rent-app-mocha.vercel.app/',
      repo: 'https://github.com/piercenovo/airbnb-app'
    },
    techs: ['nextjs', 'tailwindcss', 'prisma', 'postgresql'],
    summary: {
      es: 'Plataforma de reservas que conecta anfitriones y viajeros, permitiendo alquilar alojamientos de forma segura y eficiente. Ofrece gestión de reservas y comunicación directa entre usuarios.',
      en: 'Booking platform connecting hosts and travelers, enabling secure and efficient accommodation rental. Features reservation management and direct communication between users.'
    }
  },
  {
    slug: 'linktree-clone',
    name: 'Linktree Clone',
    kind: 'web',
    year: 2023,
    cover: linktreeCloneCover,
    links: {
      live: 'https://linktr.piercenovo.dev/',
      repo: 'https://github.com/piercenovo/linktree-clone'
    },
    techs: ['nextjs', 'tailwindcss', 'typescript'],
    summary: {
      es: 'Herramienta para crear un perfil único con múltiples enlaces, permitiendo compartir fácilmente contenido, redes sociales y recursos desde un solo lugar.',
      en: 'Tool for creating a unique profile with multiple links, making it easy to share content, social media, and resources from a single place.'
    }
  },
  {
    slug: 'brainconcent',
    name: 'Brainconcent',
    kind: 'mobile',
    year: 2023,
    cover: brainconcentCover,
    links: {
      repo: 'https://github.com/piercenovo/brainconcent-flutter'
    },
    techs: ['flutter', 'nodejs', 'express', 'mongodb'],
    summary: {
      es: 'Aplicación móvil diseñada para fortalecer la concentración y las habilidades cognitivas en niños con TDAH, a través de un entorno interactivo y visualmente atractivo.',
      en: 'Mobile app designed to strengthen concentration and cognitive skills in children with ADHD, through an interactive and visually engaging environment.'
    }
  }
]
