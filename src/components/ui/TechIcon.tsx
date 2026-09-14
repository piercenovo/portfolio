import { techs, type TechId } from '@/content/techs'
import type { CSSProperties } from 'react'
import { SvgIcon } from './SvgIcon'

export const brandStyle = (id: TechId) => ({ '--brand': techs[id].color }) as CSSProperties

type TechIconProps = {
  id: TechId
  className?: string
  decorative?: boolean
}

export function TechIcon({ id, className = 'h-6 w-6', decorative = false }: TechIconProps) {
  const { name, icon } = techs[id]

  return (
    <SvgIcon
      icon={icon}
      title={decorative ? undefined : name}
      style={brandStyle(id)}
      className={`fill-primary transition-all duration-300 group-hover:fill-(--brand) group-active:fill-(--brand) ${className}`}
    />
  )
}
