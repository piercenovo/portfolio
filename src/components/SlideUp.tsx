'use client'

import useReference from '@/hooks/useReference'
import { SlideUpProps } from '@/interfaces/props'
export default function SlideUp({ children }: SlideUpProps) {
  const { ref } = useReference()

  return (
    <div ref={ref} className='relative opacity-0'>
      {children}
    </div>
  )
}
