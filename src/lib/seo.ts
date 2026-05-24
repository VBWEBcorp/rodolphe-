export const siteConfig = {
  name: 'EN PAYS WÊ',
  url: 'https://demenageurs-en-pays-we.fr',
  locale: 'fr_FR',
  description:
    'Déménagement et transport à Besançon, dans le Doubs et partout en Franche-Comté & Grand Est. Particuliers et professionnels : des prestations sérieuses, rapides et soignées.',
  ogImage: 'https://demenageurs-en-pays-we.fr/og.png',
  twitterHandle: '@enpayswe',
  themeColor: '#ea580c',
  phone: '06 10 60 21 59',
  phoneFixe: '03 81 63 94 10',
  email: 'contact@demenageurs-enpayswe.fr',
  siret: '10133809300012',
  priceRange: '€€',
  address: {
    street: '25 rue Hector Berlioz',
    city: 'Besançon',
    postalCode: '25000',
    country: 'FR',
  },
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
    label: 'Lun-Ven : 8h - 18h',
  },
  rating: {
    value: 5,
    count: 6,
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=EN+PAYS+W%C3%8A+25+rue+Hector+Berlioz+25000+Besan%C3%A7on',
  social: {
    instagram: 'https://www.instagram.com/enpayswe.dem',
    facebook: 'https://www.facebook.com/share/1EK3eNZzz7/',
    tiktok: 'https://www.tiktok.com/@enpayswe.dem',
  },
  socialHandle: 'enpayswe.dem',
  whatsapp: 'https://wa.me/33610602159',
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
