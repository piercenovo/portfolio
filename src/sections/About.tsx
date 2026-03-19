'use client'

import { WordLink } from '../components/WordLink'
import Section from '../components/Section'
import SlideUp from '@/components/SlideUp'
import Image from 'next/image'
import { getId } from '@/utils/helper'
import { aboutSection } from '@/data/sections'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const { title, paragraphs, achievement } = t.about
  const { img } = aboutSection
  return (
    <Section id='sobre-mi' title={title} number='03'>
      <SlideUp delay={120}>
      <article className='flex gap-5 w-full flex-col xl:flex-row max-w-3xl lg:max-w-4xl xl:max-w-5xl px-0 sm:px-4 md:px-6'>
        <div className=' flex max-w-xl flex-col gap-3 sm:max-w-prose md:max-w-xl lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[39rem] xl:justify-between text-lg lg:text-xl'>
          {paragraphs.map((paragraph) => (
            <p key={getId()}>{paragraph}</p>
          ))}

          <p>
            {achievement.prefix}
            <WordLink
              href='https://play.google.com/store/apps/details?id=com.missionproduce.productividadcampo&hl=es'
              title={achievement.link.title}
            >
              {achievement.link.text}
            </WordLink>
            {achievement.suffix}
          </p>
        </div>

        <div className='mx-auto flex max-w-lg flex-col gap-5 xl:max-w-md mt-2 xl:mt-1'>
          <Image
            priority
            alt='Pierce Novoa'
            src={img}
            width='300'
            height='300'
            className='mx-auto w-[18rem] animate-profile grayscale hover:filter-none duration-300 shadow-image bg-no-repeat'
          />
        </div>
      </article>
      </SlideUp>
    </Section>
  )
}
