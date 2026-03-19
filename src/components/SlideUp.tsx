'use client'

import useReference from '@/hooks/useReference'
import { SlideUpProps } from '@/interfaces/props'
export default function SlideUp({ children, delay = 0 }: SlideUpProps) {
  const { ref } = useReference()

  return (
    <div
      ref={ref}
      className='relative opacity-0 w-full flex flex-col items-center'
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
