import { sfmono } from '@/app/font'
import { heroSection } from '@/data/sections'
import { arrowDown } from '@/data/svg'

export function Hero() {
  const { subtitle1, subtitle2, title, tagline, description } = heroSection
  return (
    <main id='#' className='flex min-h-screen flex-col justify-evenly items-center w-full max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-5xl px-2 sm:px-0'>
      <div className='flex flex-col gap-3 pt-28 w-full'>
        <h3
          className={` ${sfmono.className} animate-fade-in text-sm lg:text-base text-secondary animation-delay-250 animation-duration-1000 mb-2`}
        >
          {subtitle1}{' '}
          <span className='animate-fade-in animation-duration-1000 animation-delay-500'>
            {subtitle2}
          </span>
        </h3>

        <h1
          className='animate-fade-in text-4xl font-semibold capitalize leading-none text-primary-lightest animation-duration-1500 animation-delay-1000 sm:text-5xl md:text-6xl xl:text-7xl'
        >
          {title}
        </h1>

        <h2
          className='-mt-2 animate-fade-in text-4xl font-semibold leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl w-full'
        >
          {tagline}
        </h2>

        <p className='max-w-md animate-fade-in sm:max-w-prose md:text-lg lg:text-xl'>
          {description}
        </p>
      </div>

      <div className='mx-auto'>
        <a href='#about'>
          <button
            data-hero-arrow
            data-section-id='about'
            aria-label='Ir a Sobre Mi'
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
