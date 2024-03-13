import { sfmono } from '@/app/font'
import { IconButtonProps } from '@/interfaces/props'

export function SocialPill({ title, href, children }: IconButtonProps) {
  return (
    <a
      title={title}
      target='_blank'
      rel='noopener noreferrer'
      role='link'
      href={href}
      className={`${sfmono.className} mx-auto [text-shadow:0px_0px_2px_#38bdf8] shadow-[0px_0px_2.5px_0px] shadow-secondary  border-[1px] border-secondary px-3 py-2 text-xs lg:text-sm text-secondary transition-colors duration-300 hover:bg-secondary-light inline-flex gap-2 rounded-full`}
    >
      {children}
    </a>
  )
}
