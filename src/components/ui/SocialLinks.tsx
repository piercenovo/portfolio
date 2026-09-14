import { profile } from '@/content/profile'
import { SvgIcon } from './SvgIcon'

type SocialLinksProps = {
  label: string
  className?: string
  iconClassName?: string
}

export function SocialLinks({ label, className = 'flex flex-row flex-wrap gap-x-6 gap-y-4 md:gap-5', iconClassName = 'h-6 w-6' }: SocialLinksProps) {
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
            className='group block transition-transform duration-300 hover:-translate-y-1'
          >
            <SvgIcon icon={icon} className={`${iconClassName} transition-colors duration-300 group-hover:fill-secondary`} />
          </a>
        </li>
      ))}
    </ul>
  )
}
