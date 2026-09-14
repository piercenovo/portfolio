import type { ReactNode } from 'react'

type WordLinkProps = {
  href: string
  title: string
  children: ReactNode
}

export function WordLink({ href, title, children }: WordLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
      className='text-secondary [text-shadow:0px_0px_2px_var(--color-secondary)]'
    >
      {children}
    </a>
  )
}
