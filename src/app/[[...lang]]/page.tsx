import { Home } from '@/components/home/Home'
import { resolveLocale, type LocaleParams } from '@/i18n/route'

export default async function HomePage({ params }: { params: LocaleParams }) {
  return <Home lang={await resolveLocale(params)} />
}
