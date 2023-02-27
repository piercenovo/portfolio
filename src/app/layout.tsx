'use client'

import Header from '@/components/Header'
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
      </body>
    </html>
  )
}
