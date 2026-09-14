import { sfmono } from '@/app/font'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  title: string
  children: ReactNode
}

export function ButtonLink({ href, title, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
      className={`${sfmono.className} rounded border border-secondary px-3 py-2 text-sm text-secondary shadow-[0px_0px_2.5px_0px] shadow-secondary transition-colors duration-300 [text-shadow:0px_0px_2px_var(--color-secondary)] hover:bg-secondary-light`}
    >
      {children}
    </a>
  )
}
