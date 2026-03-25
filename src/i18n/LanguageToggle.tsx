import { useLocale } from './LocaleContext'

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()
  const next = locale === 'fr' ? 'en' : 'fr'
  const label = next.toUpperCase()

  return (
    <button
      onClick={() => setLocale(next)}
      aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        cursor: 'pointer',
        transition: 'color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-tertiary)')}
    >
      {label}
    </button>
  )
}
