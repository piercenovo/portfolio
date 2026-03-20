'use client'

import SlideUp from '@/components/SlideUp'
import { useLanguage } from '@/contexts/LanguageContext'
import { socials } from '@/data/sections'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import Section from '../components/Section'

export function Contact() {
  const { t } = useLanguage()
  const { title, description, cta, email, copied } = t.contact
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Section id='contacto' title={title} number='05'>
      <SlideUp delay={120}>
        <article className='flex flex-col items-center gap-10 pb-32'>
          <p className='mx-auto max-w-lg text-center sm:max-w-xl text-lg lg:text-xl'>
            {description}
          </p>

          <Button title={cta.title} href={`mailto:${email}`}>{cta.label}</Button>

          {/* Email copy */}
          <button
            onClick={handleCopy}
            className='flex items-center gap-2 text-primary-light hover:text-secondary transition-colors duration-200 group'
          >
            <span className='text-sm sm:text-base'>{email}</span>
            <span className='transition-colors duration-200'>
              {isCopied
                ? <Check size={15} className='text-secondary fill-none' />
                : <Copy size={15} className='fill-none group-hover:text-secondary' />
              }
            </span>
            {isCopied && (
              <span className='text-xs text-secondary'>{copied}</span>
            )}
          </button>

          {/* Social links */}
          <div className='flex gap-6'>
            {socials.map(({ name, href, svg, hover }) => (
              <a
                key={name}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={name}
                className={`group transition-transform duration-200 hover:-translate-y-1`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox={svg.viewBox}
                  className={`h-6 w-6 transition-colors duration-300 ${hover.fill}`}
                >
                  <path fillRule='evenodd' d={svg.path} />
                </svg>
              </a>
            ))}
          </div>
        </article>
      </SlideUp>
    </Section>
  )
}
