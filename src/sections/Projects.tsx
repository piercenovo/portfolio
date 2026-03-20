'use client'

import SlideUp from '@/components/SlideUp'
import { useLanguage } from '@/contexts/LanguageContext'
import { projectsSection } from '@/data/sections'
import { ProjectCard } from '../components/ProjectCard'
import Section from '../components/Section'

export function Projects() {
  const { t } = useLanguage()
  const { title, descriptions } = t.projects
  const { projects } = projectsSection

  const translatedProjects = projects.map((project, i) => ({
    ...project,
    description: descriptions[i] ?? project.description
  }))

  return (
    <Section id='proyectos' title={title} number='01'>
      <SlideUp delay={120}>
        <article className='m-auto mt-2 grid gap-8 md:gap-10 xl:grid-cols-2 2xl:grid-cols-2 max-w-md sm:max-w-xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl'>
          {translatedProjects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </article>
      </SlideUp>
    </Section>
  )
}
