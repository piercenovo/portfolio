import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

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
