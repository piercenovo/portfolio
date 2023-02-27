import { sfmono } from '@/app/font'
import SideColumn from './SideColumn'

export default function Email() {
  return (
    <SideColumn orientation='right'>
      <a
        href='mailto:piercenovoah@gmail.com'
        className={`${sfmono.className}  text-xs lg:text-sm transition-all duration-300 [writing-mode:vertical-lr] hover:-translate-y-1 hover:text-secondary`}
      >
        piercenovoah@gmail.com
      </a>
    </SideColumn>

  )
}
