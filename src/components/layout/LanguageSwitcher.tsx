'use client'

import { localePath, locales, type Locale } from '@/i18n/config'
import { savePreferredLocale } from '@/i18n/preference'
import Link from 'next/link'

type LanguageSwitcherProps = {
  currentLang: Locale
  label: string
}

const itemClassName = 'relative px-2.5 py-1.5 after:absolute after:inset-x-2 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-live after:transition-transform after:duration-300 after:ease-(--ease-out-expo)'

// Both languages share one root layout, so this is a client-side navigation:
// no reload, and `scroll={false}` keeps the reader where they were. The active
// language uses the same cyan underline as the site's tabs.
export function LanguageSwitcher({ currentLang, label }: LanguageSwitcherProps) {
  return (
    <div className='flex items-center rounded-[3px] border border-line font-mono text-[0.6875rem] tracking-[0.08em] uppercase'>
      {locales.map((code) => code === currentLang
        ? (
          <span key={code} aria-current='true' className={`${itemClassName} rounded-[2px] bg-raised font-semibold text-ink after:scale-x-100`}>
            {code}
          </span>
          )
        : (
          <Link
            key={code}
            href={localePath(code)}
            hrefLang={code}
            scroll={false}
            aria-label={label}
            title={label}
            onClick={() => savePreferredLocale(code)}
            className={`${itemClassName} text-ink-muted transition-colors duration-200 after:scale-x-0 hover:text-ink hover:after:scale-x-100`}
          >
            {code}
          </Link>
          ))}
    </div>
  )
}
