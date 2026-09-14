import {
  SkillsSectionType,
  SocialsSectionType
} from '@/types/data'
import * as svgs from '@/data/svg'

import { gitHubOutline, linkedIn } from '@/data/svg'
import aboutPhoto from '@/assets/about.webp'

// About Section
export const aboutSection = {
  img: aboutPhoto
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
          },
          active: {
            fill: 'group-active:fill-flutter',
            text: 'group-active:text-flutter'
          }
        },
        {
          name: 'Dart',
          svg: svgs.dart,
          hover: {
            fill: 'group-hover:fill-dart',
            text: 'group-hover:text-dart'
          },
          active: {
            fill: 'group-active:fill-dart',
            text: 'group-active:text-dart'
          }
        },
        {
          name: 'Kotlin',
          svg: svgs.kotlin,
          hover: {
            fill: 'group-hover:fill-kotlin',
            text: 'group-hover:text-kotlin'
          },
          active: {
            fill: 'group-active:fill-kotlin',
            text: 'group-active:text-kotlin'
          }
        },
        {
          name: 'Swift',
          svg: svgs.swift,
          hover: {
            fill: 'group-hover:fill-swift',
            text: 'group-hover:text-swift'
          },
          active: {
            fill: 'group-active:fill-swift',
            text: 'group-active:text-swift'
          }
        },
        {
          name: 'Firebase',
          svg: svgs.firebase,
          hover: {
            fill: 'group-hover:fill-firebase',
            text: 'group-hover:text-firebase'
          },
          active: {
            fill: 'group-active:fill-firebase',
            text: 'group-active:text-firebase'
          }
        },
        {
          name: 'SQLite',
          svg: svgs.sqlite,
          hover: {
            fill: 'group-hover:fill-sqlite',
            text: 'group-hover:text-sqlite'
          },
          active: {
            fill: 'group-active:fill-sqlite',
            text: 'group-active:text-sqlite'
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
          },
          active: {
            fill: 'group-active:fill-nestjs',
            text: 'group-active:text-nestjs'
          }
        },
        {
          name: 'PostgreSQL',
          svg: svgs.postgreSql,
          hover: {
            fill: 'group-hover:fill-postgresql',
            text: 'group-hover:text-postgresql'
          },
          active: {
            fill: 'group-active:fill-postgresql',
            text: 'group-active:text-postgresql'
          }
        },
        {
          name: 'MySQL',
          svg: svgs.mysql,
          hover: {
            fill: 'group-hover:fill-mysql',
            text: 'group-hover:text-mysql'
          },
          active: {
            fill: 'group-active:fill-mysql',
            text: 'group-active:text-mysql'
          }
        },
        {
          name: 'MongoDB',
          svg: svgs.mongoDb,
          hover: {
            fill: 'group-hover:fill-mongodb',
            text: 'group-hover:text-mongodb'
          },
          active: {
            fill: 'group-active:fill-mongodb',
            text: 'group-active:text-mongodb'
          }
        },
        {
          name: 'Drizzle',
          svg: svgs.drizzle,
          hover: {
            fill: 'group-hover:fill-drizzle',
            text: 'group-hover:text-drizzle'
          },
          active: {
            fill: 'group-active:fill-drizzle',
            text: 'group-active:text-drizzle'
          }
        },
        {
          name: 'Prisma',
          svg: svgs.prisma,
          hover: {
            fill: 'group-hover:fill-prisma',
            text: 'group-hover:text-prisma'
          },
          active: {
            fill: 'group-active:fill-prisma',
            text: 'group-active:text-prisma'
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
          },
          active: {
            fill: 'group-active:fill-docker',
            text: 'group-active:text-docker'
          }
        },
        {
          name: 'Railway',
          svg: svgs.railway,
          hover: {
            fill: 'group-hover:fill-railway',
            text: 'group-hover:text-railway'
          },
          active: {
            fill: 'group-active:fill-railway',
            text: 'group-active:text-railway'
          }
        },
        {
          name: 'GitHub Actions',
          svg: svgs.githubActions,
          hover: {
            fill: 'group-hover:fill-githubactions',
            text: 'group-hover:text-githubactions'
          },
          active: {
            fill: 'group-active:fill-githubactions',
            text: 'group-active:text-githubactions'
          }
        },
        {
          name: 'Figma',
          svg: svgs.figma,
          hover: {
            fill: 'group-hover:fill-figma',
            text: 'group-hover:text-figma'
          },
          active: {
            fill: 'group-active:fill-figma',
            text: 'group-active:text-figma'
          }
        },
        {
          name: 'Postman',
          svg: svgs.postman,
          hover: {
            fill: 'group-hover:fill-postman',
            text: 'group-hover:text-postman'
          },
          active: {
            fill: 'group-active:fill-postman',
            text: 'group-active:text-postman'
          }
        },
        {
          name: 'Cloudinary',
          svg: svgs.cloudinary,
          hover: {
            fill: 'group-hover:fill-cloudinary',
            text: 'group-hover:text-cloudinary'
          },
          active: {
            fill: 'group-active:fill-cloudinary',
            text: 'group-active:text-cloudinary'
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
