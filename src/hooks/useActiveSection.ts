import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState('')
  const idsKey = ids.join(',')

  useEffect(() => {
    const elements = idsKey
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const isNearTop = () => window.scrollY < window.innerHeight * 0.5

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(isNearTop() ? '' : entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    const handleScroll = () => {
      if (isNearTop()) setActiveId('')
    }

    elements.forEach((element) => observer.observe(element))
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [idsKey])

  return activeId
}
