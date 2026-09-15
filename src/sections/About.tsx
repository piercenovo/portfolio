import { sfmono } from '@/app/font'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { about } from '@/content/about'
import type { SectionProps } from '@/types/section'
import Image from 'next/image'

export function About({ lang, dict }: SectionProps) {
  return (
    <Section id='about' title={dict.about.title}>
      <SlideUp delay={120}>
        <article className='flex w-full max-w-3xl flex-col items-center gap-8 px-0 sm:px-4 md:px-6 lg:max-w-4xl xl:max-w-5xl xl:flex-row'>
          <div className='mx-auto flex max-w-xl flex-col gap-4 text-lg lg:max-w-2xl lg:text-xl xl:mx-0 xl:max-w-[39rem]'>
            {about.paragraphs[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className='mt-2 flex flex-col gap-3 text-base'>
              <h3 className={`${sfmono.className} text-sm text-secondary`}>{dict.about.education}</h3>
              <ul className='flex flex-col gap-2'>
                {about.education.map((entry) => (
                  <li key={entry.institution} className='flex flex-col text-primary-light sm:flex-row sm:justify-between sm:gap-4'>
                    <span>
                      {entry.title[lang]} <span className='text-primary'>· {entry.institution}</span>
                    </span>
                    <span className={`${sfmono.className} shrink-0 text-xs text-primary sm:text-sm`}>{entry.period}</span>
                  </li>
                ))}
              </ul>

              <p className='text-primary-light'>
                <span className={`${sfmono.className} text-sm text-secondary`}>{dict.about.languages}:</span>{' '}
                {about.languages[lang]}
              </p>
            </div>
          </div>

          <div className='mx-auto shrink-0 xl:mx-0'>
            <Image
              src={about.photo}
              alt={dict.about.photoAlt}
              placeholder='blur'
              width={300}
              height={300}
              className='mx-auto w-[18rem] animate-profile shadow-image'
            />
          </div>
        </article>
      </SlideUp>
    </Section>
  )
}
