'use client'

import { sfmono } from '@/app/font'
import { useIsClient } from '@/hooks/useIsClient'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import { dismissLanguageSuggestion, goToLocale, hasLanguagePreference } from '@/i18n/preference'
import { X } from 'lucide-react'
import { useState } from 'react'

type LanguageSuggestionProps = {
  currentLang: Locale
  targetLang: Locale
  text: Dictionary['language']['suggestion']
}

const browserLocale = (): Locale =>
  navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'

export function LanguageSuggestion({ currentLang, targetLang, text }: LanguageSuggestionProps) {
  const isClient = useIsClient()
  const [isDismissed, setIsDismissed] = useState(false)

  if (!isClient || isDismissed) return null
  if (browserLocale() === currentLang || hasLanguagePreference()) return null

  const handleDismiss = () => {
    dismissLanguageSuggestion()
    setIsDismissed(true)
  }

  return (
    <div
      role='dialog'
      aria-label={text.message}
      lang={targetLang}
      className='fixed bottom-8 left-6 z-30 flex max-w-xs items-start gap-3 rounded-md border border-secondary/30 bg-primary-darker p-4 text-sm text-primary-light shadow-lg animate-fade-in-up'
    >
      <div className='flex flex-col gap-3'>
        <p>{text.message}</p>
        <button
          type='button'
          onClick={() => goToLocale(targetLang)}
          className={`${sfmono.className} self-start rounded border border-secondary px-3 py-1.5 text-xs text-secondary transition-colors duration-300 hover:bg-secondary-light`}
        >
          {text.accept}
        </button>
      </div>
      <button
        type='button'
        onClick={handleDismiss}
        aria-label={text.dismiss}
        className='text-primary transition-colors duration-200 hover:text-secondary'
      >
        <X size={16} className='fill-none' aria-hidden />
      </button>
    </div>
  )
}
