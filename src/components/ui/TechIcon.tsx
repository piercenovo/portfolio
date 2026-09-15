import { techs, type TechId } from '@/content/techs'
import type { CSSProperties } from 'react'
import { SvgIcon } from './SvgIcon'

export const brandStyle = (id: TechId) => ({ '--brand': techs[id].color }) as CSSProperties

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
      className={`text-ink-muted transition-colors duration-200 group-hover:text-(--brand) group-focus-within:text-(--brand) ${className}`}
    />
  )
}
