import { SideColumnProps } from '@/interfaces/props'

export default function SideColumn({ orientation, children }: SideColumnProps) {
  return (
    <div
      className={`z-[1] animate-fade-in-up hidden md:block fixed bottom-0 ${
        orientation === 'left' ? 'left-12' : 'right-12'
    }`}
    >
      <div className='vertical-line relative flex flex-col gap-6'>
        {children}
      </div>
    </div>
  )
}
