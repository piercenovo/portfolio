import { contactSection } from '@/data/sections'
import { Button } from '../components/Button'
import Section from '../components/Section'

export function Contact() {
  const { title, description, contact } = contactSection
  return (
    <Section id='contacto' title={title} number='04'>
      <article className='flex flex-col gap-8 pb-32'>
        <p className='mx-auto max-w-lg text-center sm:max-w-xl text-lg lg:text-xl'>
          {description}
        </p>

        <Button title={contact.title} href={contact.link}>{contact.name}</Button>
      </article>
    </Section>

  )
}
