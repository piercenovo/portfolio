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
        className='p-1 text-primary-light transition-colors duration-200 hover:text-secondary'
      >
        {isOpen
          ? <X size={26} strokeWidth={1.5} className='fill-none' aria-hidden />
          : <MenuIcon size={26} strokeWidth={1.5} className='fill-none' aria-hidden />}
      </button>

      {isClient && createPortal(
        <>
          <div
            onClick={close}
            aria-hidden
            className={`fixed inset-0 z-40 bg-primary-darkest/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          />

          <div
            id='mobile-menu'
            inert={!isOpen}
            className={`fixed right-0 top-0 z-50 h-full w-4/6 max-w-xs bg-primary-darker text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className='flex h-20 items-center justify-end px-6'>
              <button
                type='button'
                onClick={close}
                aria-label={labels.closeMenu}
                className='p-1 text-primary-light transition-colors duration-200 hover:text-secondary'
              >
                <X size={24} strokeWidth={1.5} className='fill-none' aria-hidden />
              </button>
            </div>

            <nav aria-label={labels.navLabel} className='flex flex-col items-center gap-10 px-8 pb-12 pt-8'>
              <ul className='w-full'>
                {navItems.map(({ id, label }) => (
                  <li key={id} className='border-b border-primary/10 last:border-0'>
                    <a
                      href={`#${id}`}
                      onClick={close}
                      className='block px-4 py-4 text-center capitalize text-primary-light transition-colors duration-300 hover:text-secondary'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher currentLang={lang} label={languageLabel} />
            </nav>
          </div>
        </>,
        document.body
      )}
    </div>
  )
}
