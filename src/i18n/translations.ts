export type Lang = 'es' | 'en'

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
  about: {
    title: string
    paragraphs: [string, string]
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
}

export const translations: Record<Lang, Translation> = {
  es: {
    header: {
      navLinks: [
        { section: 'proyectos', label: 'Proyectos' },
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
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy Pierce, Mobile Software Engineer especializado en Flutter con más de 3 años construyendo apps multiplataforma para iOS y Android. Me enfoco en arquitecturas offline-first, Clean Architecture y patrones de estado como BLoC, Cubit y Riverpod.',
        'He trabajado en los sectores agrícola y financiero entregando mejoras de rendimiento superiores al 30%. Disfruto el ciclo completo: desde el diseño arquitectónico hasta el despliegue en producción.'
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
    }
  },

  en: {
    header: {
      navLinks: [
        { section: 'proyectos', label: 'Projects' },
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
    about: {
      title: 'About me',
      paragraphs: [
        "I'm Pierce, a Mobile Software Engineer specialized in Flutter with 3+ years building cross-platform apps for iOS and Android. I focus on offline-first architectures, Clean Architecture, and state management patterns like BLoC, Cubit, and Riverpod.",
        "I've worked in the agricultural and financial sectors delivering over 30% performance improvements. I enjoy the full cycle: from architectural design to production deployment."
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
    }
  }
}
