'use client'

import { useIsClient } from '@/hooks/useIsClient'
import { localePath, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import { dismissLanguageSuggestion, hasLanguagePreference, savePreferredLocale } from '@/i18n/preference'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
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
      className='fixed inset-x-5 bottom-6 z-30 flex items-start justify-between gap-4 rounded-[3px] border border-line-strong bg-panel p-4 text-[0.9375rem] text-ink shadow-[0_12px_32px_-12px_var(--color-shadow)] sm:right-auto sm:max-w-xs'
    >
      <div className='flex flex-col gap-3'>
        <p>{text.message}</p>
        <button
          type='button'
          onClick={() => {
            savePreferredLocale(targetLang)
            router.push(localePath(targetLang), { scroll: false })
          }}
          className='self-start rounded-[3px] border border-live px-3 py-2 font-mono text-xs font-semibold tracking-[0.06em] text-live uppercase transition-colors duration-200 hover:bg-live-soft'
        >
          {text.accept}
        </button>
      </div>
      <button
        type='button'
        onClick={handleDismiss}
        aria-label={text.dismiss}
        className='rounded-[2px] p-1 text-ink-muted transition-colors duration-200 hover:text-live'
      >
        <X size={16} strokeWidth={2} aria-hidden />
      </button>
    </div>
  )
}
