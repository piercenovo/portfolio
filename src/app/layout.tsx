'use client'

import Email from '@/components/Email'
import Header from '@/components/Header'
import Socials from '@/components/Socials'
import '../styles/globals.css'
import { calibre } from './font'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head />
      <body className={calibre.className}>
        <Header />
        {children}
        <Socials />
        <Email />
      </body>
    </html>
  )
}
