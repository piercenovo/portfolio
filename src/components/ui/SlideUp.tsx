'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type SlideUpProps = {
  children: ReactNode
  delay?: number
}

export function SlideUp({ children, delay = 0 }: SlideUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px 60px 0px', threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className='reveal relative flex w-full flex-col items-center'
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
