'use client'

import { Segmented } from '@/components/ui/Segmented'
import { useState, type ReactNode } from 'react'

type SkillTab = {
  id: string
  label: string
  panel: ReactNode
}

type SkillsTabsProps = {
  label: string
  tabs: SkillTab[]
}

const panelIdFor = (id: string) => `skills-panel-${id}`

export function SkillsTabs({ label, tabs }: SkillsTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')

  return (
    <div className='flex flex-col gap-8'>
      <Segmented
        label={label}
        idPrefix='skills-tab'
        panelId={panelIdFor}
        options={tabs.map(({ id, label: tabLabel }) => ({ id, label: tabLabel }))}
        value={activeId}
        onChange={setActiveId}
      />

      {tabs.map(({ id, panel }) => (
        <div
          key={id}
          id={panelIdFor(id)}
          role='tabpanel'
          aria-labelledby={`skills-tab-${id}`}
          hidden={id !== activeId}
        >
          {panel}
        </div>
      ))}
    </div>
  )
}
