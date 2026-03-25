// src/content/home.ts
// Bilingual content for the Home page.
// Structure mirrors page layout. Industry terms stay in English in both versions.

type Bilingual = { fr: string; en: string }

export const home = {
  nav: {
    role: { fr: 'Product Designer', en: 'Product Designer' } satisfies Bilingual,
    available: { fr: 'Disponible', en: 'Available' } satisfies Bilingual,
  },

  hero: {
    name: { fr: 'Romain Cochet', en: 'Romain Cochet' } satisfies Bilingual,
    subtitle: {
      fr: "Product designer, 8 ans d'exp\u00E9rience. Recherche, cadrage, d\u00E9cisions produit et suivi jusqu'\u00E0 la livraison. Je travaille avec toute la squad, pas dans un coin de Figma.",
      en: 'Product designer, 8 years in. Research, framing, product decisions, and follow-through to ship. I work with the whole squad \u2014 not in a Figma corner.',
    } satisfies Bilingual,
    tags: [
      { fr: 'Product Design', en: 'Product Design' },
      { fr: 'UX Research', en: 'UX Research' },
      { fr: 'Strat\u00E9gie Produit', en: 'Product Strategy' },
    ] satisfies Bilingual[],
  },

  about: {
    text: {
      fr: "De Darty \u00E0 un projet perso (Cooko), le fil rouge reste le m\u00EAme\u00A0: le design qui compte, c'est celui qui survit au contact de la r\u00E9alit\u00E9 \u2014 contraintes tech, retours terrain, arbitrages business. En dehors des \u00E9crans, quelque part entre Dijon et un sentier de rando.",
      en: 'From Darty to a side project (Cooko), the thread is the same: design only matters if it survives reality \u2014 tech constraints, field feedback, business trade-offs. Off-screen, somewhere between Dijon and a hiking trail.',
    } satisfies Bilingual,
  },

  projects: {
    sectionLabel: { fr: 'Projets', en: 'Projects' } satisfies Bilingual,

    cooko: {
      title: { fr: 'Cooko', en: 'Cooko' } satisfies Bilingual,
      description: {
        fr: "Application iOS de liste de courses collaborative. De la recherche utilisateur \u00E0 la mise en production \u2014 parsing vocal, synchronisation temps r\u00E9el et une exp\u00E9rience pens\u00E9e pour le foyer.",
        en: 'Collaborative iOS grocery list app. From user research to production \u2014 voice parsing, real-time sync, and an experience built for the household.',
      } satisfies Bilingual,
      tags: {
        fr: ['iOS', 'Product Design', 'UX Research', 'React Native'],
        en: ['iOS', 'Product Design', 'UX Research', 'React Native'],
      },
      year: '2025',
    },

    reco: {
      title: {
        fr: 'Recommandations accessoires',
        en: 'Accessory Recommendations',
      } satisfies Bilingual,
      description: {
        fr: "Comment la data terrain et client a r\u00E9v\u00E9l\u00E9 que le cross-sell en ligne \u00E9chouait parce qu'il ignorait le contexte d'achat. \u00C9tude vendeurs, analytics Contentsquare et focus group clients chez Fnac/Darty.",
        en: 'How field and customer data revealed online cross-sell was failing because it ignored purchase context. Seller interviews, Contentsquare analytics, and customer focus groups at Fnac/Darty.',
      } satisfies Bilingual,
      tags: {
        fr: ['UX Research', 'Data Analytics', 'Contentsquare', 'Fnac/Darty'],
        en: ['UX Research', 'Data Analytics', 'Contentsquare', 'Fnac/Darty'],
      },
      year: '2024',
    },
  },

  footer: {
    location: {
      fr: 'Dijon, France \u00B7 Disponible remote',
      en: 'Dijon, France \u00B7 Open to remote',
    } satisfies Bilingual,
    linkedin: { fr: 'LinkedIn', en: 'LinkedIn' } satisfies Bilingual,
    contact: { fr: 'Contact', en: 'Contact' } satisfies Bilingual,
  },
} as const
