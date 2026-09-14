import type { Tech } from '@/types/content'
import {
  siCloudinary,
  siDart,
  siDocker,
  siDrizzle,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siGithubactions,
  siKotlin,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siRailway,
  siSqlite,
  siSwift,
  siTailwindcss,
  siTypescript
} from 'simple-icons'

// `color` is the hover color on the dark background (not the official hex:
// several brands are black and would be invisible)
export const techs = {
  flutter: { name: 'Flutter', icon: siFlutter, color: '#5FCAF8' },
  dart: { name: 'Dart', icon: siDart, color: '#03589C' },
  kotlin: { name: 'Kotlin', icon: siKotlin, color: '#7F52FF' },
  swift: { name: 'Swift', icon: siSwift, color: '#F05138' },
  firebase: { name: 'Firebase', icon: siFirebase, color: '#ED9F1A' },
  sqlite: { name: 'SQLite', icon: siSqlite, color: '#03589C' },
  nestjs: { name: 'NestJS', icon: siNestjs, color: '#D32950' },
  postgresql: { name: 'PostgreSQL', icon: siPostgresql, color: '#3178c6' },
  mysql: { name: 'MySQL', icon: siMysql, color: '#E48E00' },
  mongodb: { name: 'MongoDB', icon: siMongodb, color: '#47a248' },
  drizzle: { name: 'Drizzle', icon: siDrizzle, color: '#C5F74F' },
  prisma: { name: 'Prisma', icon: siPrisma, color: '#336791' },
  docker: { name: 'Docker', icon: siDocker, color: '#2496ED' },
  railway: { name: 'Railway', icon: siRailway, color: '#553F83' },
  githubactions: { name: 'GitHub Actions', icon: siGithubactions, color: '#2088FF' },
  figma: { name: 'Figma', icon: siFigma, color: '#A259FF' },
  postman: { name: 'Postman', icon: siPostman, color: '#FF6C37' },
  cloudinary: { name: 'Cloudinary', icon: siCloudinary, color: '#384ABB' },
  nextjs: { name: 'Next.js', icon: siNextdotjs, color: '#FFFFFF' },
  tailwindcss: { name: 'Tailwind', icon: siTailwindcss, color: '#06b6d4' },
  nodejs: { name: 'Node.js', icon: siNodedotjs, color: '#339933' },
  express: { name: 'Express', icon: siExpress, color: '#FFFFFF' },
  typescript: { name: 'TypeScript', icon: siTypescript, color: '#3178c6' }
} satisfies Record<string, Tech>

export type TechId = keyof typeof techs
