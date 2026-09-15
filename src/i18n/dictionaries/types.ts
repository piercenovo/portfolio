export interface Dictionary {
  meta: { title: string; description: string }
  nav: { projects: string; experience: string; skills: string; about: string; contact: string }
  header: { homeLabel: string; navLabel: string; openMenu: string; closeMenu: string }
  language: {
    switchTo: string
    suggestion: { message: string; accept: string; dismiss: string }
  }
  hero: {
    greeting: string
    intro: string
    tagline: string
    description: string
    scrollLabel: string
    cv: { label: string; title: string }
  }
  projects: {
    title: string
    stack: string
    live: string
    repo: string
    store: string
    filterLabel: string
    filters: { all: string; web: string; mobile: string }
  }
  experience: { title: string; present: string }
  skills: { title: string }
  about: { title: string; photoAlt: string; education: string; languages: string }
  contact: { title: string; description: string; copy: string; copied: string; or: string; socialLabel: string }
  footer: { madeBy: string }
  backToTop: string
}
