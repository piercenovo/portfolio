'use client'

import { sfmono } from '@/app/font'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`${sfmono.className} flex items-center gap-1 text-xs`}>
      <button
        onClick={() => setLang('es')}
        aria-label='Cambiar a español'
        className={`transition-colors duration-200 ${
          lang === 'es'
            ? 'text-secondary'
            : 'text-primary-light hover:text-primary-lightest'
        }`}
      >
        ES
      </button>
      <span className='text-primary select-none'>|</span>
      <button
        onClick={() => setLang('en')}
        aria-label='Switch to English'
        className={`transition-colors duration-200 ${
          lang === 'en'
            ? 'text-secondary'
            : 'text-primary-light hover:text-primary-lightest'
        }`}
      >
        EN
      </button>
    </div>
  )
}
