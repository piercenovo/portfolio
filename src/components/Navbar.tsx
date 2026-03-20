'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Counter from './Counter'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const { t } = useLanguage()
  const { navLinks } = t.header

  return (
    <nav className='w-full h-full flex items-center justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      {/* Logo — fixed width to balance layout */}
      <a href='/#' className='shrink-0 w-[90px]'>
        <Image priority alt='Logo' src='/images/logo.png' width={90} height={30} />
      </a>

      <ul className='hidden lg:flex gap-6 xl:gap-8'>
        {navLinks.map(({ section, label }, i) => (
          <a href={`#${section}`} key={section}>
            <li className='capitalize cursor-pointer text-primary-light hover:text-secondary transition-colors duration-300 text-xs lg:text-sm'>
              <Counter count={i} />
              {label}
            </li>
          </a>
        ))}
      </ul>

      {/* Right side — fixed width matching logo to keep nav links centered */}
      <div className='hidden lg:flex items-center justify-end gap-4 shrink-0 w-[90px]'>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
