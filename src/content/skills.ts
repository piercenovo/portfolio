import type { SkillGroup } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    techs: ['nextjs', 'react', 'typescript', 'tailwindcss', 'leaflet', 'flutter', 'dart', 'android', 'ios']
  },
  {
    id: 'backend',
    label: { es: 'Backend & Datos', en: 'Backend & Data' },
    techs: ['nestjs', 'nodejs', 'zod', 'jsonwebtokens', 'drizzle', 'postgresql', 'mysql', 'sqlite', 'firebase']
  },
  {
    id: 'tools',
    label: { es: 'DevOps & Herramientas', en: 'DevOps & Tools' },
    techs: ['docker', 'git', 'github', 'githubactions', 'turborepo', 'figma', 'claude', 'googleplay', 'appstore']
  }
]
