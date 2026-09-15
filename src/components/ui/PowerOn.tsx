'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type PowerOnProps = {
  children: ReactNode
  as?: 'div' | 'li' | 'ul'
  className?: string
  style?: CSSProperties
}

// Visible by default; only once JavaScript runs is the unit switched off and
// then powered on when it enters the viewport. Reduced motion keeps it on.
export function PowerOn({ children, as: Component = 'div', className, style }: PowerOnProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    element.dataset.power = 'off'
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.power = 'on'
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Component ref={ref as never} className={className} style={style}>
      {children}
    </Component>
  )
}
