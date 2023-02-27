'use client'

import '../styles/globals.css'
import { calibre } from './font'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head />
      <body className={calibre.className}>
        {children}
      </body>
    </html>
  )
}
