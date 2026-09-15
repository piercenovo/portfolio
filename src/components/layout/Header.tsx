'use client'

import { useActiveSection } from '@/hooks/useActiveSection'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import Image from 'next/image'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'

export type NavItem = { id: string; label: string }

type HeaderProps = {
  lang: Locale
  navItems: NavItem[]
  labels: Dictionary['header']
  languageLabel: string
}

export function Header({ lang, navItems, labels, languageLabel }: HeaderProps) {
  const activeId = useActiveSection(navItems.map(({ id }) => id))

  return (
    <header className='fixed inset-x-0 top-0 z-30 border-b border-line bg-ground/95'>
      <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8'>
        <a href='#top' aria-label={labels.homeLabel} className='shrink-0 rounded-[2px]'>
          <Image priority alt='' src='/images/logo.png' width={72} height={24} />
        </a>

        <nav aria-label={labels.navLabel} className='hidden lg:block'>
          <ul className='flex items-center gap-1'>
            {navItems.map(({ id, label }) => {
              const isActive = activeId === id

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-[2px] px-3 py-2 font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:origin-left after:bg-live after:transition-transform after:duration-300 after:ease-(--ease-out-expo) ${isActive ? 'text-ink after:scale-x-100' : 'text-ink-muted after:scale-x-0 hover:text-ink'}`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <LanguageSwitcher currentLang={lang} label={languageLabel} />
          <a
            href='#contact'
            className='hidden rounded-[3px] bg-live px-3.5 py-2 font-mono text-xs font-semibold tracking-[0.08em] text-ground uppercase transition-colors duration-200 hover:bg-live-strong sm:inline-flex'
          >
            {labels.contact}
          </a>
          <MobileMenu lang={lang} navItems={navItems} labels={labels} languageLabel={languageLabel} />
        </div>
      </div>
    </header>
  )
}
