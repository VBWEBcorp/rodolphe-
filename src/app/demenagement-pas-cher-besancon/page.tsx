import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/demenagement-pas-cher-besancon'
const TITLE = 'Déménagement pas cher à Besançon — Devis transparent'
const DESCRIPTION =
  "Déménagement pas cher à Besançon : tarifs justes, devis transparent, formules économiques. EN PAYS WÊ vous propose un déménagement à prix maîtrisé sans rogner sur la qualité."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'déménagement pas cher Besançon',
    'déménagement économique Besançon',
    'tarif déménagement Besançon',
    'devis déménagement Besançon',
    'déménageur pas cher Besançon',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: 'website' },
}

const faqs = [
  {
    question: 'Comment faire un déménagement pas cher à Besançon ?',
    answer:
      "Pour un déménagement pas cher à Besançon : 1) déménagez en semaine et hors haute saison (octobre-avril) ; 2) emballez vos cartons vous-même (notre formule économique exclut cette prestation) ; 3) démontez les meubles avant l'arrivée des déménageurs ; 4) demandez un devis détaillé pour repérer les postes que vous pouvez réduire. Nous proposons une formule économique qui réduit le tarif jusqu'à 30 % par rapport à la formule clé en main.",
  },
  {
    question: 'Quels sont vos tarifs pour un déménagement à Besançon ?',
    answer:
      "Nos tarifs dépendent du volume, de la distance et des prestations. À titre indicatif : studio en centre-ville bisontin à partir d'environ 400 €, T2-T3 entre 600 et 1 200 €, maison familiale entre 1 500 et 2 500 € selon distance. Pour un prix exact, nous établissons un devis gratuit sous 24h.",
  },
  {
    question: 'Le « pas cher » signifie-t-il que vous bâclez le travail ?',
    answer:
      "Non, absolument pas. Notre formule économique consiste à vous laisser une partie du travail (emballage, démontage), ce qui réduit notre temps d'intervention donc le coût. La qualité du transport, du matériel et de la manutention reste exactement la même. Vos meubles sont protégés, l'équipe est la même, l'assurance est identique.",
  },
  {
    question: 'Comment se passe le paiement ?',
    answer:
      "Nous demandons un acompte de 30 % à la signature du devis, le solde est dû le jour du déménagement après la fin de la prestation. Nous acceptons les virements bancaires, les chèques et le paiement par CB sur place. Une facture détaillée vous est remise.",
  },
  {
    question: 'Est-ce que je peux louer un camion sans déménageur pour vraiment économiser ?',
    answer:
      "Oui, c'est possible, mais attention au calcul global : location de camion (souvent 100-200 €/jour) + carburant + assurance complémentaire + votre temps + le risque de casse non assuré. Pour un volume au-dessus de 15-20 m³, faire appel à un déménageur professionnel revient souvent moins cher au final — et bien moins fatigant.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Déménagement pas cher à Besançon', path: PATH },
    ]),
    serviceJsonLd('Déménagement pas cher à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function DemenagementPasCherBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Tarifs justes & transparents"
        h1="Déménagement pas cher à Besançon"
        subtitle="Réduire la facture sans sacrifier la qualité : c'est tout l'enjeu d'un déménagement pas cher bien organisé à Besançon. Voici nos conseils et formules."
        heroImage="https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg"
        bullets={[
          'Formule économique : jusqu\'à -30 %',
          'Devis détaillé écrit, prix ferme',
          'Pas de surprise le jour J',
          'Acompte 30 % à la signature',
          'Conseils pour réduire la facture',
          'Qualité inchangée (matériel, équipe, assurance)',
        ]}
        intro={
          <>
            <p>
              Vous voulez un <strong>déménagement pas cher à Besançon</strong> sans pour
              autant prendre de risque sur vos meubles ? C&apos;est tout à fait
              possible. Chez EN PAYS WÊ, nous proposons une formule économique conçue
              pour les budgets serrés : le client prend en charge l&apos;emballage et le
              démontage simple, l&apos;équipe se concentre sur la manutention, le
              chargement, le transport et la mise en place. Résultat : un tarif réduit
              jusqu&apos;à 30 % par rapport à la formule clé en main.
            </p>
            <p className="mt-4">
              Mais &laquo; pas cher &raquo; ne veut pas dire bâclé. Nos déménageurs sont
              les mêmes, notre matériel est le même, notre assurance est la même. Seul
              le partage des tâches change. C&apos;est la formule idéale pour les
              étudiants, les jeunes actifs, ou toute personne qui sait s&apos;organiser
              mais n&apos;a pas envie de porter une armoire dans un escalier en
              colimaçon.
            </p>
          </>
        }
        sections={[
          {
            h2: "Nos 6 astuces pour réduire le coût de votre déménagement à Besançon",
            body: (
              <>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    <strong>Déménagez en semaine, hors haute saison.</strong> Mai à
                    septembre + fins de mois = tarifs hauts. Mardi-mercredi en
                    novembre = tarifs plus doux.
                  </li>
                  <li>
                    <strong>Emballez vos cartons vous-même.</strong> Récupérez des
                    cartons gratuitement (supermarchés, voisins, plateformes en ligne).
                    Étiquetez pièce par pièce pour gagner du temps à l&apos;arrivée.
                  </li>
                  <li>
                    <strong>Démontez les meubles simples.</strong> Lit, table basse,
                    petites étagères : à votre portée. On garde le démontage des
                    meubles complexes (armoire 3 portes, lit mezzanine).
                  </li>
                  <li>
                    <strong>Faites le tri avant.</strong> Moins de volume = moins
                    cher. Donnez, vendez, jetez ce que vous ne gardez plus.
                  </li>
                  <li>
                    <strong>Demandez plusieurs devis.</strong> Comparez : prix, mais
                    aussi détail des prestations, assurance et avis Google.
                  </li>
                  <li>
                    <strong>Réservez votre stationnement en mairie.</strong> Évite
                    qu&apos;on tourne 30 min à chercher une place — temps facturé.
                  </li>
                </ol>
              </>
            ),
          },
          {
            h2: "Notre formule économique en détail",
            body: (
              <>
                <p>
                  La formule économique d&apos;EN PAYS WÊ pour un déménagement à Besançon
                  inclut : transport, manutention, chargement et déchargement,
                  protection des meubles avec housses et sangles, mise en place
                  basique dans la nouvelle adresse. <strong>Ne sont pas inclus</strong> :
                  l&apos;emballage de vos affaires (cartons à votre charge) et le
                  démontage/remontage des meubles complexes. C&apos;est exactement ce
                  partage des tâches qui permet de réduire significativement le tarif.
                </p>
                <p>
                  Si vous voulez plus de prise en charge, on a aussi des formules
                  intermédiaires et &laquo; clé en main &raquo; — détails sur la page{' '}
                  <a href="/formules" className="text-primary underline-offset-4 hover:underline">
                    formules
                  </a>.
                </p>
              </>
            ),
          },
          {
            h2: "La vraie économie : ne pas se tromper de déménageur",
            body: (
              <>
                <p>
                  Un déménagement &laquo; pas cher &raquo; mais mal géré peut coûter
                  beaucoup plus cher au final : casse non couverte (pas
                  d&apos;assurance), retard qui fait sauter votre état des lieux, meubles
                  abîmés à remplacer. Privilégiez toujours une vraie société assurée,
                  même si le devis n&apos;est pas le moins cher : la différence se
                  rembourse vite. Notre tarif chez EN PAYS WÊ reflète une prestation
                  complète et sérieuse — pas du low-cost douteux.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/societe-demenagement-besancon', label: 'Société de déménagement à Besançon' },
          { href: '/demenageur-besancon', label: 'Déménageur à Besançon' },
          { href: '/demenagement-particulier-besancon', label: 'Déménagement particulier à Besançon' },
          { href: '/formules', label: 'Voir nos formules' },
          { href: '/contact', label: 'Demander un devis' },
        ]}
      />
    </>
  )
}
