import { BackToTop } from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Metadata } from 'next'
import { calibre } from './font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pierce Novoa | Mobile Software Engineer',
  description: 'Mobile Software Engineer with 3+ years building cross-platform iOS/Android apps with Flutter. Specialized in Clean Architecture and offline-first solutions.',
  openGraph: {
    title: 'Pierce Novoa | Mobile Software Engineer',
    description: 'Mobile Software Engineer with 3+ years building cross-platform iOS/Android apps with Flutter. Specialized in Clean Architecture and offline-first solutions.',
    url: 'https://piercenovo.dev',
    siteName: 'Pierce Novoa Portfolio',
    images: [
      {
        url: '/images/portfolio-screen.png',
        width: 1200,
        height: 630,
        alt: 'Pierce Novoa Portfolio'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pierce Novoa | Mobile Software Engineer',
    description: 'Mobile Software Engineer with 3+ years building cross-platform iOS/Android apps with Flutter.',
    images: ['/images/portfolio-screen.png']
  }
}

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
