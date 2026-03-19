'use client'

import SlideUp from '@/components/SlideUp'
import { useLanguage } from '@/contexts/LanguageContext'
import { sfmono } from '@/app/font'
import Section from '../components/Section'

export function Experience() {
  const { t } = useLanguage()
  const { title, entries } = t.experience

  return (
    <Section id='experiencia' title={title} number='02'>
      <SlideUp delay={120}>
        <article className='relative mx-auto flex w-full max-w-lg flex-col sm:max-w-xl lg:max-w-3xl'>
          {/* Vertical line */}
          <div className='absolute left-0 top-0 h-full w-px bg-primary/30 ml-[7px]' />

          <div className='flex flex-col gap-12'>
            {entries.map((entry, i) => (
              <div key={i} className='relative pl-10'>
                {/* Dot */}
                <div className='absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border-2 border-secondary bg-primary-darker' />

                <div className='flex flex-col gap-3'>
                  {/* Header */}
                  <div className='flex flex-col gap-0.5'>
                    <h3 className='text-primary-lightest text-lg lg:text-xl font-semibold leading-snug'>
                      {entry.role}
                      <span className='text-secondary'> @ {entry.company}</span>
                    </h3>
                    <div className={`${sfmono.className} flex flex-wrap gap-x-3 text-xs text-primary-light`}>
                      <span>{entry.period}</span>
                      <span className='text-primary/50'>·</span>
                      <span>{entry.location}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className='flex flex-col gap-2'>
                    {entry.bullets.map((bullet, j) => (
                      <li key={j} className='flex gap-3 text-base lg:text-lg text-primary-light leading-relaxed'>
                        <span className='text-secondary mt-1 shrink-0'>▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>
      </SlideUp>
    </Section>
  )
}
