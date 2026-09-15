import type { Tech } from '@/types/content'
import {
  siAndroid,
  siAppstore,
  siClaude,
  siDart,
  siDocker,
  siDrizzle,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siGoogleplay,
  siIos,
  siJsonwebtokens,
  siLeaflet,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siSqlite,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siZod
} from 'simple-icons'

// `color` is the hover color on the dark background (not the official hex:
// several brands are black and would be invisible). `lightColor` replaces it
// on the light theme only where `color` would fall under 3:1 on white.
export const techs = {
  // Frontend (web & mobile)
  nextjs: { name: 'Next.js', icon: siNextdotjs, color: '#FFFFFF', lightColor: '#000000' },
  react: { name: 'React', icon: siReact, color: '#61DAFB', lightColor: '#087EA4' },
  typescript: { name: 'TypeScript', icon: siTypescript, color: '#3178c6' },
  tailwindcss: { name: 'Tailwind', icon: siTailwindcss, color: '#06b6d4', lightColor: '#0E7490' },
  leaflet: { name: 'Leaflet', icon: siLeaflet, color: '#199900' },
  flutter: { name: 'Flutter', icon: siFlutter, color: '#5FCAF8', lightColor: '#02569B' },
  dart: { name: 'Dart', icon: siDart, color: '#03589C' },
  android: { name: 'Android', icon: siAndroid, color: '#3DDC84', lightColor: '#1E8E4E' },
  ios: { name: 'iOS', icon: siIos, color: '#FFFFFF', lightColor: '#000000' },

  // Backend & data
  nestjs: { name: 'NestJS', icon: siNestjs, color: '#D32950' },
  nodejs: { name: 'Node.js', icon: siNodedotjs, color: '#339933' },
  express: { name: 'Express', icon: siExpress, color: '#FFFFFF', lightColor: '#000000' },
  zod: { name: 'Zod', icon: siZod, color: '#408AFF' },
  jsonwebtokens: { name: 'JWT', icon: siJsonwebtokens, color: '#FB015B' },
  drizzle: { name: 'Drizzle', icon: siDrizzle, color: '#C5F74F', lightColor: '#5C7A0E' },
  prisma: { name: 'Prisma', icon: siPrisma, color: '#336791' },
  postgresql: { name: 'PostgreSQL', icon: siPostgresql, color: '#3178c6' },
  mysql: { name: 'MySQL', icon: siMysql, color: '#E48E00' },
  mongodb: { name: 'MongoDB', icon: siMongodb, color: '#47a248' },
  sqlite: { name: 'SQLite', icon: siSqlite, color: '#03589C' },
  firebase: { name: 'Firebase', icon: siFirebase, color: '#ED9F1A' },

  // DevOps & tools
  docker: { name: 'Docker', icon: siDocker, color: '#2496ED' },
  git: { name: 'Git', icon: siGit, color: '#F05032' },
  github: { name: 'GitHub', icon: siGithub, color: '#FFFFFF', lightColor: '#181717' },
  githubactions: { name: 'GitHub Actions', icon: siGithubactions, color: '#2088FF' },
  turborepo: { name: 'Turborepo', icon: siTurborepo, color: '#FF1E56' },
  figma: { name: 'Figma', icon: siFigma, color: '#A259FF' },
  claude: { name: 'Claude Code', icon: siClaude, color: '#D97757' },
  googleplay: { name: 'Google Play', icon: siGoogleplay, color: '#34A853' },
  appstore: { name: 'App Store', icon: siAppstore, color: '#0D96F6' }
} satisfies Record<string, Tech>

export type TechId = keyof typeof techs
