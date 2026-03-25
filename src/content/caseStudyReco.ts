export const caseStudyReco = {
  nav: {
    back: { fr: 'Retour', en: 'Back' },
    title: { fr: 'Fnac/Darty', en: 'Fnac/Darty' },
  },
  hero: {
    label: { fr: 'Case Study 02', en: 'Case Study 02' },
    title: { fr: 'Recommandations accessoires', en: 'Accessory recommendations' },
    subtitle: {
      fr: 'Cross-sell data-informed chez Fnac/Darty',
      en: 'Data-informed cross-sell at Fnac/Darty',
    },
    tags: {
      fr: ['UX Research', 'Data Analytics', 'Contentsquare', 'E-commerce'],
      en: ['UX Research', 'Data Analytics', 'Contentsquare', 'E-commerce'],
    },
  },
  sections: {
    problem: {
      heading: { fr: 'Le probl\u00e8me', en: 'The problem' },
      paragraphs: [
        {
          fr: "Un client ajoute un ordinateur portable \u00e0 son panier. En dessous, un carrousel lui propose une souris, une housse, un c\u00e2ble HDMI, des \u00e9couteurs, une extension de garantie. Cinq suggestions, aucune explication. Il scrolle, il ne clique pas, il finalise sa commande. Le taux d\u2019accroche accessoires stagne.",
          en: "A customer adds a laptop to their cart. Below it, a carousel suggests a mouse, a sleeve, an HDMI cable, earbuds, an extended warranty. Five suggestions, zero explanation. They scroll past, don\u2019t click, and check out. Accessory attach rate: flat.",
        },
        {
          fr: "Ce n\u2019est pas un probl\u00e8me de catalogue. Les bons accessoires existent. C\u2019est un probl\u00e8me de pr\u00e9sentation\u00a0: tout est recommand\u00e9 de la m\u00eame fa\u00e7on, au m\u00eame moment, sans distinction entre ce qui est indispensable et ce qui est compl\u00e9mentaire. Une souris pour un PC fixe, c\u2019est un accessoire \u00e9vident\u00a0\u2014 le client y pense seul. Une souris pour un portable, c\u2019est du cross-sell\u00a0: il faut donner une raison. En ligne, cette distinction n\u2019existe pas. Le syst\u00e8me traite les deux cas de mani\u00e8re identique.",
          en: "It\u2019s not a catalog problem. The right accessories exist. It\u2019s a presentation problem: everything is recommended the same way, at the same time, with no distinction between what\u2019s essential and what\u2019s complementary. A mouse for a desktop PC is obvious \u2014 the customer thinks of it themselves. A mouse for a laptop is cross-sell: you need to give a reason. Online, that distinction doesn\u2019t exist. The system treats both cases identically.",
        },
        {
          fr: "En alternance au sein de l\u2019\u00e9quipe UX, la squad en charge du sujet m\u2019a sollicit\u00e9 pour comprendre pourquoi le cross-sell fonctionnait mieux en magasin qu\u2019en ligne, et identifier les leviers pour combler cet \u00e9cart. Le projet s\u2019est structur\u00e9 en deux phases\u00a0: une phase de compr\u00e9hension terrain, puis une phase d\u2019atelier avec les clients pour valider et affiner les hypoth\u00e8ses.",
          en: "As a UX intern, the squad owning the topic brought me in to understand why cross-sell worked better in-store than online, and to find levers to close the gap. The project had two phases: fieldwork to build understanding, then workshops with customers to validate and sharpen hypotheses.",
        },
      ],
    },
    terrain: {
      heading: { fr: 'Le terrain', en: 'The fieldwork' },
      paragraphs: [
        {
          fr: "Avant de regarder les donn\u00e9es, il fallait comprendre la logique de ceux qui vendent avec succ\u00e8s. J\u2019ai conduit des entretiens en pr\u00e9sentiel dans deux magasins, avec une douzaine de vendeurs de rayons diff\u00e9rents.",
          en: "Before looking at the data, I needed to understand the logic of the people who actually sell well. I ran in-person interviews across two stores with a dozen sellers from different departments.",
        },
        {
          fr: "Ce qui ressort de ces \u00e9changes, c\u2019est une s\u00e9quence. Les vendeurs ne commencent jamais par les accessoires. Ils commencent par comprendre le besoin, ils accompagnent le choix du produit principal, ils s\u00e9curisent la d\u00e9cision. Ce n\u2019est qu\u2019apr\u00e8s\u00a0\u2014 une fois que le client est engag\u00e9 sur son choix\u00a0\u2014 qu\u2019ils r\u00e9introduisent les compl\u00e9ments. Et ils le font toujours avec un lien explicite\u00a0: cet accessoire-l\u00e0 va avec ce produit-l\u00e0, pour cette raison-l\u00e0.",
          en: "What emerged is a sequence. Sellers never start with accessories. They start by understanding the need, guiding the main product choice, then securing the decision. Only after \u2014 once the customer is committed \u2014 do they bring in add-ons. And always with an explicit link: this accessory goes with this product, for this reason.",
        },
        {
          fr: "Cette s\u00e9quence n\u2019existe nulle part dans le parcours digital. En ligne, les recommandations apparaissent d\u00e8s la fiche produit, avant que le choix soit fait. Elles reviennent dans le panier, toujours sous la m\u00eame forme\u00a0: un carrousel horizontal, sans hi\u00e9rarchie, sans contexte. Le vendeur construit un raisonnement\u00a0; le site affiche une liste.",
          en: "This sequence doesn\u2019t exist anywhere in the digital flow. Online, recommendations appear on the product page before the choice is even made. They show up again in the cart, same format: a horizontal carousel, no hierarchy, no context. The seller builds a narrative; the site displays a list.",
        },
        {
          fr: "L\u2019autre enseignement des entretiens\u00a0: la notion d\u2019accessoire n\u2019est pas universelle. Elle d\u00e9pend du produit principal. Un vendeur en rayon informatique ne recommande pas de la m\u00eame fa\u00e7on qu\u2019un vendeur en rayon cuisine. L\u2019effort n\u00e9cessaire pour convaincre, le moment o\u00f9 l\u2019accessoire fait sens, le type d\u2019argument qui fonctionne\u00a0\u2014 tout change d\u2019une cat\u00e9gorie \u00e0 l\u2019autre. Cette variabilit\u00e9, le digital l\u2019ignore compl\u00e8tement.",
          en: "The other takeaway: the notion of \u201caccessory\u201d isn\u2019t universal. It depends on the main product. A tech-department seller doesn\u2019t recommend the same way as a kitchen-department seller. The effort to convince, the moment when the accessory makes sense, the type of argument that works \u2014 everything changes by category. The digital experience ignores this completely.",
        },
      ],
    },
    clients: {
      heading: { fr: 'Les clients', en: 'The customers' },
      paragraphs: [
        {
          fr: "Les entretiens vendeurs ont pos\u00e9 les hypoth\u00e8ses. Il fallait maintenant les confronter au comportement r\u00e9el des clients.",
          en: "Seller interviews built the hypotheses. Now they needed to be tested against real customer behavior.",
        },
        {
          fr: "Contentsquare a fourni la couche quantitative. L\u2019analyse des parcours par cat\u00e9gorie de produit a r\u00e9v\u00e9l\u00e9 des diff\u00e9rences significatives\u00a0: les taux de clic sur les recommandations, les taux de scroll dans les zones d\u2019accessoires, et les taux d\u2019accroche au panier variaient fortement d\u2019une cat\u00e9gorie \u00e0 l\u2019autre. Certaines typologies de produits g\u00e9n\u00e9raient un engagement naturel avec les accessoires, d\u2019autres presque aucun. Le comportement n\u2019\u00e9tait pas uniforme, et pourtant l\u2019interface l\u2019\u00e9tait.",
          en: "Contentsquare provided the quantitative layer. Analyzing journeys by product category revealed significant differences: click-through rates on recommendations, scroll rates in accessory zones, and cart attach rates varied wildly across categories. Some product types drove natural engagement with accessories; others, almost none. Behavior wasn\u2019t uniform \u2014 yet the interface was.",
        },
        {
          fr: "Un survey a \u00e9t\u00e9 lanc\u00e9 en parall\u00e8le, avec plus de deux cents r\u00e9pondants. Il a permis de qualifier les profils d\u2019acheteurs et de recruter pour la phase suivante. Cinq clients issus du survey ont particip\u00e9 \u00e0 un focus group. L\u2019objectif\u00a0: comprendre ce qui les avait pouss\u00e9s\u00a0\u2014 ou non\u00a0\u2014 \u00e0 ajouter des accessoires lors d\u2019un achat r\u00e9cent.",
          en: "A parallel survey gathered 200+ respondents. It helped profile buyer types and recruit for the next phase. Five customers from the survey joined a focus group. The goal: understand what drove them \u2014 or didn\u2019t \u2014 to add accessories during a recent purchase.",
        },
        {
          fr: "Ce que le focus group a confirm\u00e9\u00a0: le timing compte autant que la pertinence. Certains clients savent d\u00e8s l\u2019achat qu\u2019ils auront besoin d\u2019un accessoire, d\u2019autres n\u2019y pensent que dans les jours qui suivent, quand ils d\u00e9ballent le produit. La cat\u00e9gorie de produit conditionne ce timing. Et l\u2019effort per\u00e7u\u00a0\u2014 est-ce que je dois chercher moi-m\u00eame, est-ce que c\u2019est \u00e9vident, est-ce que je comprends pourquoi\u00a0\u2014 d\u00e9termine si le client clique ou passe.",
          en: "What the focus group confirmed: timing matters as much as relevance. Some customers know at purchase they\u2019ll need an accessory; others only think about it days later, while unboxing. Product category drives this timing. And perceived effort \u2014 do I have to search myself, is it obvious, do I understand why \u2014 determines whether the customer clicks or moves on.",
        },
        {
          fr: "L\u2019autre enseignement, moins attendu\u00a0: les clients veulent \u00eatre conseill\u00e9s. Ils ne rejettent pas la recommandation en soi\u00a0\u2014 ils rejettent la recommandation qui ressemble \u00e0 une pouss\u00e9e commerciale. La ligne est fine entre \u00ab\u00a0c\u2019est vraiment utile pour ce que tu ach\u00e8tes\u00a0\u00bb et \u00ab\u00a0on veut juste te faire d\u00e9penser plus\u00a0\u00bb. Quand la recommandation est per\u00e7ue comme pertinente, elle est accueillie avec confiance. Les clients sont preneurs, \u00e0 condition de comprendre pourquoi on leur propose \u00e7a. Ce n\u2019est pas un rejet du cross-sell. C\u2019est une exigence de contexte.",
          en: "The less expected finding: customers want to be advised. They don\u2019t reject recommendations \u2014 they reject recommendations that feel like a sales push. The line between \u201cthis is genuinely useful for what you\u2019re buying\u201d and \u201cwe just want you to spend more\u201d is thin. When a recommendation feels relevant, it\u2019s welcomed with trust. Customers are open to it \u2014 as long as they understand why. It\u2019s not a rejection of cross-sell. It\u2019s a demand for context.",
        },
      ],
    },
    recommended: {
      heading: { fr: "Ce qu\u2019on a recommand\u00e9", en: 'What we recommended' },
      paragraphs: [
        {
          fr: "La pr\u00e9sentation aux squads et aux \u00e9quipes impact\u00e9es a \u00e9t\u00e9 construite autour d\u2019un principe\u00a0: chaque insight est back\u00e9 par de la data, chaque piste de solution est argument\u00e9e. Extraits vid\u00e9o des entretiens vendeurs, captures Contentsquare, donn\u00e9es du survey. Pas de recommandation sans preuve.",
          en: "The presentation to squads and stakeholders was built on one principle: every insight is backed by data, every solution path is argued. Video clips from seller interviews, Contentsquare captures, survey data. No recommendation without evidence.",
        },
        {
          fr: "Trois axes sont sortis du travail.",
          en: "Three axes came out of the work.",
        },
        {
          fr: "Le premier\u00a0: deux temporalit\u00e9s de cross-sell. Le moment de l\u2019achat et les quinze jours qui suivent ne servent pas les m\u00eames besoins. L\u2019accessoire \u00e9vident peut \u00eatre propos\u00e9 au panier. L\u2019accessoire de confort, celui auquel on pense en d\u00e9ballant, rel\u00e8ve d\u2019une relance post-achat contextualis\u00e9e. Traiter les deux dans le m\u00eame carrousel, c\u2019est ignorer que le besoin n\u2019existe pas encore au moment o\u00f9 on le montre.",
          en: "First: two cross-sell timeframes. The moment of purchase and the two weeks after serve different needs. The obvious accessory can be suggested at cart. The comfort accessory \u2014 the one you think of while unboxing \u2014 belongs in a contextualized post-purchase follow-up. Lumping both into the same carousel ignores that the need doesn\u2019t exist yet when you show it.",
        },
        {
          fr: "Le deuxi\u00e8me\u00a0: un d\u00e9coupage s\u00e9quentiel du panier. Plut\u00f4t que de tout afficher en m\u00eame temps, accompagner le client \u00e9tape par \u00e9tape\u00a0\u2014 d\u2019abord le produit principal, puis les accessoires, puis les services. C\u2019est la logique du vendeur transpos\u00e9e au digital. Elle permet de ne pas surcharger la d\u00e9cision et de contextualiser chaque proposition.",
          en: "Second: a sequential cart breakdown. Instead of showing everything at once, guide the customer step by step \u2014 main product first, then accessories, then services. It\u2019s the seller\u2019s logic translated to digital. It prevents decision overload and contextualizes each suggestion.",
        },
        {
          fr: "Le troisi\u00e8me\u00a0: la contextualisation du \u00ab\u00a0pourquoi\u00a0\u00bb. Expliquer le lien entre l\u2019accessoire et le produit choisi. Pas \u00ab\u00a0les clients ont aussi achet\u00e9\u00a0\u00bb, mais \u00ab\u00a0cette housse est con\u00e7ue pour ce format d\u2019\u00e9cran\u00a0\u00bb. Le vendeur le fait naturellement. Le site ne le fait pas.",
          en: "Third: contextualizing the \u201cwhy.\u201d Explain the link between the accessory and the chosen product. Not \u201ccustomers also bought\u201d but \u201cthis sleeve is designed for this screen size.\u201d The seller does it naturally. The site doesn\u2019t.",
        },
      ],
    },
    whatHappened: {
      heading: { fr: "Ce qui s\u2019est pass\u00e9", en: 'What happened' },
      paragraphs: [
        {
          fr: "De ces trois axes, un seul a \u00e9t\u00e9 impl\u00e9ment\u00e9\u00a0: l\u2019am\u00e9lioration technique de la pertinence des recommandations. Le syst\u00e8me a \u00e9t\u00e9 ajust\u00e9 pour supprimer les incoh\u00e9rences les plus visibles\u00a0\u2014 ne plus recommander des AirPods sur un smartphone Android, par exemple. Un correctif n\u00e9cessaire, mais qui ne touche qu\u2019\u00e0 la surface du probl\u00e8me.",
          en: "Of the three axes, only one shipped: improving the technical relevance of recommendations. The system was tuned to remove the most glaring mismatches \u2014 no more suggesting AirPods on an Android phone, for instance. A necessary fix, but one that only scratches the surface.",
        },
        {
          fr: "Le d\u00e9coupage s\u00e9quentiel du panier, les deux temporalit\u00e9s de cross-sell, la contextualisation\u00a0\u2014 le c\u0153ur des recommandations\u00a0\u2014 est rest\u00e9 en backlog. Les raisons sont un m\u00e9lange de priorisation, de d\u00e9pendances techniques et d\u2019alignement entre \u00e9quipes. Le syst\u00e8me de recommandation existant ne permettait pas facilement ce type de restructuration. D\u2019autres sujets sont pass\u00e9s devant sur la roadmap. Et les \u00e9quipes n\u2019\u00e9taient pas toutes align\u00e9es sur l\u2019ampleur du changement \u00e0 mener.",
          en: "The sequential cart, the two cross-sell timeframes, the contextualization \u2014 the core of the recommendations \u2014 stayed in backlog. The reasons: a mix of prioritization, technical dependencies, and cross-team alignment. The existing recommendation engine didn\u2019t easily support this kind of restructuring. Other topics moved ahead on the roadmap. And not all teams were aligned on the scope of change required.",
        },
        {
          fr: "Le r\u00e9sultat\u00a0: un impact faible et d\u00e9cevant par rapport aux possibilit\u00e9s identifi\u00e9es. L\u2019insight \u00e9tait solide, la data le supportait, les pistes \u00e9taient concr\u00e8tes. Mais la distance entre une recommandation bien document\u00e9e et son impl\u00e9mentation ne d\u00e9pend pas de la qualit\u00e9 de la recherche. Elle d\u00e9pend de la capacit\u00e9 du livrable \u00e0 s\u2019ins\u00e9rer dans le cycle de d\u00e9cision des \u00e9quipes qui doivent l\u2019ex\u00e9cuter.",
          en: "The result: low impact, disappointing given what was identified. The insight was solid, the data supported it, the paths were concrete. But the distance between a well-documented recommendation and its implementation doesn\u2019t depend on research quality. It depends on whether the deliverable fits into the decision cycle of the teams that have to execute it.",
        },
        {
          fr: "Ce que ce projet m\u2019a appris, c\u2019est que livrer un bon diagnostic ne suffit pas. Le format compte autant que le fond. Si la recherche arrive comme un rapport qui \u00ab\u00a0remonte\u00a0\u00bb, elle reste un input parmi d\u2019autres. Si elle s\u2019int\u00e8gre dans le flux de travail de la squad\u00a0\u2014 ses sprints, ses arbitrages, ses contraintes techniques\u00a0\u2014 elle a une chance de devenir une d\u00e9cision. C\u2019est une le\u00e7on que j\u2019ai appliqu\u00e9e diff\u00e9remment sur les projets suivants.",
          en: "What this project taught me: a good diagnosis isn\u2019t enough. Format matters as much as substance. If research arrives as a report that \u201cbubbles up,\u201d it stays one input among many. If it plugs into the squad\u2019s workflow \u2014 their sprints, their trade-offs, their technical constraints \u2014 it has a shot at becoming a decision. A lesson I applied differently on every project since.",
        },
      ],
    },
  },
  ndaNote: {
    label: { fr: 'Note', en: 'Note' },
    text: {
      fr: "Ce case study porte sur un projet r\u00e9alis\u00e9 chez Fnac/Darty. Par respect des engagements de confidentialit\u00e9, les donn\u00e9es chiffr\u00e9es, les \u00e9crans et les documents internes ne sont pas reproduits. Les exemples de produits sont g\u00e9n\u00e9riques. Le r\u00e9cit se concentre sur la d\u00e9marche, le raisonnement et les apprentissages.",
      en: "This case study covers work done at Fnac/Darty. Out of respect for confidentiality agreements, metrics, screens, and internal documents are not shown. Product examples are generic. The focus is on process, reasoning, and takeaways.",
    },
  },
  pullQuote: {
    fr: "La distance entre un insight solide et une d\u00e9cision produit ne d\u00e9pend pas de la qualit\u00e9 de la recherche. Elle d\u00e9pend de la capacit\u00e9 du livrable \u00e0 s\u2019int\u00e9grer dans le cycle de d\u00e9cision de ceux qui doivent l\u2019ex\u00e9cuter.",
    en: "The gap between a solid insight and a product decision doesn\u2019t depend on research quality. It depends on whether the deliverable fits into the decision cycle of the people who have to act on it.",
  },
  illustrations: {
    accessoryDefinition: {
      label: { fr: 'D\u00e9finition', en: 'Definition' },
      title: { fr: 'Indispensable vs compl\u00e9mentaire', en: 'Essential vs complementary' },
      col1: {
        icon: '\uD83D\uDDA5\uFE0F',
        label: { fr: 'PC fixe + souris', en: 'Desktop PC + mouse' },
        title: { fr: 'Accessoire indispensable', en: 'Essential accessory' },
        desc: {
          fr: "Le client y pense seul. Pas besoin de le convaincre.",
          en: "The customer thinks of it on their own. No convincing needed.",
        },
        tag: { fr: 'Hors p\u00e9rim\u00e8tre cross-sell', en: 'Outside cross-sell scope' },
      },
      col2: {
        icon: '\uD83D\uDCBB',
        label: { fr: 'Portable + souris', en: 'Laptop + mouse' },
        title: { fr: 'Accessoire compl\u00e9mentaire', en: 'Complementary accessory' },
        desc: {
          fr: "Il faut donner une raison. C\u2019est ici que le cross-sell intervient.",
          en: "You need to give a reason. This is where cross-sell kicks in.",
        },
        tag: { fr: 'P\u00e9rim\u00e8tre cross-sell', en: 'Cross-sell scope' },
      },
    },
    sellerVsDigital: {
      label: { fr: 'Comparaison', en: 'Comparison' },
      title: {
        fr: 'S\u00e9quence vendeur vs parcours digital',
        en: 'Seller sequence vs digital flow',
      },
      sellerTitle: { fr: 'Vendeur en magasin', en: 'In-store seller' },
      sellerSteps: {
        fr: [
          'Comprendre le besoin',
          'Accompagner le choix du produit',
          'S\u00e9curiser la d\u00e9cision',
          'R\u00e9introduire les accessoires',
        ],
        en: [
          'Understand the need',
          'Guide product choice',
          'Secure the decision',
          'Reintroduce accessories',
        ],
      },
      sellerAnnotation: {
        fr: 'S\u00e9quentiel \u00b7 Contextuel \u00b7 Argument\u00e9',
        en: 'Sequential \u00b7 Contextual \u00b7 Reasoned',
      },
      digitalTitle: { fr: 'Parcours digital', en: 'Digital flow' },
      digitalStep1: {
        fr: 'Fiche produit \u2192 carrousel recos',
        en: 'Product page \u2192 reco carousel',
      },
      digitalStep2: {
        fr: 'Panier \u2192 m\u00eame carrousel recos',
        en: 'Cart \u2192 same reco carousel',
      },
      digitalAnnotation: {
        fr: 'Simultan\u00e9 \u00b7 Pas de s\u00e9quence \u00b7 Pas de contexte',
        en: 'Simultaneous \u00b7 No sequence \u00b7 No context',
      },
    },
    effortTimingMatrix: {
      label: { fr: 'Matrice', en: 'Matrix' },
      title: {
        fr: "Effort d\u2019accroche \u00d7 timing naturel",
        en: 'Hook effort \u00d7 natural timing',
      },
      axisY: {
        top: { fr: 'Post-achat', en: 'Post-purchase' },
        bottom: { fr: "\u00c0 l\u2019achat", en: 'At purchase' },
      },
      axisX: {
        left: { fr: 'Effort faible', en: 'Low effort' },
        right: { fr: 'Effort fort', en: 'High effort' },
      },
      cells: [
        {
          emoji: '\uD83D\uDCE6',
          name: { fr: 'Le manque', en: 'The gap' },
          example: { fr: 'Consommables, recharges', en: 'Consumables, refills' },
        },
        {
          emoji: '\uD83D\uDCA1',
          name: { fr: 'La d\u00e9couverte', en: 'The discovery' },
          example: { fr: "Compl\u00e9ments d\u2019usage", en: 'Usage add-ons' },
        },
        {
          emoji: '\u26A1',
          name: { fr: 'Le r\u00e9flexe', en: 'The reflex' },
          example: { fr: 'C\u00e2bles, protections', en: 'Cables, cases' },
        },
        {
          emoji: '\uD83C\uDFAF',
          name: { fr: 'Le conseil', en: 'The advice' },
          example: { fr: 'Accessoires techniques', en: 'Technical accessories' },
        },
      ],
    },
    sequentialCart: {
      label: { fr: 'Concept', en: 'Concept' },
      title: {
        fr: 'Panier s\u00e9quentiel en 3 \u00e9tapes',
        en: '3-step sequential cart',
      },
      steps: [
        {
          title: { fr: 'Produit principal', en: 'Main product' },
          desc: { fr: 'Choix s\u00e9curis\u00e9, d\u00e9cision prise', en: 'Choice secured, decision made' },
        },
        {
          title: { fr: 'Accessoires', en: 'Accessories' },
          desc: {
            fr: 'Contextualis\u00e9s, li\u00e9s au produit choisi',
            en: 'Contextualized, tied to the chosen product',
          },
        },
        {
          title: { fr: 'Services', en: 'Services' },
          desc: {
            fr: 'Garantie, installation, livraison',
            en: 'Warranty, setup, delivery',
          },
        },
      ],
      annotation: {
        fr: 'La logique du vendeur, transpos\u00e9e au digital.',
        en: "The seller\u2019s logic, translated to digital.",
      },
    },
    implementationTimeline: {
      label: { fr: 'R\u00e9sultat', en: 'Outcome' },
      title: {
        fr: 'Recommand\u00e9 vs impl\u00e9ment\u00e9',
        en: 'Recommended vs shipped',
      },
      items: [
        {
          text: {
            fr: 'Pertinence technique des recommandations',
            en: 'Technical relevance of recommendations',
          },
          status: { fr: 'Impl\u00e9ment\u00e9', en: 'Shipped' },
          done: true,
        },
        {
          text: {
            fr: 'D\u00e9coupage s\u00e9quentiel du panier',
            en: 'Sequential cart breakdown',
          },
          status: { fr: 'Backlog', en: 'Backlog' },
          done: false,
        },
        {
          text: {
            fr: 'Deux temporalit\u00e9s de cross-sell',
            en: 'Two cross-sell timeframes',
          },
          status: { fr: 'Backlog', en: 'Backlog' },
          done: false,
        },
        {
          text: {
            fr: 'Contextualisation du \u00ab\u00a0pourquoi\u00a0\u00bb',
            en: 'Contextualizing the \u201cwhy\u201d',
          },
          status: { fr: 'Backlog', en: 'Backlog' },
          done: false,
        },
      ],
    },
  },
  footer: {
    location: {
      fr: 'Dijon, France \u00b7 Disponible remote',
      en: 'Dijon, France \u00b7 Open to remote',
    },
  },
}
