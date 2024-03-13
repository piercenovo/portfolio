import { sfmono } from '@/app/font'
import { ButtonProps } from '@/interfaces/props'

export function Button({ children, title, href } : ButtonProps) {
  return (
    <a
      title={title}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${sfmono.className} mx-auto [text-shadow:0px_0px_2px_#38bdf8] shadow-[0px_0px_2.5px_0px] shadow-secondary rounded border-[1px] border-secondary px-3 py-2  text-sm text-secondary transition-colors duration-300 hover:bg-secondary-light`}
    >
      {children}
    </a>
  )
}
