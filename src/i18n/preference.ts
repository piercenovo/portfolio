import type { Locale } from './config'

const PREFERRED_LOCALE_KEY = 'preferred-locale'
const SUGGESTION_DISMISSED_KEY = 'language-suggestion-dismissed'

export function hasLanguagePreference(): boolean {
  try {
    return localStorage.getItem(PREFERRED_LOCALE_KEY) !== null ||
      localStorage.getItem(SUGGESTION_DISMISSED_KEY) !== null
  } catch {
    return false
  }
}

export function dismissLanguageSuggestion(): void {
  try {
    localStorage.setItem(SUGGESTION_DISMISSED_KEY, '1')
  } catch {
    // storage unavailable: the suggestion simply shows again next visit
  }
}

// Only remembers the choice; callers navigate client-side with next/link or the router
export function savePreferredLocale(lang: Locale): void {
  try {
    localStorage.setItem(PREFERRED_LOCALE_KEY, lang)
  } catch {
    // storage unavailable: navigation still works
  }
}
