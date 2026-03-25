import { Link } from 'react-router-dom'
import { useLocale, LanguageToggle } from '../i18n'
import { caseStudyCooko as content } from '../content/caseStudyCooko'

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

const subHeadingStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: 'var(--text-primary)',
  marginTop: 52,
  marginBottom: 16,
  lineHeight: 1.3,
}

const calloutStyle: React.CSSProperties = {
  background: 'var(--accent-light)',
  padding: 24,
  borderRadius: 12,
  fontSize: 17,
  fontWeight: 400,
  color: 'var(--text-primary)',
  lineHeight: 1.7,
  marginBottom: 24,
}

/* ── Journey Map component ── */

function JourneyMap() {
  const { t, locale } = useLocale()
  const jm = content.journeyMap

  return (
    <div className="jm-wrapper" role="figure" aria-label={t(jm.title)}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 6,
        }}>
          {t(jm.header)}
        </p>
        <p style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: 4,
          lineHeight: 1.3,
        }}>
          {t(jm.title)}
        </p>
        <p style={{
          fontSize: 13,
          color: 'var(--text-secondary)',
        }}>
          {t(jm.profiles)}
        </p>
      </div>

      {/* Timeline + cards */}
      <div className="jm-timeline">
        {jm.moments.map((m, i) => {
          const active = i >= 1 && i <= 3
          const highlighted = i === 3
          const dimmed = !active
          const pills = m.cookoV1 ? m.cookoV1[locale] : null

          const circleStyle: React.CSSProperties = dimmed
            ? {
                background: 'var(--bg)',
                border: '1.5px dashed var(--text-tertiary)',
                color: 'var(--text-tertiary)',
              }
            : {
                background: 'var(--accent)',
                border: 'none',
                color: 'var(--text-inverse)',
              }

          const cardStyle: React.CSSProperties = {
            background: 'var(--bg)',
            border: highlighted
              ? '1.5px solid var(--accent)'
              : dimmed
                ? '0.75px dashed var(--text-tertiary)'
                : '0.75px solid rgba(28,26,23,0.10)',
            opacity: dimmed ? 0.72 : 1,
            position: 'relative',
          }

          return (
            <div className="jm-moment" key={i}>
              <div className="jm-circle" style={circleStyle}>
                {i + 1}
              </div>
              <div className="jm-moment-content">
                <p className="jm-label" style={{
                  color: dimmed ? 'var(--text-tertiary)' : 'var(--text-primary)',
                }}>
                  {t(m.label)}
                </p>
                <div className="jm-card" style={cardStyle}>
                  {highlighted && (
                    <span
                      className="jm-badge"
                      style={{
                        background: 'var(--accent)',
                        color: 'var(--text-inverse)',
                      }}
                    >
                      {t(jm.sprintFocus)}
                    </span>
                  )}

                  <p className="jm-card-heading" style={{ color: 'var(--text-tertiary)' }}>
                    {t(jm.cardLabels.today)}
                  </p>
                  <p className="jm-card-text" style={{ color: 'var(--text-secondary)' }}>
                    {t(m.today)}
                  </p>

                  <div className="jm-card-divider" />

                  <p className="jm-card-heading" style={{ color: 'var(--text-tertiary)' }}>
                    {t(jm.cardLabels.friction)}
                  </p>
                  <p className="jm-card-text" style={{
                    color: dimmed ? 'var(--text-secondary)' : 'var(--text-primary)',
                  }}>
                    {t(m.friction)}
                  </p>

                  <div className="jm-card-divider" />

                  <p className="jm-card-heading" style={{
                    color: pills ? 'var(--accent)' : 'var(--text-tertiary)',
                  }}>
                    {t(jm.cardLabels.cookoV1)}
                  </p>
                  {pills ? (
                    <div>
                      {pills.map((pill) => (
                        <span className="jm-pill" key={pill}>{pill}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="jm-card-text" style={{
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: 'var(--text-tertiary)',
                    }}>
                      {t(jm.legend.outOfScope)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{ marginTop: 28, marginBottom: 16 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginBottom: 10,
        }}>
          {t(jm.legend.label)}
        </p>
        <div className="jm-legend">
          <span className="jm-legend-item">
            <span style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--text-secondary)' }}>{t(jm.legend.addressed)}</span>
          </span>
          <span className="jm-legend-item">
            <span style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'var(--bg)',
              border: '1px dashed var(--text-tertiary)',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--text-secondary)' }}>{t(jm.legend.outOfScope)}</span>
          </span>
          <span className="jm-legend-item">
            <span style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: '1.5px solid var(--accent)',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--text-secondary)' }}>{t(jm.legend.mainFriction)}</span>
          </span>
          <span className="jm-legend-item">
            <span className="jm-pill" style={{ margin: 0 }}>{t(jm.legend.response)}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{t(jm.legend.solutionLabel)}</span>
          </span>
        </div>
      </div>

      {/* Profiles */}
      <div style={{ marginTop: 16 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginBottom: 6,
        }}>
          {t(jm.profilesSection.label)}
        </p>
        <div className="jm-profiles" style={{ color: 'var(--text-secondary)' }}>
          <p>{t(jm.profilesSection.profileA)}</p>
          <p>{t(jm.profilesSection.profileB)}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Onboarding Flow component ── */

/** Icons for each onboarding step (kept in component code, not in content) */
const onboardingIcons = [
  // Apple logo
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>,
  // User
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  // House
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  // Plus
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>,
  // Info circle
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>,
]

function OnboardingFlow() {
  const { t } = useLocale()
  const ob = content.onboarding
  const steps = ob.steps

  return (
    <div className="ob-wrapper" style={{ marginBottom: 32 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          color: 'var(--accent)',
        }}>
          {t(ob.label)}
        </span>
        <p style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginTop: 4,
        }}>
          {t(ob.title)}
        </p>
      </div>

      {/* Steps */}
      <div className="ob-steps">
        {steps.map((step, i) => (
          <div className="ob-step" key={i}>
            {/* Circle + connector */}
            <div className="ob-step-indicator">
              <div
                className="ob-circle"
                style={{
                  background: i === steps.length - 1 ? 'var(--accent)' : 'var(--bg)',
                  color: i === steps.length - 1 ? 'var(--text-inverse)' : 'var(--accent)',
                  border: i === steps.length - 1 ? 'none' : '1.5px solid var(--border)',
                }}
              >
                {onboardingIcons[i]}
              </div>
              {i < steps.length - 1 && <div className="ob-connector" />}
            </div>

            {/* Content */}
            <div className="ob-content">
              <span className="ob-title">{t(step.title)}</span>
              <span className="ob-desc">{t(step.description)}</span>
              {step.annotation && (
                <span className="ob-annotation">{t(step.annotation)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Quick Add Bar comparison component ── */

/** Cart icon (iconoir Cart style) */
function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 4h3l2.7 12.4a1 1 0 001 .8h7.7a1 1 0 001-.8L20.5 7H6" />
      <circle cx="10.5" cy="21" r="1" />
      <circle cx="17.5" cy="21" r="1" />
    </svg>
  )
}

/** Stylized mini QuickAddBar */
function MiniBar({ text, micActive, placeholder }: { text?: string; micActive?: boolean; placeholder: string }) {
  return (
    <div className="qab-bar">
      <div className="qab-btn"><CartIcon /></div>
      <div className="qab-input">
        <span style={{
          color: text ? 'var(--text-primary)' : 'var(--text-tertiary)',
          fontSize: 13,
          fontWeight: text ? 400 : 300,
        }}>
          {text || placeholder}
        </span>
      </div>
      <div className={`qab-btn${micActive ? ' qab-btn--active' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={micActive ? 'var(--accent)' : 'var(--text-secondary)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
          <path d="M19 10v2a7 7 0 01-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      </div>
    </div>
  )
}

/** Item row matching ListItem style */
function MiniItem({ name, quantity }: { name: string; quantity?: string }) {
  return (
    <div className="qab-result-item">
      <span className="qab-result-circle" />
      <span>{name}</span>
      {quantity && <span style={{ color: 'var(--text-secondary)' }}> {quantity}</span>}
    </div>
  )
}

/** Chevron down separator */
function ChevronDown() {
  return (
    <svg className="qab-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function QuickAddBarComparison() {
  const { t, locale } = useLocale()
  const qab = content.quickAddBar
  const placeholder = t(qab.keyboard.inputPlaceholder)
  const voiceResults = qab.voice.results[locale]

  return (
    <div className="qab-wrapper" style={{ marginBottom: 32 }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          color: 'var(--accent)',
        }}>
          {t(qab.label)}
        </span>
        <p style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginTop: 4,
        }}>
          {t(qab.title)}
        </p>
      </div>

      <div className="qab-columns">
        {/* Keyboard column */}
        <div className="qab-column">
          <span className="qab-column-title">{t(qab.keyboard.title)}</span>
          <div className="qab-states">
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.input)}</span>
              <MiniBar text={t(qab.keyboard.sampleInput)} placeholder={placeholder} />
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.parsing)}</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div className="qab-parsing-pill">{t(qab.keyboard.parsingLabel)}</div>
                <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{t(qab.keyboard.parsingSpeed)}</span>
              </div>
              <span className="qab-parsing-fallback">{t(qab.keyboard.parsingNote)}</span>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.result)}</span>
              <div className="qab-result">
                <MiniItem name={t(qab.keyboard.resultItem)} quantity={qab.keyboard.resultQuantity} />
              </div>
            </div>
          </div>
          <span className="qab-column-footer">{t(qab.keyboard.footer)}</span>
        </div>

        {/* Divider */}
        <div className="qab-divider" />

        {/* Voice column */}
        <div className="qab-column">
          <span className="qab-column-title">{t(qab.voice.title)}</span>
          <div className="qab-states">
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.listening)}</span>
              <MiniBar micActive placeholder={placeholder} />
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.transcript)}</span>
              <div className="qab-transcript">
                {t(qab.voice.transcript)}
              </div>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.parsing)}</span>
              <div className="qab-parsing-pill qab-parsing-pill--llm">{t(qab.voice.parsingLabel)}</div>
              <span className="qab-parsing-fallback">{t(qab.voice.fallbackNote)}</span>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">{t(qab.stateLabels.result)}</span>
              <div className="qab-result">
                {voiceResults.map((item, i) => (
                  <MiniItem key={i} name={item.name} quantity={item.quantity} />
                ))}
              </div>
            </div>
          </div>
          <span className="qab-column-footer">{t(qab.voice.footer)}</span>
        </div>
      </div>
    </div>
  )
}

/** Split a callout string into bold first sentence + rest */
function splitCallout(text: string): { bold: string; rest: string } {
  const dotIdx = text.indexOf('. ')
  if (dotIdx === -1) return { bold: text, rest: '' }
  return { bold: text.slice(0, dotIdx + 1), rest: text.slice(dotIdx + 1) }
}

export default function CaseStudy() {
  const { t, locale } = useLocale()

  const calloutText = t(content.sections.problem.callout)
  const { bold: calloutBold, rest: calloutRest } = splitCallout(calloutText)

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
            className="hover-primary"
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
              fontSize: 'clamp(44px, 7vw, 64px)',
              lineHeight: 1.06,
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

            <div style={calloutStyle}>
              <strong>{calloutBold}</strong>{calloutRest}
            </div>

            {/* Section: Le terrain */}
            <h2 style={sectionHeadingStyle}>{t(content.sections.terrain.heading)}</h2>

            {content.sections.terrain.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <div style={{
              background: 'var(--bg-subtle)',
              padding: 24,
              borderRadius: 12,
              marginBottom: 24,
            }}>
              <span style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: 10,
              }}>{t(content.sections.terrain.noteLabel)}</span>
              <p style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                {t(content.sections.terrain.note)}
              </p>
            </div>

            <JourneyMap />

            {content.sections.journeyMapOutro.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            {/* Section: Trois décisions */}
            <h2 style={sectionHeadingStyle}>{t(content.threeDecisions.heading)}</h2>

            <p style={bodyTextStyle}>{t(content.threeDecisions.intro)}</p>

            {/* Sub-section 01 */}
            <h3 style={subHeadingStyle}>{t(content.threeDecisions.decision1.heading)}</h3>

            {content.threeDecisions.decision1.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            {/* Sketch vs Final comparison */}
            <div className="sketch-compare">
              <div className="sketch-compare-images">
                <div className="sketch-compare-side">
                  <div className="sketch-compare-img-wrap sketch-compare-img-wrap--sketch">
                    <img src="/images/cooko/sketch_papier.jpeg" alt={t(content.images.sketchPaper)} loading="lazy" />
                  </div>
                </div>

<div className="sketch-compare-side">
                  <div className="sketch-compare-img-wrap sketch-compare-img-wrap--final">
                    <img src="/images/cooko/liste_finale.png" alt={t(content.images.listeFinal)} loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="sketch-compare-labels">
                <span className="sketch-compare-label">{t(content.sketchCompare.sketchLabel)}</span>
                <span className="sketch-compare-label">{t(content.sketchCompare.finalLabel)}</span>
              </div>
            </div>

            {/* Sub-section 02 */}
            <h3 style={subHeadingStyle}>{t(content.threeDecisions.decision2.heading)}</h3>

            {content.threeDecisions.decision2.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <OnboardingFlow />

            {/* Sub-section 03 */}
            <h3 style={subHeadingStyle}>{t(content.threeDecisions.decision3.heading)}</h3>

            {content.threeDecisions.decision3.paragraphs.map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            <QuickAddBarComparison />

            {/* Section: Ce qui tourne */}
            <h2 style={sectionHeadingStyle}>{t(content.running.heading)}</h2>

            <p style={bodyTextStyle}>{t(content.running.paragraphs[0])}</p>

            {/* App screenshots showcase */}
            <div className="app-showcase">
              <div className="app-showcase-screen app-showcase-screen--back">
                <img src="/images/cooko/panier.png" alt={t(content.images.panier)} loading="lazy" />
              </div>
              <div className="app-showcase-screen app-showcase-screen--center">
                <img src="/images/cooko/liste_finale.png" alt={t(content.images.listeMain)} loading="lazy" />
              </div>
              <div className="app-showcase-screen app-showcase-screen--front">
                <img src="/images/cooko/item_detail.png" alt={t(content.images.itemDetail)} loading="lazy" />
              </div>
            </div>

            {content.running.paragraphs.slice(1).map((p, i) => (
              <p key={i} style={bodyTextStyle}>{t(p)}</p>
            ))}

            {/* Section: Designer sans Figma */}
            <h2 style={sectionHeadingStyle}>{t(content.designerSansFigma.heading)}</h2>

            {content.designerSansFigma.paragraphs.map((p, i) => (
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
              {t(content.footer.linkedin)}
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
              {t(content.footer.contact)}
            </a>
          </div>
        </footer>

      </div>
    </div>
  )
}
