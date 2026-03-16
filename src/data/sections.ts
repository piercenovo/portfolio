import {
  AboutSectionType,
  HeaderSectionType,
  HeroSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialsSectionType
} from '@/types/data'
import * as svgs from '@/data/svg'

import { twitter, instagram, gitHubOutline, linkedIn } from '@/data/svg'

// Header Section
export const headerSection: HeaderSectionType = {
  navLinks: [
    {
      section: 'proyectos',
      children: 'Proyectos'
    },
    {
      section: 'habilidades',
      children: 'Habilidades'
    },
    {
      section: 'sobre-mi',
      children: 'Sobre Mí'
    },
    {
      section: 'contacto',
      children: 'Contacto'
    }
  ],
  cta: {
    name: 'Curriculum',
    title: '¡Visualiza mi Curriculum Vitae!',
    url: '/curriculum.pdf'
  }
}

// Hero Section
export const heroSection: HeroSectionType = {
  subtitle1: 'Hola,',
  subtitle2: 'me llamo',
  title: 'pierce novoa.',
  tagline: 'Construyo aplicaciones móviles para las personas.',
  description:
    'Mobile Software Engineer con más de 3 años desarrollando apps multiplataforma iOS/Android con Flutter. Trujillo, Perú 🇵🇪. Especializado en Clean Architecture  y soluciones offline-first.'
}

// About Section
export const aboutSection: AboutSectionType = {
  title: 'Sobre mí',
  paragraphs: [
    'Soy Pierce, Mobile Software Engineer especializado en Flutter con más de 3 años construyendo apps multiplataforma para iOS y Android. Me enfoco en arquitecturas offline-first, Clean Architecture y patrones de estado como BLoC, Cubit y Riverpod.',
    'He trabajado en los sectores agrícola y financiero entregando mejoras de rendimiento superiores al 30%. Disfruto el ciclo completo: desde el diseño arquitectónico hasta el despliegue en producción.'
  ],
  img: '/images/about.webp'
}

// Skills Section
export const skillsSection: SkillsSectionType = {
  title: 'Habilidades',
  skills: [
    {
      name: 'Móvil',
      technologies: [
        {
          name: 'Flutter',
          svg: svgs.flutter,
          hover: {
            fill: 'group-hover:fill-flutter',
            text: 'group-hover:text-flutter'
          }
        },
        {
          name: 'Dart',
          svg: svgs.dart,
          hover: {
            fill: 'group-hover:fill-dart',
            text: 'group-hover:text-dart'
          }
        },
        {
          name: 'Firebase',
          svg: svgs.firebase,
          hover: {
            fill: 'group-hover:fill-firebase',
            text: 'group-hover:text-firebase'
          }
        },
        {
          name: 'TypeScript',
          svg: svgs.typeScript,
          hover: {
            fill: 'group-hover:fill-typescript',
            text: 'group-hover:text-typescript'
          }
        },
        {
          name: 'JWT',
          svg: svgs.jsonWebTokens,
          hover: {
            fill: 'group-hover:fill-jsonwebtokens',
            text: 'group-hover:text-jsonwebtokens'
          }
        },
        {
          name: 'GraphQL',
          svg: svgs.graphql,
          hover: {
            fill: 'group-hover:fill-graphql',
            text: 'group-hover:text-graphql'
          }
        }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        {
          name: 'NestJS',
          svg: svgs.nestjs,
          hover: {
            fill: 'group-hover:fill-nestjs',
            text: 'group-hover:text-nestjs'
          }
        },
        {
          name: 'Node.js',
          svg: svgs.nodeJs,
          hover: {
            fill: 'group-hover:fill-nodejs',
            text: 'group-hover:text-nodejs'
          }
        },
        {
          name: 'Prisma',
          svg: svgs.prisma,
          hover: {
            fill: 'group-hover:fill-prisma',
            text: 'group-hover:text-prisma'
          }
        },
        {
          name: 'PostgreSQL',
          svg: svgs.postgreSql,
          hover: {
            fill: 'group-hover:fill-postgresql',
            text: 'group-hover:text-postgresql'
          }
        },
        {
          name: 'MySQL',
          svg: svgs.mysql,
          hover: {
            fill: 'group-hover:fill-mysql',
            text: 'group-hover:text-mysql'
          }
        },
        {
          name: 'MongoDB',
          svg: svgs.mongoDb,
          hover: {
            fill: 'group-hover:fill-mongodb',
            text: 'group-hover:text-mongodb'
          }
        }
      ]
    },
    {
      name: 'DevOps & Herramientas',
      technologies: [
        {
          name: 'Git',
          svg: svgs.git,
          hover: {
            fill: 'group-hover:fill-git',
            text: 'group-hover:text-git'
          }
        },
        {
          name: 'Docker',
          svg: svgs.docker,
          hover: {
            fill: 'group-hover:fill-docker',
            text: 'group-hover:text-docker'
          }
        },
        {
          name: 'Figma',
          svg: svgs.figma,
          hover: {
            fill: 'group-hover:fill-figma',
            text: 'group-hover:text-figma'
          }
        },
        {
          name: 'VS Code',
          svg: svgs.vscode,
          hover: {
            fill: 'group-hover:fill-vscode',
            text: 'group-hover:text-vscode'
          }
        }
      ]
    }
  ]
}

export const projectsSection: ProjectsSectionType = {
  title: 'Proyectos',
  projects: [
    {
      name: 'Productividad campo',
      description:
        'Aplicación móvil para el sector agroindustrial que optimiza la gestión de la cosecha de arándanos mediante el registro digital de envases y la recepción de guías con códigos QR.',
      url: 'https://play.google.com/store/apps/details?id=com.missionproduce.productividadcampo&hl=es',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1741485433/Portfolio/productividad-campo_ave8c8.png',
      year: 2025,
      tags: [
        {
          name: 'Flutter',
          svg: svgs.flutter,
          hover: {
            fill: 'group-hover:fill-flutter'
          }
        },
        {
          name: 'Node.js',
          svg: svgs.nodeJs,
          hover: {
            fill: 'group-hover:fill-nodejs'
          }
        },
        {
          name: 'NestJS',
          svg: svgs.nestjs,
          hover: {
            fill: 'group-hover:fill-nestjs'
          }
        },
        {
          name: 'MySQL',
          svg: svgs.mysql,
          hover: {
            fill: 'group-hover:fill-mysql'
          }
        }
      ]
    },
    {
      name: 'Airbnb Clone',
      description:
        'Plataforma de reservas que conecta anfitriones y viajeros, permitiendo alquilar alojamientos de forma segura y eficiente. Ofrece gestión de reservas y comunicación directa entre usuarios.',
      url: 'https://rent-app-mocha.vercel.app/',
      repo: 'https://github.com/piercenovo/post-it-app',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1686756632/Portfolio/airbnb_karwum.png',
      year: 2024,
      tags: [
        {
          name: 'Next.js',
          svg: svgs.nextJs,
          hover: {
            fill: 'group-hover:fill-nextjs'
          }
        },
        {
          name: 'Tailwind',
          svg: svgs.tailwindCss,
          hover: {
            fill: 'group-hover:fill-tailwindcss'
          }
        },
        {
          name: 'Prisma',
          svg: svgs.prisma,
          hover: {
            fill: 'group-hover:fill-prisma'
          }
        },
        {
          name: 'PostgreSQL',
          svg: svgs.postgreSql,
          hover: {
            fill: 'group-hover:fill-postgresql'
          }
        }
      ]
    },
    {
      name: 'Linktree Clone',
      description:
        'Herramienta para crear un perfil único con múltiples enlaces, permitiendo compartir fácilmente contenido, redes sociales y recursos desde un solo lugar.',
      url: 'https://linktr.piercenovo.dev/',
      repo: 'https://github.com/piercenovo/linktree-clone',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1680244107/Portfolio/linktree-app_al0u8n.png',
      year: 2023,
      tags: [
        {
          name: 'Next.js',
          svg: svgs.nextJs,
          hover: {
            fill: 'group-hover:fill-nextjs'
          }
        },
        {
          name: 'Tailwind',
          svg: svgs.tailwindCss,
          hover: {
            fill: 'group-hover:fill-tailwindcss'
          }
        },
        {
          name: 'TypeScript',
          svg: svgs.typeScript,
          hover: {
            fill: 'group-hover:fill-typescript'
          }
        }
      ]
    },
    {
      name: 'Brainconcent',
      description:
        'Aplicación móvil diseñada para fortalecer la concentración y las habilidades cognitivas en niños con TDAH, a través de un entorno interactivo y visualmente atractivo.',
      repo: 'https://github.com/piercenovo/brainconcent-flutter',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1679448412/Portfolio/brainconcent_uw6ud8.png',
      year: 2022,
      tags: [
        {
          name: 'Flutter',
          svg: svgs.flutter,
          hover: {
            fill: 'group-hover:fill-flutter'
          }
        },
        {
          name: 'Node.js',
          svg: svgs.nodeJs,
          hover: {
            fill: 'group-hover:fill-nodejs'
          }
        },
        {
          name: 'Express',
          svg: svgs.express,
          hover: {
            fill: 'group-hover:fill-express'
          }
        },
        {
          name: 'MongoDB',
          svg: svgs.mongoDb,
          hover: {
            fill: 'group-hover:fill-mongodb'
          }
        }
      ]
    }
  ]
}

// Contact Section
export const contactSection = {
  title: 'Contacto',
  description:
    'Actualmente me encuentro en búsqueda de nuevas oportunidades, cualquier oferta será bien recibida. Si simplemente deseas hacerme una pregunta o saludarme, no dudes en ponerte en contacto conmigo.',
  contact: {
    title: '¡Contáctame!',
    name: 'Contactar',
    link: 'mailto:piercenovoah@gmail.com'
  }
}

// Socials Section
export const socials: SocialsSectionType[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/piercenovo',
    svg: gitHubOutline,
    hover: {
      fill: 'group-hover:fill-github'
    }
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/piercenovoa',
    svg: linkedIn,
    hover: {
      fill: 'group-hover:fill-linkedin'
    }
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/piercenovodev',
    svg: twitter,
    hover: {
      fill: 'group-hover:fill-twitter'
    }
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/piercenovo.dev',
    svg: instagram,
    hover: {
      fill: 'group-hover:fill-instagram'
    }
  }
]
