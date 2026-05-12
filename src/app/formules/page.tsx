import type { Metadata } from 'next'

import { FormulesContent } from './formules-content'
import {
  breadcrumbJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Découvrez nos 4 formules de déménagement : Économique, Standard, Confort et Luxe. Choisissez la solution qui correspond à votre budget et à vos besoins.'

export const metadata: Metadata = {
  title: 'Nos formules de déménagement',
  description,
  alternates: { canonical: '/formules' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Nos formules', description, '/formules'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Formules', path: '/formules' },
    ]),
  ],
}

export default function FormulesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormulesContent />
    </>
  )
}
