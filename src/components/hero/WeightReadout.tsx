'use client'

import { useEffect, useRef, useState } from 'react'

// Illustrative truck weights; the panel is labeled as a simulation
const TARGETS = [24380, 18720, 31260]
const JITTER_STEPS = 14
const STEP_MS = 130
const HOLD_MS = 5200

type WeightReadoutProps = {
  unit: string
  stabilizingLabel: string
  stableLabel: string
}

const formatWeight = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export function WeightReadout({ unit, stabilizingLabel, stableLabel }: WeightReadoutProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [reading, setReading] = useState(TARGETS[0])
  const [isStable, setIsStable] = useState(true)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timers: number[] = []
    let cycle = 0
    let isVisible = false
    let isRunning = false

    const clearTimers = () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      timers = []
    }

    const runCycle = () => {
      isRunning = true
      const target = TARGETS[cycle % TARGETS.length]
      cycle += 1
      setIsStable(false)

      for (let step = 0; step < JITTER_STEPS; step++) {
        timers.push(window.setTimeout(() => {
          const spread = (JITTER_STEPS - step) * 60
          setReading(Math.round((target + (Math.random() * 2 - 1) * spread) / 10) * 10)
        }, step * STEP_MS))
      }

      timers.push(window.setTimeout(() => {
        setReading(target)
        setIsStable(true)
      }, JITTER_STEPS * STEP_MS))

      timers.push(window.setTimeout(() => {
        if (isVisible) runCycle()
        else isRunning = false
      }, JITTER_STEPS * STEP_MS + HOLD_MS))
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !isRunning) runCycle()
      if (!isVisible && isRunning) {
        clearTimers()
        isRunning = false
        setReading(TARGETS[Math.max(cycle - 1, 0) % TARGETS.length])
        setIsStable(true)
      }
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [])

  return (
    <div ref={ref} className='mt-5'>
      <p aria-hidden className='flex items-baseline gap-2 font-mono tabular'>
        <span className={`text-[clamp(2.25rem,3.6vw,3rem)] leading-none font-semibold tracking-[-0.03em] whitespace-nowrap transition-colors duration-300 ${isStable ? 'text-ink' : 'text-unstable'}`}>
          {formatWeight(reading)}
        </span>
        <span className='text-sm text-ink-muted'>{unit}</span>
      </p>
      <p className='mt-3 flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.08em] uppercase'>
        <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${isStable ? 'bg-live' : 'status-blink bg-unstable'}`} />
        <span className={isStable ? 'text-live' : 'text-unstable'}>{isStable ? stableLabel : stabilizingLabel}</span>
      </p>
    </div>
  )
}
