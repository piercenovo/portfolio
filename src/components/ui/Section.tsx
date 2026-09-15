import type { ReactNode } from 'react'
import { PowerOn } from './PowerOn'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className='mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-28'>
      <PowerOn className='mb-10 md:mb-14'>
        <h2 id={`${id}-title`} className='font-mono text-2xl font-semibold uppercase tracking-[-0.02em] text-ink md:text-3xl'>
          {title}
        </h2>
        <div aria-hidden className='power-rule mt-5 h-px bg-line-strong' />
      </PowerOn>
      {children}
    </section>
  )
}
