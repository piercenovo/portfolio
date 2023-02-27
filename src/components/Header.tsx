'use client'

import { sfmono } from '@/app/font'
import useNavbarCollapsed from '@/hooks/useNavbarCollapsed'
import { Menu } from './Menu'
import { Navbar } from './Navbar'

export default function Header() {
  const { navbarCollapsed, setNavbarCollapsed } = useNavbarCollapsed()

  return (
    <header
      id='navbar'
      className={` ${sfmono.className} w-screen h-20 z-20 fixed bg-primary-darkest/90 flex justify-center items-center backdrop-blur-[10px] animate-fade-in-down duration-500 px-6 md:px-8`}
    >
      {/* Only visible for larger devices */}
      <Navbar />

      {/* Only visible for smaller devices */}
      <Menu
        navbarCollapsed={navbarCollapsed} onClick={() => {
          setNavbarCollapsed((prev) => !prev)
        }}
      />
    </header>
  )
}
