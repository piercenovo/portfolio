import { calibre, sfmono } from '@/app/font'
import '@/app/globals.css'
import type { Locale } from '@/i18n/config'
import type { ReactNode } from 'react'
import { themeInitScript } from './theme'
import { ThemeSync } from './ThemeSync'

type RootDocumentProps = {
  lang: Locale
  children: ReactNode
}

export function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    // The head script may set data-theme before hydration, so <html> ignores
    // that attribute mismatch
    <html lang={lang} className={`${calibre.variable} ${sfmono.variable}`} suppressHydrationWarning>
      {/* This is the App Router root document, which owns <head>; the rule targets
          the Pages Router and fires only because the file lives outside app/ */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to
          <body> before hydration; this only ignores attribute mismatches on this tag */}
      <body suppressHydrationWarning>
        <ThemeSync />
        {children}
      </body>
    </html>
  )
}
