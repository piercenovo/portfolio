import type { Dictionary } from './types'

export const en = {
  meta: {
    title: 'Pierce Novoa | Fullstack Developer',
    description: 'Fullstack Developer with 3+ years building web systems and mobile apps end to end. Trujillo, Peru.'
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
    closeMenu: 'Close menu'
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
    greeting: 'Hello,',
    intro: 'my name is',
    tagline: 'I build web systems and mobile apps end to end.',
    description: 'Fullstack Developer with 3+ years building web systems and cross-platform mobile apps. Trujillo, Peru 🇵🇪. Specialized in Clean Architecture and offline-first solutions.',
    scrollLabel: 'Go to Projects',
    cv: { label: 'Resume', title: 'View my Resume!' }
  },
  projects: {
    title: 'Projects',
    stack: 'Tech stack',
    live: 'View site',
    repo: 'View code on GitHub',
    store: 'View on Google Play'
  },
  experience: { title: 'Experience', present: 'Present' },
  skills: { title: 'Skills' },
  about: { title: 'About me', photoAlt: 'Photo of Pierce Novoa' },
  contact: {
    title: 'Contact',
    description: "I'm currently looking for new opportunities — any offer is welcome. If you simply want to ask a question or say hello, don't hesitate to reach out.",
    copy: 'Copy email',
    copied: 'Copied!',
    or: 'or',
    socialLabel: 'Contact me via'
  },
  footer: { madeBy: 'Made with ❤️ by Pierce Novoa' },
  backToTop: 'Back to top'
} satisfies Dictionary
