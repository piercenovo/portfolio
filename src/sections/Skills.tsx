import { PowerOn } from '@/components/ui/PowerOn'
import { Section } from '@/components/ui/Section'
import { brandStyle, TechIcon } from '@/components/ui/TechIcon'
import { skillGroups } from '@/content/skills'
import { techs } from '@/content/techs'
import type { SectionProps } from '@/types/section'
import type { CSSProperties } from 'react'
import { SkillsTabs } from './SkillsTabs'

export function Skills({ lang, dict }: SectionProps) {
  const tabs = skillGroups.map((group) => ({
    id: group.id,
    label: group.label[lang],
    panel: (
      <PowerOn as='ul' className='grid grid-cols-3 gap-px overflow-hidden rounded-[3px] border border-line bg-line lg:grid-cols-9'>
        {group.techs.map((techId, index) => (
          <li
            key={techId}
            data-unit
            style={{ ...brandStyle(techId), '--i': index, '--step': '45ms' } as CSSProperties}
            className='boot group flex flex-col items-center gap-3 bg-panel px-2 py-6 text-center transition-colors duration-200 hover:bg-raised data-powered:bg-raised'
          >
            <TechIcon id={techId} decorative className='h-7 w-7' />
            <span className='font-mono text-[0.6875rem] leading-tight tracking-[0.04em] text-ink-muted uppercase transition-colors duration-200 group-hover:text-ink group-data-powered:text-ink'>
              {techs[techId].name}
            </span>
          </li>
        ))}
      </PowerOn>
    )
  }))

  return (
    <Section id='skills' title={dict.skills.title}>
      <SkillsTabs label={dict.skills.groupsLabel} tabs={tabs} />
    </Section>
  )
}
