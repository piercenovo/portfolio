import type { Dictionary } from '@/i18n/dictionaries/types'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import type { SectionProps } from '@/types/section'
import type { ComponentType } from 'react'

type SectionConfig = {
  id: keyof Dictionary['nav']
  Component: ComponentType<SectionProps>
}

// Order here = order on the page and in the navigation
export const sections: SectionConfig[] = [
  { id: 'projects', Component: Projects },
  { id: 'experience', Component: Experience },
  { id: 'skills', Component: Skills },
  { id: 'about', Component: About },
  { id: 'contact', Component: Contact }
]
