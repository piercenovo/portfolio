'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type PlantLiveProps = {
  label: string
  children: ReactNode
}

// Runs the looping signal only while the diagram is on screen
export function PlantLive({ label, children }: PlantLiveProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.playing = String(entry.isIntersecting)
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <figure ref={ref} aria-label={label} className='plant w-full'>
      {children}
    </figure>
  )
}
