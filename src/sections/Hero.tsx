'use client'

/* eslint-disable react/jsx-closing-tag-location */
import { sfmono } from '@/app/font'
import SocialIcons from '@/components/SocialIcons'
import { useLanguage } from '@/contexts/LanguageContext'
import { arrowDown } from '@/data/svg'

export function Hero() {
  const { t } = useLanguage()
  const { subtitle1, subtitle2, description } = t.hero
  return (
    <main id='#' className='flex min-h-screen flex-col justify-evenly items-center w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-0 sm:px-4 md:px-6'>
      <div className='flex flex-col gap-1 pt-28 w-full'>
        <h3
          className={`${sfmono.className} animate-fade-in text-sm lg:text-base text-secondary animation-delay-250 animation-duration-1000 mb-2`}
        >
          {subtitle1}{' '}
          <span className='animate-fade-in animation-duration-1000 animation-delay-500'>
            {subtitle2}
          </span>
        </h3>

        <h1
          className='mt-1 animate-fade-in text-4xl font-semibold capitalize leading-none text-primary-lightest animation-delay-750 animation-duration-1000 sm:text-5xl md:text-6xl xl:text-7xl'
        >
          pierce novoa.
        </h1>

        <p className='animate-fade-in text-xl max-w-3xl animation-delay-1000'>
          {description}
        </p>

        <div className='animate-fade-in animation-delay-1000'>
          <SocialIcons />
        </div>
      </div>

      <div className='mx-auto'>
        <a href='#proyectos'>
          <button
            data-hero-arrow
            data-section-id='proyectos'
            aria-label='Ir a Proyectos'
            className='animate-arrow [&>svg]:hover:fill-secondary'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox={arrowDown.viewBox}
              className='h-12 w-12 transition-colors duration-300'
            >
              <path d={arrowDown.path} />
            </svg>
          </button>
        </a>
      </div>
    </main>
  )
}
