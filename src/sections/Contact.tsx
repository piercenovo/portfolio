'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '../components/Button'
import Section from '../components/Section'

export function Contact() {
  const { t } = useLanguage()
  const { title, description, cta } = t.contact
  return (
    <Section id='contacto' title={title} number='04'>
      <article className='flex flex-col gap-8 pb-32'>
        <p className='mx-auto max-w-lg text-center sm:max-w-xl text-lg lg:text-xl'>
          {description}
        </p>

        <Button title={cta.title} href='mailto:piercenovoah@gmail.com'>{cta.label}</Button>
      </article>
    </Section>
  )
}
