import { AboutSectionType, HeaderSectionType, HeroSectionType, ProjectsSectionType, SkillsSectionType, SocialsSectionType } from '@/types/data'
import * as svgs from '@/data/svg'

import { twitter, instagram, gitHubOutline, linkedIn } from '@/data/svg'

// Header Section
export const headerSection: HeaderSectionType = {
  navLinks: [
    {
      section: 'about',
      children: 'Sobre Mi'
    },
    {
      section: 'skills',
      children: 'Habilidades'
    },
    {
      section: 'projects',
      children: 'Proyectos'
    },
    {
      section: 'contact',
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
  tagline: 'Construyo cosas para la gente.',
  description:
    'Soy un desarrollador de software que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy enfocado en la creación de aplicaciones web y móviles para una vida más fácil. 🚀'
}

// About Section
export const aboutSection: AboutSectionType = {
  title: 'Sobre mí',
  paragraphs: [
    '¡Hola! Mi nombre es Pierce Novoa y tengo +1 año de experiencia como desarrollador de software. Me ha fascinado la tecnología desde pequeño y eso me llevó a estudiar Ingeniería de Sistemas.',
    ' Decidí emprender esta carrera con el objetivo de crear soluciones prácticas a través del uso de código, siendo de utilidad para las personas y sus emprendimientos.'
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
          name: 'TailwindCSS',
          svg: svgs.tailwindCss,
          hover: {
            fill: 'group-hover:fill-tailwindcss',
            text: 'group-hover:text-tailwindcss'
          }
        },
        {
          name: 'JavaScript',
          svg: svgs.javaScript,
          hover: {
            fill: 'group-hover:fill-javascript',
            text: 'group-hover:text-javascript'
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
          name: 'React.js',
          svg: svgs.reactJs,
          hover: {
            fill: 'group-hover:fill-reactjs',
            text: 'group-hover:text-reactjs'
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
          name: 'Node.js',
          svg: svgs.nodeJs,
          hover: {
            fill: 'group-hover:fill-nodejs',
            text: 'group-hover:text-nodejs'
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
          name: 'GraphQL',
          svg: svgs.graphql,
          hover: {
            fill: 'group-hover:fill-graphql',
            text: 'group-hover:text-graphql'
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
          name: 'JSON Web Tokens',
          svg: svgs.JsonWebTokens,
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
          svg: svgs.gitHubFilled,
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
        }
      ]
    }
  ]
}

export const projectsSection: ProjectsSectionType = {
  title: 'Proyectos',
  projects: [
    {
      name: 'PostIt',
      description: 'Es una plataforma donde puedes conectarte fácilmente a través de tu cuenta de Google y subir tus publicaciones y comentarios en cuestión de segundos.',
      url: 'https://postit.piercenovo.dev/',
      repo: 'https://github.com/piercenovo/post-it-app',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1679448830/Portfolio/postit-app_uowdkx.png',
      year: 2023,
      tags: ['Next.js', 'Prisma', 'PostgreSQL']
    },
    {
      name: 'Linktree Clone',
      description: 'Es el clon de Linktree, una herramienta en línea que te permite crear una página de enlaces personalizada para centralizar todos tus perfiles y sitios web en un solo lugar.',
      url: 'https://linktr.piercenovo.dev/',
      repo: 'https://github.com/piercenovo/linktree-clone',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1679448718/Portfolio/linktree-clone_dvlxgw.png',
      year: 2023,
      tags: ['Next.js', 'Tailwind', 'TypeScript']
    },
    {
      name: 'Brainconcent',
      description: 'Es una aplicación móvil que está enfocada al entrenamiento de la concentración y las habilidades cognitivas de niños con TDAH, cuenta con un diseño llamativo e interactivo.',
      url: 'https://apps.apple.com/pe/app/brainconcent/id1658845005?l=es',
      repo: 'https://github.com/piercenovo/brainconcent-flutter',
      img: 'https://res.cloudinary.com/cloud-digital-asset/image/upload/v1679448412/Portfolio/brainconcent_uw6ud8.png',
      year: 2022,
      tags: ['Flutter', 'Node.js', 'MongoDB']
    }
  ]
}

// Contact Section
export const contactSection = {
  title: 'Sobre mí',
  description: 'Actualmente me encuentro en búsqueda de nuevas oportunidades, cualquier oferta será bien recibida. Si simplemente deseas hacerme una pregunta o saludarme, no dudes en ponerte en contacto conmigo.',
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
