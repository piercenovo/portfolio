'use client'

import type { Project } from '@/types/content'
import { useState, type ReactNode } from 'react'

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
  const filters = FILTERS.filter((filter) => countFor(filter) > 0)

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div role='tablist' aria-label={ariaLabel} className='flex w-full max-w-lg text-base font-medium sm:max-w-xl md:text-lg'>
        {filters.map((filter) => {
          const isActive = filter === activeFilter

          return (
            <button
              key={filter}
              type='button'
              role='tab'
              id={`projects-tab-${filter}`}
              aria-selected={isActive}
              aria-controls='projects-panel'
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 border-b-2 pb-3 pt-4 transition-colors hover:text-secondary md:pb-4 ${isActive ? 'border-secondary text-secondary' : 'border-primary'}`}
            >
              {labels[filter]} <span className='text-sm opacity-60'>({countFor(filter)})</span>
            </button>
          )
        })}
      </div>

      <div id='projects-panel' role='tabpanel' aria-labelledby={`projects-tab-${activeFilter}`} className='w-full'>
        <ul className='m-auto grid max-w-md gap-8 sm:max-w-xl md:gap-10 lg:max-w-3xl xl:max-w-6xl xl:grid-cols-2 2xl:max-w-7xl'>
          {items.map(({ slug, kind, card }) => {
            const isVisible = activeFilter === 'all' || kind === activeFilter

            return (
              <li key={slug} hidden={!isVisible} className={isVisible ? 'flex justify-center' : 'hidden'}>
                {card}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
