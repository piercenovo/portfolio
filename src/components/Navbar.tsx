'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Counter from './Counter'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const { t } = useLanguage()
  const { navLinks } = t.header
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sections = navLinks.map(({ section }) => document.getElementById(section)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.scrollY < window.innerHeight * 0.5) {
              setActiveSection('')
            } else {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActiveSection('')
    }

    sections.forEach((el) => observer.observe(el))
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      sections.forEach((el) => observer.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navLinks])

  return (
    <nav className='w-full h-full flex items-center justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      {/* Logo — fixed width to balance layout */}
      <a href='/#' className='shrink-0 w-[90px]'>
        <Image priority alt='Logo' src='/images/logo.png' width={90} height={30} />
      </a>

      <ul className='hidden lg:flex gap-6 xl:gap-8'>
        {navLinks.map(({ section, label }, i) => {
          const isActive = activeSection === section
          return (
            <a href={`#${section}`} key={section}>
              <li className={`capitalize cursor-pointer transition-colors duration-300 text-xs lg:text-sm ${isActive ? 'text-secondary' : 'text-primary-light hover:text-secondary'}`}>
                <Counter count={i} />
                {label}
              </li>
            </a>
          )
        })}
      </ul>

      {/* Right side — fixed width matching logo to keep nav links centered */}
      <div className='hidden lg:flex items-center justify-end gap-4 shrink-0 w-[90px]'>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
