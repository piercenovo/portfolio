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
    url: '/resume.pdf'
  }
}

// Hero Section
export const heroSection: HeroSectionType = {
  subtitle1: 'Hola,',
  subtitle2: 'me llamo',
  title: 'pierce novoa.',
  tagline: 'Construyo aplicaciones para las personas.',
  description:
    '+3 años de experiencia. Ingeniero de Sistemas y Desarrollador de Software de Trujillo, Perú 🇵🇪. Especializado en el desarrollo de aplicaciones excepcionales.'
}

// About Section
export const aboutSection: AboutSectionType = {
  title: 'Sobre mí',
  paragraphs: [
    'Mi nombre es Pierce, tengo 23 años y soy de Trujillo, Perú 🇵🇪. Terminé mis estudios como Ingeniero de Sistemas. Actualmente especializado en el Desarrollo de Software, donde disfruto creando experiencias excepcionales para los usuarios.',
    'Como freelancer, con una sólida experiencia en el diseño de soluciones informáticas, contribuyo al crecimiento de las pequeñas y medianas empresas. Mi objetivo es proporcionar soluciones adaptadas a sus necesidades específicas.'
  ],
  img: '/images/about.webp'
}

// Skills Section
export const skillsSection: SkillsSectionType = {
  title: 'Habilidades',
  skills: [
    {
      name: 'Frontend',
      technologies: [
        {
          name: 'CSS',
          svg: svgs.css,
          hover: {
            fill: 'group-hover:fill-css',
            text: 'group-hover:text-css'
          }
        },
        {
          name: 'Styled Components',
          svg: svgs.styledcomponents,
          hover: {
            fill: 'group-hover:fill-styledcomponents',
            text: 'group-hover:text-styledcomponents'
          }
        },
        {
          name: 'Tailwind',
          svg: svgs.tailwindCss,
          hover: {
            fill: 'group-hover:fill-tailwindcss',
            text: 'group-hover:text-tailwindcss'
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
          name: 'Dart',
          svg: svgs.dart,
          hover: {
            fill: 'group-hover:fill-dart',
            text: 'group-hover:text-dart'
          }
        },
        {
          name: 'Flutter',
          svg: svgs.flutter,
          hover: {
            fill: 'group-hover:fill-flutter',
            text: 'group-hover:text-flutter'
          }
        },
        {
          name: 'Astro',
          svg: svgs.astro,
          hover: {
            fill: 'group-hover:fill-astro',
            text: 'group-hover:text-astro'
          }
        },
        {
          name: 'React.js',
          svg: svgs.reactJs,
          hover: {
            fill: 'group-hover:fill-reactjs',
            text: 'group-hover:text-reactjs'
          }
        },

        {
          name: 'Next.js',
          svg: svgs.nextJs,
          hover: {
            fill: 'group-hover:fill-nextjs',
            text: 'group-hover:text-nextjs'
          }
        }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        {
          name: 'Firebase',
          svg: svgs.firebase,
          hover: {
            fill: 'group-hover:fill-firebase',
            text: 'group-hover:text-firebase'
          }
        },
        {
          name: 'Express',
          svg: svgs.express,
          hover: {
            fill: 'group-hover:fill-express',
            text: 'group-hover:text-express'
          }
        },
        {
          name: 'NestJS',
          svg: svgs.nestjs,
          hover: {
            fill: 'group-hover:fill-nestjs',
            text: 'group-hover:text-nestjs'
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
          name: 'MySQL',
          svg: svgs.mysql,
          hover: {
            fill: 'group-hover:fill-mysql',
            text: 'group-hover:text-mysql'
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
          name: 'GraphQL',
          svg: svgs.graphql,
          hover: {
            fill: 'group-hover:fill-graphql',
            text: 'group-hover:text-graphql'
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
          name: 'JWT',
          svg: svgs.jsonWebTokens,
          hover: {
            fill: 'group-hover:fill-jsonwebtokens',
            text: 'group-hover:text-jsonwebtokens'
          }
        }
      ]
    },
    {
      name: 'DevOps & Otros',
      technologies: [
        {
          name: 'Figma',
          svg: svgs.figma,
          hover: {
            fill: 'group-hover:fill-figma',
            text: 'group-hover:text-figma'
          }
        },
        {
          name: 'Git',
          svg: svgs.git,
          hover: {
            fill: 'group-hover:fill-git',
            text: 'group-hover:text-git'
          }
        },
        {
          name: 'GitHub',
          svg: svgs.github,
          hover: {
            fill: 'group-hover:fill-githubicon',
            text: 'group-hover:text-githubicon'
          }
        },
        {
          name: 'Vercel',
          svg: svgs.vercel,
          hover: {
            fill: 'group-hover:fill-vercel',
            text: 'group-hover:text-vercel'
          }
        },
        {
          name: 'VS Code',
          svg: svgs.vscode,
          hover: {
            fill: 'group-hover:fill-vscode',
            text: 'group-hover:text-vscode'
          }
        },
        {
          name: 'PNPM',
          svg: svgs.pnpm,
          hover: {
            fill: 'group-hover:fill-pnpm',
            text: 'group-hover:text-pnpm'
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
          name: 'Cloudinary',
          svg: svgs.cloudinary,
          hover: {
            fill: 'group-hover:fill-cloudinary',
            text: 'group-hover:text-cloudinary'
          }
        },
        {
          name: 'Digital Ocean',
          svg: svgs.digitalOcean,
          hover: {
            fill: 'group-hover:fill-digitalocean',
            text: 'group-hover:text-digitalocean'
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
      name: 'Airbnb Clone',
      description:
        'Es una plataforma de alojamiento en línea que conecta a los viajeros con anfitriones locales en todo el mundo, se ha creado para proporcionar una experiencia de usuario similar.',
      url: 'https://rent-app-mocha.vercel.app/',
      repo: 'https://github.com/piercenovo/post-it-app',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1686756632/Portfolio/airbnb_karwum.png',
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
        'Es el clon de Linktree, una herramienta en línea que te permite crear una página de enlaces personalizada para centralizar todos tus perfiles y sitios web en un solo lugar.',
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
        'Es una aplicación móvil que está enfocada al entrenamiento de la concentración y las habilidades cognitivas de niños con TDAH, cuenta con un diseño llamativo e interactivo.',
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
