'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { type Lang, type Translation, translations } from '@/i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    const detected = navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
    const initial = saved ?? detected
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    localStorage.setItem('lang', next)
    setLangState(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
