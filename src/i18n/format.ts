import type { YearMonth } from '@/types/content'
import type { Locale } from './config'

export function formatYearMonth(value: YearMonth, lang: Locale): string {
  const [year, month] = value.split('-').map(Number)
  const monthName = new Intl.DateTimeFormat(lang, { month: 'long', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)))

  return `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} ${year}`
}
