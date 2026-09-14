import { BackToTop } from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LanguageSuggestion } from '@/components/layout/LanguageSuggestion'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { otherLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries/get-dictionary'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export function Home({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang)
  const targetLang = otherLocale(lang)

  return (
    <LanguageProvider lang={lang}>
      <Header />
      <Hero />
      <Projects lang={lang} dict={dict} />
      <Experience lang={lang} dict={dict} />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
      <LanguageSuggestion
        currentLang={lang}
        targetLang={targetLang}
        text={getDictionary(targetLang).language.suggestion}
      />
    </LanguageProvider>
  )
}
