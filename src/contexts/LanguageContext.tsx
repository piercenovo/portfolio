'use client'

import type { Locale } from '@/i18n/config'
import { type Translation, translations } from '@/i18n/translations'
import { createContext, useContext } from 'react'

interface LanguageContextType {
  lang: Locale
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
