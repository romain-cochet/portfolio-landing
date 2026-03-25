type Bilingual = { fr: string; en: string }
type BilingualArray = { fr: string[]; en: string[] }

type OnboardingStep = {
  title: Bilingual
  description: Bilingual
  annotation: Bilingual | null
}

type JourneyMoment = {
  label: Bilingual
  today: Bilingual
  friction: Bilingual
  cookoV1: BilingualArray | null
}

type QuickAddResult = { name: string; quantity?: string }

export const caseStudyCooko = {
  nav: {
    back: { fr: 'Retour', en: 'Back' },
    title: { fr: 'Cooko', en: 'Cooko' },
  },

  hero: {
    label: { fr: 'Case Study 01', en: 'Case Study 01' },
    title: { fr: 'Cooko', en: 'Cooko' },
    subtitle: { fr: 'Liste de courses connect\u00e9e', en: 'Connected grocery list' },
    tags: {
      fr: ['iOS', 'React Native / Expo', 'Sprint 3 jours', 'Mars 2026'],
      en: ['iOS', 'React Native / Expo', '3-day sprint', 'March 2026'],
    },
  },

  sections: {
    problem: {
      heading: { fr: 'Le probl\u00e8me', en: 'The problem' },
      paragraphs: [
        {
          fr: 'Sophie pousse son caddie dans le rayon caf\u00e9. Sur la liste, un mot\u2009: \u00ab\u2009caf\u00e9\u2009\u00bb. Elle en boit au lait, pas tr\u00e8s regardante sur la marque. Sauf que ce n\u2019est pas pour elle. C\u2019est pour Romain, qui le prend noir, qui a ses habitudes, et qui n\u2019a rien pr\u00e9cis\u00e9. Elle h\u00e9site quelques secondes devant le rayon, attrape un paquet qui lui semble familier, et passe au suivant. Dix articles plus tard, elle aura pris dix d\u00e9cisions de ce type, chacune un peu plus floue que la pr\u00e9c\u00e9dente.',
          en: 'Sophie pushes her cart through the coffee aisle. The list says one word: "coffee." She drinks hers with milk, not picky about brands. But this isn\'t for her. It\'s for Romain, who drinks it black, has his preferences, and wrote nothing else. She hesitates for a few seconds, grabs a bag that looks familiar, and moves on. Ten items later, she\'ll have made ten decisions like this, each blurrier than the last.',
        },
        {
          fr: 'Ce qui rend ces choix fatigants, ce n\u2019est pas leur complexit\u00e9. C\u2019est leur accumulation. Sophie sort du travail. Sa journ\u00e9e a d\u00e9j\u00e0 \u00e9t\u00e9 une succession de d\u00e9cisions, de sollicitations, de choses \u00e0 retenir. Et les courses viennent se poser par-dessus, comme une couche suppl\u00e9mentaire de charge mentale, \u00e0 un moment o\u00f9 la capacit\u00e9 \u00e0 trancher est au plus bas. Chaque h\u00e9sitation en rayon co\u00fbte un peu plus cher que la pr\u00e9c\u00e9dente. Et le mauvais choix ne reste pas en rayon. Il rentre \u00e0 la maison avec elle. C\u2019est la remarque en d\u00e9chargeant les sacs, le \u00ab\u2009ah t\u2019as pas pris le bon\u2009\u00bb qui ne m\u00e9ritait ni d\u2019\u00eatre dit ni d\u2019\u00eatre entendu.',
          en: 'What makes these choices exhausting isn\'t complexity. It\'s accumulation. Sophie is coming off a full day of decisions, requests, things to remember. Groceries land on top as one more layer of mental load, right when decision-making capacity is at its lowest. Each hesitation in the aisle costs more than the last. And the wrong pick doesn\'t stay in the store. It comes home. It\'s the comment while unpacking the bags\u2014the "oh, you got the wrong one" that nobody needed to say or hear.',
        },
        {
          fr: 'Le probl\u00e8me n\u2019est pas que Sophie ne sait pas d\u00e9cider. C\u2019est que la liste ne l\u2019aide pas. Tout ce qui rendrait le choix \u00e9vident \u2014 la variante, la marque, quoi prendre si le produit n\u2019est plus en stock \u2014 est rest\u00e9 dans la t\u00eate de celui qui a \u00e9crit \u00ab\u2009caf\u00e9\u2009\u00bb sans rien ajouter d\u2019autre.',
          en: 'The problem isn\'t that Sophie can\'t decide. It\'s that the list doesn\'t help. Everything that would make the choice obvious\u2014the variant, the brand, what to grab if it\'s out of stock\u2014stayed in the head of whoever wrote "coffee" and nothing else.',
        },
      ] satisfies Bilingual[],
      callout: {
        fr: 'Cooko v1 s\u2019attaque \u00e0 cette friction pr\u00e9cise. Chaque article peut porter une note et une substitution pr\u00e9vue en cas de rupture. Le contexte d\u2019achat voyage avec la liste, pas dans une conversation WhatsApp parall\u00e8le. Ce n\u2019est pas la liste enti\u00e8re qui devient intelligente. C\u2019est chaque ligne qui devient autonome.',
        en: 'Cooko v1 tackles this exact friction. Every item can carry a note and a planned substitution for out-of-stock situations. Purchase context travels with the list\u2014not in a side WhatsApp thread. The whole list doesn\'t get smart. Each line does.',
      },
    },

    terrain: {
      heading: { fr: 'Le terrain', en: 'The research' },
      paragraphs: [
        {
          fr: 'Ce que Sophie vit en rayon, les chiffres le confirment \u00e0 l\u2019\u00e9chelle. 77\u2009% des femmes d\u00e9clarent avoir trop de choses \u00e0 penser et peur d\u2019oublier. 61\u2009% des hommes ignorent la charge mentale de leur partenaire. Et 53\u2009% des acheteurs envoient d\u00e9j\u00e0 des photos de produits \u00e0 leur partenaire en magasin pour valider un choix. Ce dernier chiffre dit beaucoup\u2009: l\u2019information existe quelque part dans le couple, elle ne voyage simplement pas avec la liste.',
          en: 'What Sophie experiences in the aisle, the numbers confirm at scale. 77% of women say they have too much to think about and fear forgetting things. 61% of men are unaware of their partner\'s mental load. And 53% of shoppers already send product photos to their partner from the store to validate a choice. That last number says it all: the information exists somewhere in the household. It just doesn\'t travel with the list.',
        },
        {
          fr: 'Cinq apps de liste de courses ont \u00e9t\u00e9 analys\u00e9es. Ce qu\u2019elles font toutes en 2026 \u2014 synchronisation temps r\u00e9el, cat\u00e9gorisation automatique \u2014 est le plancher du march\u00e9. Ce qui manque partout\u2009: le contexte d\u2019achat attach\u00e9 \u00e0 chaque article, et une interface qui tient compte du fait qu\u2019en rayon, on a une seule main libre.',
          en: 'Five grocery list apps were analyzed. What they all do in 2026\u2014real-time sync, auto-categorization\u2014is table stakes. What\'s missing everywhere: purchase context attached to each item, and an interface built for the fact that in the aisle, you only have one free hand.',
        },
      ] satisfies Bilingual[],
      note: {
        fr: 'Le r\u00e9flexe photo est r\u00e9el, mais Cooko v1 r\u00e9pond au m\u00eame besoin par le texte\u2009: notes et substitutions pr\u00e9vues sur chaque article. La photo de r\u00e9f\u00e9rence a \u00e9t\u00e9 \u00e9cart\u00e9e pour limiter le poids des items. Si la demande remonte en usage r\u00e9el, elle sera int\u00e9gr\u00e9e.',
        en: 'The photo reflex is real, but Cooko v1 answers the same need with text: notes and planned substitutions on every item. Reference photos were cut to keep items lightweight. If demand surfaces in real usage, they\'ll be added.',
      },
      noteLabel: { fr: 'Note', en: 'Note' },
    },

    journeyMapOutro: {
      paragraphs: [
        {
          fr: 'Cooko v1 intervient sur trois moments du parcours. La constitution de la liste est adress\u00e9e par l\u2019ajout vocal et le parsing intelligent. La coordination avant les courses passe par la synchronisation temps r\u00e9el et les notes par article. Le moment en rayon \u2014 celui qui concentre la majorit\u00e9 des frictions \u2014 a le plus pes\u00e9 sur les choix de design\u2009: vue unique \u00e0 une main, disparition des items coch\u00e9s, substitutions accessibles sans quitter la liste. L\u2019entr\u00e9e dans le foyer reste minimale en v1, et la m\u00e9moire des achats d\u2019une semaine \u00e0 l\u2019autre est report\u00e9e. Documenter ces limites fait partie du travail autant que r\u00e9soudre les frictions qu\u2019on adresse.',
          en: 'Cooko v1 covers three moments in the journey. List building is handled by voice input and smart parsing. Pre-shopping coordination runs on real-time sync and per-item notes. The in-store moment\u2014where most friction lives\u2014drove the hardest design calls: one-handed single view, checked items disappear, substitutions accessible without leaving the list. Household entry stays minimal in v1, and week-to-week purchase memory is deferred. Documenting what\'s out of scope is as much part of the work as solving the frictions we tackle.',
        },
      ] satisfies Bilingual[],
    },
  },

  threeDecisions: {
    heading: { fr: 'Trois d\u00e9cisions', en: 'Three decisions' },
    intro: {
      fr: 'Le raisonnement de design se lit dans les arbitrages. Pas dans les \u00e9crans finis, pas dans les features livr\u00e9es, mais dans les moments o\u00f9 un choix a \u00e9t\u00e9 fait et o\u00f9 un autre a \u00e9t\u00e9 \u00e9cart\u00e9.',
      en: 'Design thinking shows in trade-offs. Not in finished screens, not in shipped features\u2014but in the moments where one choice was made and another was discarded.',
    },
    decision1: {
      heading: { fr: '01 \u2014 Une vue, deux contextes', en: '01 \u2014 One view, two contexts' },
      paragraphs: [
        {
          fr: 'La liste de courses sert deux moments tr\u00e8s diff\u00e9rents. \u00c0 la maison, on planifie les deux mains libres, l\u2019attention disponible. En magasin, le t\u00e9l\u00e9phone est dans une main, le caddie dans l\u2019autre. L\u2019attention est fragment\u00e9e. On veut cocher vite, v\u00e9rifier ce qui reste, et ne pas perdre le fil entre deux rayons.',
          en: 'A grocery list serves two very different moments. At home, you plan with both hands free and full attention. In the store, the phone is in one hand, the cart in the other. Attention is fragmented. You want to check off fast, see what\'s left, and not lose track between aisles.',
        },
        {
          fr: 'Le brief initial pr\u00e9voyait un \u00e9cran d\u00e9di\u00e9 pour chaque contexte. Le probl\u00e8me, c\u2019est qu\u2019ajouter un switch entre deux modes, c\u2019est demander \u00e0 l\u2019utilisateur de prendre une d\u00e9cision de plus. Et c\u2019est exactement ce que Cooko cherche \u00e0 supprimer.',
          en: 'The initial brief had a dedicated screen for each context. The problem: adding a mode switch means asking the user to make one more decision. That\'s exactly what Cooko is trying to eliminate.',
        },
        {
          fr: 'La contrainte retenue\u2009: un seul \u00e9cran qui doit fonctionner pour les deux situations sans en p\u00e9naliser aucune. Cette contrainte a guid\u00e9 trois choix concrets. La voix comme entr\u00e9e prioritaire, parce que dicter une longue liste \u00e0 la maison est plus fluide que tout taper \u2014 et qu\u2019en magasin, une seule main suffit pour appuyer sur le micro. La disparition progressive des items coch\u00e9s coupl\u00e9e \u00e0 une vue panier s\u00e9par\u00e9e, pour que la liste ne montre que ce qui reste \u00e0 prendre et que chacun des deux espaces porte sa propre pastille de d\u00e9compte. L\u2019avatar dans le cercle de validation, pour savoir qui a pris quoi quand on fait les courses \u00e0 deux dans le m\u00eame magasin.',
          en: 'The constraint: one screen that works for both contexts without compromising either. This drove three concrete choices. Voice as the primary input\u2014because dictating a long list at home is smoother than typing it all, and in-store one hand is enough to hit the mic. Checked items fade out with a separate cart view, so the list only shows what\'s left and each space carries its own count badge. Avatars in the check circle, so you know who grabbed what when shopping together in the same store.',
        },
        {
          fr: 'Aucun de ces choix n\u2019est spectaculaire en isolation. C\u2019est leur coh\u00e9rence qui fait le design\u2009: tous servent la m\u00eame contrainte, une vue unique qui ne sacrifie ni la confection ni l\u2019achat.',
          en: 'None of these choices are spectacular in isolation. Their coherence is the design: all serve the same constraint\u2014a single view that sacrifices neither planning nor buying.',
        },
      ] satisfies Bilingual[],
    },
    decision2: {
      heading: { fr: '02 \u2014 Sophie et la banni\u00e8re au mauvais moment', en: '02 \u2014 Sophie and the badly-timed banner' },
      paragraphs: [
        {
          fr: 'L\u2019onboarding a commenc\u00e9 avec deux \u00e9crans\u2009: pr\u00e9nom et choix de foyer sur le premier, puis un deuxi\u00e8me \u00e9cran proposant de rejoindre un foyer existant, d\u2019inviter quelqu\u2019un, ou de passer. Cette version a \u00e9t\u00e9 simplifi\u00e9e avant le test\u2009: l\u2019\u00e9cran de choix a \u00e9t\u00e9 retir\u00e9, remplac\u00e9 par deux \u00e9crans de personnalisation (pr\u00e9nom, puis nom du foyer). L\u2019invitation a \u00e9t\u00e9 d\u00e9port\u00e9e dans une banni\u00e8re en couleur accent, affich\u00e9e en haut de la liste d\u00e8s l\u2019arriv\u00e9e sur l\u2019\u00e9cran principal.',
          en: 'Onboarding started with two screens: name and household choice on the first, then a second screen offering to join an existing household, invite someone, or skip. This was simplified before testing: the choice screen was removed, replaced by two personalization screens (first name, then household name). The invitation was moved into an accent-colored banner displayed at the top of the list on first arrival.',
        },
        {
          fr: 'C\u2019est cette version que Sophie a test\u00e9e. Elle passe les deux \u00e9crans de personnalisation sans difficult\u00e9. Elle arrive sur la liste vide. Elle me regarde\u2009: \u00ab\u2009Et maintenant\u2009?\u2009\u00bb. La banni\u00e8re d\u2019invitation en haut de l\u2019\u00e9cran capte son attention, mais ce n\u2019est pas ce dont elle a besoin \u00e0 ce moment-l\u00e0. Elle n\u2019a encore rien mis dans la liste, elle ne sait pas encore ce que l\u2019app fait. Lui proposer d\u2019inviter quelqu\u2019un alors qu\u2019elle n\u2019a pas encore \u00e9valu\u00e9 le produit, c\u2019est mettre la collaboration avant la valeur.',
          en: 'That\'s the version Sophie tested. She breezes through both personalization screens. Lands on the empty list. Looks at me: "Now what?" The invitation banner at the top grabs her attention, but it\'s not what she needs right now. She hasn\'t added anything yet, doesn\'t even know what the app does. Asking her to invite someone before she\'s evaluated the product means putting collaboration before value.',
        },
        {
          fr: 'Elle finit par ajouter quelques articles. Elle les coche, ouvre le panier. Mais elle passe compl\u00e8tement \u00e0 c\u00f4t\u00e9 des notes, la fonctionnalit\u00e9 qui permet d\u2019ajouter du contexte sur chaque article. La barre d\u2019ajout rapide en bas de l\u2019\u00e9cran manque aussi d\u2019affordance sur une liste vide\u2009: rien ne l\u2019invite clairement \u00e0 commencer par l\u00e0.',
          en: 'She ends up adding a few items. Checks them off, opens the cart. But she completely misses the notes\u2014the feature that lets you add context to each item. The quick add bar at the bottom also lacks affordance on an empty list: nothing clearly invites her to start there.',
        },
        {
          fr: 'Trois changements sont sortis de ce test. Le premier\u2009: la banni\u00e8re d\u2019invitation en couleur accent a \u00e9t\u00e9 supprim\u00e9e. Trop visible, au mauvais moment, elle ajoutait du bruit sur un \u00e9cran qui avait besoin de calme. L\u2019invitation au foyer a \u00e9t\u00e9 d\u00e9port\u00e9e dans les r\u00e9glages, o\u00f9 elle intervient quand l\u2019utilisateur est pr\u00eat, pas quand le flow l\u2019impose.',
          en: 'Three changes came out of this test. First: the accent-colored invitation banner was killed. Too loud, wrong timing\u2014it added noise to a screen that needed calm. Household invitation was moved to settings, where it surfaces when the user is ready, not when the flow forces it.',
        },
        {
          fr: 'Le deuxi\u00e8me\u2009: une banni\u00e8re contextuelle appara\u00eet apr\u00e8s l\u2019ajout de trois articles. Elle invite l\u2019utilisateur \u00e0 d\u00e9couvrir les notes sur ses items. Le d\u00e9clencheur n\u2019est plus l\u2019arriv\u00e9e dans l\u2019app mais le premier signe d\u2019engagement r\u00e9el.',
          en: 'Second: a contextual prompt appears after three items are added, inviting the user to discover notes. The trigger is no longer app entry\u2014it\'s the first sign of real engagement.',
        },
        {
          fr: 'Le troisi\u00e8me\u2009: la barre d\u2019ajout rapide a \u00e9t\u00e9 retravaill\u00e9e. Elle a servi de base pour repenser le header de la liste. Un stroke et un renforcement du liquid glass ont \u00e9t\u00e9 ajout\u00e9s pour am\u00e9liorer le contraste. La suppression de la banni\u00e8re en couleur accent a aussi contribu\u00e9 \u00e0 r\u00e9duire le bruit visuel global, ce qui a rendu la barre plus lisible par effet de soustraction autant que par retouche directe.',
          en: 'Third: the quick add bar was reworked. It became the starting point for rethinking the list header. A stroke and stronger liquid glass were added for better contrast. Removing the accent banner also reduced overall visual noise, making the bar more readable through subtraction as much as through direct refinement.',
        },
      ] satisfies Bilingual[],
    },
    decision3: {
      heading: { fr: '03 \u2014 Deux langages, deux parsings', en: '03 \u2014 Two languages, two parsers' },
      paragraphs: [
        {
          fr: 'La barre d\u2019ajout rapide accepte deux types d\u2019entr\u00e9e\u2009: le clavier et la voix. D\u00e8s les premi\u00e8res it\u00e9rations sur le proto fonctionnel, le parsing a montr\u00e9 ses limites. La saisie clavier suit des conventions implicites\u2009: \u00ab\u20092kg b\u0153uf, 3 tomates\u2009\u00bb se d\u00e9compose proprement en items s\u00e9par\u00e9s avec quantit\u00e9s. Le regex tient. Mais la dict\u00e9e vocale produit du langage naturel. \u00ab\u2009Deux kilos de b\u0153uf et puis aussi des tomates, euh, trois tomates\u2009\u00bb ne se parse pas de la m\u00eame fa\u00e7on. Les connecteurs, les h\u00e9sitations, les reformulations cassent la logique du d\u00e9coupage.',
          en: 'The quick add bar takes two input types: keyboard and voice. From the first iterations on the working prototype, parsing showed its limits. Keyboard input follows implicit conventions: "2kg beef, 3 tomatoes" splits cleanly into items with quantities. Regex holds. But voice dictation produces natural language. "Two kilos of beef and also some tomatoes, uh, three tomatoes" doesn\'t parse the same way. Connectors, hesitations, rephrasing break the splitting logic.',
        },
        {
          fr: 'C\u2019est un probl\u00e8me qui n\u2019aurait jamais \u00e9merg\u00e9 sur un prototype statique. Il a fallu que l\u2019app tourne, que la voix soit capt\u00e9e, que le texte dict\u00e9 arrive dans le champ pour que la limite apparaisse. Un proto Figma aurait montr\u00e9 un flow propre de bout en bout. Le proto fonctionnel a montr\u00e9 que le m\u00eame composant devait se comporter diff\u00e9remment selon la fa\u00e7on dont l\u2019utilisateur s\u2019en sert.',
          en: 'This problem would never have surfaced on a static prototype. The app had to run, the voice had to be captured, the dictated text had to hit the field for the limit to appear. A Figma prototype would have shown a clean end-to-end flow. The working prototype showed that the same component needed to behave differently depending on how the user interacts with it.',
        },
        {
          fr: 'La solution retenue\u2009: deux logiques de parsing distinctes selon la surface d\u2019entr\u00e9e. Regex pour le clavier, o\u00f9 la structure est pr\u00e9visible. LLM pour la voix, capable d\u2019interpr\u00e9ter le langage naturel avec ses h\u00e9sitations et ses tournures. Avec un syst\u00e8me de fallback\u2009: si le LLM \u00e9choue ou met trop de temps, le regex prend le relais pour ne jamais bloquer l\u2019ajout.',
          en: 'The solution: two distinct parsing paths based on input surface. Regex for keyboard, where structure is predictable. LLM for voice, able to interpret natural language with its hesitations and quirks. Plus a fallback system: if the LLM fails or takes too long, regex takes over so adding items is never blocked.',
        },
        {
          fr: 'Lors du test avec Sophie, c\u2019est la fonctionnalit\u00e9 qui l\u2019a le plus bluff\u00e9e. Elle a dict\u00e9 sa liste naturellement, sans se soucier de la formulation, et les articles sont apparus correctement d\u00e9coup\u00e9s. Ce qui aurait pu rester un probl\u00e8me technique invisible est devenu le moment le plus fluide de l\u2019exp\u00e9rience.',
          en: 'During Sophie\'s test, this was the feature that impressed her most. She dictated her list naturally, without worrying about phrasing, and the items appeared correctly split. What could have stayed an invisible technical problem became the smoothest moment in the experience.',
        },
      ] satisfies Bilingual[],
    },
  },

  running: {
    heading: { fr: 'Ce qui tourne', en: "What's live" },
    paragraphs: [
      {
        fr: 'Cooko est sur TestFlight. Auth Apple Sign In, synchronisation temps r\u00e9el entre deux appareils iOS, parsing hybride voix et clavier. Sophie a re\u00e7u le lien, elle est dans le foyer. L\u2019app est utilis\u00e9e pour de vraies courses.',
        en: 'Cooko is on TestFlight. Apple Sign In auth, real-time sync between two iOS devices, hybrid voice and keyboard parsing. Sophie got the link, she\'s in the household. The app is used for real grocery runs.',
      },
      {
        fr: 'Avant Cooko, Sophie faisait les courses avec un message WhatsApp\u2009: une liste plate, aucun contexte, pas de cochage, et un appel d\u00e8s qu\u2019un produit manquait en rayon. Apr\u00e8s\u2009: elle dicte sa liste, chaque article porte ses pr\u00e9cisions, elle coche d\u2019une main en magasin, et la progression est visible d\u2019un coup d\u2019\u0153il. Le WhatsApp courses n\u2019a pas servi pendant le test.',
        en: 'Before Cooko, Sophie shopped with a WhatsApp message: flat list, no context, no checking off, and a phone call every time something was missing. After: she dictates her list, every item carries its details, she checks off one-handed in-store, and progress is visible at a glance. The grocery WhatsApp went unused during the test.',
      },
      {
        fr: 'Ce qui n\u2019est pas dans l\u2019app est aussi important que ce qui y est. Le contexte repas visible sur chaque article, la g\u00e9n\u00e9ration automatique de la liste depuis des repas planifi\u00e9s, la m\u00e9moire des achats d\u2019une semaine \u00e0 l\u2019autre\u2009: ces fonctionnalit\u00e9s existent dans le backlog, document\u00e9es, avec leurs d\u00e9pendances. Elles ont \u00e9t\u00e9 \u00e9cart\u00e9es du sprint parce qu\u2019elles n\u00e9cessitent une couche recettes et un historique d\u2019usage que v1 ne peut pas encore porter. Cooko n\u2019est pas un prototype de portfolio. C\u2019est un produit en construction, avec un backlog qui avance.',
        en: 'What\'s not in the app matters as much as what is. Meal context visible on each item, auto-generated lists from planned meals, week-to-week purchase memory: these features exist in the backlog, documented, with their dependencies. They were cut from the sprint because they need a recipe layer and usage history that v1 can\'t support yet. Cooko isn\'t a portfolio prototype. It\'s a product under construction, with a backlog that moves.',
      },
      {
        fr: 'Ce que ce sprint ne prouve pas encore\u2009: l\u2019usage en courses sur la dur\u00e9e, la r\u00e9tention au-del\u00e0 des premi\u00e8res semaines, la valeur per\u00e7ue du contexte une fois la couche recettes en place. Un test, une personne, trois jours. La validation continue sur TestFlight.',
        en: 'What this sprint doesn\'t prove yet: sustained usage over time, retention past the first weeks, perceived value of context once the recipe layer is in place. One test, one person, three days. Validation continues on TestFlight.',
      },
    ] satisfies Bilingual[],
  },

  designerSansFigma: {
    heading: { fr: 'Designer sans Figma', en: 'Designing without Figma' },
    paragraphs: [
      {
        fr: 'Sophie a test\u00e9 une app, pas un prototype. Ce qui a rendu \u00e7a possible, c\u2019est une d\u00e9cision de m\u00e9thode prise au d\u00e9but du sprint\u2009: ne pas passer par Figma.',
        en: 'Sophie tested an app, not a prototype. What made that possible was a method decision taken at the start of the sprint: skip Figma.',
      },
      {
        fr: 'Pas parce que Figma est d\u00e9pass\u00e9, mais parce que le remplacer force \u00e0 nommer ce qu\u2019il faisait. Avec Figma, je design avec mes mains. Je d\u00e9place des formes, j\u2019ajuste des composants, je vois le r\u00e9sultat imm\u00e9diatement. Avec Claude, je dirige avec des mots. Je formule une intention, je d\u00e9l\u00e8gue l\u2019ex\u00e9cution, j\u2019\u00e9value le r\u00e9sultat et j\u2019ajuste le brief. Le processus ressemble moins \u00e0 du design visuel qu\u2019\u00e0 de la direction. L\u2019interface change, le fond du travail reste entier.',
        en: 'Not because Figma is outdated, but because replacing it forces you to name what it was doing. With Figma, I design with my hands. I move shapes, adjust components, see results immediately. With Claude, I direct with words. I state intent, delegate execution, evaluate output, adjust the brief. The process looks less like visual design and more like directing. The interface changes; the core work stays the same.',
      },
      {
        fr: 'Le gain le plus inattendu n\u2019est pas la vitesse. C\u2019est d\u2019\u00eatre confront\u00e9 au r\u00e9el d\u00e8s le premier jour. Un proto Figma simule l\u2019exp\u00e9rience. Un proto fonctionnel la fait tourner, avec tout ce que \u00e7a implique\u2009: la latence existe, le clavier iOS se comporte comme il veut, la voix produit du texte que le regex ne sait pas lire. Les retours de Sophie sont all\u00e9s directement dans le code, dans la m\u00eame journ\u00e9e. Pas de couche de traduction entre la d\u00e9cision et le r\u00e9sultat, pas de fichier de retours qui remonte vers un designer puis redescend vers un d\u00e9veloppeur. La boucle est plus courte. En contrepartie, chaque bug devient un frein r\u00e9el dans le cycle d\u2019it\u00e9ration. C\u2019est la friction propre \u00e0 cette m\u00e9thode, et elle est honn\u00eatement non n\u00e9gligeable.',
        en: 'The most unexpected gain isn\'t speed. It\'s facing reality from day one. A Figma prototype simulates the experience. A working prototype runs it\u2014with everything that implies: latency is real, the iOS keyboard does what it wants, voice produces text that regex can\'t read. Sophie\'s feedback went straight into code the same day. No translation layer between decision and result, no feedback file going up to a designer then back down to a developer. The loop is shorter. The trade-off: every bug becomes a real blocker in the iteration cycle. That\'s the friction inherent to this method, and it\'s honestly non-trivial.',
      },
      {
        fr: 'Diriger avec des mots, \u00e7a s\u2019apprend. La pr\u00e9cision du brief conditionne la qualit\u00e9 de l\u2019output. Un raisonnement flou produit un composant flou. Cette contrainte est aussi une discipline\u2009: elle force \u00e0 formuler l\u2019intention avant d\u2019ex\u00e9cuter, \u00e0 chaque \u00e9tape. Ce que l\u2019exp\u00e9rience de Sophie illustre \u00e0 chaque moment de son parcours dans l\u2019app, c\u2019est que chaque friction r\u00e9solue est une d\u00e9cision formul\u00e9e, pas un pixel d\u00e9plac\u00e9.',
        en: 'Directing with words is a learned skill. Brief precision drives output quality. Fuzzy thinking produces fuzzy components. This constraint is also a discipline: it forces you to articulate intent before executing, at every step. What Sophie\'s experience illustrates at every point in her journey through the app is that each resolved friction is a decision articulated\u2014not a pixel moved.',
      },
    ] satisfies Bilingual[],
  },

  pullQuote: {
    fr: "Si le raisonnement de design peut \u00eatre exprim\u00e9 en mots suffisamment pr\u00e9cis pour \u00eatre ex\u00e9cut\u00e9, c'est peut-\u00eatre cette capacit\u00e9 qui a toujours \u00e9t\u00e9 la valeur. Cadrer le probl\u00e8me, d\u00e9cider sous contrainte, reconna\u00eetre quand une limite technique remonte en question de design, documenter pourquoi. L'ex\u00e9cution pixel n'en \u00e9tait que le proxy.",
    en: "If design thinking can be expressed in words precise enough to execute, maybe that skill was always the real value. Framing the problem, deciding under constraints, recognizing when a technical limit becomes a design question, documenting why. Pixel execution was just the proxy.",
  },

  journeyMap: {
    header: { fr: 'Journey Map', en: 'Journey Map' },
    title: {
      fr: 'Parcours courses \u2014 Avant / Apr\u00e8s Cooko v1',
      en: 'Grocery run \u2014 Before / After Cooko v1',
    },
    profiles: {
      fr: 'Sophie + Romain \u00b7 Foyer 2 personnes \u00b7 iOS',
      en: 'Sophie + Romain \u00b7 2-person household \u00b7 iOS',
    },
    cardLabels: {
      today: { fr: "Aujourd'hui", en: 'Today' },
      friction: { fr: 'Friction', en: 'Friction' },
      cookoV1: { fr: 'Cooko v1', en: 'Cooko v1' },
    },
    sprintFocus: { fr: 'Focus du sprint', en: 'Sprint focus' },
    moments: [
      {
        label: { fr: 'Entr\u00e9e foyer', en: 'Household entry' },
        today: {
          fr: 'Conversation WhatsApp cr\u00e9\u00e9e pour les courses',
          en: 'WhatsApp conversation created for groceries',
        },
        friction: {
          fr: 'Adoption = z\u00e9ro friction \u00e0 l\u2019entr\u00e9e',
          en: 'Adoption = zero entry friction',
        },
        cookoV1: null,
      },
      {
        label: { fr: 'Constitution liste', en: 'Building the list' },
        today: {
          fr: 'Saisie manuelle, WhatsApp, liste plate',
          en: 'Manual entry, WhatsApp, flat list',
        },
        friction: {
          fr: 'Charge cognitive r\u00e9currente, contexte perdu',
          en: 'Recurring cognitive load, lost context',
        },
        cookoV1: {
          fr: ['Ajout vocal + parsing', 'Notes & substitutions'],
          en: ['Voice input + parsing', 'Notes & substitutions'],
        },
      },
      {
        label: { fr: 'Coordination', en: 'Coordination' },
        today: {
          fr: 'Message, appel, vocal \u00ab\u2009On en est o\u00f9\u2009?\u2009\u00bb',
          en: 'Texts, calls, voice messages: "Where are we at?"',
        },
        friction: {
          fr: 'Coordination manuelle, \u00e9tat partag\u00e9 invisible',
          en: 'Manual coordination, shared state invisible',
        },
        cookoV1: {
          fr: ['Sync temps r\u00e9el', 'Progression visible'],
          en: ['Real-time sync', 'Visible progress'],
        },
      },
      {
        label: { fr: 'En rayon', en: 'In the aisle' },
        today: {
          fr: 'D\u00e9filer WhatsApp, appeler pour chaque doute',
          en: 'Scrolling WhatsApp, calling for every doubt',
        },
        friction: {
          fr: 'Interface inadapt\u00e9e, d\u00e9cisions bloqu\u00e9es sans contexte',
          en: 'Wrong interface, decisions blocked without context',
        },
        cookoV1: {
          fr: ['Vue unique, une main', 'Cochage + disparition', 'Substitutions pr\u00e9vues'],
          en: ['Single view, one hand', 'Check off + fade out', 'Planned substitutions'],
        },
      },
      {
        label: { fr: 'Fin de courses', en: 'Post-shopping' },
        today: {
          fr: 'Liste dispara\u00eet ou reste dans WhatsApp',
          en: 'List vanishes or stays buried in WhatsApp',
        },
        friction: {
          fr: 'Aucun apprentissage, m\u00eame gal\u00e8re la semaine suivante',
          en: 'No learning, same struggle next week',
        },
        cookoV1: null,
      },
    ] satisfies JourneyMoment[],
    legend: {
      label: { fr: 'L\u00e9gende', en: 'Legend' },
      addressed: { fr: 'Adress\u00e9 par Cooko v1', en: 'Addressed by Cooko v1' },
      outOfScope: { fr: 'Hors scope v1', en: 'Out of scope v1' },
      mainFriction: { fr: 'Moment de friction principal', en: 'Main friction point' },
      response: { fr: 'R\u00e9ponse', en: 'Response' },
      solutionLabel: { fr: 'Solution Cooko v1', en: 'Cooko v1 solution' },
    },
    profilesSection: {
      label: { fr: 'Profils', en: 'Profiles' },
      profileA: {
        fr: 'Profil A \u2014 Planificateur (constitue la liste, planifie les repas)',
        en: 'Profile A \u2014 Planner (builds the list, plans meals)',
      },
      profileB: {
        fr: 'Profil B \u2014 Acheteur (ex\u00e9cute la liste en magasin, souvent seul\u00b7e)',
        en: 'Profile B \u2014 Buyer (runs the list in-store, usually alone)',
      },
    },
  },

  onboarding: {
    label: { fr: 'ONBOARDING FLOW', en: 'ONBOARDING FLOW' },
    title: {
      fr: 'Du Sign In \u00e0 la d\u00e9couverte des notes',
      en: 'From Sign In to discovering notes',
    },
    steps: [
      {
        title: { fr: 'Apple Sign In', en: 'Apple Sign In' },
        description: { fr: 'Authentification native', en: 'Native authentication' },
        annotation: null,
      },
      {
        title: { fr: 'Pr\u00e9nom', en: 'First name' },
        description: { fr: 'Pr\u00e9-rempli via Apple', en: 'Pre-filled from Apple' },
        annotation: { fr: 'catch Apple ID', en: 'catch Apple ID' },
      },
      {
        title: { fr: 'Nom du foyer', en: 'Household name' },
        description: { fr: 'Cr\u00e9er ou rejoindre', en: 'Create or join' },
        annotation: { fr: 'skip si invitation', en: 'skip if invited' },
      },
      {
        title: { fr: '3 articles ajout\u00e9s', en: '3 items added' },
        description: { fr: 'Premier engagement', en: 'First engagement' },
        annotation: { fr: 'd\u00e9clencheur', en: 'trigger' },
      },
      {
        title: { fr: 'Popin d\u00e9couverte', en: 'Discovery prompt' },
        description: { fr: 'Notes & substitutions', en: 'Notes & substitutions' },
        annotation: null,
      },
    ] satisfies OnboardingStep[],
  },

  quickAddBar: {
    label: { fr: 'QUICK ADD BAR', en: 'QUICK ADD BAR' },
    title: { fr: 'Deux entr\u00e9es, deux parsings', en: 'Two inputs, two parsers' },
    keyboard: {
      title: { fr: 'Clavier', en: 'Keyboard' },
      inputPlaceholder: { fr: 'Ajouter un article...', en: 'Add an item...' },
      sampleInput: { fr: '2 tomates', en: '2 tomatoes' },
      parsingLabel: { fr: 'regex', en: 'regex' },
      parsingSpeed: { fr: 'instant', en: 'instant' },
      parsingNote: {
        fr: 'multi-mots → LLM',
        en: 'multi-word → LLM',
      },
      resultItem: { fr: 'Tomates', en: 'Tomatoes' },
      resultQuantity: '\u00d72',
      footer: { fr: 'Id\u00e9al pour 1 item', en: 'Best for single items' },
    },
    voice: {
      title: { fr: 'Voix', en: 'Voice' },
      transcript: {
        fr: '\u00ab\u2009deux kilos de b\u0153uf et puis aussi des tomates euh trois tomates et du basilic\u2009\u00bb',
        en: '"two kilos of beef and also some tomatoes uh three tomatoes and basil"',
      },
      parsingLabel: { fr: 'LLM', en: 'LLM' },
      fallbackNote: { fr: 'fallback regex \u00e0 3s', en: 'regex fallback at 3s' },
      results: {
        fr: [
          { name: 'B\u0153uf', quantity: '2kg' },
          { name: 'Tomates', quantity: '\u00d73' },
          { name: 'Basilic' },
        ],
        en: [
          { name: 'Beef', quantity: '2kg' },
          { name: 'Tomatoes', quantity: '\u00d73' },
          { name: 'Basil' },
        ],
      } satisfies { fr: QuickAddResult[]; en: QuickAddResult[] },
      footer: { fr: 'Id\u00e9al pour plusieurs items', en: 'Best for multiple items' },
    },
    stateLabels: {
      input: { fr: 'Saisie', en: 'Input' },
      listening: { fr: '\u00c9coute', en: 'Listening' },
      transcript: { fr: 'Transcript', en: 'Transcript' },
      parsing: { fr: 'Parsing', en: 'Parsing' },
      result: { fr: 'R\u00e9sultat', en: 'Result' },
    },
  },

  images: {
    sketchPaper: {
      fr: 'Sketch papier de la liste de courses',
      en: 'Paper sketch of the grocery list',
    },
    listeFinal: {
      fr: '\u00c9cran final de la liste Cooko',
      en: 'Final Cooko list screen',
    },
    panier: {
      fr: 'Vue panier \u2014 articles coch\u00e9s',
      en: 'Cart view \u2014 checked items',
    },
    itemDetail: {
      fr: 'D\u00e9tail article \u2014 notes et substitutions',
      en: 'Item detail \u2014 notes and substitutions',
    },
    listeMain: {
      fr: 'Liste de courses principale',
      en: 'Main grocery list',
    },
  },

  sketchCompare: {
    sketchLabel: { fr: 'Sketch initial', en: 'Initial sketch' },
    finalLabel: { fr: '\u00c9cran final', en: 'Final screen' },
  },

  footer: {
    location: { fr: 'Dijon, France \u00b7 Disponible remote', en: 'Dijon, France \u00b7 Available remote' },
    linkedin: { fr: 'LinkedIn', en: 'LinkedIn' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
} as const
