import type { ReactNode } from 'react'

export interface ButtonProps {
  title: string
  href: string
  children: string
}

export interface MenuProps {
  onClick: (event: React.MouseEvent) => void
  navbarCollapsed: boolean
}

export interface SlideUpProps {
  offset?: string
  delay?: number
  children?: ReactNode
}

export interface SectionProps {
  id: string
  title: string
  number: string
  children: React.JSX.Element
}
