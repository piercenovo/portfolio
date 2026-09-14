import { sfmono } from '@/app/font'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { experience } from '@/content/experience'
import { formatYearMonth } from '@/i18n/format'
import type { SectionProps } from '@/types/section'

export function Experience({ lang, dict }: SectionProps) {
  return (
    <Section id='experience' title={dict.experience.title}>
      <SlideUp delay={120}>
        <div className='relative mx-auto flex w-full max-w-lg flex-col sm:max-w-xl lg:max-w-3xl'>
          <div className='absolute left-0 top-0 ml-[7px] h-full w-px bg-primary/30' aria-hidden />

          <ol className='flex flex-col gap-12'>
            {experience.map((entry) => {
              const period = `${formatYearMonth(entry.start, lang)} – ${entry.end ? formatYearMonth(entry.end, lang) : dict.experience.present}`

              return (
                <li key={`${entry.company}-${entry.start}`} className='relative pl-10'>
                  <div className='absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border-2 border-secondary bg-primary-darker' aria-hidden />

                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-0.5'>
                      <h3 className='text-lg font-semibold leading-snug text-primary-lightest lg:text-xl'>
                        {entry.role[lang]}
                        <span className='text-secondary'> @ {entry.company}</span>
                      </h3>
                      <div className={`${sfmono.className} flex flex-wrap gap-x-3 text-xs text-primary-light`}>
                        <span>{period}</span>
                        <span className='text-primary/50' aria-hidden>·</span>
                        <span>{entry.location[lang]}</span>
                      </div>
                    </div>

                    <ul className='flex flex-col gap-2'>
                      {entry.bullets[lang].map((bullet) => (
                        <li key={bullet} className='flex gap-3 text-base leading-relaxed text-primary-light lg:text-lg'>
                          <span className='mt-1 shrink-0 text-secondary' aria-hidden>▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </SlideUp>
    </Section>
  )
}
