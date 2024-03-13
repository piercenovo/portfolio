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
      <article
        className='flex gap-5 w-full flex-col xl:flex-row max-w-3xl lg:max-w-4xl xl:max-w-5xl px-2 md:px-6'
      >
        <div
          className=' flex max-w-xl flex-col gap-3 sm:max-w-prose md:max-w-xl lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[39rem] xl:justify-between text-lg lg:text-xl'
        >

          {paragraphs.map((paragraph) => (
            <p key={getId()}>{paragraph}</p>
          ))}

          <p>
            Algunos de mis éxitos destacan desarrollar una
            <WordLink
              href='https://apps.apple.com/pe/app/brainconcent/id1658845005?l=es' title='¡Visualiza la App!'
            >  aplicación móvil para el entrenamiento de concentración
              en niños con TDAH.
            </WordLink> Colaborando en soluciones innovadoras que buscan mejorar la calidad de vida
            a través de la integración de la tecnología.
          </p>
        </div>

        <div
          className='mx-auto flex max-w-lg flex-col gap-5 xl:max-w-md xl:mt-1'
        >
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
