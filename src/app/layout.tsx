'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { calibre } from './font'
import './globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={calibre.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
