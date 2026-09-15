import { PowerOn } from '@/components/ui/PowerOn'
import { Section } from '@/components/ui/Section'
import { about } from '@/content/about'
import { profile } from '@/content/profile'
import type { SectionProps } from '@/types/section'
import Image from 'next/image'
import type { CSSProperties } from 'react'

const rowClassName = 'grid gap-3 border-b border-line py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8'
const termClassName = 'font-mono text-xs tracking-[0.08em] text-ink-muted uppercase sm:pt-1'
const photoClassName = 'aspect-[4/5] w-full object-cover object-[50%_35%] grayscale-[45%] transition-[filter] duration-500 ease-out group-hover:grayscale-0'
const indexStyle = (index: number) => ({ '--i': index }) as CSSProperties

export function About({ lang, dict }: SectionProps) {
  return (
    <Section id='about' title={dict.about.title}>
      <PowerOn className='grid gap-10 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16'>
        <figure className='boot group w-full max-w-[18rem] self-start rounded-[3px] border border-line bg-panel transition-colors duration-200 hover:border-line-strong'>
          <div className='p-2'>
            {/* One photo per theme, each composited on its own ground; the hidden one
                is display:none, so it is neither announced nor fetched until shown */}
            <div className='boot-screen overflow-hidden rounded-[2px]'>
              <Image
                src={about.photo}
                alt={dict.about.photoAlt}
                placeholder='blur'
                className={`${photoClassName} light:hidden`}
              />
              <Image
                src={about.photoLight}
                alt={dict.about.photoAlt}
                placeholder='blur'
                className={`${photoClassName} hidden light:block`}
              />
            </div>
          </div>
          <figcaption className='flex items-center justify-between gap-3 border-t border-line px-4 py-3 font-mono text-[0.6875rem] tracking-[0.08em] uppercase'>
            <span className='text-ink'>{profile.name}</span>
            <span className='text-ink-muted'>{dict.about.location}</span>
          </figcaption>
        </figure>

        <div className='flex flex-col gap-10'>
          <div className='flex max-w-[65ch] flex-col gap-5 text-lg text-ink-muted'>
            {about.paragraphs[lang].map((paragraph, index) => (
              <p key={paragraph} className='boot' style={indexStyle(index + 1)}>{paragraph}</p>
            ))}
          </div>

          <dl className='boot border-t border-line' style={indexStyle(about.paragraphs[lang].length + 1)}>
            <div className={rowClassName}>
              <dt className={termClassName}>{dict.about.education}</dt>
              <dd>
                <ul className='flex flex-col gap-3'>
                  {about.education.map((entry) => (
                    <li key={entry.institution} className='flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
                      <span className='text-ink'>
                        {entry.title[lang]} <span className='text-ink-muted'>· {entry.institution}</span>
                      </span>
                      <span className='shrink-0 font-mono text-xs text-ink-muted tabular'>{entry.period}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className={rowClassName}>
              <dt className={termClassName}>{dict.about.languages}</dt>
              <dd className='text-ink'>{about.languages[lang]}</dd>
            </div>
          </dl>
        </div>
      </PowerOn>
    </Section>
  )
}
