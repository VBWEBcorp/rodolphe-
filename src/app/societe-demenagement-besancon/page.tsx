import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/societe-demenagement-besancon'
const TITLE = 'Société de déménagement à Besançon — Devis gratuit'
const DESCRIPTION =
  "Société de déménagement à Besançon : EN PAYS WÊ vous accompagne pour tous vos déménagements (particuliers, entreprises, transferts). Sérieux, ponctualité, devis gratuit sous 24h dans le Doubs."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'société de déménagement Besançon',
    'societe demenagement Besancon',
    'entreprise déménagement Besançon',
    'déménageur professionnel Besançon',
    'EN PAYS WÊ',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: 'website' },
}

const faqs = [
  {
    question: 'Quelle société de déménagement choisir à Besançon ?',
    answer:
      "Choisir une société de déménagement à Besançon, c'est avant tout vérifier 3 points : 1) l'entreprise est-elle déclarée et assurée (SIRET, attestation d'assurance) ? 2) Le devis est-il détaillé, écrit, et tient-il compte de votre situation réelle (volume, étages, accès) ? 3) Les retours clients sont-ils bons et nombreux sur Google ? EN PAYS WÊ coche les trois cases : société déclarée, devis détaillé sous 24h, 5,0/5 sur Google.",
  },
  {
    question: 'Pourquoi choisir une société locale plutôt qu\'une grande chaîne ?',
    answer:
      "Une société locale comme EN PAYS WÊ connaît Besançon : les ruelles de la Boucle, les contraintes de stationnement, les immeubles sans ascenseur, les démarches en mairie pour les arrêtés de stationnement. La proximité, c'est aussi un interlocuteur unique du devis à la fin de la prestation — et une réactivité que les grandes chaînes ne peuvent pas garantir.",
  },
  {
    question: 'Votre société propose-t-elle le devis sur place gratuitement ?',
    answer:
      "Oui, sur demande nous nous déplaçons gratuitement chez vous à Besançon et alentours pour évaluer précisément le volume et les contraintes (escaliers, accès camion, monte-meubles). Pour les volumes plus modestes, un devis à distance via photos et descriptif suffit souvent.",
  },
  {
    question: 'Quelles sont les prestations proposées par votre société de déménagement ?',
    answer:
      "EN PAYS WÊ propose un service complet : emballage et déballage, démontage/remontage du mobilier, chargement et déchargement, transport, mise en place dans le nouveau logement, vidage de cave ou de garage, débarras complet, livraison et installation de mobilier, transfert de bureaux et déménagement longue distance.",
  },
  {
    question: 'Combien de temps dure un déménagement standard à Besançon ?',
    answer:
      "Pour un appartement T2-T3 standard à Besançon (avec ascenseur, distance courte), comptez une demi-journée à une journée complète. Pour une maison de 100-150 m² avec étage, prévoyez une journée à une journée et demie. Les déménagements longue distance peuvent s'étaler sur 2 jours (chargement le jour 1, livraison le jour 2).",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Société de déménagement à Besançon', path: PATH },
    ]),
    serviceJsonLd('Société de déménagement à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function SocieteDemenagementBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Société de déménagement bisontine"
        h1="Société de déménagement à Besançon"
        subtitle="EN PAYS WÊ, votre société de déménagement à Besançon, vous accompagne avec sérieux et ponctualité. Déménagements particuliers, transferts d'entreprise, longue distance."
        heroImage="https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg"
        bullets={[
          'Société déclarée et assurée',
          'Devis détaillé écrit sous 24h',
          'Visite technique gratuite sur demande',
          '5,0 / 5 sur Google · avis vérifiés',
          'Ponctualité & respect des délais',
          'Transparence totale sur les tarifs',
        ]}
        intro={
          <>
            <p>
              EN PAYS WÊ est une <strong>société de déménagement à Besançon</strong>{' '}
              qui se distingue par son sérieux, sa ponctualité et sa transparence. Basée
              au 25 rue Hector Berlioz, notre société intervient pour des déménagements
              de tous types : studios, appartements, maisons individuelles, transferts
              de bureaux, livraisons de mobilier, débarras. Notre engagement : un
              déménagement qui se passe exactement comme prévu, sans surprise et sans
              stress.
            </p>
            <p className="mt-4">
              Choisir une société de déménagement à Besançon comme EN PAYS WÊ, c&apos;est
              s&apos;adresser à des professionnels équipés, formés et assurés. Le devis
              que nous établissons sous 24h est ferme et détaillé : il fait foi le jour J,
              sans surfacturation. Nos clients particuliers et professionnels nous
              attribuent la note de <strong>5,0/5 sur Google</strong> — un retour qui
              récompense notre rigueur.
            </p>
          </>
        }
        sections={[
          {
            h2: "Une société de déménagement qui tient ses délais",
            body: (
              <>
                <p>
                  La ponctualité est l&apos;une des principales raisons pour lesquelles
                  nos clients à Besançon nous recommandent. Nous arrivons à l&apos;heure
                  convenue, l&apos;équipe est complète et le matériel est prêt. En cas
                  d&apos;imprévu (panne, embouteillage), nous vous prévenons
                  immédiatement et nous nous adaptons.
                </p>
                <p>
                  Notre planning est étudié pour ne jamais surcharger une journée : on
                  préfère refuser un déménagement plutôt que d&apos;en bâcler un autre.
                  Cette discipline est rare dans le secteur — et c&apos;est ce qui fait
                  qu&apos;à Besançon, on nous recommande de bouche à oreille.
                </p>
              </>
            ),
          },
          {
            h2: "Transparence sur les tarifs : pas de mauvaise surprise",
            body: (
              <>
                <p>
                  Notre <strong>société de déménagement à Besançon</strong> applique une
                  règle simple : le prix annoncé sur le devis est le prix payé. Pas de
                  frais cachés, pas de supplément le jour J pour cause d&apos;étage non
                  signalé ou de meuble oublié. Quand nous établissons le devis, nous
                  prenons en compte tous les paramètres réels, en vous posant les
                  bonnes questions ou en visitant les lieux si nécessaire.
                </p>
                <p>
                  Cette transparence couvre aussi le mode de facturation : nous précisons
                  le détail des prestations (emballage, manutention, transport, matériel,
                  km supplémentaires), pour que vous compreniez exactement ce que vous
                  payez. Et pour ceux qui veulent maîtriser leur budget, voir notre page{' '}
                  <a href="/demenagement-pas-cher-besancon" className="text-primary underline-offset-4 hover:underline">
                    déménagement pas cher à Besançon
                  </a>.
                </p>
              </>
            ),
          },
          {
            h2: "Une société bisontine engagée dans la satisfaction client",
            body: (
              <>
                <p>
                  Chez EN PAYS WÊ, chaque déménagement est traité avec le même soin,
                  qu&apos;il s&apos;agisse d&apos;un studio étudiant ou d&apos;une grande
                  villa. Cette philosophie nous a permis de bâtir une réputation solide
                  à Besançon, dans le Doubs et plus largement en Franche-Comté. La preuve :
                  notre note Google et le bouche-à-oreille qui nous fait travailler
                  semaine après semaine.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/entreprise-demenagement-besancon', label: 'Entreprise de déménagement à Besançon' },
          { href: '/demenageur-besancon', label: 'Déménageur à Besançon' },
          { href: '/demenagement-pas-cher-besancon', label: 'Déménagement pas cher à Besançon' },
          { href: '/a-propos', label: 'En savoir plus sur nous' },
          { href: '/contact', label: 'Demander un devis' },
        ]}
      />
    </>
  )
}
