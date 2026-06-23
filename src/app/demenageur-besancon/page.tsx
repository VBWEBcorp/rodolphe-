import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/demenageur-besancon'
const TITLE = 'Déménageur à Besançon — Équipe locale & soignée'
const DESCRIPTION =
  "Déménageur à Besançon : EN PAYS WÊ, une équipe locale, soignée et ponctuelle pour votre déménagement dans le Doubs et toute la Franche-Comté. Devis gratuit sous 24h."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'déménageur Besançon',
    'déménageurs Besançon',
    'déménageur à Besançon',
    'déménageur Doubs',
    'déménageur professionnel Besançon',
    'EN PAYS WÊ',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: 'website' },
}

const faqs = [
  {
    question: 'Comment trouver un bon déménageur à Besançon ?',
    answer:
      "Pour trouver un bon déménageur à Besançon, consultez les avis Google (volume et fraîcheur), demandez plusieurs devis (un devis sérieux est écrit et détaillé), vérifiez l'assurance et le SIRET, et privilégiez les déménageurs locaux qui ne sous-traitent pas. EN PAYS WÊ coche toutes ces cases : 5,0/5 sur Google, devis sous 24h, entreprise déclarée et équipe en interne.",
  },
  {
    question: 'Combien coûte un déménageur à Besançon en moyenne ?',
    answer:
      "Le tarif d'un déménageur à Besançon varie selon le volume, la distance, les étages et l'accès. Pour un appartement T2-T3 dans Besançon avec ascenseur, prévoyez entre 600 € et 1 200 €. Pour une maison familiale avec longue distance, le tarif peut atteindre 2 500 à 4 500 €. Le devis EN PAYS WÊ est gratuit et détaillé — vous savez exactement ce que vous payez avant de signer.",
  },
  {
    question: 'Vos déménageurs sont-ils formés ?',
    answer:
      "Oui, l'équipe EN PAYS WÊ est composée de déménageurs professionnels formés à la manutention, à l'emballage des objets fragiles, au démontage/remontage du mobilier complexe et à l'utilisation du matériel professionnel (sangles, diables, monte-meubles). Nous ne sous-traitons pas — ce sont nos déménageurs salariés qui interviennent chez vous.",
  },
  {
    question: 'Combien de déménageurs viennent le jour J ?',
    answer:
      "L'effectif dépend du volume et des contraintes : pour un studio en rez-de-chaussée, 2 déménageurs suffisent. Pour une maison à étage avec gros mobilier, on monte à 3 ou 4 déménageurs. Pour les transferts d'entreprise ou les très gros volumes, on mobilise une équipe de 5+ personnes avec plusieurs camions.",
  },
  {
    question: 'Vos déménageurs peuvent-ils emballer mes affaires ?',
    answer:
      "Oui, c'est une prestation que nous proposons. Nos déménageurs apportent tout le matériel (cartons, papier bulle, scotch, housses), emballent vos affaires avec soin (vaisselle, livres, vêtements, objets fragiles), étiquettent les cartons pièce par pièce, et déballent à l'arrivée si vous le souhaitez. Idéal si vous manquez de temps ou si vous voulez vous épargner cette étape fatigante.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Déménageur à Besançon', path: PATH },
    ]),
    serviceJsonLd('Déménageur à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function DemenageurBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Votre déménageur de proximité à Besançon"
        h1="Déménageur à Besançon"
        subtitle="Une équipe locale formée, équipée et ponctuelle pour prendre en charge votre déménagement à Besançon et en Franche-Comté."
        heroImage="https://i.ibb.co/hxnSQh8R/IMG-1932.jpg"
        bullets={[
          'Équipe formée — pas de sous-traitance',
          '2 à 5 déménageurs selon le volume',
          'Matériel pro inclus (cartons, sangles, housses)',
          'Démontage / remontage du mobilier',
          'Soigneux des objets fragiles',
          '5,0/5 sur Google · note maximale',
        ]}
        intro={
          <>
            <p>
              Vous cherchez un <strong>déménageur à Besançon</strong> à la fois sérieux et
              soigneux ? EN PAYS WÊ met à votre disposition une équipe de déménageurs
              professionnels, basés à Besançon (25 rue Hector Berlioz). Notre métier, c&apos;est
              de transporter vos biens avec autant de précaution que s&apos;ils étaient les
              nôtres — du carton de vaisselle à l&apos;armoire normande du grand-père.
            </p>
            <p className="mt-4">
              Chaque <strong>déménageur</strong> de notre équipe est formé à la manutention
              professionnelle, à l&apos;emballage des objets fragiles, au démontage et au
              remontage du mobilier complexe. Nous arrivons avec tout le matériel
              nécessaire : cartons solides, papier bulle, housses mobilier, sangles,
              diables, monte-meubles en cas de besoin. Vous n&apos;avez rien à acheter,
              rien à louer.
            </p>
          </>
        }
        sections={[
          {
            h2: "Le savoir-faire de nos déménageurs bisontins",
            body: (
              <>
                <p>
                  Un bon <strong>déménageur à Besançon</strong>, ce n&apos;est pas juste
                  quelqu&apos;un qui porte des cartons : c&apos;est un professionnel qui sait
                  organiser une journée, anticiper les contraintes (étages, accès,
                  stationnement), protéger les biens fragiles, démonter rapidement un lit
                  mezzanine ou une armoire 3 portes, et remonter le tout sans rayer les
                  parquets.
                </p>
                <p>
                  Notre équipe a accumulé l&apos;expérience de centaines de déménagements à
                  Besançon : les immeubles haussmanniens étroits de la Boucle, les
                  appartements en duplex de Battant, les pavillons de Planoise et de
                  Chateaufarine, les maisons de campagne du Haut-Doubs. On connaît la ville
                  et on sait à quoi s&apos;attendre.
                </p>
              </>
            ),
          },
          {
            h2: "Le soin apporté à vos affaires",
            body: (
              <>
                <p>
                  Vos meubles, c&apos;est votre histoire. Nous les traitons en conséquence :
                  housses mobilier sur les canapés et armoires, papier bulle sur les
                  miroirs et tableaux, ouate de calage dans les cartons fragiles, sangles
                  pour fixer le mobilier dans le camion. Les objets de valeur (piano, œuvres
                  d&apos;art, électronique haut de gamme) sont identifiés au devis et
                  protégés en conséquence avec une déclaration de valeur adaptée.
                </p>
                <p>
                  En cas de pépin (très rare grâce à notre méthode), notre assurance
                  professionnelle couvre les dommages. Vous êtes protégé du début à la fin.
                </p>
              </>
            ),
          },
          {
            h2: "Une journée type avec nos déménageurs à Besançon",
            body: (
              <>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>Arrivée à l&apos;heure convenue avec l&apos;équipe complète.</li>
                  <li>Briefing rapide : on identifie les objets fragiles et les meubles à démonter.</li>
                  <li>Démontage et emballage si la prestation est incluse.</li>
                  <li>Chargement méthodique du camion (gros en bas, fragile au-dessus).</li>
                  <li>Transport sécurisé jusqu&apos;à l&apos;adresse d&apos;arrivée.</li>
                  <li>Déchargement et mise en place dans les pièces indiquées.</li>
                  <li>Remontage du mobilier, vérification, signature de fin de prestation.</li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/entreprise-demenagement-besancon', label: 'Entreprise de déménagement à Besançon' },
          { href: '/societe-demenagement-besancon', label: 'Société de déménagement à Besançon' },
          { href: '/demenagement-pas-cher-besancon', label: 'Déménagement pas cher à Besançon' },
          { href: '/services', label: 'Tous nos services' },
          { href: '/gallery', label: 'Voir nos déménagements en photos' },
        ]}
      />
    </>
  )
}
