import { RootDocument } from '@/components/layout/RootDocument'
import { buildMetadata } from '@/i18n/metadata'
import { localeStaticParams, resolveLocale, type LocaleParams } from '@/i18n/route'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// One root layout serves `/` (Spanish) and `/en/` (English). Only the param
// changes between them, so switching language is a client-side navigation
// instead of a full page reload, while each exported HTML keeps its own lang.
export const generateStaticParams = localeStaticParams
export const dynamicParams = false

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  return buildMetadata(await resolveLocale(params))
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: LocaleParams }) {
  return <RootDocument lang={await resolveLocale(params)}>{children}</RootDocument>
}
