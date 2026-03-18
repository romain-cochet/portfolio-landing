import { Link } from 'react-router-dom'

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

/* ── Journey Map data & component ── */

type Moment = {
  number: number
  label: string
  active: boolean
  highlighted?: boolean
  today: string
  friction: string
  cookoV1: string[] | null // null = hors scope, string[] = pills
}

const moments: Moment[] = [
  {
    number: 1,
    label: 'Entree foyer',
    active: false,
    today: 'Conversation WhatsApp creee pour les courses',
    friction: 'Adoption = zero friction a l\u2019entree',
    cookoV1: null,
  },
  {
    number: 2,
    label: 'Constitution liste',
    active: true,
    today: 'Saisie manuelle, WhatsApp, liste plate',
    friction: 'Charge cognitive recurrente, contexte perdu',
    cookoV1: ['Ajout vocal + parsing', 'Notes & substitutions'],
  },
  {
    number: 3,
    label: 'Coordination',
    active: true,
    today: 'Message, appel, vocal \u00ab On en est ou ? \u00bb',
    friction: 'Coordination manuelle, etat partage invisible',
    cookoV1: ['Sync temps reel', 'Progression visible'],
  },
  {
    number: 4,
    label: 'En rayon',
    active: true,
    highlighted: true,
    today: 'Defiler WhatsApp, appeler pour chaque doute',
    friction: 'Interface inadaptee, decisions bloquees sans contexte',
    cookoV1: ['Vue unique, une main', 'Cochage + disparition', 'Substitutions prevues'],
  },
  {
    number: 5,
    label: 'Fin de courses',
    active: false,
    today: 'Liste disparait ou reste dans WhatsApp',
    friction: 'Aucun apprentissage, meme galere la semaine suivante',
    cookoV1: null,
  },
]

function JourneyMap() {
  return (
    <div className="jm-wrapper" role="figure" aria-label="Journey map — Parcours courses en 5 moments">
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
          Journey Map
        </p>
        <p style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: 4,
          lineHeight: 1.3,
        }}>
          Parcours courses — Avant / Apres Cooko v1
        </p>
        <p style={{
          fontSize: 13,
          color: 'var(--text-secondary)',
        }}>
          Sophie + Romain · Foyer 2 personnes · iOS
        </p>
      </div>

      {/* Timeline + cards */}
      <div className="jm-timeline">
        {moments.map((m) => {
          const dimmed = !m.active
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
            border: m.highlighted
              ? '1.5px solid var(--accent)'
              : dimmed
                ? '0.75px dashed var(--text-tertiary)'
                : '0.75px solid rgba(28,26,23,0.10)',
            opacity: dimmed ? 0.72 : 1,
            position: 'relative',
          }

          return (
            <div className="jm-moment" key={m.number}>
              <div className="jm-circle" style={circleStyle}>
                {m.number}
              </div>
              <div className="jm-moment-content">
                <p className="jm-label" style={{
                  color: dimmed ? 'var(--text-tertiary)' : 'var(--text-primary)',
                }}>
                  {m.label}
                </p>
                <div className="jm-card" style={cardStyle}>
                  {m.highlighted && (
                    <span
                      className="jm-badge"
                      style={{
                        background: 'var(--accent)',
                        color: 'var(--text-inverse)',
                      }}
                    >
                      Focus du sprint
                    </span>
                  )}

                  <p className="jm-card-heading" style={{ color: 'var(--text-tertiary)' }}>
                    Aujourd&apos;hui
                  </p>
                  <p className="jm-card-text" style={{ color: 'var(--text-secondary)' }}>
                    {m.today}
                  </p>

                  <div className="jm-card-divider" />

                  <p className="jm-card-heading" style={{ color: 'var(--text-tertiary)' }}>
                    Friction
                  </p>
                  <p className="jm-card-text" style={{
                    color: dimmed ? 'var(--text-secondary)' : 'var(--text-primary)',
                  }}>
                    {m.friction}
                  </p>

                  <div className="jm-card-divider" />

                  <p className="jm-card-heading" style={{
                    color: m.cookoV1 ? 'var(--accent)' : 'var(--text-tertiary)',
                  }}>
                    Cooko v1
                  </p>
                  {m.cookoV1 ? (
                    <div>
                      {m.cookoV1.map((pill) => (
                        <span className="jm-pill" key={pill}>{pill}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="jm-card-text" style={{
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: 'var(--text-tertiary)',
                    }}>
                      Hors scope v1
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
          Legende
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
            <span style={{ color: 'var(--text-secondary)' }}>Adresse par Cooko v1</span>
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
            <span style={{ color: 'var(--text-secondary)' }}>Hors scope v1</span>
          </span>
          <span className="jm-legend-item">
            <span style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: '1.5px solid var(--accent)',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--text-secondary)' }}>Moment de friction principal</span>
          </span>
          <span className="jm-legend-item">
            <span className="jm-pill" style={{ margin: 0 }}>Reponse</span>
            <span style={{ color: 'var(--text-secondary)' }}>Solution Cooko v1</span>
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
          Profils
        </p>
        <div className="jm-profiles" style={{ color: 'var(--text-secondary)' }}>
          <p>Profil A — Planificateur (constitue la liste, planifie les repas)</p>
          <p>Profil B — Acheteur (execute la liste en magasin, souvent seul·e)</p>
        </div>
      </div>
    </div>
  )
}

/* ── Onboarding Flow component ── */

const onboardingSteps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
    title: 'Apple Sign In',
    description: 'Authentification native',
    annotation: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Prénom',
    description: 'Pré-rempli via Apple',
    annotation: 'catch Apple ID',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Nom du foyer',
    description: 'Créer ou rejoindre',
    annotation: 'skip si invitation',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    title: '3 articles ajoutés',
    description: 'Premier engagement',
    annotation: 'déclencheur',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    title: 'Popin découverte',
    description: 'Notes & substitutions',
    annotation: null,
  },
]

function OnboardingFlow() {
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
          ONBOARDING FLOW
        </span>
        <p style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginTop: 4,
        }}>
          Du Sign In à la découverte des notes
        </p>
      </div>

      {/* Steps */}
      <div className="ob-steps">
        {onboardingSteps.map((step, i) => (
          <div className="ob-step" key={i}>
            {/* Circle + connector */}
            <div className="ob-step-indicator">
              <div
                className="ob-circle"
                style={{
                  background: i === onboardingSteps.length - 1 ? 'var(--accent)' : 'var(--bg)',
                  color: i === onboardingSteps.length - 1 ? 'var(--text-inverse)' : 'var(--accent)',
                  border: i === onboardingSteps.length - 1 ? 'none' : '1.5px solid var(--border)',
                }}
              >
                {step.icon}
              </div>
              {i < onboardingSteps.length - 1 && <div className="ob-connector" />}
            </div>

            {/* Content */}
            <div className="ob-content">
              <span className="ob-title">{step.title}</span>
              <span className="ob-desc">{step.description}</span>
              {step.annotation && (
                <span className="ob-annotation">{step.annotation}</span>
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
function MiniBar({ text, micActive }: { text?: string; micActive?: boolean }) {
  return (
    <div className="qab-bar">
      <div className="qab-btn"><CartIcon /></div>
      <div className="qab-input">
        <span style={{
          color: text ? 'var(--text-primary)' : 'var(--text-tertiary)',
          fontSize: 13,
          fontWeight: text ? 400 : 300,
        }}>
          {text || 'Ajouter un article...'}
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

/** Item row matching ListItem style: ○ Name quantity */
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
          QUICK ADD BAR
        </span>
        <p style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginTop: 4,
        }}>
          Deux entrées, deux parsings
        </p>
      </div>

      <div className="qab-columns">
        {/* Keyboard column */}
        <div className="qab-column">
          <span className="qab-column-title">Clavier</span>
          <div className="qab-states">
            <div className="qab-state">
              <span className="qab-state-label">Saisie</span>
              <MiniBar text="2 tomates" />
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">Parsing</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div className="qab-parsing-pill">regex</div>
                <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>instant</span>
              </div>
              <span className="qab-parsing-fallback">multi-mots → LLM si 1 seul item détecté</span>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">Résultat</span>
              <div className="qab-result">
                <MiniItem name="Tomates" quantity="×2" />
              </div>
            </div>
          </div>
          <span className="qab-column-footer">Idéal pour 1 item</span>
        </div>

        {/* Divider */}
        <div className="qab-divider" />

        {/* Voice column */}
        <div className="qab-column">
          <span className="qab-column-title">Voix</span>
          <div className="qab-states">
            <div className="qab-state">
              <span className="qab-state-label">Écoute</span>
              <MiniBar micActive />
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">Transcript</span>
              <div className="qab-transcript">
                « deux kilos de bœuf et puis aussi des tomates euh trois tomates et du basilic »
              </div>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">Parsing</span>
              <div className="qab-parsing-pill qab-parsing-pill--llm">LLM</div>
              <span className="qab-parsing-fallback">fallback regex à 3s</span>
            </div>
            <ChevronDown />
            <div className="qab-state">
              <span className="qab-state-label">Résultat</span>
              <div className="qab-result">
                <MiniItem name="Bœuf" quantity="2kg" />
                <MiniItem name="Tomates" quantity="×3" />
                <MiniItem name="Basilic" />
              </div>
            </div>
          </div>
          <span className="qab-column-footer">Idéal pour plusieurs items</span>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudy() {
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
            Retour
          </Link>

          <span style={{
            fontSize: 17,
            fontWeight: 500,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}>
            Cooko
          </span>
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
              Case Study 01
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
              Cooko
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
              Liste de courses connectée
            </p>

            <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.7s var(--ease-out) 0.5s forwards',
            }}>
              {['iOS', 'React Native / Expo', 'Sprint 3 jours', 'Mars 2026'].map(tag => (
                <span key={tag} style={metaTagStyle}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Article body */}
          <article>

            {/* Section: Le problème */}
            <h2 style={sectionHeadingStyle}>Le problème</h2>

            <p style={bodyTextStyle}>
              Sophie pousse son caddie dans le rayon café. Sur la liste, un mot : « café ». Elle en boit au lait, pas très regardante sur la marque. Sauf que ce n'est pas pour elle. C'est pour Romain, qui le prend noir, qui a ses habitudes, et qui n'a rien précisé. Elle hésite quelques secondes devant le rayon, attrape un paquet qui lui semble familier, et passe au suivant. Dix articles plus tard, elle aura pris dix décisions de ce type, chacune un peu plus floue que la précédente.
            </p>

            <p style={bodyTextStyle}>
              Ce qui rend ces choix fatigants, ce n'est pas leur complexité. C'est leur accumulation. Sophie sort du travail. Sa journée a déjà été une succession de décisions, de sollicitations, de choses à retenir. Et les courses viennent se poser par-dessus, comme une couche supplémentaire de charge mentale, à un moment où la capacité à trancher est au plus bas. Chaque hésitation en rayon coûte un peu plus cher que la précédente. Et le mauvais choix ne reste pas en rayon. Il rentre à la maison avec elle. C'est la remarque en déchargeant les sacs, le « ah t'as pas pris le bon » qui ne méritait ni d'être dit ni d'être entendu.
            </p>

            <p style={bodyTextStyle}>
              Le problème n'est pas que Sophie ne sait pas décider. C'est que la liste ne l'aide pas. Tout ce qui rendrait le choix évident — la variante, la marque, quoi prendre si le produit n'est plus en stock — est resté dans la tête de celui qui a écrit « café » sans rien ajouter d'autre.
            </p>

            <div style={calloutStyle}>
              <strong>Cooko v1 s'attaque à cette friction précise.</strong> Chaque article peut porter une note et une substitution prévue en cas de rupture. Le contexte d'achat voyage avec la liste, pas dans une conversation WhatsApp parallèle. Ce n'est pas la liste entière qui devient intelligente. C'est chaque ligne qui devient autonome.
            </div>

            {/* Section: Le terrain */}
            <h2 style={sectionHeadingStyle}>Le terrain</h2>

            <p style={bodyTextStyle}>
              Ce que Sophie vit en rayon, les chiffres le confirment à l'échelle. 77 % des femmes déclarent avoir trop de choses à penser et peur d'oublier. 61 % des hommes ignorent la charge mentale de leur partenaire. Et 53 % des acheteurs envoient déjà des photos de produits à leur partenaire en magasin pour valider un choix. Ce dernier chiffre dit beaucoup : l'information existe quelque part dans le couple, elle ne voyage simplement pas avec la liste.
            </p>

            <p style={bodyTextStyle}>
              Cinq apps de liste de courses ont été analysées. Ce qu'elles font toutes en 2026 — synchronisation temps réel, catégorisation automatique — est le plancher du marché. Ce qui manque partout : le contexte d'achat attaché à chaque article, et une interface qui tient compte du fait qu'en rayon, on a une seule main libre.
            </p>

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
              }}>Note</span>
              <p style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                Le réflexe photo est réel, mais Cooko v1 répond au même besoin par le texte : notes et substitutions prévues sur chaque article. La photo de référence a été écartée pour limiter le poids des items. Si la demande remonte en usage réel, elle sera intégrée.
              </p>
            </div>

            <JourneyMap />

            <p style={bodyTextStyle}>
              Cooko v1 intervient sur trois moments du parcours. La constitution de la liste est adressée par l'ajout vocal et le parsing intelligent. La coordination avant les courses passe par la synchronisation temps réel et les notes par article. Le moment en rayon — celui qui concentre la majorité des frictions — a le plus pesé sur les choix de design : vue unique à une main, disparition des items cochés, substitutions accessibles sans quitter la liste. L'entrée dans le foyer reste minimale en v1, et la mémoire des achats d'une semaine à l'autre est reportée. Documenter ces limites fait partie du travail autant que résoudre les frictions qu'on adresse.
            </p>

            {/* Section: Trois décisions */}
            <h2 style={sectionHeadingStyle}>Trois décisions</h2>

            <p style={bodyTextStyle}>
              Le raisonnement de design se lit dans les arbitrages. Pas dans les écrans finis, pas dans les features livrées, mais dans les moments où un choix a été fait et où un autre a été écarté.
            </p>

            {/* Sub-section 01 */}
            <h3 style={subHeadingStyle}>01 — Une vue, deux contextes</h3>

            <p style={bodyTextStyle}>
              La liste de courses sert deux moments très différents. À la maison, on planifie les deux mains libres, l'attention disponible. En magasin, le téléphone est dans une main, le caddie dans l'autre. L'attention est fragmentée. On veut cocher vite, vérifier ce qui reste, et ne pas perdre le fil entre deux rayons.
            </p>

            <p style={bodyTextStyle}>
              Le brief initial prévoyait un écran dédié pour chaque contexte. Le problème, c'est qu'ajouter un switch entre deux modes, c'est demander à l'utilisateur de prendre une décision de plus. Et c'est exactement ce que Cooko cherche à supprimer.
            </p>

            <p style={bodyTextStyle}>
              La contrainte retenue : un seul écran qui doit fonctionner pour les deux situations sans en pénaliser aucune. Cette contrainte a guidé trois choix concrets. La voix comme entrée prioritaire, parce que dicter une longue liste à la maison est plus fluide que tout taper — et qu'en magasin, une seule main suffit pour appuyer sur le micro. La disparition progressive des items cochés couplée à une vue panier séparée, pour que la liste ne montre que ce qui reste à prendre et que chacun des deux espaces porte sa propre pastille de décompte. L'avatar dans le cercle de validation, pour savoir qui a pris quoi quand on fait les courses à deux dans le même magasin.
            </p>

            <p style={bodyTextStyle}>
              Aucun de ces choix n'est spectaculaire en isolation. C'est leur cohérence qui fait le design : tous servent la même contrainte, une vue unique qui ne sacrifie ni la confection ni l'achat.
            </p>

            {/* Sketch vs Final comparison */}
            <div className="sketch-compare">
              <div className="sketch-compare-images">
                <div className="sketch-compare-side">
                  <div className="sketch-compare-img-wrap sketch-compare-img-wrap--sketch">
                    <img src="/images/cooko/sketch_papier.jpeg" alt="Sketch papier de la liste de courses" loading="lazy" />
                  </div>
                </div>

<div className="sketch-compare-side">
                  <div className="sketch-compare-img-wrap sketch-compare-img-wrap--final">
                    <img src="/images/cooko/liste_finale.png" alt="Écran final de la liste Cooko" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="sketch-compare-labels">
                <span className="sketch-compare-label">Sketch initial</span>
                <span className="sketch-compare-label">Écran final</span>
              </div>
            </div>

            {/* Sub-section 02 */}
            <h3 style={subHeadingStyle}>02 — Sophie et la bannière au mauvais moment</h3>

            <p style={bodyTextStyle}>
              L'onboarding a commencé avec deux écrans : prénom et choix de foyer sur le premier, puis un deuxième écran proposant de rejoindre un foyer existant, d'inviter quelqu'un, ou de passer. Cette version a été simplifiée avant le test : l'écran de choix a été retiré, remplacé par deux écrans de personnalisation (prénom, puis nom du foyer). L'invitation a été déportée dans une bannière en couleur accent, affichée en haut de la liste dès l'arrivée sur l'écran principal.
            </p>

            <p style={bodyTextStyle}>
              C'est cette version que Sophie a testée. Elle passe les deux écrans de personnalisation sans difficulté. Elle arrive sur la liste vide. Elle me regarde : « Et maintenant ? ». La bannière d'invitation en haut de l'écran capte son attention, mais ce n'est pas ce dont elle a besoin à ce moment-là. Elle n'a encore rien mis dans la liste, elle ne sait pas encore ce que l'app fait. Lui proposer d'inviter quelqu'un alors qu'elle n'a pas encore évalué le produit, c'est mettre la collaboration avant la valeur.
            </p>

            <p style={bodyTextStyle}>
              Elle finit par ajouter quelques articles. Elle les coche, ouvre le panier. Mais elle passe complètement à côté des notes, la fonctionnalité qui permet d'ajouter du contexte sur chaque article. La barre d'ajout rapide en bas de l'écran manque aussi d'affordance sur une liste vide : rien ne l'invite clairement à commencer par là.
            </p>

            <p style={bodyTextStyle}>
              Trois changements sont sortis de ce test. Le premier : la bannière d'invitation en couleur accent a été supprimée. Trop visible, au mauvais moment, elle ajoutait du bruit sur un écran qui avait besoin de calme. L'invitation au foyer a été déportée dans les réglages, où elle intervient quand l'utilisateur est prêt, pas quand le flow l'impose.
            </p>

            <p style={bodyTextStyle}>
              Le deuxième : une bannière contextuelle apparaît après l'ajout de trois articles. Elle invite l'utilisateur à découvrir les notes sur ses items. Le déclencheur n'est plus l'arrivée dans l'app mais le premier signe d'engagement réel.
            </p>

            <p style={bodyTextStyle}>
              Le troisième : la barre d'ajout rapide a été retravaillée. Elle a servi de base pour repenser le header de la liste. Un stroke et un renforcement du liquid glass ont été ajoutés pour améliorer le contraste. La suppression de la bannière en couleur accent a aussi contribué à réduire le bruit visuel global, ce qui a rendu la barre plus lisible par effet de soustraction autant que par retouche directe.
            </p>

            <OnboardingFlow />

            {/* Sub-section 03 */}
            <h3 style={subHeadingStyle}>03 — Deux langages, deux parsings</h3>

            <p style={bodyTextStyle}>
              La barre d'ajout rapide accepte deux types d'entrée : le clavier et la voix. Dès les premières itérations sur le proto fonctionnel, le parsing a montré ses limites. La saisie clavier suit des conventions implicites : « 2kg bœuf, 3 tomates » se décompose proprement en items séparés avec quantités. Le regex tient. Mais la dictée vocale produit du langage naturel. « Deux kilos de bœuf et puis aussi des tomates, euh, trois tomates » ne se parse pas de la même façon. Les connecteurs, les hésitations, les reformulations cassent la logique du découpage.
            </p>

            <p style={bodyTextStyle}>
              C'est un problème qui n'aurait jamais émergé sur un prototype statique. Il a fallu que l'app tourne, que la voix soit captée, que le texte dicté arrive dans le champ pour que la limite apparaisse. Un proto Figma aurait montré un flow propre de bout en bout. Le proto fonctionnel a montré que le même composant devait se comporter différemment selon la façon dont l'utilisateur s'en sert.
            </p>

            <p style={bodyTextStyle}>
              La solution retenue : deux logiques de parsing distinctes selon la surface d'entrée. Regex pour le clavier, où la structure est prévisible. LLM pour la voix, capable d'interpréter le langage naturel avec ses hésitations et ses tournures. Avec un système de fallback : si le LLM échoue ou met trop de temps, le regex prend le relais pour ne jamais bloquer l'ajout.
            </p>

            <p style={bodyTextStyle}>
              Lors du test avec Sophie, c'est la fonctionnalité qui l'a le plus bluffée. Elle a dicté sa liste naturellement, sans se soucier de la formulation, et les articles sont apparus correctement découpés. Ce qui aurait pu rester un problème technique invisible est devenu le moment le plus fluide de l'expérience.
            </p>

            <QuickAddBarComparison />

            {/* Section: Ce qui tourne */}
            <h2 style={sectionHeadingStyle}>Ce qui tourne</h2>

            <p style={bodyTextStyle}>
              Cooko est sur TestFlight. Auth Apple Sign In, synchronisation temps réel entre deux appareils iOS, parsing hybride voix et clavier. Sophie a reçu le lien, elle est dans le foyer. L'app est utilisée pour de vraies courses.
            </p>

            {/* App screenshots showcase */}
            <div className="app-showcase">
              <div className="app-showcase-screen app-showcase-screen--back">
                <img src="/images/cooko/panier.png" alt="Vue panier — articles cochés" loading="lazy" />
              </div>
              <div className="app-showcase-screen app-showcase-screen--center">
                <img src="/images/cooko/liste_finale.png" alt="Liste de courses principale" loading="lazy" />
              </div>
              <div className="app-showcase-screen app-showcase-screen--front">
                <img src="/images/cooko/item_detail.png" alt="Détail article — notes et substitutions" loading="lazy" />
              </div>
            </div>

            <p style={bodyTextStyle}>
              Avant Cooko, Sophie faisait les courses avec un message WhatsApp : une liste plate, aucun contexte, pas de cochage, et un appel dès qu'un produit manquait en rayon. Après : elle dicte sa liste, chaque article porte ses précisions, elle coche d'une main en magasin, et la progression est visible d'un coup d'œil. Le WhatsApp courses n'a pas servi pendant le test.
            </p>

            <p style={bodyTextStyle}>
              Ce qui n'est pas dans l'app est aussi important que ce qui y est. Le contexte repas visible sur chaque article, la génération automatique de la liste depuis des repas planifiés, la mémoire des achats d'une semaine à l'autre : ces fonctionnalités existent dans le backlog, documentées, avec leurs dépendances. Elles ont été écartées du sprint parce qu'elles nécessitent une couche recettes et un historique d'usage que v1 ne peut pas encore porter. Cooko n'est pas un prototype de portfolio. C'est un produit en construction, avec un backlog qui avance.
            </p>

            <p style={bodyTextStyle}>
              Ce que ce sprint ne prouve pas encore : l'usage en courses sur la durée, la rétention au-delà des premières semaines, la valeur perçue du contexte une fois la couche recettes en place. Un test, une personne, trois jours. La validation continue sur TestFlight.
            </p>

            {/* Section: Designer sans Figma */}
            <h2 style={sectionHeadingStyle}>Designer sans Figma</h2>

            <p style={bodyTextStyle}>
              Sophie a testé une app, pas un prototype. Ce qui a rendu ça possible, c'est une décision de méthode prise au début du sprint : ne pas passer par Figma.
            </p>

            <p style={bodyTextStyle}>
              Pas parce que Figma est dépassé, mais parce que le remplacer force à nommer ce qu'il faisait. Avec Figma, je design avec mes mains. Je déplace des formes, j'ajuste des composants, je vois le résultat immédiatement. Avec Claude, je dirige avec des mots. Je formule une intention, je délègue l'exécution, j'évalue le résultat et j'ajuste le brief. Le processus ressemble moins à du design visuel qu'à de la direction. L'interface change, le fond du travail reste entier.
            </p>

            <p style={bodyTextStyle}>
              Le gain le plus inattendu n'est pas la vitesse. C'est d'être confronté au réel dès le premier jour. Un proto Figma simule l'expérience. Un proto fonctionnel la fait tourner, avec tout ce que ça implique : la latence existe, le clavier iOS se comporte comme il veut, la voix produit du texte que le regex ne sait pas lire. Les retours de Sophie sont allés directement dans le code, dans la même journée. Pas de couche de traduction entre la décision et le résultat, pas de fichier de retours qui remonte vers un designer puis redescend vers un développeur. La boucle est plus courte. En contrepartie, chaque bug devient un frein réel dans le cycle d'itération. C'est la friction propre à cette méthode, et elle est honnêtement non négligeable.
            </p>

            <p style={bodyTextStyle}>
              Diriger avec des mots, ça s'apprend. La précision du brief conditionne la qualité de l'output. Un raisonnement flou produit un composant flou. Cette contrainte est aussi une discipline : elle force à formuler l'intention avant d'exécuter, à chaque étape. Ce que l'expérience de Sophie illustre à chaque moment de son parcours dans l'app, c'est que chaque friction résolue est une décision formulée, pas un pixel déplacé.
            </p>

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
                Si le raisonnement de design peut être exprimé en mots suffisamment précis pour être exécuté, c'est peut-être cette capacité qui a toujours été la valeur. Cadrer le problème, décider sous contrainte, reconnaître quand une limite technique remonte en question de design, documenter pourquoi. L'exécution pixel n'en était que le proxy.
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
            Dijon, France · Disponible remote
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
