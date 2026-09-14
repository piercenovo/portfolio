'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop({ label }: { label: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type='button'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={label}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-8 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-primary-darker text-secondary shadow-lg transition-all duration-300 hover:scale-110 hover:bg-secondary-light ${isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <ChevronUp size={18} strokeWidth={2} className='fill-none' aria-hidden />
    </button>
  )
}
