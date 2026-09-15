'use client'

import { Moon, Sun } from 'lucide-react'
import { useSyncExternalStore } from 'react'
import { applyTheme, DEFAULT_THEME, readTheme } from './theme'

type ThemeToggleProps = {
  toLightLabel: string
  toDarkLabel: string
}

// The <html data-theme> attribute is the single source of truth; watching it
// keeps every toggle (header and menu) in sync without extra state
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

const iconClassName = 'absolute transition-[opacity,rotate,scale] duration-300 ease-(--ease-out-expo)'

export function ThemeToggle({ toLightLabel, toDarkLabel }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => DEFAULT_THEME)
  const isLight = theme === 'light'
  const label = isLight ? toDarkLabel : toLightLabel

  const toggle = () => {
    const next = isLight ? 'dark' : 'light'
    const root = document.documentElement
    // A hidden tab aborts view transitions, so only animate when the page is on screen
    const canTransition = typeof document.startViewTransition === 'function' &&
      document.visibilityState === 'visible' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canTransition) {
      applyTheme(next)
      return
    }

    root.classList.add('theme-switching')
    const transition = document.startViewTransition(() => applyTheme(next))
    // An aborted transition still applies the theme; only its animation is skipped
    transition.ready.catch(() => {})
    transition.finished.finally(() => root.classList.remove('theme-switching'))
  }

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={label}
      title={label}
      className='relative grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[3px] border border-line text-ink-muted transition-colors duration-200 hover:border-live hover:text-live'
    >
      <Sun
        size={15}
        strokeWidth={2}
        aria-hidden
        className={`${iconClassName} ${isLight ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
      />
      <Moon
        size={15}
        strokeWidth={2}
        aria-hidden
        className={`${iconClassName} ${isLight ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}`}
      />
    </button>
  )
}
