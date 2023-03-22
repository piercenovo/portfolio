'use client'

import { projectsSection } from '@/data/sections'
import { getId } from '@/utils/helper'
import { ProjectCard } from './ProjectCard'
import Section from './Section'

export function Projects() {
  const { projects, title } = projectsSection
  return (
    <Section id='projects' title={title} number='02'>
      <article className='m-auto mt-2 grid gap-8 md:gap-10 xl:grid-cols-2 2xl:grid-cols-3 max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl'>
        {projects.map((project) => (
          <ProjectCard {...project} key={getId()} />
        ))}
      </article>
    </Section>
  )
}
