import { AboutSectionType, HeaderSectionType, HeroSectionType } from '@/types/data'

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

// About Section
export const aboutSection: AboutSectionType = {
  title: 'Sobre mí',
  paragraphs: [
    '¡Hola! Mi nombre es Pierce Novoa y tengo +1 año de experiencia como desarrollador de software. Me ha fascinado la tecnología desde pequeño y eso me llevó a estudiar Ingeniería de Sistemas.',
    ' Decidí emprender esta carrera con el objetivo de crear soluciones prácticas a través del uso de código, siendo de utilidad para las personas y sus emprendimientos.'
  ],
  img: '/images/about.webp'
}
