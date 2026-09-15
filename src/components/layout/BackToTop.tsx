'use client'

import { ArrowUp } from 'lucide-react'
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
      className={`fixed right-5 bottom-6 z-30 flex h-11 w-11 items-center justify-center rounded-[3px] border border-line-strong bg-panel text-ink transition-[opacity,transform,color,border-color] duration-300 ease-(--ease-out-expo) hover:border-live hover:text-live ${isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <ArrowUp size={18} strokeWidth={2} aria-hidden />
    </button>
  )
}
