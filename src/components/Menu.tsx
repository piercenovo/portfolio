'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { MenuProps } from '@/interfaces/props'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Counter from './Counter'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Menu({ onClick, navbarCollapsed }: MenuProps) {
  const { t } = useLanguage()
  const { navLinks } = t.header
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const portal = mounted ? createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-primary-darkest/80 backdrop-blur-sm transition-opacity duration-300 ${
          navbarCollapsed ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClick}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-4/6 max-w-xs bg-primary-darker text-white transition-transform duration-300 ease-in-out ${
          navbarCollapsed ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end px-6 h-20 items-center'>
          <button
            onClick={onClick}
            aria-label='Cerrar menú'
            className='text-primary-light hover:text-secondary transition-colors duration-200 p-1'
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className='flex flex-col items-center gap-10 px-8 pt-8 pb-12'>
          <ul className='w-full'>
            {navLinks.map(({ section, label }, i) => (
              <a href={`#${section}`} key={section} onClick={onClick}>
                <li className='capitalize py-4 cursor-pointer text-primary-light hover:text-secondary transition-colors duration-300 flex flex-col px-4 text-center border-b border-primary/10 last:border-0'>
                  <Counter count={i} />
                  {label}
                </li>
              </a>
            ))}
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </>,
    document.body
  ) : null

  return (
    <div>
      {/* Burger icon — only on mobile */}
      <div className='md:hidden'>
        <button
          onClick={onClick}
          aria-label={navbarCollapsed ? 'Cerrar menú' : 'Abrir menú'}
          className='text-primary-light hover:text-secondary transition-colors duration-200 p-1'
        >
          {navbarCollapsed ? <X size={26} strokeWidth={1.5} /> : <MenuIcon size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {portal}
    </div>
  )
}
