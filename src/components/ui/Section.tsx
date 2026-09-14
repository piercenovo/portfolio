import { sfmono } from '@/app/font'
import type { ReactNode } from 'react'
import { SlideUp } from './SlideUp'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className='flex w-full flex-col items-center justify-center gap-8 px-2 pb-[10rem] pt-28 sm:px-0'
    >
      <SlideUp>
        <h2 className={`${sfmono.className} mb-4 flex gap-1 text-2xl font-semibold text-primary-lightest lg:text-3xl`}>
          {title}
        </h2>
      </SlideUp>
      {children}
    </section>
  )
}
