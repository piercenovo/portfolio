import type { TechId } from '@/content/techs'
import type { Localized } from '@/i18n/config'
import type { StaticImageData } from 'next/image'

export type IconData = { path: string; viewBox?: string }

export type Tech = {
  name: string
  icon: IconData
  color: string
}

export type YearMonth = `${number}-${number}`

export type ProjectLinks = { live?: string; repo?: string; store?: string }

export type Project = {
  slug: string
  name: string
  kind: 'web' | 'mobile'
  featured?: boolean
  year: number
  cover: StaticImageData
  links: ProjectLinks
  techs: TechId[]
  summary: Localized
}

export type ExperienceEntry = {
  role: Localized
  company: string
  location: Localized
  start: YearMonth
  end?: YearMonth
  bullets: Localized<string[]>
}

export type SkillGroup = {
  id: string
  label: Localized
  techs: TechId[]
}

export type SocialLink = { name: string; href: string; icon: IconData }

export type Profile = {
  name: string
  email: string
  cv: Localized
  socials: SocialLink[]
}

export type Achievement = {
  prefix: string
  linkText: string
  linkTitle: string
  suffix: string
}

export type About = {
  photo: StaticImageData
  paragraphs: Localized<string[]>
  achievement: Localized<Achievement>
  achievementUrl: string
}
