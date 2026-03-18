'use client'

import { sfmono } from '@/app/font'
import { useLanguage } from '@/contexts/LanguageContext'
import { Languages } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen(!open)}
        aria-label='Change language'
        aria-expanded={open}
        className='flex items-center gap-1.5 text-primary-light hover:text-secondary transition-colors duration-200'
      >
        <Languages size={17} strokeWidth={1.5} />
        <span className={`${sfmono.className} text-[11px] tracking-wide`}>
          {lang.toUpperCase()}
        </span>
      </button>

      {open && (
        <div className='absolute right-0 top-full mt-2 min-w-[110px] bg-primary-darker border border-primary/20 rounded-md overflow-hidden shadow-lg z-50'>
          {(['es', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false) }}
              className={`${sfmono.className} flex items-center gap-2 w-full px-3 py-2 text-xs text-left transition-colors duration-150 hover:bg-primary-dark ${
                lang === l ? 'text-secondary' : 'text-primary-light'
              }`}
            >
              <span>{l === 'es' ? '🇪🇸' : '🇺🇸'}</span>
              <span>{l === 'es' ? 'Español' : 'English'}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
