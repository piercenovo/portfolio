import { sfmono } from '@/app/font'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { brandStyle, TechIcon } from '@/components/ui/TechIcon'
import { skillGroups } from '@/content/skills'
import { techs } from '@/content/techs'
import type { SectionProps } from '@/types/section'
import { SkillsTabs } from './SkillsTabs'

export function Skills({ lang, dict }: SectionProps) {
  const tabs = skillGroups.map((group) => ({
    id: group.id,
    label: group.label[lang],
    panel: (
      <ul className='grid grid-cols-3'>
        {group.techs.map((techId) => (
          <li key={techId} style={brandStyle(techId)} className='group flex flex-col items-center gap-3 py-6'>
            <TechIcon
              id={techId}
              decorative
              className='h-8 w-8 group-hover:scale-[1.07] group-hover:drop-shadow-white group-active:scale-[1.07] group-active:drop-shadow-white'
            />
            <span className={`${sfmono.className} text-center text-xs font-semibold transition-all duration-300 group-hover:text-(--brand) group-hover:[text-shadow:0px_0px_10px_#ffffff50] group-active:text-(--brand) md:text-sm`}>
              {techs[techId].name}
            </span>
          </li>
        ))}
      </ul>
    )
  }))

  return (
    <Section id='skills' title={dict.skills.title}>
      <SlideUp delay={120}>
        <SkillsTabs tabs={tabs} />
      </SlideUp>
    </Section>
  )
}
