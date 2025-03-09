'use client'

import { WordLink } from '../components/WordLink'
import Section from '../components/Section'
import Image from 'next/image'
import { getId } from '@/utils/helper'
import { aboutSection } from '@/data/sections'

export function About() {
  const { title, paragraphs, img } = aboutSection
  return (
    <Section id='sobre-mi' title={title} number='03'>
      <article className='flex gap-5 w-full flex-col xl:flex-row max-w-3xl lg:max-w-4xl xl:max-w-5xl px-0 sm:px-4 md:px-6'>
        <div className=' flex max-w-xl flex-col gap-3 sm:max-w-prose md:max-w-xl lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[39rem] xl:justify-between text-lg lg:text-xl'>
          {paragraphs.map((paragraph) => (
            <p key={getId()}>{paragraph}</p>
          ))}

          <p>
            Uno de mis logros destacados es el desarrollo de una{' '}
            <WordLink
              href='https://play.google.com/store/apps/details?id=com.missionproduce.productividadcampo&hl=es'
              title='¡Visualiza la App!'
            >
              aplicación móvil para la gestión de productividad en la cosecha
              agrícola
            </WordLink>
            , mejorando la eficiencia y trazabilidad en el sector agroindustrial
            a través de herramientas digitales innovadoras.
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
    </Section>
  )
}
