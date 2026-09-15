type Station = { label: string; detail: string }

export interface Dictionary {
  meta: { title: string; description: string }
  nav: { projects: string; experience: string; skills: string; about: string; contact: string }
  header: { homeLabel: string; navLabel: string; openMenu: string; closeMenu: string; contact: string }
  language: {
    switchTo: string
    suggestion: { message: string; accept: string; dismiss: string }
  }
  hero: {
    tagline: string
    description: string
    status: string
    cv: { label: string; title: string }
    diagramLabel: string
    stations: {
      requirements: Station
      architecture: Station
      api: Station
      web: Station
      mobile: Station
      deploy: Station
    }
    scale: {
      title: string
      simulation: string
      stabilizing: string
      stable: string
      unit: string
      caption: string
    }
  }
  projects: {
    title: string
    stack: string
    live: string
    repo: string
    store: string
    private: string
    filterLabel: string
    filters: { all: string; web: string; mobile: string }
  }
  // `showMore` contains a `{count}` placeholder
  experience: { title: string; present: string; showMore: string; showLess: string }
  skills: { title: string; groupsLabel: string }
  about: { title: string; photoAlt: string; location: string; education: string; languages: string }
  contact: {
    title: string
    lead: string
    description: string
    channelsLabel: string
    emailLabel: string
    cvLabel: string
    cvValue: string
    copy: string
    copied: string
    socialLabel: string
  }
  footer: { madeBy: string }
  backToTop: string
}
