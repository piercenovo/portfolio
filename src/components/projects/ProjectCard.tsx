import { sfmono } from '@/app/font'
import { SvgIcon } from '@/components/ui/SvgIcon'
import { TechIcon } from '@/components/ui/TechIcon'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import type { Project } from '@/types/content'
import { ExternalLink, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { siGithub } from 'simple-icons'

type ProjectCardProps = {
  project: Project
  lang: Locale
  labels: Dictionary['projects']
}

const linkClassName = 'block text-primary transition-colors duration-200 hover:text-secondary'

export function ProjectCard({ project, lang, labels }: ProjectCardProps) {
  const { name, year, cover, links, techs, summary } = project
  const primaryHref = links.live ?? links.store ?? links.repo

  const image = (
    <Image
      src={cover}
      alt={name}
      placeholder='blur'
      className='h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-[1.05] group-active:scale-[1.05]'
    />
  )

  return (
    <article className='group w-full max-w-[28rem] overflow-hidden rounded-md bg-primary-dark shadow-sm transition-all duration-200 hover:drop-shadow-white active:drop-shadow-white'>
      <div className='h-[220px] overflow-hidden'>
        {primaryHref
          ? <a href={primaryHref} target='_blank' rel='noopener noreferrer'>{image}</a>
          : image}
      </div>

      <div className='flex flex-col justify-center gap-1 p-4 py-3'>
        <div className={`${sfmono.className} flex items-center justify-between`}>
          <ul className='flex items-center gap-4' aria-label={labels.stack}>
            {techs.map((techId) => (
              <li key={techId}>
                <TechIcon id={techId} className='w-6 group-hover:drop-shadow-white' />
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-1.5'>
            {links.repo && (
              <a href={links.repo} target='_blank' rel='noopener noreferrer' aria-label={labels.repo} title={labels.repo} className={linkClassName}>
                <SvgIcon icon={siGithub} className='h-5 w-5 fill-current' />
              </a>
            )}
            {links.live && (
              <a href={links.live} target='_blank' rel='noopener noreferrer' aria-label={labels.live} title={labels.live} className={linkClassName}>
                <ExternalLink size={20} strokeWidth={1.75} className='fill-none' aria-hidden />
              </a>
            )}
            {links.store && (
              <a href={links.store} target='_blank' rel='noopener noreferrer' aria-label={labels.store} title={labels.store} className={linkClassName}>
                <Smartphone size={20} strokeWidth={1.75} className='fill-none' aria-hidden />
              </a>
            )}
          </div>
        </div>

        <h3 className='mt-3 flex justify-between text-xl font-medium capitalize duration-200 group-hover:text-secondary group-active:text-secondary'>
          <span>{name}</span>
          <span className='mr-1'>{year}</span>
        </h3>
        <p className='text-lg'>{summary[lang]}</p>
      </div>
    </article>
  )
}
