import type { SkillGroup } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    label: { es: 'Móvil', en: 'Mobile' },
    techs: ['flutter', 'dart', 'kotlin', 'swift', 'firebase', 'sqlite']
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    techs: ['nestjs', 'postgresql', 'mysql', 'mongodb', 'drizzle', 'prisma']
  },
  {
    id: 'tools',
    label: { es: 'DevOps & Herramientas', en: 'DevOps & Tools' },
    techs: ['docker', 'railway', 'githubactions', 'figma', 'postman', 'cloudinary']
  }
]
