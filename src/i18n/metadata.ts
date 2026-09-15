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
    // `?v=` busts browsers' sticky favicon cache; bump it when the icon changes
    icons: {
      icon: [
        { url: '/favicon.ico?v=2', sizes: '16x16 32x32 48x48' },
        { url: '/pd-icon.svg?v=2', type: 'image/svg+xml' }
      ],
      apple: '/apple-touch-icon.png?v=2'
    },
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
      // Same screenshot as the README; declared at its real size (16:9), so
      // networks crop it slightly to 1.91:1
      images: [{ url: '/images/portfolio-screen.png', width: 1920, height: 1080, alt: meta.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/portfolio-screen.png']
    }
  }
}
