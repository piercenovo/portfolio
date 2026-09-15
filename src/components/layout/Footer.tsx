import { SocialLinks } from '@/components/ui/SocialLinks'
import type { Dictionary } from '@/i18n/dictionaries/types'

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear()

  return (
    <footer className='border-t border-line'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8'>
        <p className='font-mono text-xs tracking-[0.08em] text-ink-muted uppercase'>
          <span className='tabular'>© {year}</span> · {dict.footer.madeBy}
        </p>
        <SocialLinks label={dict.contact.socialLabel} />
      </div>
    </footer>
  )
}
