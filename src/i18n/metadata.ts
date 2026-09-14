import type { Metadata } from 'next'
import { localePath, type Locale } from './config'
import { getDictionary } from './dictionaries/get-dictionary'

const SITE_URL = 'https://piercenovo.dev'
const OPEN_GRAPH_LOCALE: Record<Locale, string> = { es: 'es_PE', en: 'en_US' }

export function buildMetadata(lang: Locale): Metadata {
  const { meta } = getDictionary(lang)
  const url = localePath(lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: { es: localePath('es'), en: localePath('en'), 'x-default': localePath('es') }
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: 'Pierce Novoa',
      locale: OPEN_GRAPH_LOCALE[lang],
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: meta.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og.png']
    }
  }
}
