import { CopyEmailButton } from '@/components/ui/CopyEmailButton'
import { PowerOn } from '@/components/ui/PowerOn'
import { Section } from '@/components/ui/Section'
import { SvgIcon } from '@/components/ui/SvgIcon'
import { profile } from '@/content/profile'
import type { SectionProps } from '@/types/section'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'

type ChannelProps = {
  index: number
  icon: ReactNode
  label: string
  value: string
  href: string
  external?: boolean
  action: ReactNode
}

const displayUrl = (href: string) => href.replace(/^https?:\/\/(www\.)?/, '')

// One I/O channel row: the value link stretches over the whole row, and the
// status lamp powers on when the row is hovered or focused
function Channel({ index, icon, label, value, href, external = false, action }: ChannelProps) {
  return (
    <li
      style={{ '--i': index } as CSSProperties}
      className='boot group relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 transition-colors duration-200 focus-within:bg-raised hover:bg-raised sm:px-5'
    >
      <span className='flex items-center gap-3 text-ink-muted transition-colors duration-200 group-focus-within:text-ink group-hover:text-ink'>
        <span
          aria-hidden
          className='boot-led h-1.5 w-1.5 rounded-full bg-line-strong transition-colors duration-200 group-focus-within:bg-live group-hover:bg-live'
        />
        {icon}
      </span>
      <span className='flex min-w-0 flex-col'>
        <span className='font-mono text-[0.625rem] tracking-[0.1em] text-ink-muted uppercase'>{label}</span>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className='truncate text-ink outline-none after:absolute after:inset-0 after:rounded-[2px] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-live'
        >
          {value}
        </a>
      </span>
      {action}
    </li>
  )
}

const arrow = (
  <ArrowUpRight
    size={18}
    strokeWidth={2}
    aria-hidden
    className='text-ink-muted transition-[color,transform] duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-live'
  />
)

export function Contact({ lang, dict }: SectionProps) {
  const { contact } = dict

  return (
    <Section id='contact' title={contact.title}>
      <PowerOn className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16'>
        <div className='flex flex-col gap-5'>
          <p className='boot max-w-[20ch] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink'>
            {contact.lead}
          </p>
          <p className='boot max-w-[52ch] text-lg text-ink-muted' style={{ '--i': 1 } as CSSProperties}>
            {contact.description}
          </p>
          <p className='boot mt-2 flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] text-ink-muted uppercase' style={{ '--i': 2 } as CSSProperties}>
            <span aria-hidden className='status-blink h-2 w-2 rounded-full bg-live' />
            {dict.hero.status}
          </p>
        </div>

        <ul aria-label={contact.channelsLabel} className='divide-y divide-line self-start rounded-[3px] border border-line bg-panel'>
          <Channel
            index={1}
            icon={<Mail size={20} strokeWidth={1.75} aria-hidden />}
            label={contact.emailLabel}
            value={profile.email}
            href={`mailto:${profile.email}`}
            action={<CopyEmailButton email={profile.email} copyLabel={contact.copy} copiedLabel={contact.copied} />}
          />
          {profile.socials.map(({ name, href, icon }, index) => (
            <Channel
              key={name}
              index={index + 2}
              icon={<SvgIcon icon={icon} className='h-5 w-5' />}
              label={name}
              value={displayUrl(href)}
              href={href}
              external
              action={arrow}
            />
          ))}
          <Channel
            index={profile.socials.length + 2}
            icon={<Download size={20} strokeWidth={1.75} aria-hidden />}
            label={contact.cvLabel}
            value={contact.cvValue}
            href={profile.cv[lang]}
            external
            action={arrow}
          />
        </ul>
      </PowerOn>
    </Section>
  )
}
