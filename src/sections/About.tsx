import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { WordLink } from '@/components/ui/WordLink'
import { about } from '@/content/about'
import type { SectionProps } from '@/types/section'
import Image from 'next/image'

export function About({ lang, dict }: SectionProps) {
  const achievement = about.achievement[lang]

  return (
    <Section id='about' title={dict.about.title}>
      <SlideUp delay={120}>
        <article className='flex w-full max-w-3xl flex-col items-center gap-8 px-0 sm:px-4 md:px-6 lg:max-w-4xl xl:max-w-5xl xl:flex-row'>
          <div className='mx-auto flex max-w-xl flex-col gap-2 text-lg lg:max-w-2xl lg:text-xl xl:mx-0 xl:max-w-[39rem]'>
            {about.paragraphs[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {achievement.prefix}
              <WordLink href={about.achievementUrl} title={achievement.linkTitle}>
                {achievement.linkText}
              </WordLink>
              {achievement.suffix}
            </p>
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
