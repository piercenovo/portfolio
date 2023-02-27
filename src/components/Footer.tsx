import { sfmono } from '@/app/font'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className='flex animate-fade-in flex-col gap-6 pb-6'>
      {/* Only visible for smaller devices */}
      <div className='md:hidden'>
        <SocialIcons />
      </div>

      <div className={`${sfmono.className} flex flex-col items-center gap-2 text-xs lg:text-sm`}>
        <span className='text-center transition'>Hecho con ❤️ por Pierce Novoa</span>
        <span className='text-center transition'>© 2023</span>
      </div>
    </footer>
  )
}
