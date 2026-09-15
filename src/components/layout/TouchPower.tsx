'use client'

import { useEffect } from 'react'

// Touch screens have no hover, so a tap powers the tapped unit (and the units
// that contain it) the way hovering does on desktop. Elements opt in with
// `data-unit`; styles pair each `hover:` with a `data-powered` variant. The
// powered state stays until the next tap elsewhere. Mouse input is ignored.
export function TouchPower() {
  useEffect(() => {
    let powered: HTMLElement[] = []

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' || !(event.target instanceof Element)) return

      const next: HTMLElement[] = []
      for (let unit = event.target.closest<HTMLElement>('[data-unit]'); unit; unit = unit.parentElement?.closest<HTMLElement>('[data-unit]') ?? null) {
        next.push(unit)
      }

      powered.filter((unit) => !next.includes(unit)).forEach((unit) => delete unit.dataset.powered)
      next.forEach((unit) => { unit.dataset.powered = '' })
      powered = next
    }

    document.addEventListener('pointerdown', handlePointerDown, { passive: true })
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return null
}
