'use client'

import { PowerOn } from '@/components/ui/PowerOn'
import { Segmented } from '@/components/ui/Segmented'
import type { Project } from '@/types/content'
import { useState, type CSSProperties, type ReactNode } from 'react'
import { flushSync } from 'react-dom'

type ProjectFilter = 'all' | Project['kind']

type ProjectItem = {
  slug: string
  kind: Project['kind']
  card: ReactNode
}

type ProjectsFilterProps = {
  items: ProjectItem[]
  labels: Record<ProjectFilter, string>
  ariaLabel: string
}

const FILTERS: ProjectFilter[] = ['all', 'web', 'mobile']

export function ProjectsFilter({ items, labels, ariaLabel }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const countFor = (filter: ProjectFilter) =>
    filter === 'all' ? items.length : items.filter((item) => item.kind === filter).length
  const options = FILTERS
    .filter((filter) => countFor(filter) > 0)
    .map((filter) => ({ id: filter, label: labels[filter], count: countFor(filter) }))

  const visibleItems = items.filter((item) => activeFilter === 'all' || item.kind === activeFilter)

  // Cards regroup with a view transition where supported; otherwise the swap is instant
  const changeFilter = (filter: ProjectFilter) => {
    if (filter === activeFilter) return
    const canTransition = typeof document.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canTransition) {
      setActiveFilter(filter)
      return
    }
    document.startViewTransition(() => {
      flushSync(() => setActiveFilter(filter))
    })
  }

  return (
    <div className='flex flex-col gap-8'>
      <Segmented
        label={ariaLabel}
        idPrefix='projects-tab'
        panelId='projects-panel'
        options={options}
        value={activeFilter}
        onChange={changeFilter}
      />

      <div id='projects-panel' role='tabpanel' aria-labelledby={`projects-tab-${activeFilter}`}>
        <ul className='grid gap-5 md:grid-cols-2'>
          {visibleItems.map(({ slug, card }, index) => (
            <PowerOn
              key={slug}
              as='li'
              className='boot'
              style={{ viewTransitionName: `project-${slug}`, '--i': index % 2 } as CSSProperties}
            >
              {card}
            </PowerOn>
          ))}
        </ul>
      </div>
    </div>
  )
}
