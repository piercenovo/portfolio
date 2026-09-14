import { sfmono } from '@/app/font'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/content/profile'
import type { SectionProps } from '@/types/section'
import { ArrowDown } from 'lucide-react'

export function Hero({ lang, dict }: SectionProps) {
  const { hero } = dict

  return (
    <div id='top' className='flex min-h-screen w-full flex-col items-center justify-evenly px-2 sm:px-0'>
      <div className='flex w-full max-w-3xl flex-col gap-1 px-2 pt-28 sm:px-8 md:px-6 lg:max-w-4xl xl:max-w-5xl'>
        <p className={`${sfmono.className} mb-2 animate-fade-in text-sm text-secondary animation-delay-250 animation-duration-1000 lg:text-base`}>
          {hero.greeting}{' '}
          <span className='animate-fade-in animation-delay-500 animation-duration-1000'>{hero.intro}</span>
        </p>

        <h1 className='mt-1 animate-fade-in bg-gradient-to-br from-primary-lightest to-primary bg-clip-text text-4xl font-semibold capitalize leading-none text-transparent animation-delay-750 animation-duration-1000 sm:text-5xl md:text-6xl xl:text-7xl'>
          {profile.name.toLowerCase()}.
        </h1>

        <p className='mt-2 animate-fade-in text-2xl font-semibold text-primary-light animation-delay-750 animation-duration-1000 sm:text-3xl md:text-4xl xl:text-5xl'>
          {hero.tagline}
        </p>

        <p className='mt-3 max-w-2xl animate-fade-in text-lg text-primary animation-delay-1000 animation-duration-1000'>
          {hero.description}
        </p>

        <div className='mt-6 flex animate-fade-in flex-wrap items-center gap-6 animation-delay-1000'>
          <ButtonLink href={profile.cv[lang]} title={hero.cv.title}>{hero.cv.label}</ButtonLink>
          <SocialLinks label={dict.contact.socialLabel} />
        </div>
      </div>

      <a href='#projects' aria-label={hero.scrollLabel} className='mx-auto animate-arrow text-primary transition-colors duration-300 hover:text-secondary'>
        <ArrowDown size={48} strokeWidth={1.5} className='fill-none' aria-hidden />
      </a>
    </div>
  )
}
