import { Link } from 'react-router-dom'
import { useLocale, LanguageToggle } from '../i18n'
import { home } from '../content/home'

// Background orbs rendered outside the main content flow
function BgOrbs() {
  return (
    <>
      <div style={{
        position: 'fixed',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(204,125,94,0.12) 0%, transparent 70%)',
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
        background: 'radial-gradient(circle, rgba(181,160,144,0.10) 0%, transparent 70%)',
        bottom: -50,
        left: -80,
        animation: 'drift2 22s ease-in-out infinite',
      }} />
    </>
  )
}

/** Project card linking to a case study */
function ProjectCard({
  slug,
  title,
  description,
  tags,
  year,
}: {
  slug: string
  title: string
  description: string
  tags: readonly string[]
  year: string
}) {
  return (
    <Link
      to={`/projet/${slug}`}
      className="project-card-link"
      style={{
        display: 'block',
        padding: '28px 32px',
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-light)',
        borderRadius: 20,
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          fontWeight: 400,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}>
          {title}
        </h3>
        <span style={{
          fontSize: 12,
          color: 'var(--text-tertiary)',
          fontWeight: 400,
          flexShrink: 0,
          marginLeft: 16,
          marginTop: 4,
        }}>
          {year}
        </span>
      </div>

      <p style={{
        fontSize: 15,
        fontWeight: 300,
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        marginBottom: 20,
      }}>
        {description}
      </p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '4px 11px',
              borderRadius: 9999,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default function Home() {
  const { t, locale } = useLocale()

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BgOrbs />

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
          paddingTop: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          opacity: 0,
          animation: 'fadeUp 0.6s var(--ease-out) 0.1s forwards',
        }}>
          <span style={{
            fontSize: 17,
            fontWeight: 500,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}>
            {t(home.nav.role)}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <LanguageToggle />
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--text-tertiary)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#4CAF50',
                display: 'inline-block',
                animation: 'pulse 2.4s ease-in-out infinite',
              }} />
              {t(home.nav.available)}
            </span>
          </div>
        </nav>

        {/* Main */}
        <main style={{
          flex: 1,
          paddingTop: 80,
          paddingBottom: 60,
        }}>
          {/* H1 */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 64px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: 28,
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.3s forwards',
          }}>
            {t(home.hero.name)}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 17,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: 460,
            marginBottom: 24,
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.4s forwards',
          }}>
            {t(home.hero.subtitle)}
          </p>

          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 64,
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.5s forwards',
          }}>
            {home.hero.tags.map(tag => (
              <span
                key={tag.en}
                style={{
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
                }}
              >
                {t(tag)}
              </span>
            ))}
          </div>

          {/* About */}
          <div style={{
            marginBottom: 56,
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.55s forwards',
          }}>
            <p style={{
              fontSize: 16,
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              {t(home.about.text)}
            </p>
          </div>

          {/* Projects section */}
          <div style={{
            opacity: 0,
            animation: 'fadeUp 0.7s var(--ease-out) 0.65s forwards',
          }}>
            <p style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: 20,
            }}>
              {t(home.projects.sectionLabel)}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ProjectCard
                slug="cooko"
                title={t(home.projects.cooko.title)}
                description={t(home.projects.cooko.description)}
                tags={home.projects.cooko.tags[locale]}
                year={home.projects.cooko.year}
              />
              <ProjectCard
                slug="recommandations"
                title={t(home.projects.reco.title)}
                description={t(home.projects.reco.description)}
                tags={home.projects.reco.tags[locale]}
                year={home.projects.reco.year}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          paddingTop: 32,
          paddingBottom: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-light)',
          opacity: 0,
          animation: 'fadeUp 0.6s var(--ease-out) 0.7s forwards',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
            {t(home.footer.location)}
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
              {t(home.footer.linkedin)}
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
              {t(home.footer.contact)}
            </a>
          </div>
        </footer>

      </div>
    </div>
  )
}
