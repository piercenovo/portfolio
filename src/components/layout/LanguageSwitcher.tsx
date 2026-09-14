'use client'

import { sfmono } from '@/app/font'
import { localePath, otherLocale, type Locale } from '@/i18n/config'
import { goToLocale } from '@/i18n/preference'
import { Languages } from 'lucide-react'
import Link from 'next/link'

type LanguageSwitcherProps = {
  currentLang: Locale
  label: string
}

export function LanguageSwitcher({ currentLang, label }: LanguageSwitcherProps) {
  const targetLang = otherLocale(currentLang)

  return (
    <Link
      href={localePath(targetLang)}
      hrefLang={targetLang}
      aria-label={label}
      title={label}
      onClick={(event) => {
        event.preventDefault()
        goToLocale(targetLang)
      }}
      className={`${sfmono.className} flex items-center gap-1.5 text-primary-light hover:text-secondary transition-colors duration-200`}
    >
      <Languages size={18} strokeWidth={2} className='fill-none' aria-hidden />
      <span className='text-[12px] tracking-wide'>{currentLang.toUpperCase()}</span>
    </Link>
  )
}
