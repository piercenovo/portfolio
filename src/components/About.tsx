'use client'

import { WordLink } from './WordLink'
import Section from './Section'
import Image from 'next/image'
import { getId } from '@/utils/helper'
import { aboutSection } from '@/data/sections'

export function About() {
  const { title, paragraphs, img } = aboutSection
  return (
    <Section id='about' title={title} number='01'>
      <article
        className='grid gap-5 xl:grid-cols-2 xl:gap-3 max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-5xl'
      >
        <div
          className='mx-auto flex max-w-md flex-col gap-3 sm:max-w-prose md:max-w-xl lg:max-w-prose-lg xl:max-w-md xl:justify-between text-base md:text-lg lg:text-xl'
        >

          {paragraphs.map((paragraph) => (
            <p key={getId()}>{paragraph}</p>
          ))}

          <p>
            Recientemente, he publicado una aplicación móvil llamada
            <WordLink
              href='https://apps.apple.com/pe/app/brainconcent/id1658845005?l=es' title='¡Visualiza la App!'
            > Brainconcent
            </WordLink>
            , enfocada en el entrenamiento de la concentración en niños con TDAH.
          </p>
        </div>

        <div
          className='mx-auto flex max-w-lg flex-col gap-5 sm:max-w-prose md:max-w-xl lg:max-w-prose-lg xl:max-w-md xl:mt-1'
        >
          <Image
            alt='Pierce Novoa'
            src={img}
            width='400'
            height='400'
            className='mx-auto w-72 animate-profile grayscale hover:filter-none delay-100 shadow-image bg-no-repeat'
          />
        </div>
      </article>
    </Section>
  )
}
