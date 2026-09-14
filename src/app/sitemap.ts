import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://piercenovo.dev'
const languages = { es: `${SITE_URL}/`, en: `${SITE_URL}/en/` }

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: languages.es, alternates: { languages } },
    { url: languages.en, alternates: { languages } }
  ]
}
