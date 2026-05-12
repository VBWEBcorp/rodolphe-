export type Formula = {
  slug: string
  emoji: string
  name: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  included: string[]
  forWho: string
  badge?: string
  highlight?: boolean
  images: string[]
}

export const formulas: Formula[] = [
  {
    slug: 'economique',
    emoji: '💸',
    name: 'Économique',
    tagline: 'Le meilleur prix',
    description:
      'Vous préparez vos cartons et démontez vos meubles, notre équipe intervient pour le chargement, le transport et la livraison de vos biens en toute sécurité.',
    longDescription:
      "Vous souhaitez déménager à moindre coût ? La formule Économique est faite pour vous. Vous préparez vos cartons et démontez vos meubles, et notre équipe intervient pour le chargement, le transport et la livraison de vos biens en toute sécurité. C'est la formule la moins chère de notre gamme : idéale si vous avez du temps et de l'énergie à consacrer à votre déménagement.",
    features: [
      'Solution économique',
      'Idéal pour les petits budgets',
      'Transport sécurisé par des professionnels',
    ],
    included: [
      'Chargement de vos biens',
      'Transport sécurisé',
      'Déchargement à destination',
    ],
    forWho:
      'Idéal si vous voulez économiser et que vous avez du temps et de l’énergie pour préparer vous-même vos cartons et démonter vos meubles.',
    badge: 'Le moins cher',
    images: [
      'https://i.ibb.co/ZpC7xTpN/Whats-App-Image-2026-05-04-at-12-52-06-4.jpg',
      'https://i.ibb.co/VW6qCjxw/Whats-App-Image-2026-05-04-at-12-52-06-3.jpg',
      'https://i.ibb.co/cKpKVY06/Whats-App-Image-2026-05-04-at-12-52-06-2.jpg',
      'https://i.ibb.co/wDcd7vt/Whats-App-Image-2026-05-04-at-12-52-06-1.jpg',
      'https://i.ibb.co/mFrdP57J/Whats-App-Image-2026-05-04-at-12-52-06.jpg',
    ],
  },
  {
    slug: 'standard',
    emoji: '📦',
    name: 'Standard',
    tagline: "L'équilibre parfait",
    description:
      'Vous emballez vos effets personnels courants, et nous nous occupons des objets fragiles ainsi que du transport et de la manutention.',
    longDescription:
      "Profitez d'un déménagement plus serein avec une prise en charge partielle. Vous emballez les objets courants (vêtements, livres…) et nous nous occupons des objets fragiles (vaisselle, déco…) ainsi que du transport et de la manutention. C'est le meilleur compromis entre prix et confort.",
    features: [
      'Protection des objets fragiles',
      'Gain de temps',
      'Excellent rapport qualité/prix',
    ],
    included: [
      'Emballage des objets fragiles',
      'Manutention complète',
      'Transport sécurisé',
      'Déchargement à destination',
    ],
    forWho:
      'Idéal pour qui veut un bon équilibre entre budget maîtrisé et confort, sans avoir à gérer les objets délicats.',
    badge: 'Recommandée',
    highlight: true,
    images: [
      'https://i.ibb.co/gZgZmZs3/Whats-App-Image-2026-05-04-at-12-58-35.jpg',
      'https://i.ibb.co/LDMkcnKk/Whats-App-Image-2026-05-04-at-12-58-34.jpg',
      'https://i.ibb.co/pBzqf2RQ/Whats-App-Image-2026-05-04-at-12-58-34-1.jpg',
      'https://i.ibb.co/sdrXYFmw/Whats-App-Image-2026-05-04-at-12-58-34-2.jpg',
      'https://i.ibb.co/TsTxnhB/Whats-App-Image-2026-05-04-at-12-58-34-3.jpg',
      'https://i.ibb.co/pBJjWdBk/Whats-App-Image-2026-05-04-at-12-58-34-4.jpg',
    ],
  },
  {
    slug: 'confort',
    emoji: '🏠',
    name: 'Confort',
    tagline: 'Zéro stress',
    description:
      "Gagnez du temps et de l'énergie en nous confiant presque tout votre déménagement : emballage, démontage, transport et remontage.",
    longDescription:
      "Avec la formule Confort, vous ne faites presque rien. Nos déménageurs prennent en charge l'emballage complet, le démontage et le remontage des meubles, le transport, et parfois même la remise en place dans votre nouveau logement. Idéal si vous manquez de temps ou que vous voulez éviter le stress.",
    features: [
      'Emballage complet',
      'Démontage / remontage',
      'Service tout inclus',
    ],
    included: [
      'Emballage complet de tous vos biens',
      'Démontage des meubles',
      'Transport sécurisé',
      'Remontage à destination',
    ],
    forWho:
      'Idéal pour les familles, les actifs surchargés ou toute personne qui souhaite un déménagement sans stress.',
    images: [
      'https://i.ibb.co/zW6t3L7f/Whats-App-Image-2026-05-04-at-13-09-11-3.jpg',
      'https://i.ibb.co/VYQb8HS4/Whats-App-Image-2026-05-04-at-13-07-07-2.jpg',
      'https://i.ibb.co/mVj81gYS/Whats-App-Image-2026-05-04-at-13-07-07-3.jpg',
      'https://i.ibb.co/tMjQGK4x/Whats-App-Image-2026-05-04-at-13-07-08.jpg',
      'https://i.ibb.co/8nnKNWQc/Whats-App-Image-2026-05-04-at-13-07-08-1.jpg',
    ],
  },
  {
    slug: 'luxe',
    emoji: '👑',
    name: 'Luxe',
    tagline: 'Clé en main',
    description:
      "Offrez-vous un déménagement sans aucune contrainte : emballage, transport, déballage, installation et reprise des cartons. Vous n'avez plus qu'à profiter.",
    longDescription:
      "La formule Luxe, c'est le déménagement clé en main. Nous gérons tout de A à Z : emballage soigné de l'ensemble de vos biens, démontage et remontage des meubles, transport premium, déballage complet, installation dans votre nouveau logement et reprise des cartons. Vous n'avez plus qu'à profiter de votre nouveau chez-vous.",
    features: [
      'Service premium',
      'Installation complète',
      'Confort maximal',
    ],
    included: [
      'Emballage haut de gamme',
      'Démontage / remontage des meubles',
      'Transport premium',
      'Déballage complet',
      'Installation dans votre nouveau logement',
      'Reprise des cartons',
    ],
    forWho:
      'Idéal pour qui veut un déménagement sans aucune contrainte et un service haut de gamme de bout en bout.',
    badge: 'Premium',
    images: [
      'https://i.ibb.co/3yrYNZNC/Whats-App-Image-2026-05-04-at-13-09-11.jpg',
      'https://i.ibb.co/0VqjvCgd/Whats-App-Image-2026-05-04-at-13-09-11-2.jpg',
      'https://i.ibb.co/XfPr9NT2/Whats-App-Image-2026-05-04-at-13-07-07-1.jpg',
      'https://i.ibb.co/XxDvtpfJ/Whats-App-Image-2026-05-04-at-13-07-07.jpg',
    ],
  },
]
