import { sfmono } from '@/app/font'
import { SectionProps } from '@/interfaces/props'

export default function Section({ id, number, title, children } : SectionProps) {
  return (
    <section
      id={id} className='flex w-full flex-col gap-8 pb-[10rem] pt-28 items-center justify-center px-2 sm:px-0 animate-fade-in'
    >
      <h2
        className={` ${sfmono.className} flex gap-1 font-semibold text-primary-lightest mb-4 text-2xl lg:text-3xl`}
      >
        <span className='text-secondary'>{number}.</span>
        {title}
      </h2>
      {children}
    </section>

  )
}
