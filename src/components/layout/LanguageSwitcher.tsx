'use client'

import { localePath, locales, type Locale } from '@/i18n/config'
import { goToLocale } from '@/i18n/preference'
import Link from 'next/link'

type LanguageSwitcherProps = {
  currentLang: Locale
  label: string
}

export function LanguageSwitcher({ currentLang, label }: LanguageSwitcherProps) {
  return (
    <div className='flex items-center rounded-[3px] border border-line font-mono text-[0.6875rem] tracking-[0.08em] uppercase'>
      {locales.map((code) => code === currentLang
        ? (
          <span key={code} aria-current='true' className='rounded-[2px] bg-raised px-2.5 py-1.5 text-ink'>
            {code}
          </span>
          )
        : (
          <Link
            key={code}
            href={localePath(code)}
            hrefLang={code}
            aria-label={label}
            title={label}
            onClick={(event) => {
              event.preventDefault()
              goToLocale(code)
            }}
            className='px-2.5 py-1.5 text-ink-muted transition-colors duration-200 hover:text-live'
          >
            {code}
          </Link>
          ))}
    </div>
  )
}
