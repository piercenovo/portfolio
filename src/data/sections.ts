import {
  ProjectsSectionType,
  SkillsSectionType,
  SocialsSectionType
} from '@/types/data'
import * as svgs from '@/data/svg'

import { gitHubOutline, linkedIn } from '@/data/svg'

// About Section
export const aboutSection = {
  img: '/images/about.webp'
}

// Skills Section
export const skillsSection: SkillsSectionType = {
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
          name: 'Kotlin',
          svg: svgs.kotlin,
          hover: {
            fill: 'group-hover:fill-kotlin',
            text: 'group-hover:text-kotlin'
          }
        },
        {
          name: 'Swift',
          svg: svgs.swift,
          hover: {
            fill: 'group-hover:fill-swift',
            text: 'group-hover:text-swift'
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
          name: 'SQLite',
          svg: svgs.sqlite,
          hover: {
            fill: 'group-hover:fill-sqlite',
            text: 'group-hover:text-sqlites'
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
        },
        {
          name: 'Drizzle',
          svg: svgs.drizzle,
          hover: {
            fill: 'group-hover:fill-drizzle',
            text: 'group-hover:text-drizzle'
          }
        },
        {
          name: 'Prisma',
          svg: svgs.prisma,
          hover: {
            fill: 'group-hover:fill-prisma',
            text: 'group-hover:text-prisma'
          }
        }
      ]
    },
    {
      name: 'DevOps & Herramientas',
      technologies: [
        {
          name: 'Docker',
          svg: svgs.docker,
          hover: {
            fill: 'group-hover:fill-docker',
            text: 'group-hover:text-docker'
          }
        },
        {
          name: 'Railway',
          svg: svgs.railway,
          hover: {
            fill: 'group-hover:fill-railway',
            text: 'group-hover:text-railway'
          }
        },
        {
          name: 'GitHub Actions',
          svg: svgs.githubActions,
          hover: {
            fill: 'group-hover:fill-githubactions',
            text: 'group-hover:text-githubactions'
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
          name: 'Postman',
          svg: svgs.postman,
          hover: {
            fill: 'group-hover:fill-postman',
            text: 'group-hover:text-postman'
          }
        },
        {
          name: 'Cloudinary',
          svg: svgs.cloudinary,
          hover: {
            fill: 'group-hover:fill-cloudinary',
            text: 'group-hover:text-cloudinary'
          }
        }
      ]
    }
  ]
}

export const projectsSection: ProjectsSectionType = {
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
      year: 2023,
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
  }
]
