import type { Dictionary } from './types'

export const es = {
  meta: {
    title: 'Pierce Novoa | Fullstack Software Engineer',
    description: 'Fullstack Software Engineer con más de 4 años desarrollando productos digitales de extremo a extremo con NestJS, Next.js y Flutter. Trujillo, Perú.'
  },
  nav: {
    projects: 'Proyectos',
    experience: 'Experiencia',
    skills: 'Habilidades',
    about: 'Sobre mí',
    contact: 'Contacto'
  },
  header: {
    homeLabel: 'Ir al inicio',
    navLabel: 'Navegación principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    contact: 'Contactar',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro'
  },
  language: {
    switchTo: 'Ver en inglés',
    suggestion: {
      message: 'Esta página también está disponible en español.',
      accept: 'Ver en español',
      dismiss: 'Cerrar'
    }
  },
  hero: {
    tagline: 'Construyo productos digitales de extremo a extremo.',
    description: 'Más de 4 años llevando productos del requisito a producción: APIs en NestJS, interfaces web en Next.js y apps móviles en Flutter, para los sectores industrial, agrícola y financiero. Trujillo, Perú.',
    status: 'Disponible para nuevas oportunidades',
    cv: { label: 'Descargar CV', title: 'Curriculum Vitae en PDF' },
    diagramLabel: 'Flujo de entrega de un producto, del requisito al hardware',
    stations: {
      requirements: { label: 'Requisitos', detail: 'Con el cliente' },
      architecture: { label: 'Arquitectura', detail: 'Clean Architecture · SOLID' },
      api: { label: 'API', detail: 'NestJS · Node.js' },
      web: { label: 'Web', detail: 'Next.js · React' },
      mobile: { label: 'Móvil', detail: 'Flutter · Dart' },
      deploy: { label: 'Despliegue', detail: 'Docker · VPS' }
    },
    scale: {
      title: 'Balanza HBM · RS-485',
      simulation: 'Simulación',
      stabilizing: 'Estabilizando',
      stable: 'Estable',
      unit: 'kg',
      caption: 'Servicio local → API HTTP → sistema web'
    }
  },
  projects: {
    title: 'Proyectos',
    stack: 'Tecnologías',
    live: 'Ver sitio',
    repo: 'Ver código',
    store: 'Google Play',
    private: 'Privado',
    filterLabel: 'Filtrar proyectos',
    filters: { all: 'Todos', web: 'Web', mobile: 'Móvil' }
  },
  experience: { title: 'Experiencia', present: 'Actualidad', showMore: 'Mostrar {count} más', showLess: 'Mostrar menos' },
  skills: { title: 'Habilidades', groupsLabel: 'Grupos de habilidades' },
  about: { title: 'Sobre mí', photoAlt: 'Foto de Pierce Novoa', location: 'Trujillo, Perú', education: 'Formación', languages: 'Idiomas' },
  contact: {
    title: 'Contacto',
    lead: 'Hablemos de tu próximo producto.',
    description: 'Actualmente me encuentro en búsqueda de nuevas oportunidades, cualquier oferta será bien recibida. Si simplemente deseas hacerme una pregunta o saludarme, no dudes en ponerte en contacto conmigo.',
    channelsLabel: 'Canales de contacto',
    emailLabel: 'Correo',
    cvLabel: 'CV',
    cvValue: 'PDF · Español',
    copy: 'Copiar email',
    copied: 'Copiado',
    socialLabel: 'Contáctame vía'
  },
  footer: { madeBy: 'Diseñado y construido por Pierce Novoa' },
  backToTop: 'Volver al inicio'
} satisfies Dictionary
