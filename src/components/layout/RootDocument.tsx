import { calibre, sfmono } from '@/app/font'
import '@/app/globals.css'
import type { Locale } from '@/i18n/config'
import type { ReactNode } from 'react'

type RootDocumentProps = {
  lang: Locale
  children: ReactNode
}

export function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    <html lang={lang} className={`${calibre.variable} ${sfmono.variable}`}>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to
          <body> before hydration; this only ignores attribute mismatches on this tag */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
