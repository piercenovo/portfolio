'use client'

import { sfmono } from '@/app/font'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const isEs = lang === 'es'

  return (
    <button
      onClick={() => setLang(isEs ? 'en' : 'es')}
      aria-label={isEs ? 'Switch to English' : 'Cambiar a Español'}
      className={`${sfmono.className} flex items-center gap-1.5 text-primary-light hover:text-secondary transition-colors duration-200`}
    >
      <span className='text-base leading-none'>{isEs ? '🇪🇸' : '🇺🇸'}</span>
      <span className='text-[11px] tracking-wide'>{lang.toUpperCase()}</span>
    </button>
  )
}
