export const siteConfig = {
  name: 'EN PAYS WÊ',
  url: 'https://www.demenageurs-enpayswe.fr',
  locale: 'fr_FR',
  description:
    'Déménagement et transport à Besançon, dans le Doubs et partout en Franche-Comté & Grand Est. Particuliers et professionnels : des prestations sérieuses, rapides et soignées.',
  ogImage: 'https://www.demenageurs-enpayswe.fr/og.png',
  twitterHandle: '@enpayswe',
  themeColor: '#ea580c',
  phone: '06 10 60 21 59',
  phoneFixe: '03 81 63 94 10',
  email: 'contact@demenageurs-enpayswe.fr',
  siret: '10133809300012',
  address: {
    street: '25 rue Hector Berlioz',
    city: 'Besançon',
    postalCode: '25000',
    country: 'FR',
  },
  zones: [
    'Besançon',
    'Dijon',
    'Chalon-sur-Saône',
    'Mâcon',
    'Dôle',
    'Lons-le-Saunier',
    'Pontarlier',
    'Montbéliard',
    'Vesoul',
    'Belfort',
    'Mulhouse',
    'Strasbourg',
    'Bourg-en-Bresse',
  ],
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
