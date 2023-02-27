import { contactSection } from '@/data/sections'
import { Button } from './Button'
import Section from './Section'

export function Contact() {
  const { title, description, contact } = contactSection
  return (
    <Section id='contact' title={title} number='03'>
      <article className='flex flex-col gap-8 pb-32'>
        <p className='mx-auto max-w-lg text-center sm:max-w-xl md:text-lg lg:text-xl'>
          {description}
        </p>

        <Button title={contact.title} href={contact.link}>{contact.name}</Button>
      </article>
    </Section>

  )
}
