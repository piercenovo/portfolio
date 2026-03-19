export type Lang = 'es' | 'en'

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Translation {
  header: {
    navLinks: Array<{ section: string; label: string }>
    cta: { label: string; title: string; url: string }
  }
  hero: {
    subtitle1: string
    subtitle2: string
    tagline: string
    description: string
  }
  experience: {
    title: string
    entries: ExperienceEntry[]
  }
  about: {
    title: string
    paragraphs: [string]
    achievement: {
      prefix: string
      link: { text: string; title: string }
      suffix: string
    }
  }
  skills: {
    title: string
    groupNames: [string, string, string]
  }
  projects: {
    title: string
    descriptions: [string, string, string, string]
  }
  contact: {
    title: string
    description: string
    cta: { title: string; label: string }
  }
  footer: {
    madeBy: string
  }
}

export const translations: Record<Lang, Translation> = {
  es: {
    header: {
      navLinks: [
        { section: 'proyectos', label: 'Proyectos' },
        { section: 'experiencia', label: 'Experiencia' },
        { section: 'habilidades', label: 'Habilidades' },
        { section: 'sobre-mi', label: 'Sobre Mí' },
        { section: 'contacto', label: 'Contacto' }
      ],
      cta: {
        label: 'Curriculum',
        title: '¡Visualiza mi Curriculum Vitae!',
        url: '/curriculum-vitae.pdf'
      }
    },
    hero: {
      subtitle1: 'Hola,',
      subtitle2: 'me llamo',
      tagline: 'Construyo aplicaciones móviles para las personas.',
      description:
        'Mobile Software Engineer con más de 3 años desarrollando apps multiplataforma iOS/Android con Flutter. Trujillo, Perú 🇵🇪. Especializado en Clean Architecture y soluciones offline-first.'
    },
    experience: {
      title: 'Experiencia',
      entries: [
        {
          role: 'Mobile Software Engineer',
          company: 'Mission Produce Perú',
          location: 'Trujillo, Perú',
          period: 'Mayo 2024 – Actualidad',
          bullets: [
            'Desarrollé app Flutter para medición de productividad en cosecha de arándanos, procesando más de 500 operaciones diarias con arquitectura offline-first, lectura QR/barras y sincronización en segundo plano.',
            'Lideré sistema de evaluación de campo y laboratorio con cartillas dinámicas, formularios personalizables, gráficos y mapas con visualización offline mediante caché automático de tiles.',
            'Diseñé arquitectura modular con Clean Architecture, principios SOLID, GetIt e inyección de dependencias con estructura feature-first escalable a múltiples unidades de negocio.'
          ]
        },
        {
          role: 'Mobile Software Engineer',
          company: 'Grupo Mendieta',
          location: 'Lima, Perú',
          period: 'Marzo 2023 – Marzo 2024',
          bullets: [
            'Lideré migración completa de app financiera de Xamarin a Flutter, logrando rendimiento nativo con reducción del 30% en tiempos de carga mediante lazy loading y caching estratégico.',
            'Implementé autenticación segura con JWT/OAuth, manejo encriptado de tokens y notificaciones push/locales para alertas de transacciones y vencimientos.',
            'Establecí Clean Architecture con separación clara de capas (presentación, dominio, datos), DTOs y mappers, principios SOLID y gestión de estado con Cubit.'
          ]
        },
        {
          role: 'Mobile Developer',
          company: 'I.E. Nuestra Señora de Lourdes',
          location: 'Ascope, Perú',
          period: 'Julio 2022 – Diciembre 2022',
          bullets: [
            'Desarrollé app educativa con juegos interactivos (puzzles, memoria) para mejorar concentración en niños con TDAH, logrando +30% en engagement diario.',
            'Gestioné publicación exitosa en Play Store y App Store cumpliendo normativas de privacidad infantil (COPPA) y validación pedagógica con educadores.'
          ]
        }
      ]
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Me motiva construir software que resuelve problemas reales: apps que funcionan sin internet, que escalan con el negocio y que los usuarios disfrutan usar. Disfruto el ciclo completo, desde el diseño arquitectónico hasta el despliegue en producción.'
      ],
      achievement: {
        prefix: 'Uno de mis logros destacados es el desarrollo de una ',
        link: {
          text: 'aplicación móvil para la gestión de productividad en la cosecha agrícola',
          title: '¡Visualiza la App!'
        },
        suffix:
          ', mejorando la eficiencia y trazabilidad en el sector agroindustrial a través de herramientas digitales innovadoras.'
      }
    },
    skills: {
      title: 'Habilidades',
      groupNames: ['Móvil', 'Backend', 'DevOps & Herramientas']
    },
    projects: {
      title: 'Proyectos',
      descriptions: [
        'Aplicación móvil para el sector agroindustrial que optimiza la gestión de la cosecha de arándanos mediante el registro digital de envases y la recepción de guías con códigos QR.',
        'Plataforma de reservas que conecta anfitriones y viajeros, permitiendo alquilar alojamientos de forma segura y eficiente. Ofrece gestión de reservas y comunicación directa entre usuarios.',
        'Herramienta para crear un perfil único con múltiples enlaces, permitiendo compartir fácilmente contenido, redes sociales y recursos desde un solo lugar.',
        'Aplicación móvil diseñada para fortalecer la concentración y las habilidades cognitivas en niños con TDAH, a través de un entorno interactivo y visualmente atractivo.'
      ]
    },
    contact: {
      title: 'Contacto',
      description:
        'Actualmente me encuentro en búsqueda de nuevas oportunidades, cualquier oferta será bien recibida. Si simplemente deseas hacerme una pregunta o saludarme, no dudes en ponerte en contacto conmigo.',
      cta: {
        title: '¡Contáctame!',
        label: 'Contactar'
      }
    },
    footer: {
      madeBy: 'Hecho con ❤️ por Pierce Novoa'
    }
  },

  en: {
    header: {
      navLinks: [
        { section: 'proyectos', label: 'Projects' },
        { section: 'experiencia', label: 'Experience' },
        { section: 'habilidades', label: 'Skills' },
        { section: 'sobre-mi', label: 'About Me' },
        { section: 'contacto', label: 'Contact' }
      ],
      cta: {
        label: 'Resume',
        title: 'View my Resume!',
        url: '/resume.pdf'
      }
    },
    hero: {
      subtitle1: 'Hello,',
      subtitle2: 'my name is',
      tagline: 'I build mobile apps for people.',
      description:
        'Mobile Software Engineer with 3+ years building cross-platform iOS/Android apps with Flutter. Trujillo, Peru 🇵🇪. Specialized in Clean Architecture and offline-first solutions.'
    },
    experience: {
      title: 'Experience',
      entries: [
        {
          role: 'Mobile Software Engineer',
          company: 'Mission Produce Perú',
          location: 'Trujillo, Peru',
          period: 'May 2024 – Present',
          bullets: [
            'Built a Flutter app for blueberry harvest productivity, processing 500+ daily field operations with offline-first architecture, QR/barcode scanning, and automatic background sync.',
            'Led a field and lab evaluation system with dynamic forms, data charts, and maps with offline tile caching.',
            'Designed modular Clean Architecture with SOLID principles, GetIt, and a feature-first structure scalable across multiple business units.'
          ]
        },
        {
          role: 'Mobile Software Engineer',
          company: 'Grupo Mendieta',
          location: 'Lima, Peru',
          period: 'March 2023 – March 2024',
          bullets: [
            'Led full migration of a financial app from Xamarin to Flutter, achieving near-native performance with a 30% reduction in load times via lazy loading and strategic caching.',
            'Implemented secure JWT/OAuth authentication, encrypted token handling, and push/local notifications for transaction and payment alerts.',
            'Established Clean Architecture with clear layer separation (presentation, domain, data), DTOs and mappers, SOLID principles, and Cubit state management.'
          ]
        },
        {
          role: 'Mobile Developer',
          company: 'I.E. Nuestra Señora de Lourdes',
          location: 'Ascope, Peru',
          period: 'July 2022 – December 2022',
          bullets: [
            'Developed an educational app with interactive games (puzzles, memory) to improve focus in children with ADHD, achieving a 30% increase in daily engagement.',
            'Managed successful Play Store and App Store releases, ensuring COPPA compliance and pedagogical validation with educators.'
          ]
        }
      ]
    },
    about: {
      title: 'About me',
      paragraphs: [
        "I'm driven by building software that solves real problems: apps that work without internet, scale with the business, and that users actually enjoy. I like the full cycle — from architectural design to production deployment."
      ],
      achievement: {
        prefix: 'One of my key achievements is developing a ',
        link: {
          text: 'mobile app for agricultural harvest productivity management',
          title: 'View the App!'
        },
        suffix:
          ', improving efficiency and traceability in the agribusiness sector through innovative digital tools.'
      }
    },
    skills: {
      title: 'Skills',
      groupNames: ['Mobile', 'Backend', 'DevOps & Tools']
    },
    projects: {
      title: 'Projects',
      descriptions: [
        'Mobile app for the agribusiness sector optimizing blueberry harvest management through digital container registration and QR/barcode-based guide reception with automatic background sync.',
        'Booking platform connecting hosts and travelers, enabling secure and efficient accommodation rental. Features reservation management and direct communication between users.',
        'Tool for creating a unique profile with multiple links, making it easy to share content, social media, and resources from a single place.',
        'Mobile app designed to strengthen concentration and cognitive skills in children with ADHD, through an interactive and visually engaging environment.'
      ]
    },
    contact: {
      title: 'Contact',
      description:
        "I'm currently looking for new opportunities — any offer is welcome. If you simply want to ask a question or say hello, don't hesitate to reach out.",
      cta: {
        title: 'Contact Me!',
        label: 'Contact Me'
      }
    },
    footer: {
      madeBy: 'Made with ❤️ by Pierce Novoa'
    }
  }
}
