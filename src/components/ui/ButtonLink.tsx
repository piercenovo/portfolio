import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  title?: string
  external?: boolean
}

const variants = {
  primary: 'bg-live text-ground hover:bg-live-strong',
  secondary: 'border border-line-strong text-ink hover:border-live hover:text-live'
}

export function ButtonLink({ href, children, variant = 'primary', title, external = false }: ButtonLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2.5 rounded-[3px] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${variants[variant]}`}
    >
      {children}
    </a>
  )
}
