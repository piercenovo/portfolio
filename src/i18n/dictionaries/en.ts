import type { Dictionary } from './types'

export const en = {
  meta: {
    title: 'Pierce Novoa | Fullstack Software Engineer',
    description: 'Fullstack Software Engineer with 4+ years delivering digital products end to end with NestJS, Next.js and Flutter. Trujillo, Peru.'
  },
  nav: {
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    about: 'About me',
    contact: 'Contact'
  },
  header: {
    homeLabel: 'Go to top',
    navLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    contact: 'Get in touch'
  },
  language: {
    switchTo: 'View in Spanish',
    suggestion: {
      message: 'This page is also available in English.',
      accept: 'View in English',
      dismiss: 'Dismiss'
    }
  },
  hero: {
    tagline: 'I build digital products end to end.',
    description: 'Fullstack Software Engineer with 4+ years taking products from requirements to production: NestJS APIs, Next.js web interfaces and Flutter mobile apps for the industrial, agricultural and financial sectors. Trujillo, Peru.',
    status: 'Open to new opportunities',
    cv: { label: 'Download CV', title: 'Resume in PDF' },
    diagramLabel: 'Product delivery flow, from requirement to hardware',
    stations: {
      requirements: { label: 'Requirements', detail: 'With the client' },
      architecture: { label: 'Architecture', detail: 'Clean Architecture · SOLID' },
      api: { label: 'API', detail: 'NestJS · Node.js' },
      web: { label: 'Web', detail: 'Next.js · React' },
      mobile: { label: 'Mobile', detail: 'Flutter · Dart' },
      deploy: { label: 'Deploy', detail: 'Docker · VPS' }
    },
    scale: {
      title: 'HBM scale · RS-485',
      simulation: 'Simulation',
      stabilizing: 'Stabilizing',
      stable: 'Stable',
      unit: 'kg',
      caption: 'Local service → HTTP API → web system'
    }
  },
  projects: {
    title: 'Projects',
    stack: 'Tech stack',
    live: 'View site',
    repo: 'View code',
    store: 'Google Play',
    private: 'Private',
    filterLabel: 'Filter projects',
    filters: { all: 'All', web: 'Web', mobile: 'Mobile' }
  },
  experience: { title: 'Experience', present: 'Present', showMore: 'Show {count} more', showLess: 'Show less' },
  skills: { title: 'Skills', groupsLabel: 'Skill groups' },
  about: { title: 'About me', photoAlt: 'Photo of Pierce Novoa', location: 'Trujillo, Peru', education: 'Education', languages: 'Languages' },
  contact: {
    title: 'Contact',
    lead: "Let's talk about your next product.",
    description: "I'm currently looking for new opportunities — any offer is welcome. If you simply want to ask a question or say hello, don't hesitate to reach out.",
    channelsLabel: 'Contact channels',
    emailLabel: 'Email',
    cvLabel: 'Resume',
    cvValue: 'PDF · English',
    copy: 'Copy email',
    copied: 'Copied',
    socialLabel: 'Contact me via'
  },
  footer: { madeBy: 'Designed and built by Pierce Novoa' },
  backToTop: 'Back to top'
} satisfies Dictionary
