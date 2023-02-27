import { useEffect, useRef } from 'react'

export default function useReference() {
  const ref = useRef(null)
  const offset = '0px'
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-slideUpCubiBezier')
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return {
    ref,
    offset
  }
}
