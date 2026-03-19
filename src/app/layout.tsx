import { BackToTop } from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { calibre } from './font'
import './globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={calibre.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
