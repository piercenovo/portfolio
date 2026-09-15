import { profile } from '@/content/profile'
import { SvgIcon } from './SvgIcon'

type SocialLinksProps = {
  label: string
  showNames?: boolean
  className?: string
}

export function SocialLinks({ label, showNames = false, className = 'flex flex-wrap items-center gap-2' }: SocialLinksProps) {
  return (
    <ul className={className}>
      {profile.socials.map(({ name, href, icon }) => (
        <li key={name}>
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${label} ${name}`}
            title={`${label} ${name}`}
            className={`inline-flex items-center gap-2.5 rounded-[3px] font-mono text-sm uppercase tracking-[0.06em] text-ink-muted transition-colors duration-200 hover:text-live ${showNames ? 'border border-line px-4 py-3 hover:border-live' : 'p-2.5'}`}
          >
            <SvgIcon icon={icon} className='h-5 w-5' />
            {showNames && <span>{name}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
