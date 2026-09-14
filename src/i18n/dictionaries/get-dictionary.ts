import type { Locale } from '@/i18n/config'
import { en } from './en'
import { es } from './es'
import type { Dictionary } from './types'

const dictionaries: Record<Locale, Dictionary> = { es, en }

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang]
