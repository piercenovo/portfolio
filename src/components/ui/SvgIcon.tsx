import type { IconData } from '@/types/content'
import type { CSSProperties } from 'react'

type SvgIconProps = {
  icon: IconData
  className?: string
  title?: string
  style?: CSSProperties
}

export function SvgIcon({ icon, className = '', title, style }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={icon.viewBox ?? '0 0 24 24'}
      className={`fill-current ${className}`}
      style={style}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  )
}
