'use client'

import { sfmono } from '@/app/font'
import { useLanguage } from '@/contexts/LanguageContext'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className='flex animate-fade-in flex-col gap-6 pb-6'>
      {/* Only visible for smaller devices */}
      <div className='md:hidden flex justify-center'>
        <SocialIcons />
      </div>

      <div
        className={`${sfmono.className} flex flex-col items-center gap-2 text-xs lg:text-sm`}
      >
        <span className='text-center transition'>{t.footer.madeBy}</span>
        <span className='text-center transition'>&#169; {year}</span>
      </div>
    </footer>
  )
}
