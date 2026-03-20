'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'es' ? 'Volver al inicio' : 'Back to top'}
      className={`fixed bottom-8 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-primary-darker text-secondary shadow-lg transition-all duration-300 hover:bg-secondary-light hover:scale-110 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={18} strokeWidth={2} className='fill-none' />
    </button>
  )
}
