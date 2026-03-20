'use client'

import { WordLink } from '../components/WordLink'
import Section from '../components/Section'
import SlideUp from '@/components/SlideUp'
import Image from 'next/image'
import { aboutSection } from '@/data/sections'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const { title, paragraphs, achievement } = t.about
  const { img } = aboutSection
  return (
    <Section id='sobre-mi' title={title} number='04'>
      <SlideUp delay={120}>
      <article className='flex gap-8 w-full flex-col xl:flex-row max-w-3xl lg:max-w-4xl xl:max-w-5xl px-0 sm:px-4 md:px-6 items-center'>
        <div className='flex flex-col gap-2 mx-auto xl:mx-0 max-w-xl lg:max-w-2xl xl:max-w-[39rem] text-lg lg:text-xl'>
          <p>{paragraphs[0]}</p>
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

        <div className='mx-auto xl:mx-0 shrink-0'>
          <Image
            priority
            alt='Pierce Novoa'
            src={img}
            width='300'
            height='300'
            className='mx-auto w-[18rem] animate-profile grayscale hover:filter-none active:filter-none duration-300 shadow-image bg-no-repeat'
          />
        </div>
      </article>
      </SlideUp>
    </Section>
  )
}
