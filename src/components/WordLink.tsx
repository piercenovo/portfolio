import { ButtonProps } from '@/interfaces/props'
import Link from 'next/link'

export function WordLink({ children, title, href }: ButtonProps) {
  return (
    <Link
      title={title}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='[text-shadow:0px_0px_2px_#38bdf8] text-secondary'
    >
      {children}
    </Link>
  )
}
