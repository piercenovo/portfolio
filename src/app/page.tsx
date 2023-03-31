import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export const metadata = {
  title: 'Pierce Novoa | Portfolio',
  description: 'Soy un desarrollador que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy enfocado en crear apps web y móviles para una vida más fácil. 🚀'
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
