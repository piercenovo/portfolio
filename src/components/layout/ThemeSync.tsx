'use client'

import { useLayoutEffect } from 'react'
import { restoreTheme } from './theme'

// Rendered inside the root layout, so it remounts with it on every language
// switch; the layout effect restores data-theme before the browser paints
export function ThemeSync() {
  useLayoutEffect(() => {
    restoreTheme()
  }, [])

  return null
}
