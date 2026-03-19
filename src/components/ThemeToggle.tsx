'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='relative h-[17px] w-[17px] text-primary-light hover:text-secondary transition-colors duration-200'
    >
      {/* Sun — visible in dark mode (invites switching to light) */}
      <Sun
        size={17}
        strokeWidth={1.5}
        className={`absolute inset-0 fill-none transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
        }`}
      />
      {/* Moon — visible in light mode (invites switching to dark) */}
      <Moon
        size={17}
        strokeWidth={1.5}
        className={`absolute inset-0 fill-none transition-all duration-300 ${
          !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      />
    </button>
  )
}
