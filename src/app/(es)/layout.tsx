import { RootDocument } from '@/components/layout/RootDocument'
import { buildMetadata } from '@/i18n/metadata'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = buildMetadata('es')

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang='es'>{children}</RootDocument>
}
