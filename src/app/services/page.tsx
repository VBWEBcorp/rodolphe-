import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  "Déménagement à Besançon et en Franche-Comté : appartements, maisons, transferts de bureaux, vidage, transport. EN PAYS WÊ, déménageur de confiance, intervient 7j/7 dans le Doubs et le Grand Est."

const services = [
  { title: "Déménagement d'appartements & maisons à Besançon", desc: 'Prise en charge complète : emballage, démontage, chargement, transport, remontage. Du studio au grand volume.' },
  { title: 'Livraison de meubles & électroménager', desc: 'Livraison soignée à domicile, avec mise en place et installation si besoin. Courtes et longues distances.' },
  { title: 'Transport de marchandises', desc: 'Transport professionnel de marchandises, matériel ou objets volumineux, avec camion adapté au volume à déplacer.' },
  { title: 'Transfert de bureaux & locaux professionnels', desc: 'Organisation complète : mobilier, matériel informatique, archives. Planning optimisé pour limiter les interruptions.' },
  { title: "Vidage d'appartements & maisons", desc: 'Débarras complet avec tri, enlèvement et mise en déchèterie. Pratique pour successions, ventes ou travaux.' },
  { title: 'Vidage de caves & garages', desc: 'On débarrasse, charge et évacue en déchèterie tous les encombrants. Vous récupérez un espace propre et vide.' },
  { title: 'Emballage & protection', desc: 'Cartons, scotch, papier bulle, housses : matériel adapté à vos objets fragiles. Emballage réalisé par nos équipes sur demande.' },
  { title: 'Monte-meubles & gros volumes', desc: "Pour les étages difficiles d'accès ou les objets volumineux, nous mobilisons les équipements et équipes nécessaires." },
]

export const metadata: Metadata = {
  title: 'Services de déménagement à Besançon — Particuliers & Entreprises',
  description,
  alternates: { canonical: '/services' },
  keywords: [
    'déménagement Besançon',
    'déménageur Besançon',
    'entreprise de déménagement Besançon',
    'société de déménagement Besançon',
    'transfert de bureaux Besançon',
    'vidage appartement Besançon',
    'déménagement Doubs',
    'déménagement Franche-Comté',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
