import { sfmono } from '@/app/font'
import { CopyEmailButton } from '@/components/ui/CopyEmailButton'
import { Section } from '@/components/ui/Section'
import { SlideUp } from '@/components/ui/SlideUp'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/content/profile'
import type { SectionProps } from '@/types/section'

export function Contact({ dict }: SectionProps) {
  const { contact } = dict

  return (
    <Section id='contact' title={contact.title}>
      <SlideUp delay={120}>
        <div className='flex max-w-lg flex-col items-center gap-8 pb-32 sm:max-w-xl'>
          <p className='text-center text-lg lg:text-xl'>{contact.description}</p>

          <div className='flex w-full flex-col items-center gap-4'>
            <CopyEmailButton email={profile.email} copyLabel={contact.copy} copiedLabel={contact.copied} />

            <div className='flex w-full max-w-xs items-center gap-3 text-primary/40' aria-hidden>
              <div className='h-px flex-1 bg-primary/20' />
              <span className={`${sfmono.className} text-[10px] uppercase tracking-widest`}>{contact.or}</span>
              <div className='h-px flex-1 bg-primary/20' />
            </div>

            <SocialLinks label={contact.socialLabel} className='flex gap-7' iconClassName='h-5 w-5' />
          </div>
        </div>
      </SlideUp>
    </Section>
  )
}
