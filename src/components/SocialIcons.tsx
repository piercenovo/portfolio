'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { socials } from '@/data/sections'

export default function SocialIcons() {
  const { lang } = useLanguage()
  const contactLabel = lang === 'es' ? 'Contáctame vía' : 'Contact me via'

  return (
    <div className='flex flex-wrap gap-x-6 gap-y-4 flex-row md:gap-5'>
      {socials.map(({ name, href, svg, hover }) => (
        <a
          key={name}
          aria-label={name}
          title={`${contactLabel} ${name}`}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='group transition-transform duration-300 hover:-translate-y-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox={svg.viewBox}
            className={`h-6 w-6 transition-colors duration-300 ${hover.fill}`}
          >
            <path fillRule='evenodd' d={svg.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
