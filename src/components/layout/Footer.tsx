import { sfmono } from '@/app/font'
import { SocialLinks } from '@/components/ui/SocialLinks'
import type { Dictionary } from '@/i18n/dictionaries/types'

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear()

  return (
    <footer className='flex animate-fade-in flex-col gap-6 pb-6'>
      <div className='flex justify-center md:hidden'>
        <SocialLinks label={dict.contact.socialLabel} />
      </div>

      <div className={`${sfmono.className} flex flex-col items-center gap-2 text-xs lg:text-sm`}>
        <span className='text-center'>{dict.footer.madeBy}</span>
        <span className='text-center'>&#169; {year}</span>
      </div>
    </footer>
  )
}
