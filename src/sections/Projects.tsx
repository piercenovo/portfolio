import { ProjectCard } from '@/components/projects/ProjectCard'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { projects } from '@/content/projects'
import type { SectionProps } from '@/types/section'
import { ProjectsFilter } from './ProjectsFilter'

export function Projects({ lang, dict }: SectionProps) {
  const items = projects.map((project) => ({
    slug: project.slug,
    kind: project.kind,
    card: <ProjectCard project={project} lang={lang} labels={dict.projects} />
  }))

  return (
    <Section id='projects' title={dict.projects.title}>
      <SlideUp delay={120}>
        <ProjectsFilter items={items} labels={dict.projects.filters} ariaLabel={dict.projects.filterLabel} />
      </SlideUp>
    </Section>
  )
}
