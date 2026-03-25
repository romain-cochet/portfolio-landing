import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import CaseStudyReco from './pages/CaseStudyReco'
import { useLocale } from './i18n/LocaleContext'

/** Scrolls to the top of the page on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { locale } = useLocale()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/cooko" element={<CaseStudy />} />
        <Route path="/projet/recommandations" element={<CaseStudyReco />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
