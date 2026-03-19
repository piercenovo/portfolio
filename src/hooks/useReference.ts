import { useEffect, useRef } from 'react'

export default function useReference() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-slideUpCubiBezier')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px 60px 0px', threshold: 0.1 }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return { ref }
}
