import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { LanguageSuggestion } from '@/components/layout/LanguageSuggestion'
import { otherLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries/get-dictionary'
import { Hero } from '@/sections/Hero'
import { sections } from './sections'

export function Home({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang)
  const targetLang = otherLocale(lang)
  const navItems = sections.map(({ id }) => ({ id, label: dict.nav[id] }))

  return (
    <>
      <Header lang={lang} navItems={navItems} labels={dict.header} languageLabel={dict.language.switchTo} />
      <main className='flex w-full flex-col items-center'>
        <Hero lang={lang} dict={dict} />
        {sections.map(({ id, Component }) => (
          <Component key={id} lang={lang} dict={dict} />
        ))}
      </main>
      <Footer dict={dict} />
      <BackToTop label={dict.backToTop} />
      <LanguageSuggestion
        currentLang={lang}
        targetLang={targetLang}
        text={getDictionary(targetLang).language.suggestion}
      />
    </>
  )
}
