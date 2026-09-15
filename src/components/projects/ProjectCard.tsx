import { SvgIcon } from '@/components/ui/SvgIcon'
import { TechIcon } from '@/components/ui/TechIcon'
import { Tooltip } from '@/components/ui/Tooltip'
import { techs as techRegistry } from '@/content/techs'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/types'
import type { Project } from '@/types/content'
import { ArrowUpRight, Lock } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { siGithub, siGoogleplay } from 'simple-icons'

type ProjectCardProps = {
  project: Project
  lang: Locale
  labels: Dictionary['projects']
}

type CardLink = { href: string; label: string; icon: ReactNode }

// Links share one fixed slot as icon buttons so every card keeps the same rhythm
function IconLink({ href, label, icon }: CardLink) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='group/tip relative grid h-9 w-9 place-items-center rounded-[3px] border border-line text-ink-muted transition-colors duration-200 hover:border-live hover:text-live focus-visible:border-live focus-visible:text-live'
    >
      {icon}
      <Tooltip label={label} align='end' />
    </a>
  )
}

export function ProjectCard({ project, lang, labels }: ProjectCardProps) {
  const { name, kind, year, cover, links, techs, summary } = project
  const candidateLinks: (CardLink | null)[] = [
    links.live ? { href: links.live, label: labels.live, icon: <ArrowUpRight size={16} strokeWidth={2} aria-hidden /> } : null,
    links.repo ? { href: links.repo, label: labels.repo, icon: <SvgIcon icon={siGithub} className='h-4 w-4' /> } : null,
    links.store ? { href: links.store, label: labels.store, icon: <SvgIcon icon={siGoogleplay} className='h-4 w-4' /> } : null
  ]
  const cardLinks = candidateLinks.filter((link): link is CardLink => link !== null)

  return (
    <article data-unit className='group flex h-full flex-col rounded-[3px] border border-line bg-panel transition-colors duration-200 hover:border-line-strong data-powered:border-line-strong'>
      <div className='rounded-t-[3px] border-b border-line bg-ground p-3 sm:p-4'>
        <div className='boot-warm overflow-hidden rounded-[2px] border border-line'>
          <Image
            src={cover}
            alt={name}
            placeholder='blur'
            className='aspect-[16/10] w-full object-cover object-top transition-[scale] duration-500 ease-out will-change-[scale] group-hover:scale-[1.02] group-data-powered:scale-[1.02]'
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5 sm:p-6'>
        <div className='flex min-h-9 items-center justify-between gap-4'>
          <p className='flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-muted uppercase'>
            <span className='tabular'>{year}</span>
            <span aria-hidden className='h-3 w-px bg-line-strong' />
            <span>{labels.filters[kind]}</span>
          </p>

          {cardLinks.length > 0
            ? (
              <ul className='flex items-center gap-2'>
                {cardLinks.map((link) => (
                  <li key={link.href}>
                    <IconLink {...link} />
                  </li>
                ))}
              </ul>
              )
            : (
              <span className='inline-flex items-center gap-1.5 rounded-[2px] border border-line px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-ink-muted uppercase'>
                <Lock size={11} strokeWidth={2} aria-hidden />
                {labels.private}
              </span>
              )}
        </div>

        <div>
          <h3 className='text-2xl font-medium tracking-[-0.02em] text-ink'>{name}</h3>
          <p className='mt-2 max-w-[65ch] text-[0.9875rem] leading-[1.55] text-ink-muted'>{summary[lang]}</p>
        </div>

        <ul aria-label={labels.stack} className='mt-auto flex flex-wrap items-center gap-1.5 border-t border-line pt-3'>
          {techs.map((techId) => (
            <li key={techId} data-unit className='group/tip relative grid h-8 w-8 place-items-center rounded-[3px] transition-colors duration-200 hover:bg-raised data-powered:bg-raised'>
              <TechIcon id={techId} className='h-5 w-5 transition-transform duration-300 ease-(--ease-out-expo) group-hover/tip:-translate-y-0.5 group-data-powered/tip:-translate-y-0.5' />
              <Tooltip label={techRegistry[techId].name} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
