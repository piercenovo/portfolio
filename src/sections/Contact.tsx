'use client'

import SlideUp from '@/components/SlideUp'
import { useLanguage } from '@/contexts/LanguageContext'
import { socials } from '@/data/sections'
import { sfmono } from '@/app/font'
import { Copy, Check, Mail } from 'lucide-react'
import { useState } from 'react'
import Section from '../components/Section'

export function Contact() {
  const { t, lang } = useLanguage()
  const { title, description, email, copied } = t.contact
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Section id='contacto' title={title} number='05'>
      <SlideUp delay={120}>
        <article className='flex flex-col items-center gap-8 pb-32 max-w-lg sm:max-w-xl'>
          <p className='text-center text-lg lg:text-xl'>
            {description}
          </p>

          <div className='flex flex-col items-center gap-4 w-full'>
            {/* Email pill */}
            <div className='relative'>
              {isCopied && (
                <span className={`${sfmono.className} absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-secondary border border-secondary/30 bg-primary-darker rounded px-2.5 py-1 whitespace-nowrap`}>
                  {copied}
                </span>
              )}
              <button
                onClick={handleCopy}
                className={`${sfmono.className} flex items-center gap-2.5 border border-secondary/30 hover:border-secondary rounded-full px-5 py-2.5 text-sm text-primary-light hover:text-secondary transition-all duration-200`}
              >
                <Mail size={13} className='fill-none shrink-0' />
                <span>{email}</span>
                {isCopied
                  ? <Check size={13} className='text-secondary fill-none shrink-0' />
                  : <Copy size={13} className='fill-none shrink-0' />
                }
              </button>
            </div>

            {/* Divider */}
            <div className='flex items-center gap-3 w-full max-w-xs text-primary/40'>
              <div className='flex-1 h-px bg-primary/20' />
              <span className={`${sfmono.className} text-[10px] tracking-widest uppercase`}>
                {lang === 'es' ? 'o' : 'or'}
              </span>
              <div className='flex-1 h-px bg-primary/20' />
            </div>

            {/* Social links */}
            <div className='flex gap-7'>
              {socials.map(({ name, href, svg, hover }) => (
                <a
                  key={name}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={name}
                  className='group transition-transform duration-200 hover:-translate-y-1'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox={svg.viewBox}
                    className={`h-5 w-5 transition-colors duration-300 ${hover.fill}`}
                  >
                    <path fillRule='evenodd' d={svg.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </article>
      </SlideUp>
    </Section>
  )
}
