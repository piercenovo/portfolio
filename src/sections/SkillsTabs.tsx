'use client'

import { useState, type ReactNode } from 'react'

type SkillTab = {
  id: string
  label: string
  panel: ReactNode
}

type SkillsTabsProps = {
  tabs: SkillTab[]
}

export function SkillsTabs({ tabs }: SkillsTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)

  return (
    <div className='mx-auto flex w-full max-w-lg flex-col gap-2 sm:max-w-xl xl:max-w-2xl'>
      <div role='tablist' className='flex text-base font-medium md:text-lg lg:text-xl'>
        {tabs.map(({ id, label }) => {
          const isActive = id === activeId

          return (
            <button
              key={id}
              type='button'
              role='tab'
              id={`skills-tab-${id}`}
              aria-selected={isActive}
              aria-controls={`skills-panel-${id}`}
              onClick={() => setActiveId(id)}
              className={`flex-1 border-b-2 pb-3 pt-4 transition-colors hover:text-secondary md:pb-4 md:pt-5 ${isActive ? 'border-secondary text-secondary' : 'border-primary'}`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {tabs.map(({ id, panel }) => (
        <div
          key={id}
          role='tabpanel'
          id={`skills-panel-${id}`}
          aria-labelledby={`skills-tab-${id}`}
          hidden={id !== activeId}
        >
          {panel}
        </div>
      ))}
    </div>
  )
}
