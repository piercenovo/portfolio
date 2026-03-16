'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { Button } from './Button'
import Counter from './Counter'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const { t } = useLanguage()
  const { navLinks, cta } = t.header

  return (
    <nav className='w-full h-full flex items-center justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      <a href='/#'>
        <Image priority alt='Logo' src='/images/logo.png' width={90} height={30} />
      </a>

      <ul className='hidden md:flex gap-7 lg:gap-8'>
        {navLinks.map(({ section, label }, i) => (
          <a href={`#${section}`} key={section}>
            <li
              className='capitalize cursor-pointer text-primary-light hover:text-secondary transition-colors duration-300 text-xs lg:text-sm'
            >
              <Counter count={i} />
              {label}
            </li>
          </a>
        ))}
      </ul>

      <div className='hidden md:flex items-center gap-4'>
        <LanguageSwitcher />
        <Button title={cta.title} href={cta.url}>
          {cta.label}
        </Button>
      </div>
    </nav>
  )
}
