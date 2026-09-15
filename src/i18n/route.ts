import { notFound } from 'next/navigation'
import { defaultLocale, locales, type Locale } from './config'

// Params of the single `[[...lang]]` root segment: `/` has no segments, `/en/` has ['en']
export type LocaleParams = Promise<{ lang?: string[] }>

export const localeStaticParams = () =>
  locales.map((lang) => ({ lang: lang === defaultLocale ? [] : [lang] }))

export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const segments = (await params).lang ?? []
  if (segments.length === 0) return defaultLocale

  const [candidate] = segments
  const isPrefixedLocale = segments.length === 1 && candidate !== defaultLocale &&
    (locales as readonly string[]).includes(candidate)
  if (!isPrefixedLocale) notFound()

  return candidate as Locale
}
