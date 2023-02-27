import { HeaderSectionType, HeroSectionType } from '@/types/data'

// Header Section
export const headerSection: HeaderSectionType = {
  navLinks: [
    {
      section: 'about',
      children: 'Sobre Mi'
    },
    {
      section: 'projects',
      children: 'Proyectos'
    },
    {
      section: 'skills',
      children: 'Habilidades'
    },
    {
      section: 'contact',
      children: 'Contacto'
    }
  ],
  cta: {
    name: 'Curriculum',
    title: '¡Visualiza mi Curriculum Vitae!',
    url: '/resume.pdf'
  }
}

// Hero Section
export const heroSection: HeroSectionType = {
  subtitle1: 'Hola,',
  subtitle2: 'me llamo',
  title: 'pierce novoa.',
  tagline: 'Construyo cosas para la gente.',
  description:
    'Soy un desarrollador de software que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy enfocado en la creación de aplicaciones web y móviles para una vida más fácil. 🚀'
}
