'use client'

import { useIsClient } from '@/hooks/useIsClient'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import type { NavItem } from './Header'
import { LanguageSwitcher } from './LanguageSwitcher'

type MobileMenuProps = {
  lang: Locale
  navItems: NavItem[]
  labels: Dictionary['header']
  languageLabel: string
}

export function MobileMenu({ lang, navItems, labels, languageLabel }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isClient = useIsClient()
  const close = () => setIsOpen(false)

  return (
    <div className='lg:hidden'>
      <button
        type='button'
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        aria-label={isOpen ? labels.closeMenu : labels.openMenu}
        className='flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-ink transition-colors duration-200 hover:border-live hover:text-live'
      >
        {isOpen ? <X size={20} strokeWidth={1.75} aria-hidden /> : <MenuIcon size={20} strokeWidth={1.75} aria-hidden />}
      </button>

      {isClient && createPortal(
        <>
          <div
            onClick={close}
            aria-hidden
            className={`fixed inset-0 z-40 bg-ground/80 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          />

          <div
            id='mobile-menu'
            inert={!isOpen}
            className={`fixed top-0 right-0 z-50 flex h-full w-[min(20rem,86vw)] flex-col border-l border-line bg-panel transition-transform duration-300 ease-(--ease-out-expo) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className='flex h-16 items-center justify-between border-b border-line px-5'>
              <LanguageSwitcher currentLang={lang} label={languageLabel} />
              <button
                type='button'
                onClick={close}
                aria-label={labels.closeMenu}
                className='flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-ink transition-colors duration-200 hover:border-live hover:text-live'
              >
                <X size={20} strokeWidth={1.75} aria-hidden />
              </button>
            </div>

            <nav aria-label={labels.navLabel} className='flex flex-1 flex-col px-5 py-6'>
              <ul className='flex flex-col'>
                {navItems.map(({ id, label }) => (
                  <li key={id} className='border-b border-line'>
                    <a
                      href={`#${id}`}
                      onClick={close}
                      className='block py-4 font-mono text-sm tracking-[0.08em] text-ink uppercase transition-colors duration-200 hover:text-live'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href='#contact'
                onClick={close}
                className='mt-8 inline-flex justify-center rounded-[3px] bg-live px-5 py-3 font-mono text-sm font-semibold tracking-[0.06em] text-ground uppercase transition-colors duration-200 hover:bg-live-strong'
              >
                {labels.contact}
              </a>
            </nav>
          </div>
        </>,
        document.body
      )}
    </div>
  )
}
