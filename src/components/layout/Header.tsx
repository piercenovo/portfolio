'use client'

import { sfmono } from '@/app/font'
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
    <header
      id='navbar'
      className={`${sfmono.className} fixed z-20 flex h-20 w-full animate-fade-in-down items-center justify-center bg-primary-darkest/90 px-4 backdrop-blur-[10px] duration-500 md:px-8`}
    >
      <div className='flex h-full w-full max-w-2xl items-center justify-between md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
        <a href='#top' aria-label={labels.homeLabel} className='w-[90px] shrink-0'>
          <Image priority alt='' src='/images/logo.png' width={90} height={30} />
        </a>

        <nav aria-label={labels.navLabel} className='hidden lg:block'>
          <ul className='flex gap-6 xl:gap-8'>
            {navItems.map(({ id, label }) => {
              const isActive = activeId === id

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`text-xs capitalize transition-colors duration-300 lg:text-sm ${isActive ? 'text-secondary' : 'text-primary-light hover:text-secondary'}`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='hidden w-[90px] shrink-0 items-center justify-end lg:flex'>
          <LanguageSwitcher currentLang={lang} label={languageLabel} />
        </div>

        <MobileMenu lang={lang} navItems={navItems} labels={labels} languageLabel={languageLabel} />
      </div>
    </header>
  )
}
