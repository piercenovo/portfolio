import { headerSection } from '@/data/sections'
import Image from 'next/image'
import { Button } from './Button'
import Counter from './Counter'

export function Navbar() {
  const { navLinks, cta } = headerSection
  const { name, title, url } = cta

  return (
    <nav className='w-full h-full flex items-center justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      <a href='/#'>
        <Image priority alt='Logo' src='/images/logo.png' width={90} height={30} />
      </a>

      <ul className='hidden md:flex gap-7 lg:gap-8'>
        {navLinks.map(({ section, children }, i) => (
          <a href={`#${section}`} key={section}>
            <li
              key={section} className='capitalize cursor-pointer text-primary-light hover:text-secondary transition-colors duration-300 text-xs lg:text-sm'
            >
              <Counter count={i} />
              {children}
            </li>
          </a>
        ))}
      </ul>

      <div className='hidden md:flex'>
        <Button
          title={title} href={url}
        >
          {name}
        </Button>
      </div>

    </nav>
  )
}
