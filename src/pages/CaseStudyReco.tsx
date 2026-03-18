import { Link } from 'react-router-dom'
import '../styles/reco.css'

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
  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">Définition</span>
        <p className="reco-illustration-title">
          Indispensable vs complémentaire
        </p>
      </div>

      <div className="reco-def-columns">
        <div className="reco-def-col reco-def-col--dimmed">
          <div className="reco-def-icon">🖥️</div>
          <p className="reco-def-label">PC fixe + souris</p>
          <p className="reco-def-title">Accessoire indispensable</p>
          <p className="reco-def-desc">
            Le client y pense seul. Pas besoin de le convaincre.
          </p>
          <span className="reco-def-tag reco-def-tag--out">
            Hors périmètre cross-sell
          </span>
        </div>

        <div className="reco-def-col">
          <div className="reco-def-icon">💻</div>
          <p className="reco-def-label">Portable + souris</p>
          <p className="reco-def-title">Accessoire complémentaire</p>
          <p className="reco-def-desc">
            Il faut donner une raison. C'est ici que le cross-sell intervient.
          </p>
          <span className="reco-def-tag reco-def-tag--in">
            Périmètre cross-sell
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 2: Seller vs Digital Flow ── */

function SellerVsDigitalFlow() {
  const sellerSteps = [
    'Comprendre le besoin',
    'Accompagner le choix du produit',
    'Sécuriser la décision',
    'Réintroduire les accessoires',
  ]

  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">Comparaison</span>
        <p className="reco-illustration-title">
          Séquence vendeur vs parcours digital
        </p>
      </div>

      <div className="reco-flow-columns">
        {/* Seller column */}
        <div className="reco-flow-col">
          <span className="reco-flow-col-title">Vendeur en magasin</span>
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
          <p className="reco-flow-annotation">Séquentiel · Contextuel · Argumenté</p>
        </div>

        <div className="reco-flow-divider" />

        {/* Digital column */}
        <div className="reco-flow-col">
          <span className="reco-flow-col-title">Parcours digital</span>
          <div className="reco-flow-step reco-flow-step--flat">
            <span className="reco-flow-num reco-flow-num--grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            <span className="reco-flow-step-text reco-flow-step-text--secondary">
              Fiche produit → carrousel recos
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
              Panier → même carrousel recos
            </span>
          </div>
          <p className="reco-flow-annotation">Simultané · Pas de séquence · Pas de contexte</p>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 3: Effort × Timing Matrix ── */

function EffortTimingMatrix() {
  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">Matrice</span>
        <p className="reco-illustration-title">
          Effort d'accroche × timing naturel
        </p>
      </div>

      <div className="reco-matrix">
        {/* Y axis */}
        <div className="reco-matrix-axis-y" />
        <span className="reco-matrix-label-y reco-matrix-label-y--top">Post-achat</span>
        <span className="reco-matrix-label-y reco-matrix-label-y--bottom">À l'achat</span>

        {/* X axis */}
        <div className="reco-matrix-axis-x" />
        <span className="reco-matrix-label-x reco-matrix-label-x--left">Effort faible</span>
        <span className="reco-matrix-label-x reco-matrix-label-x--right">Effort fort</span>

        {/* Grid */}
        <div className="reco-matrix-grid">
          {/* Top-left: faible effort + post-achat */}
          <div className="reco-matrix-cell">
            <span className="reco-matrix-cell-emoji">📦</span>
            <span className="reco-matrix-cell-name">Le manque</span>
            <span className="reco-matrix-cell-example">Consommables, recharges</span>
          </div>

          {/* Top-right: fort effort + post-achat */}
          <div className="reco-matrix-cell">
            <span className="reco-matrix-cell-emoji">💡</span>
            <span className="reco-matrix-cell-name">La découverte</span>
            <span className="reco-matrix-cell-example">Compléments d'usage</span>
          </div>

          {/* Bottom-left: faible effort + à l'achat */}
          <div className="reco-matrix-cell">
            <span className="reco-matrix-cell-emoji">⚡</span>
            <span className="reco-matrix-cell-name">Le réflexe</span>
            <span className="reco-matrix-cell-example">Câbles, protections</span>
          </div>

          {/* Bottom-right: fort effort + à l'achat — accent */}
          <div className="reco-matrix-cell reco-matrix-cell--accent">
            <span className="reco-matrix-cell-emoji">🎯</span>
            <span className="reco-matrix-cell-name">Le conseil</span>
            <span className="reco-matrix-cell-example">Accessoires techniques</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Illustration 4: Sequential Cart ── */

function SequentialCart() {
  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">Concept</span>
        <p className="reco-illustration-title">
          Panier séquentiel en 3 étapes
        </p>
      </div>

      <div className="reco-cart-steps">
        <div className="reco-cart-step">
          <span className="reco-cart-num reco-cart-num--accent">1</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">Produit principal</p>
            <p className="reco-cart-step-desc">Choix sécurisé, décision prise</p>
          </div>
        </div>

        <div className="reco-cart-connector" />

        <div className="reco-cart-step reco-cart-step--active">
          <span className="reco-cart-num reco-cart-num--accent">2</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">Accessoires</p>
            <p className="reco-cart-step-desc">Contextualisés, liés au produit choisi</p>
          </div>
        </div>

        <div className="reco-cart-connector" />

        <div className="reco-cart-step">
          <span className="reco-cart-num reco-cart-num--muted">3</span>
          <div className="reco-cart-content">
            <p className="reco-cart-step-title">Services</p>
            <p className="reco-cart-step-desc">Garantie, installation, livraison</p>
          </div>
        </div>
      </div>

      <p className="reco-cart-annotation">La logique du vendeur, transposée au digital.</p>
    </div>
  )
}

/* ── Illustration 5: Timeline Recommended vs Implemented ── */

function ImplementationTimeline() {
  return (
    <div className="reco-illustration">
      <div className="reco-illustration-header">
        <span className="reco-illustration-label">Résultat</span>
        <p className="reco-illustration-title">
          Recommandé vs implémenté
        </p>
      </div>

      <div className="reco-timeline-items">
        <div className="reco-timeline-item reco-timeline-item--done">
          <span className="reco-timeline-dot reco-timeline-dot--done" />
          <span className="reco-timeline-text">Pertinence technique des recommandations</span>
          <span className="reco-timeline-status reco-timeline-status--done">Implémenté</span>
        </div>

        <div className="reco-timeline-item reco-timeline-item--backlog">
          <span className="reco-timeline-dot reco-timeline-dot--backlog" />
          <span className="reco-timeline-text">Découpage séquentiel du panier</span>
          <span className="reco-timeline-status reco-timeline-status--backlog">Backlog</span>
        </div>

        <div className="reco-timeline-item reco-timeline-item--backlog">
          <span className="reco-timeline-dot reco-timeline-dot--backlog" />
          <span className="reco-timeline-text">Deux temporalités de cross-sell</span>
          <span className="reco-timeline-status reco-timeline-status--backlog">Backlog</span>
        </div>

        <div className="reco-timeline-item reco-timeline-item--backlog">
          <span className="reco-timeline-dot reco-timeline-dot--backlog" />
          <span className="reco-timeline-text">Contextualisation du « pourquoi »</span>
          <span className="reco-timeline-status reco-timeline-status--backlog">Backlog</span>
        </div>
      </div>
    </div>
  )
}

/* ── Main Case Study Component ── */

export default function CaseStudyReco() {
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
            Retour
          </Link>

          <span style={{
            fontSize: 17,
            fontWeight: 500,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}>
            Fnac/Darty
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
              Case Study 02
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
              Recommandations accessoires
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
              Cross-sell data-informed chez Fnac/Darty
            </p>

            <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.7s var(--ease-out) 0.5s forwards',
            }}>
              {['UX Research', 'Data Analytics', 'Contentsquare', 'E-commerce'].map(tag => (
                <span key={tag} style={metaTagStyle}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Article body */}
          <article>

            {/* Section: Le problème */}
            <h2 style={sectionHeadingStyle}>Le problème</h2>

            <p style={bodyTextStyle}>
              Un client ajoute un ordinateur portable à son panier. En dessous, un carrousel lui propose une souris, une housse, un câble HDMI, des écouteurs, une extension de garantie. Cinq suggestions, aucune explication. Il scrolle, il ne clique pas, il finalise sa commande. Le taux d'accroche accessoires stagne.
            </p>

            <p style={bodyTextStyle}>
              Ce n'est pas un problème de catalogue. Les bons accessoires existent. C'est un problème de présentation : tout est recommandé de la même façon, au même moment, sans distinction entre ce qui est indispensable et ce qui est complémentaire. Une souris pour un PC fixe, c'est un accessoire évident — le client y pense seul. Une souris pour un portable, c'est du cross-sell : il faut donner une raison. En ligne, cette distinction n'existe pas. Le système traite les deux cas de manière identique.
            </p>

            <AccessoryDefinition />

            <p style={bodyTextStyle}>
              En alternance au sein de l'équipe UX, la squad en charge du sujet m'a sollicité pour comprendre pourquoi le cross-sell fonctionnait mieux en magasin qu'en ligne, et identifier les leviers pour combler cet écart. Le projet s'est structuré en deux phases : une phase de compréhension terrain, puis une phase d'atelier avec les clients pour valider et affiner les hypothèses.
            </p>

            {/* NDA Note */}
            <div className="reco-note" style={{ marginBottom: 48 }}>
              <span className="reco-note-label">Note</span>
              <p className="reco-note-text">
                Ce case study porte sur un projet réalisé chez Fnac/Darty. Par respect des engagements de confidentialité, les données chiffrées, les écrans et les documents internes ne sont pas reproduits. Les exemples de produits sont génériques. Le récit se concentre sur la démarche, le raisonnement et les apprentissages.
              </p>
            </div>

            {/* Section: Le terrain */}
            <h2 style={sectionHeadingStyle}>Le terrain</h2>

            <p style={bodyTextStyle}>
              Avant de regarder les données, il fallait comprendre la logique de ceux qui vendent avec succès. J'ai conduit des entretiens en présentiel dans deux magasins, avec une douzaine de vendeurs de rayons différents.
            </p>

            <p style={bodyTextStyle}>
              Ce qui ressort de ces échanges, c'est une séquence. Les vendeurs ne commencent jamais par les accessoires. Ils commencent par comprendre le besoin, ils accompagnent le choix du produit principal, ils sécurisent la décision. Ce n'est qu'après — une fois que le client est engagé sur son choix — qu'ils réintroduisent les compléments. Et ils le font toujours avec un lien explicite : cet accessoire-là va avec ce produit-là, pour cette raison-là.
            </p>

            <p style={bodyTextStyle}>
              Cette séquence n'existe nulle part dans le parcours digital. En ligne, les recommandations apparaissent dès la fiche produit, avant que le choix soit fait. Elles reviennent dans le panier, toujours sous la même forme : un carrousel horizontal, sans hiérarchie, sans contexte. Le vendeur construit un raisonnement ; le site affiche une liste.
            </p>

            <SellerVsDigitalFlow />

            <p style={bodyTextStyle}>
              L'autre enseignement des entretiens : la notion d'accessoire n'est pas universelle. Elle dépend du produit principal. Un vendeur en rayon informatique ne recommande pas de la même façon qu'un vendeur en rayon cuisine. L'effort nécessaire pour convaincre, le moment où l'accessoire fait sens, le type d'argument qui fonctionne — tout change d'une catégorie à l'autre. Cette variabilité, le digital l'ignore complètement.
            </p>

            {/* Section: Les clients */}
            <h2 style={sectionHeadingStyle}>Les clients</h2>

            <p style={bodyTextStyle}>
              Les entretiens vendeurs ont posé les hypothèses. Il fallait maintenant les confronter au comportement réel des clients.
            </p>

            <p style={bodyTextStyle}>
              Contentsquare a fourni la couche quantitative. L'analyse des parcours par catégorie de produit a révélé des différences significatives : les taux de clic sur les recommandations, les taux de scroll dans les zones d'accessoires, et les taux d'accroche au panier variaient fortement d'une catégorie à l'autre. Certaines typologies de produits généraient un engagement naturel avec les accessoires, d'autres presque aucun. Le comportement n'était pas uniforme, et pourtant l'interface l'était.
            </p>

            <p style={bodyTextStyle}>
              Un survey a été lancé en parallèle, avec plus de deux cents répondants. Il a permis de qualifier les profils d'acheteurs et de recruter pour la phase suivante. Cinq clients issus du survey ont participé à un focus group. L'objectif : comprendre ce qui les avait poussés — ou non — à ajouter des accessoires lors d'un achat récent.
            </p>

            <p style={bodyTextStyle}>
              Ce que le focus group a confirmé : le timing compte autant que la pertinence. Certains clients savent dès l'achat qu'ils auront besoin d'un accessoire, d'autres n'y pensent que dans les jours qui suivent, quand ils déballent le produit. La catégorie de produit conditionne ce timing. Et l'effort perçu — est-ce que je dois chercher moi-même, est-ce que c'est évident, est-ce que je comprends pourquoi — détermine si le client clique ou passe.
            </p>

            <EffortTimingMatrix />

            <p style={bodyTextStyle}>
              L'autre enseignement, moins attendu : les clients veulent être conseillés. Ils ne rejettent pas la recommandation en soi — ils rejettent la recommandation qui ressemble à une poussée commerciale. La ligne est fine entre « c'est vraiment utile pour ce que tu achètes » et « on veut juste te faire dépenser plus ». Quand la recommandation est perçue comme pertinente, elle est accueillie avec confiance. Les clients sont preneurs, à condition de comprendre pourquoi on leur propose ça. Ce n'est pas un rejet du cross-sell. C'est une exigence de contexte.
            </p>

            {/* Section: Ce qu'on a recommandé */}
            <h2 style={sectionHeadingStyle}>Ce qu'on a recommandé</h2>

            <p style={bodyTextStyle}>
              La présentation aux squads et aux équipes impactées a été construite autour d'un principe : chaque insight est backé par de la data, chaque piste de solution est argumentée. Extraits vidéo des entretiens vendeurs, captures Contentsquare, données du survey. Pas de recommandation sans preuve.
            </p>

            <p style={bodyTextStyle}>
              Trois axes sont sortis du travail.
            </p>

            <p style={bodyTextStyle}>
              Le premier : deux temporalités de cross-sell. Le moment de l'achat et les quinze jours qui suivent ne servent pas les mêmes besoins. L'accessoire évident peut être proposé au panier. L'accessoire de confort, celui auquel on pense en déballant, relève d'une relance post-achat contextualisée. Traiter les deux dans le même carrousel, c'est ignorer que le besoin n'existe pas encore au moment où on le montre.
            </p>

            <p style={bodyTextStyle}>
              Le deuxième : un découpage séquentiel du panier. Plutôt que de tout afficher en même temps, accompagner le client étape par étape — d'abord le produit principal, puis les accessoires, puis les services. C'est la logique du vendeur transposée au digital. Elle permet de ne pas surcharger la décision et de contextualiser chaque proposition.
            </p>

            <p style={bodyTextStyle}>
              Le troisième : la contextualisation du « pourquoi ». Expliquer le lien entre l'accessoire et le produit choisi. Pas « les clients ont aussi acheté », mais « cette housse est conçue pour ce format d'écran ». Le vendeur le fait naturellement. Le site ne le fait pas.
            </p>

            <SequentialCart />

            {/* Section: Ce qui s'est passé */}
            <h2 style={sectionHeadingStyle}>Ce qui s'est passé</h2>

            <p style={bodyTextStyle}>
              De ces trois axes, un seul a été implémenté : l'amélioration technique de la pertinence des recommandations. Le système a été ajusté pour supprimer les incohérences les plus visibles — ne plus recommander des AirPods sur un smartphone Android, par exemple. Un correctif nécessaire, mais qui ne touche qu'à la surface du problème.
            </p>

            <p style={bodyTextStyle}>
              Le découpage séquentiel du panier, les deux temporalités de cross-sell, la contextualisation — le cœur des recommandations — est resté en backlog. Les raisons sont un mélange de priorisation, de dépendances techniques et d'alignement entre équipes. Le système de recommandation existant ne permettait pas facilement ce type de restructuration. D'autres sujets sont passés devant sur la roadmap. Et les équipes n'étaient pas toutes alignées sur l'ampleur du changement à mener.
            </p>

            <ImplementationTimeline />

            <p style={bodyTextStyle}>
              Le résultat : un impact faible et décevant par rapport aux possibilités identifiées. L'insight était solide, la data le supportait, les pistes étaient concrètes. Mais la distance entre une recommandation bien documentée et son implémentation ne dépend pas de la qualité de la recherche. Elle dépend de la capacité du livrable à s'insérer dans le cycle de décision des équipes qui doivent l'exécuter.
            </p>

            <p style={bodyTextStyle}>
              Ce que ce projet m'a appris, c'est que livrer un bon diagnostic ne suffit pas. Le format compte autant que le fond. Si la recherche arrive comme un rapport qui « remonte », elle reste un input parmi d'autres. Si elle s'intègre dans le flux de travail de la squad — ses sprints, ses arbitrages, ses contraintes techniques — elle a une chance de devenir une décision. C'est une leçon que j'ai appliquée différemment sur les projets suivants.
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
                La distance entre un insight solide et une décision produit ne dépend pas de la qualité de la recherche. Elle dépend de la capacité du livrable à s'intégrer dans le cycle de décision de ceux qui doivent l'exécuter.
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
