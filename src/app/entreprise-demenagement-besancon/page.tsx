import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/entreprise-demenagement-besancon'
const TITLE = 'Entreprise de déménagement à Besançon — EN PAYS WÊ'
const DESCRIPTION =
  "EN PAYS WÊ, entreprise de déménagement à Besançon : équipe en interne, matériel professionnel, devis gratuit sous 24h. Particuliers, entreprises, transferts de bureaux et longue distance."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'entreprise de déménagement Besançon',
    'entreprise déménagement Besançon',
    'société de déménagement Besançon',
    'déménageur Besançon',
    'EN PAYS WÊ Besançon',
    'déménagement entreprise Besançon',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Qu\'est-ce qui différencie une entreprise de déménagement comme EN PAYS WÊ d\'un déménageur particulier ?',
    answer:
      "Une entreprise de déménagement comme EN PAYS WÊ travaille avec une équipe formée, un matériel professionnel (housses mobilier, sangles, monte-meubles, camions adaptés), une assurance qui couvre vos biens pendant tout le transport et un suivi administratif (devis, contrat, lettre de voiture). C'est un cadre légal et professionnel — contrairement aux solutions « entre particuliers » qui n'offrent ni assurance ni recours en cas de casse.",
  },
  {
    question: 'Votre entreprise est-elle assurée et déclarée ?',
    answer:
      "Oui, EN PAYS WÊ est une entreprise française régulièrement déclarée (SIRET 101 338 093 00012), assurée pour le déménagement, le transport de marchandises et la responsabilité civile professionnelle. Nous fournissons toutes les pièces justificatives sur simple demande au moment du devis.",
  },
  {
    question: 'Travaillez-vous avec des entreprises pour leur transfert de bureaux à Besançon ?',
    answer:
      "Oui, le transfert de locaux professionnels est une part importante de notre activité à Besançon. Nous prenons en charge le mobilier, les archives, le matériel informatique (avec étiquetage par poste) et adaptons le planning à votre activité — interventions hors heures ouvrées et week-ends possibles pour limiter l'interruption.",
  },
  {
    question: 'Sous quel délai votre entreprise peut-elle intervenir à Besançon ?',
    answer:
      "Pour un déménagement standard, nous recommandons de réserver 3-4 semaines à l'avance. En haute saison (mai à septembre), prévoir 6-8 semaines. En cas d'urgence (départ imposé, sinistre, succession), nous faisons notre maximum pour caler une intervention sous 5 à 7 jours.",
  },
  {
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer:
      "Notre entreprise est ouverte 7j/7 : du lundi au samedi de 9h à 19h et le dimanche de 8h à 16h. Vous pouvez nous joindre par téléphone au 06 10 60 21 59 (mobile) ou 03 81 63 94 10 (fixe), par email à contact@demenageurs-enpayswe.fr, ou via le formulaire de devis en ligne.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Entreprise de déménagement à Besançon', path: PATH },
    ]),
    serviceJsonLd('Entreprise de déménagement à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function EntrepriseDemenagementBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Une entreprise locale, sérieuse et déclarée"
        h1="Entreprise de déménagement à Besançon"
        subtitle="EN PAYS WÊ : une équipe en interne, un matériel pro, une assurance solide. Pour les particuliers et les professionnels du Doubs et de Franche-Comté."
        heroImage="https://i.ibb.co/fVbwGqwn/IMG-1920.jpg"
        bullets={[
          'Entreprise déclarée (SIRET 101 338 093 00012)',
          'Équipe interne formée — pas de sous-traitance',
          'Assurance pro & responsabilité civile incluse',
          'Devis ferme sous 24h, sans engagement',
          'Particuliers, entreprises, transferts de bureaux',
          '7j/7 — basés à Besançon (25000)',
        ]}
        intro={
          <>
            <p>
              EN PAYS WÊ est une <strong>entreprise de déménagement à Besançon</strong>{' '}
              implantée au 25 rue Hector Berlioz, dans le Doubs. Société déclarée et assurée,
              nous accompagnons chaque mois des dizaines de clients dans leur déménagement à
              Besançon, en Franche-Comté et dans tout le Grand Est. Notre force : une équipe
              en interne (pas de sous-traitance), un matériel professionnel complet et une
              promesse simple — un déménagement clair, ponctuel et soigné.
            </p>
            <p className="mt-4">
              Choisir une vraie entreprise de déménagement à Besançon, c&apos;est avoir
              l&apos;assurance d&apos;un cadre légal solide : devis détaillé, contrat de
              déménagement, lettre de voiture, assurance qui couvre vos biens, recours en cas
              de casse. EN PAYS WÊ est référencée auprès des organismes compétents et
              transparente sur ses tarifs comme sur ses pratiques. C&apos;est cette rigueur
              qui nous vaut la note de <strong>5,0/5 sur Google</strong> auprès de nos
              clients bisontins.
            </p>
          </>
        }
        sections={[
          {
            h2: "Une entreprise de déménagement à taille humaine",
            body: (
              <>
                <p>
                  Contrairement aux grandes structures qui sous-traitent leurs interventions,
                  EN PAYS WÊ reste une <strong>entreprise de déménagement à Besançon</strong>{' '}
                  à taille humaine. Concrètement : vous parlez à la même personne du premier
                  contact à la fin du déménagement. Notre équipe se déplace en personne pour
                  les visites techniques quand c&apos;est nécessaire, et le jour J ce sont
                  nos propres déménageurs — formés, équipés et assurés — qui interviennent.
                </p>
                <p>
                  Cette proximité fait toute la différence sur les détails : un meuble fragile
                  qui nécessite un emballage spécifique, un piano à descendre depuis le
                  troisième étage, une œuvre d&apos;art à protéger. Notre équipe a déjà géré
                  tous ces cas à Besançon et alentours.
                </p>
              </>
            ),
          },
          {
            h2: "Particuliers ou entreprises : nous nous adaptons",
            body: (
              <>
                <p>
                  Notre <strong>entreprise de déménagement à Besançon</strong> intervient
                  aussi bien pour les particuliers (du studio à la grande maison) que pour
                  les professionnels : transferts de bureaux, déménagement de cabinets,
                  livraisons de mobilier, transfert d&apos;archives, vidage de locaux après
                  cession.
                </p>
                <p>
                  Pour les entreprises, nous établissons un planning qui limite
                  l&apos;interruption d&apos;activité : interventions le week-end, le soir,
                  ou par lots successifs si vous avez plusieurs postes. Nos camions sont
                  adaptés au volume — de l&apos;utilitaire 20 m³ au porteur 50 m³. Voir aussi
                  notre page dédiée au{' '}
                  <a href="/demenagement-bureaux-besancon" className="text-primary underline-offset-4 hover:underline">
                    déménagement de bureaux à Besançon
                  </a>.
                </p>
              </>
            ),
          },
          {
            h2: "Garanties d'une vraie société de déménagement",
            body: (
              <>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Entreprise déclarée :</strong> SIRET 101 338 093 00012, immatriculée
                    en France, contributions sociales en règle.
                  </li>
                  <li>
                    <strong>Assurance professionnelle :</strong> tous vos biens sont couverts
                    pendant la manutention et le transport. Déclaration de valeur ajustable
                    pour les objets de valeur.
                  </li>
                  <li>
                    <strong>Contrat clair :</strong> devis écrit, contrat de déménagement,
                    lettre de voiture — vous avez tous les documents requis par la loi.
                  </li>
                  <li>
                    <strong>Équipe identifiable :</strong> nos déménageurs sont nos salariés,
                    en tenue identifiée EN PAYS WÊ.
                  </li>
                  <li>
                    <strong>Transparence des prix :</strong> le devis fait foi, pas de
                    surfacturation le jour J.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/societe-demenagement-besancon', label: 'Société de déménagement à Besançon' },
          { href: '/demenageur-besancon', label: 'Déménageur à Besançon' },
          { href: '/demenagement-bureaux-besancon', label: 'Déménagement de bureaux à Besançon' },
          { href: '/a-propos', label: 'Qui sommes-nous' },
          { href: '/contact', label: 'Demander un devis' },
        ]}
      />
    </>
  )
}
