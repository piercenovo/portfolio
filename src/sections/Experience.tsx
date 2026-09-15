import { Expandable } from '@/components/ui/Expandable'
import { PowerOn } from '@/components/ui/PowerOn'
import { Section } from '@/components/ui/Section'
import { experience } from '@/content/experience'
import { formatYearMonth } from '@/i18n/format'
import type { SectionProps } from '@/types/section'
import type { CSSProperties } from 'react'

// Each role shows the same number of highlights; the rest open on demand
const VISIBLE_BULLETS = 3

const bulletClassName = 'relative pl-5 before:absolute before:top-[0.75em] before:left-0 before:h-px before:w-2.5 before:bg-line-strong'

export function Experience({ lang, dict }: SectionProps) {
  return (
    <Section id='experience' title={dict.experience.title}>
      <ol>
        {experience.map((entry, index) => {
          const isCurrent = !entry.end
          const bullets = entry.bullets[lang]
          const extraBullets = bullets.slice(VISIBLE_BULLETS)

          return (
            <PowerOn
              key={`${entry.company.en}-${entry.start}`}
              as='li'
              className='group/row grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-5 pb-12 last:pb-0 md:grid-cols-[11rem_0.75rem_minmax(0,1fr)] md:gap-x-8'
            >
              <div aria-hidden className='relative col-start-1 row-span-2 row-start-1 md:col-start-2'>
                <span className='boot-rail absolute top-2 -bottom-[3.25rem] left-1/2 w-px -translate-x-1/2 bg-line-strong group-last/row:hidden' />
                <span
                  className={`boot-led absolute top-1 left-0 h-3 w-3 rounded-full border ${isCurrent ? 'border-live bg-live-soft' : 'border-line-strong bg-ground'}`}
                >
                  {isCurrent && <span className='status-blink absolute inset-[3px] rounded-full bg-live' />}
                </span>
              </div>

              <div className='boot col-start-2 row-start-1 mb-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs tracking-[0.08em] text-ink-muted uppercase md:col-start-1 md:row-span-2 md:mb-0 md:flex-col md:pt-0.5'>
                <p className='tabular text-ink'>
                  <span className='whitespace-nowrap'>{formatYearMonth(entry.start, lang)} –</span>{' '}
                  {entry.end
                    ? <span className='whitespace-nowrap'>{formatYearMonth(entry.end, lang)}</span>
                    : <span className='whitespace-nowrap text-live'>{dict.experience.present}</span>}
                </p>
                <p>{entry.location[lang]}</p>
              </div>

              <div className='boot col-start-2 row-start-2 flex flex-col md:col-start-3 md:row-span-2 md:row-start-1' style={{ '--i': 1 } as CSSProperties}>
                <h3 className='text-xl leading-snug font-medium tracking-[-0.01em] text-ink md:text-2xl'>{entry.role[lang]}</h3>
                <p className='text-ink-muted'>{entry.company[lang]}</p>

                <ul className='mt-4 flex max-w-[68ch] flex-col gap-2 text-[0.9875rem] leading-[1.55] text-ink-muted'>
                  {bullets.slice(0, VISIBLE_BULLETS).map((bullet) => (
                    <li key={bullet} className={bulletClassName}>{bullet}</li>
                  ))}
                </ul>

                {extraBullets.length > 0 && (
                  <Expandable
                    id={`experience-${index}-more`}
                    moreLabel={dict.experience.showMore.replace('{count}', String(extraBullets.length))}
                    lessLabel={dict.experience.showLess}
                  >
                    <ul className='flex max-w-[68ch] flex-col gap-2 pt-2 text-[0.9875rem] leading-[1.55] text-ink-muted'>
                      {extraBullets.map((bullet) => (
                        <li key={bullet} className={bulletClassName}>{bullet}</li>
                      ))}
                    </ul>
                  </Expandable>
                )}
              </div>
            </PowerOn>
          )
        })}
      </ol>
    </Section>
  )
}
