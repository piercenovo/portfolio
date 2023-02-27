import { headerSection } from '@/data/sections'
import { MenuProps } from '@/interfaces/props'
import { Button } from './Button'
import Counter from './Counter'
import { CloseMenu, OpenMenu } from './Icons'

export function Menu({ onClick, navbarCollapsed }: MenuProps) {
  const { navLinks, cta } = headerSection
  const { name, title, url } = cta

  return (
    <div>
      {/* burger icon  */}
      <div className='md:hidden'>
        <div onClick={onClick} className='cursor-pointer text-white'>
          <CloseMenu />
        </div>
      </div>

      {/* mobile menu  */}
      <div className={
    navbarCollapsed
      ? 'md:hidden fixed right-0 top-0 z-10 w-full h-screen bg-primary-darkest/70 backdrop-blur-md'
      : ''
  }
      >
        <div className={
      navbarCollapsed
        ? 'fixed right-0 top-0 w-4/6 h-full bg-primary-darker text-white duration-500 ease-in'
        : 'fixed top-0 right-[-100%] h-full duration-500 ease-in'
    }
        >
          <div>
            <div
              onClick={onClick}
              className='flex w-full items-center cursor-pointer justify-end h-20 px-6'
            >
              <OpenMenu />
            </div>
          </div>

          <div className='mt-20 flex flex-col justify-center items-center h-fit gap-12 p-10'>
            <ul>
              {navLinks.map(({ section, children }, i) => (
                <a href={`#${section}`} key={section} onClick={onClick}>
                  <li
                    className='capitalize py-4 cursor-pointer text-primary-light hover:text-secondary transition-colors duration-300 flex flex-col px-4 text-center'
                  >
                    <Counter count={i} />
                    {children}
                  </li>
                </a>
              ))}
            </ul>
            <Button
              title={title} href={url}
            >
              {name}
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
