import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { calibre } from './font'
import './globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head>
        {/* Prevent flash of wrong theme before React hydration */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('theme');
            var p = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            if ((t || p) === 'light') document.documentElement.classList.add('light');
          } catch(e) {}
        ` }} />
      </head>
      <body className={calibre.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
