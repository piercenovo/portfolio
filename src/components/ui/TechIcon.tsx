import { techs, type TechId } from '@/content/techs'
import type { Tech } from '@/types/content'
import type { CSSProperties } from 'react'
import { SvgIcon } from './SvgIcon'

// `--brand` powers a unit on the dark theme; `--brand-light` on the light theme
export const brandStyle = (id: TechId) => {
  const { color, lightColor }: Tech = techs[id]
  return { '--brand': color, '--brand-light': lightColor ?? color } as CSSProperties
}

type TechIconProps = {
  id: TechId
  className?: string
  decorative?: boolean
}

// Idle icons sit in muted ink; a hovered or focused unit powers them in their brand color
export function TechIcon({ id, className = 'h-5 w-5', decorative = false }: TechIconProps) {
  const { name, icon } = techs[id]

  return (
    <SvgIcon
      icon={icon}
      title={decorative ? undefined : name}
      style={brandStyle(id)}
      className={`text-ink-muted transition-colors duration-200 group-hover:text-(--brand) group-focus-within:text-(--brand) group-data-powered:text-(--brand) light:group-hover:text-(--brand-light) light:group-focus-within:text-(--brand-light) light:group-data-powered:text-(--brand-light) ${className}`}
    />
  )
}
