'use client'

import { sfmono } from '@/app/font'
import { skillsSection } from '@/data/sections'
import { getId } from '@/utils/helper'
import { useState } from 'react'
import Section from '../components/Section'

export function Skills() {
  const [activeSkill, setActiveSkill] = useState(0)

  const { title, skills } = skillsSection
  const { name, technologies } = skills[activeSkill]

  return (
    <Section id='skills' title={title} number='02'>
      <article
        className='mx-auto flex w-full max-w-lg flex-col gap-2 sm:max-w-xl xl:max-w-2xl'
      >
        <div className='relative'>
          <div className='flex text-base md:text-lg lg:text-xl font-medium'>
            {
              skills.map(({ name }, i) => (
                <button
                  key={getId()}
                  data-skill={name}
                  data-skill-index={i}
                  className={`flex-1 pb-3 pt-4 md:pt-5 md:pb-4 border-b-2 hover:text-secondary transition-transform ${i === activeSkill ? 'text-secondary border-secondary' : 'border-primary'}`}
                  onClick={() => setActiveSkill(i)}
                >
                  {name}
                </button>
              ))
            }
          </div>
        </div>

        <div key={getId()} data-skill-container={name} className='grid grid-cols-3'>
          {technologies.map(({ name, svg, hover }) => (
            <button key={name} className='group flex flex-col items-center gap-3 py-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={svg.viewBox}
                className={`${hover.fill} group-hover:drop-shadow-white w-8 transition-all duration-300`}
              >
                <path d={svg.path} />
              </svg>

              <p
                className={`text-center text-xs md:text-sm font-semibold transition-all duration-300 group-hover:[text-shadow:0px_0px_10px_#ffffff50] ${sfmono.className} ${hover.text}`}
              >
                {name}
              </p>
            </button>
          ))}
        </div>

      </article>
    </Section>
  )
}
