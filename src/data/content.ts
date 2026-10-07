export const profile = {
  name: 'Anthony Roque',
  role: 'Growth Marketer',
  location: 'Bordeaux',
  email: 'hello@anthonyroque.fr',
  phone: '06.82.59.68.42',
  linkedin: 'https://linkedin.com/in/anthony-roque/',
  cv: '/CV-Anthony-Roque.pdf',
  photo: '/anthony-roque.webp',
  tagline:
    "Au départ sur du paid marketing et maintenant sur de la growth, je construis des parcours utilisateurs complets, de l'acquisition au revenu en passant par l'activation et la rétention.",
};

export const metrics = [
  { value: '2M€+', label: 'de budget media piloté', detail: 'SEA & Social Ads, 4 marchés européens' },
  { value: '0 → +200k$', label: "d'ARR sur un SaaS B2B", detail: 'premier employé marketing' },
  { value: 'CPL ÷ 2', label: 'sur l\'Europe du Sud', detail: 'pour un volume de leads en hausse de 25%' },
  {
    visual: 'merge' as const,
    label: 'tracking fusionné',
    detail: 'deux marques internationales, un seul datalayer',
  },
];

export const timeline = [
  {
    company: 'The Sales Ninja',
    context: 'B2B SaaS',
    role: 'Growth Marketer',
    period: '2026 - aujourd\'hui',
    current: true,
    punchline:
      "Lancement de l'acquisition de 0 & travail sur l'activation, rétention et monétisation self-serve.",
    details: {
      website: 'https://www.thesales.ninja/',
      activity: "SaaS d'automatisation d'outreach LinkedIn",
      sector: 'B2B',
      position: 'Premier employé marketing',
      actions: [
        "Lancement de l'acquisition payante from scratch",
        'Recherche de PMF via Ads Meta : gestion des créas et des campagnes de A à Z',
        "Travail sur l'acquisition (lancement from scratch), activation, rétention et monétisation self-serve",
      ],
      chart: {
        title: 'ARR',
        caption: '0 → +200k$ en tant que premier employé marketing',
        unit: '$',
        scale: 'k',
        points: [0, 12, 28, 45, 78, 120, 165, 200],
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'],
      },
    },
  },
  {
    company: 'Yescapa',
    context: 'B2C marketplace',
    role: 'Perf. Marketing Manager',
    period: '2022 - aujourd\'hui',
    current: true,
    punchline:
      "Scaling de l'acquisition payante et son infrastructure à l'international. De 1M€ de budget en 2022 à +2M€ en 2025.",
    details: {
      website: 'https://www.yescapa.fr/',
      activity: '1ère marketplace de location de véhicules de loisirs en Europe',
      sector: 'B2C',
      position: "Rattaché à l'équipe Growth",
      actions: [
        "Gestion de +2M€ de budget media pour des campagnes SEA / Social Ads à l'international (FR/ES/IT/PT)",
        "+25% de leads avec un CPL divisé par 2 sur l'Europe du Sud en 2025",
        'Consolidation du tracking pour 16 sites internationaux',
        'Lead sur la restructuration du tracking après la fusion avec Goboony : fusion des datalayer des deux marques',
        'Collaboration étroite avec les équipes Content pour optimiser les performances des publicités & Dev pour optimiser le tracking',
      ],
    },
  },
  {
    company: 'Cdiscount Advertising',
    context: 'B2B2C retail media',
    role: 'Traffic Manager',
    period: '2021 - 2022',
    punchline:
      'Optimisation des campagnes de produits sponsorisés pour +20 marques e-commerce (gestion + conseil).',
    details: {
      website: 'https://www.cdiscountadvertising.com/',
      activity: 'Régie publicitaire de Cdiscount (Brands)',
      sector: 'B2B2C',
      position: "Rattaché à l'équipe Marketing Ops",
      actions: [
        'Gestion de campagnes de produits sponsorisés pour +20 marques e-commerce avec un budget media total de +800k€',
        'Gestion/optimisation de budget à +100k/semaine pendant des périodes fortes (type Black Friday) tout en optimisant le ROAS sur diverses catégories de produits',
        "Conception et mise en œuvre d'un plan de formation complet pour +30 personnes (Sales & Marketing) : base de connaissance + live sessions + évaluations",
      ],
    },
  },
  {
    company: 'Yabawt',
    context: 'Agence B2B / B2C',
    role: 'Performance Marketing Consultant',
    period: '2019 - 2021',
    punchline:
      'Mise en place d\'infrastructures de croissance pour des entreprises de divers secteurs (paid + SEO).',
    details: {
      website: 'https://www.yabawt.com/',
      activity: 'Agence de marketing à la performance',
      sector: 'B2B / B2C',
      actions: [
        "Scaling de l'activité d'un client de 4 départements à +60 en 2 ans grâce à des campagnes paid optimisées",
        'ROAS doublé sur 12 mois pour un client e-commerce à budget équivalent',
        'Création & optimisation de landing pages (CRO) + tracking',
      ],
    },
  },
];

export const beliefs = [
  {
    title: 'Le tracking est un produit',
    body: "Un datalayer propre et un tracking optimisé sont la base de mes résultats. On ne peut pas optimiser ce qu'on ne mesure pas.",
  },
  {
    title: 'Le canal ne sauve pas l\'offre',
    body: "C'est pour ça que je me suis orienté vers la growth. Pour avoir une vue complète sur les points de friction et expérimenter aussi sur l'offre.",
  },
  {
    title: 'Je construis ce dont j\'ai besoin',
    body: "Landing pages, automatisations, ce site. Le vibe coding a supprimé le ticket dev sur 80% de mes idées, donc je teste plus, et plus vite.",
  },
];

export const project = {
  title: 'Projet perso',
  image: '/projet-perso.webp',
  imageAlt: "Bannière du projet d'éducation canine à Bordeaux",
  why: "Pour aider ma compagne à développer son activité en tant qu'éducatrice canin.",
  goals: [
    '5 nouveaux clients chaque semaine',
    'Ranker Top 1 sur "éducateur canin bordeaux"',
    "Automatiser la rédaction d'articles SEO avec l'IA",
  ],
  workflow: {
    intro: "Développement d'agents pour chaque étape du flow (semi-automatisé) :",
    steps: [
      'Recherche & récupération',
      "Création du plan de l'article",
      "Rédaction de l'article",
      'Rédaction des balises meta',
      "Création de l'URL",
      "Intégration de l'article",
      'Contextualisation des CTA',
      'Maillage interne',
      'Check SEO technique (sitemap, données structurées, priorité de chargement, canonical…)',
    ],
  },
};

export const stack = [
  { group: 'Acquisition', tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Microsoft Ads'] },
  { group: 'Data & analytics', tools: ['GTM', 'GA4', 'PostHog', 'Hotjar', 'Looker Studio'] },
  { group: 'SEO', tools: ['Ahrefs', 'SEMrush', 'Search Console'] },
  { group: 'Build & automatisation', tools: ['Claude Code', 'GitHub', 'Netlify', 'Zapier'] },
  { group: 'Créa & IA', tools: ['Higgsfield', 'Arcads', 'Holo.ai', 'Remotion', 'Hyperframe'] },
];
