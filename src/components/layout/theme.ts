export type Theme = 'dark' | 'light'

// Namespaced so other apps served from the same origin (e.g. localhost) never collide
export const THEME_STORAGE_KEY = 'pd-theme'
export const DEFAULT_THEME: Theme = 'dark'

// Inlined in <head> so a saved light theme applies before first paint. Dark is
// the default and needs no attribute, so a failure here still renders correctly.
export const themeInitScript =
  `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='light')document.documentElement.dataset.theme='light'}catch(e){}`

export const readTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

// React resets attributes on <html> when the root layout remounts (switching
// between `/` and `/en/`), which drops data-theme; this puts the saved theme back
export function restoreTheme(): void {
  try {
    if (localStorage.getItem(THEME_STORAGE_KEY) === 'light') {
      document.documentElement.dataset.theme = 'light'
    }
  } catch {
    // storage unavailable: the default dark theme stays
  }
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  if (theme === DEFAULT_THEME) delete root.dataset.theme
  else root.dataset.theme = theme

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // storage unavailable: the theme still applies for this visit
  }
}
