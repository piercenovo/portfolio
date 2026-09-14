import { ProjectCard } from '@/components/projects/ProjectCard'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { projects } from '@/content/projects'
import type { SectionProps } from '@/types/section'

export function Projects({ lang, dict }: SectionProps) {
  return (
    <Section id='projects' title={dict.projects.title}>
      <SlideUp delay={120}>
        <ul className='m-auto mt-2 grid max-w-md gap-8 sm:max-w-xl md:gap-10 lg:max-w-3xl xl:max-w-6xl xl:grid-cols-2 2xl:max-w-7xl'>
          {projects.map((project) => (
            <li key={project.slug} className='flex justify-center'>
              <ProjectCard project={project} lang={lang} labels={dict.projects} />
            </li>
          ))}
        </ul>
      </SlideUp>
    </Section>
  )
}
