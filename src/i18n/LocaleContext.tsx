import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type Locale = 'fr' | 'en'
type Bilingual = { fr: string; en: string }

type LocaleContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (content: Bilingual) => string
}

const LocaleContext = createContext<LocaleContextType | null>(null)

function getDefaultLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language.startsWith('fr') ? 'fr' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getDefaultLocale)

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('locale', l)
  }, [])

  const t = useCallback((content: Bilingual) => content[locale], [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export type { Locale, Bilingual }
