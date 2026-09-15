import { PlantDiagram } from '@/components/hero/PlantDiagram'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/content/profile'
import type { SectionProps } from '@/types/section'
import { ArrowDownRight, Download } from 'lucide-react'

export function Hero({ lang, dict }: SectionProps) {
  const { hero } = dict
  const [firstName, ...lastNames] = profile.name.split(' ')

  return (
    <div
      id='top'
      className='mx-auto grid w-full max-w-6xl gap-14 px-5 pt-28 pb-8 sm:px-8 md:pt-32 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14 lg:pb-12'
    >
      <div className='flex flex-col'>
        <h1 className='font-mono text-[clamp(3rem,7vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-ink uppercase'>
          <span className='block'>{firstName}</span>
          <span className='block'>{lastNames.join(' ')}</span>
        </h1>

        <p className='mt-6 font-mono text-sm tracking-[0.08em] text-ink-muted uppercase'>Fullstack Software Engineer</p>

        <p className='mt-8 max-w-[22ch] text-[clamp(1.625rem,3.2vw,2.25rem)] leading-[1.15] font-medium tracking-[-0.02em] text-balance text-ink'>
          {hero.tagline}
        </p>

        <p className='mt-5 max-w-[60ch] text-lg text-ink-muted'>{hero.description}</p>

        <div className='mt-9 flex flex-wrap items-center gap-3'>
          <ButtonLink href='#contact'>
            {dict.header.contact}
            <ArrowDownRight size={16} strokeWidth={2} aria-hidden />
          </ButtonLink>
          <ButtonLink href={profile.cv[lang]} variant='secondary' title={hero.cv.title} external>
            <Download size={16} strokeWidth={2} aria-hidden />
            {hero.cv.label}
          </ButtonLink>
          <SocialLinks label={dict.contact.socialLabel} />
        </div>

        <p className='mt-8 flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] text-ink-muted uppercase'>
          <span aria-hidden className='status-blink h-2 w-2 rounded-full bg-live' />
          {hero.status}
        </p>
      </div>

      <PlantDiagram hero={hero} />
    </div>
  )
}
