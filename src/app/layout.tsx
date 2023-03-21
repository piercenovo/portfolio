'use client'

import Email from '@/components/Email'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Socials from '@/components/Socials'
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
        <Socials />
        <Email />
      </body>
    </html>
  )
}
