export const locales = ['es', 'en'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'es'
export type Localized<T = string> = Record<Locale, T>

export const localePath = (lang: Locale) => (lang === 'es' ? '/' : '/en/')
export const otherLocale = (lang: Locale): Locale => (lang === 'es' ? 'en' : 'es')
