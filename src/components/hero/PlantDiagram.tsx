import { brandStyle, TechIcon } from '@/components/ui/TechIcon'
import type { TechId } from '@/content/techs'
import type { Dictionary } from '@/i18n/dictionaries/types'
import type { CSSProperties } from 'react'
import { PlantLive } from './PlantLive'
import { WeightReadout } from './WeightReadout'

type StationKey = keyof Dictionary['hero']['stations']

const STATIONS: { key: StationKey; techs: TechId[] }[] = [
  { key: 'requirements', techs: [] },
  { key: 'architecture', techs: [] },
  { key: 'api', techs: ['nestjs', 'nodejs'] },
  { key: 'web', techs: ['nextjs', 'react'] },
  { key: 'mobile', techs: ['flutter', 'dart'] },
  { key: 'deploy', techs: ['docker', 'githubactions'] }
]

const indexStyle = (index: number) => ({ '--i': index }) as CSSProperties

function Wire({ index }: { index: number }) {
  return (
    <span aria-hidden className='wire-y absolute -top-4 left-6 h-4 w-px overflow-hidden bg-line-strong' style={indexStyle(index)}>
      <span className='signal-y block h-1/4 w-px bg-live' style={indexStyle(index)} />
    </span>
  )
}

export function PlantDiagram({ hero }: { hero: Dictionary['hero'] }) {
  const { stations, scale } = hero
  const readoutIndex = STATIONS.length

  return (
    <PlantLive label={hero.diagramLabel}>
      <div className='grid gap-y-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-x-8'>
        <ol className='contents'>
          {STATIONS.map(({ key, techs }, index) => (
            <li
              key={key}
              data-station
              style={{ ...indexStyle(index), ...(techs[0] ? brandStyle(techs[0]) : {}) }}
              className='group relative flex items-center justify-between gap-4 rounded-[3px] border border-line bg-panel px-4 py-3 transition-colors duration-200 hover:border-(--brand,var(--color-live)) light:hover:border-(--brand-light,var(--color-live)) lg:col-start-1'
            >
              {index > 0 && <Wire index={index} />}
              <div className='flex min-w-0 items-center gap-3'>
                <span aria-hidden className='h-1.5 w-1.5 shrink-0 rounded-full bg-live' />
                <div className='min-w-0'>
                  <p className='text-[0.9375rem] leading-tight font-medium text-ink'>{stations[key].label}</p>
                  <p className='font-mono text-[0.6875rem] tracking-[0.04em] text-ink-muted'>{stations[key].detail}</p>
                </div>
              </div>
              {techs.length > 0 && (
                <span className='flex shrink-0 items-center gap-2.5'>
                  {techs.map((techId) => (
                    <TechIcon key={techId} id={techId} className='h-4 w-4' />
                  ))}
                </span>
              )}
            </li>
          ))}
        </ol>

        <div
          data-station
          style={indexStyle(2)}
          className='relative rounded-[3px] border border-line bg-panel p-5 lg:col-start-2 lg:row-span-4 lg:row-start-3 lg:self-start'
        >
          <span aria-hidden className='wire-y absolute -top-4 left-6 h-4 w-px overflow-hidden bg-line-strong lg:hidden' style={indexStyle(readoutIndex)}>
            <span className='signal-y block h-1/4 w-px bg-live' style={indexStyle(readoutIndex)} />
          </span>
          <span aria-hidden className='wire-x absolute top-7 right-full hidden h-px w-8 overflow-hidden bg-line-strong lg:block'>
            <span className='signal-x block h-px w-1/4 bg-live' />
          </span>

          <div className='flex flex-wrap items-center justify-between gap-2 font-mono text-[0.6875rem] tracking-[0.08em] uppercase'>
            <span className='whitespace-nowrap text-ink-muted'>{scale.title}</span>
            <span className='rounded-[2px] border border-line-strong px-1.5 py-0.5 text-ink-muted'>{scale.simulation}</span>
          </div>

          <WeightReadout unit={scale.unit} stabilizingLabel={scale.stabilizing} stableLabel={scale.stable} />

          <p className='mt-5 border-t border-line pt-3 font-mono text-[0.6875rem] tracking-[0.02em] text-ink-muted'>
            {scale.caption}
          </p>
        </div>
      </div>
    </PlantLive>
  )
}
