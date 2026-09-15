'use client'

import { ChevronDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'

type ExpandableProps = {
  id: string
  children: ReactNode
  moreLabel: string
  lessLabel: string
}

// Rows animate open with grid-template-rows; collapsed content is inert
export function Expandable({ id, children, moreLabel, lessLabel }: ExpandableProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        id={id}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-(--ease-out-expo) ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className='min-h-0 overflow-hidden'>{children}</div>
      </div>
      <button
        type='button'
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((open) => !open)}
        className='mt-4 inline-flex items-center gap-2 self-start rounded-[2px] py-1 font-mono text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase transition-colors duration-200 hover:text-live'
      >
        {isOpen ? lessLabel : moreLabel}
        <ChevronDown
          size={14}
          strokeWidth={2}
          aria-hidden
          className={`transition-transform duration-300 ease-(--ease-out-expo) ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </>
  )
}
