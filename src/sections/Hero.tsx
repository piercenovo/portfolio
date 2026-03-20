'use client'

/* eslint-disable react/jsx-closing-tag-location */
import { sfmono } from '@/app/font'
import { Button } from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import { useLanguage } from '@/contexts/LanguageContext'
import { arrowDown } from '@/data/svg'

export function Hero() {
  const { t } = useLanguage()
  const { subtitle1, subtitle2, tagline, description } = t.hero
  const { cta } = t.header
  return (
    <main id='#' className='flex min-h-screen flex-col justify-evenly items-center w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 md:px-8'>
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
          className='mt-1 animate-fade-in text-4xl font-semibold capitalize leading-none animation-delay-750 animation-duration-1000 sm:text-5xl md:text-6xl xl:text-7xl bg-gradient-to-br from-primary-lightest to-primary bg-clip-text text-transparent'
        >
          pierce novoa.
        </h1>

        <h2 className='animate-fade-in text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary-light animation-delay-750 animation-duration-1000 mt-2'>
          {tagline}
        </h2>

        <p className='animate-fade-in text-lg max-w-2xl text-primary animation-delay-1000 animation-duration-1000 mt-3'>
          {description}
        </p>

        <div className='animate-fade-in animation-delay-1000 flex items-center gap-6 mt-6 flex-wrap'>
          <div><Button title={cta.title} href={cta.url}>{cta.label}</Button></div>
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
