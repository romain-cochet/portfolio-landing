import { Link } from 'react-router-dom'
import '../styles/reco.css'
import { useLocale, LanguageToggle } from '../i18n'
import { caseStudyReco as content } from '../content/caseStudyReco'

const metaTagStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.04em',
  color: 'var(--text-secondary)',
  background: 'rgba(204,125,94,0.07)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid var(--border-light)',
  padding: '6px 14px',
  borderRadius: 9999,
}

const bodyTextStyle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 300,
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  marginBottom: 24,
}

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 28,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
  marginTop: 72,
  marginBottom: 24,
  lineHeight: 1.2,
}

/* ── Illustration 1: Accessory Definition ── */

function AccessoryDefinition() {
  const { t } = useLocale()
  const ill = content.illustrations.accessoryDefinition

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">{t(ill.label)}</span>
        <p className="reco-illustration-title">
          {t(ill.title)}
        </p>
      </div>

      <div className="reco-def-columns">
        <div className="reco-def-col reco-def-col--dimmed">
          <div className="reco-def-icon">{ill.col1.icon}</div>
          <p className="reco-def-label">{t(ill.col1.label)}</p>
          <p className="reco-def-title">{t(ill.col1.title)}</p>
          <p className="reco-def-desc">
            {t(ill.col1.desc)}
          </p>
          <span className="reco-def-tag reco-def-tag--out">
            {t(ill.col1.tag)}
          </span>
        </div>

        <div className="reco-def-col">
          <div className="reco-def-icon">{ill.col2.icon}</div>
          <p className="reco-def-label">{t(ill.col2.label)}</p>
          <p className="reco-def-title">{t(ill.col2.title)}</p>
          <p className="reco-def-desc">
            {t(ill.col2.desc)}
          </p>
          <span className="reco-def-tag reco-def-tag--in">
            {t(ill.col2.tag)}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 2: Seller vs Digital Flow ── */

function SellerVsDigitalFlow() {
  const { t, locale } = useLocale()
  const ill = content.illustrations.sellerVsDigital
  const sellerSteps = ill.sellerSteps[locale]

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">{t(ill.label)}</span>
        <p className="reco-illustration-title">
          {t(ill.title)}
        </p>
      </div>

      <div className="reco-flow-columns">
        {/* Seller column */}
        <div className="reco-flow-col">
          <span className="reco-flow-col-title">{t(ill.sellerTitle)}</span>
          {sellerSteps.map((step, i) => (
            <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className={`reco-flow-step${i === 3 ? ' reco-flow-step--highlight' : ''}`}>
                <span className="reco-flow-num">{i + 1}</span>
                <span className={`reco-flow-step-text${i === 3 ? '' : ' reco-flow-step-text--secondary'}`}>
                  {step}
                </span>
              </div>
              {i < sellerSteps.length - 1 && <div className="reco-flow-connector" />}
            </div>
          ))}
          <p className="reco-flow-annotation">{t(ill.sellerAnnotation)}</p>
        </div>

        <div className="reco-flow-divider" />

        {/* Digital column */}
        <div className="reco-flow-col">
          <span className="reco-flow-col-title">{t(ill.digitalTitle)}</span>
          <div className="reco-flow-step reco-flow-step--flat">
            <span className="reco-flow-num reco-flow-num--grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            <span className="reco-flow-step-text reco-flow-step-text--secondary">
              {t(ill.digitalStep1)}
            </span>
          </div>
          <div className="reco-flow-connector" />
          <div className="reco-flow-step reco-flow-step--flat">
            <span className="reco-flow-num reco-flow-num--grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </span>
            <span className="reco-flow-step-text reco-flow-step-text--secondary">
              {t(ill.digitalStep2)}
            </span>
          </div>
          <p className="reco-flow-annotation">{t(ill.digitalAnnotation)}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 3: Effort × Timing Matrix ── */

function EffortTimingMatrix() {
  const { t } = useLocale()
  const ill = content.illustrations.effortTimingMatrix

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">{t(ill.label)}</span>
        <p className="reco-illustration-title">
          {t(ill.title)}
        </p>
      </div>

      <div className="reco-matrix">
        {/* Y axis */}
        <div className="reco-matrix-axis-y" />
        <span className="reco-matrix-label-y reco-matrix-label-y--top">{t(ill.axisY.top)}</span>
        <span className="reco-matrix-label-y reco-matrix-label-y--bottom">{t(ill.axisY.bottom)}</span>

        {/* X axis */}
        <div className="reco-matrix-axis-x" />
        <span className="reco-matrix-label-x reco-matrix-label-x--left">{t(ill.axisX.left)}</span>
        <span className="reco-matrix-label-x reco-matrix-label-x--right">{t(ill.axisX.right)}</span>

        {/* Grid */}
        <div className="reco-matrix-grid">
          {ill.cells.map((cell, i) => (
            <div
              key={i}
              className={`reco-matrix-cell${i === ill.cells.length - 1 ? ' reco-matrix-cell--accent' : ''}`}
            >
              <span className="reco-matrix-cell-emoji">{cell.emoji}</span>
              <span className="reco-matrix-cell-name">{t(cell.name)}</span>
              <span className="reco-matrix-cell-example">{t(cell.example)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 4: Sequential Cart ── */

function SequentialCart() {
  const { t } = useLocale()
  const ill = content.illustrations.sequentialCart

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">{t(ill.label)}</span>
        <p className="reco-illustration-title">
          {t(ill.title)}
        </p>
      </div>

      <div className="reco-cart-steps">
        <div className="reco-cart-step">
          <span className="reco-cart-num reco-cart-num--accent">1</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">{t(ill.steps[0].title)}</p>
            <p className="reco-cart-step-desc">{t(ill.steps[0].desc)}</p>
          </div>
        </div>

        <div className="reco-cart-connector" />

        <div className="reco-cart-step reco-cart-step--active">
          <span className="reco-cart-num reco-cart-num--accent">2</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">{t(ill.steps[1].title)}</p>
            <p className="reco-cart-step-desc">{t(ill.steps[1].desc)}</p>
          </div>
        </div>

        <div className="reco-cart-connector" />

        <div className="reco-cart-step">
          <span className="reco-cart-num reco-cart-num--muted">3</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">{t(ill.steps[2].title)}</p>
            <p className="reco-cart-step-desc">{t(ill.steps[2].desc)}</p>
          </div>
        </div>
      </div>

      <p className="reco-cart-annotation">{t(ill.annotation)}</p>
    </div>
  )
}

/* ── Illustration 5: Timeline Recommended vs Implemented ── */

function ImplementationTimeline() {
  const { t } = useLocale()
  const ill = content.illustrations.implementationTimeline

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">{t(ill.label)}</span>
        <p className="reco-illustration-title">
          {t(ill.title)}
        </p>
      </div>

      <div className="reco-timeline-items">
        {ill.items.map((item, i) => (
          <div
            key={i}
            className={`reco-timeline-item ${item.done ? 'reco-timeline-item--done' : 'reco-timeline-item--backlog'}`}
          >
            <span className={`reco-timeline-dot ${item.done ? 'reco-timeline-dot--done' : 'reco-timeline-dot--backlog'}`} />
            <span className="reco-timeline-text">{t(item.text)}</span>
            <span className={`reco-timeline-status ${item.done ? 'reco-timeline-status--done' : 'reco-timeline-status--backlog'}`}>
              {t(item.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main Case Study Component ── */

export default function CaseStudyReco() {
  const { t, locale } = useLocale()

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* Background orbs */}
      <div style={{
        position: 'fixed',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(204,125,94,0.10) 0%, transparent 70%)',
        top: -100,
        right: -100,
        animation: 'drift1 18s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(181,160,144,0.08) 0%, transparent 70%)',
        bottom: -50,
        left: -80,
        animation: 'drift2 22s ease-in-out infinite',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 800,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>

        {/* Nav */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: -32,
          marginRight: -32,
          paddingLeft: 32,
          paddingRight: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--surface-glass, rgba(255,255,255,0.6))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: 0,
          animation: 'fadeUp 0.6s var(--ease-out) 0.1s forwards',
        }}>
          <Link
            to="/"
            className="back-link hover-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {t(content.nav.back)}
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <LanguageToggle />
            <span style={{
              fontSize: 17,
              fontWeight: 500,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}>
              {t(content.nav.title)}
            </span>
          </div>
        </nav>

        {/* Main content */}
        <main style={{ flex: 1, paddingBottom: 96 }}>

          {/* Hero */}
          <div style={{
            marginBottom: 64,
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.25s forwards',
          }}>
            <p style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 10,
            }}>
              {t(content.hero.label)}
            </p>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: 12,
              opacity: 0,
              animation: 'fadeUp 0.7s var(--ease-out) 0.35s forwards',
            }}>
              {t(content.hero.title)}
            </h1>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              fontWeight: 400,
              color: 'var(--text-secondary)',
              letterSpacing: '-0.01em',
              marginBottom: 32,
              opacity: 0,
              animation: 'fadeUp 0.7s var(--ease-out) 0.42s forwards',
            }}>
              {t(content.hero.subtitle)}
            </p>

            <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.7s var(--ease-out) 0.5s forwards',
            }}>
              {content.hero.tags[locale].map(tag => (
                <span key={tag} style={metaTagStyle}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Article body */}
          <article>

            {/* Section: Le problème */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.problem.heading)}</h2>

            {content.sections.problem.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <AccessoryDefinition />

            {/* NDA Note */}
            <div className="reco-note" style={{ marginBottom: 48 }}>
              <span className="reco-note-label">{t(content.ndaNote.label)}</span>
              <p className="reco-note-text">
                {t(content.ndaNote.text)}
              </p>
            </div>

            {/* Section: Le terrain */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.terrain.heading)}</h2>

            {content.sections.terrain.paragraphs.slice(0, 3).map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <SellerVsDigitalFlow />

            <p style={bodyTextStyle}>{t(content.sections.terrain.paragraphs[3])}</p>

            {/* Section: Les clients */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.clients.heading)}</h2>

            {content.sections.clients.paragraphs.slice(0, 4).map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <EffortTimingMatrix />

            <p style={bodyTextStyle}>{t(content.sections.clients.paragraphs[4])}</p>

            {/* Section: Ce qu'on a recommandé */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.recommended.heading)}</h2>

            {content.sections.recommended.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <SequentialCart />

            {/* Section: Ce qui s'est passé */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.whatHappened.heading)}</h2>

            {content.sections.whatHappened.paragraphs.slice(0, 2).map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <ImplementationTimeline />

            {content.sections.whatHappened.paragraphs.slice(2).map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            {/* Pull quote */}
            <div style={{
              marginTop: 48,
              marginBottom: 24,
              padding: '32px 0',
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 19,
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.55,
              }}>
                {t(content.pullQuote)}
              </p>
            </div>

          </article>
        </main>

        {/* Footer */}
        <footer style={{
          paddingTop: 32,
          paddingBottom: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-light)',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
            {t(content.footer.location)}
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a
              href="https://linkedin.com/in/romain-cochet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-accent"
              style={{
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:contact@romain-cochet.com"
              className="hover-accent"
              style={{
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact
            </a>
          </div>
        </footer>

      </div>
    </div>
  )
}
