import { calibre } from '@/app/font'
import '@/app/globals.css'
import type { Locale } from '@/i18n/config'
import type { ReactNode } from 'react'

type RootDocumentProps = {
  lang: Locale
  children: ReactNode
}

export function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    <html lang={lang}>
      <body className={calibre.className}>{children}</body>
    </html>
  )
}
