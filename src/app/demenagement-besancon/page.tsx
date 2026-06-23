import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/demenagement-besancon'
const TITLE = 'Déménagement à Besançon — Devis gratuit sous 24h'
const DESCRIPTION =
  "Spécialiste du déménagement à Besançon : appartements, maisons, transferts de bureaux, vidage. EN PAYS WÊ intervient à Besançon et dans tout le Doubs, équipe sérieuse, devis gratuit sous 24h."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'déménagement Besançon',
    'déménagement à Besançon',
    'déménageur Besançon',
    'entreprise de déménagement Besançon',
    'société de déménagement Besançon',
    'devis déménagement Besançon',
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
    question: 'Combien coûte un déménagement à Besançon ?',
    answer:
      "Le prix d'un déménagement à Besançon dépend du volume à transporter, de l'étage de départ et d'arrivée, de la distance et des prestations choisies (emballage, démontage, monte-meubles…). Pour un studio en centre-ville, comptez quelques centaines d'euros ; pour un T4 avec étage et distance régionale, le tarif augmente. Nous établissons un devis gratuit et détaillé sous 24h après l'envoi de votre demande.",
  },
  {
    question: 'Quelle est la zone d\'intervention de votre entreprise de déménagement à Besançon ?',
    answer:
      "Notre base est à Besançon (25000), mais nous intervenons partout dans le Doubs (Pontarlier, Montbéliard, Audincourt, Baume-les-Dames…) et dans toute la Franche-Comté & le Grand Est (Dijon, Vesoul, Belfort, Mulhouse, Strasbourg, Lons-le-Saunier, Dôle). Nous gérons aussi les déménagements vers le reste de la France et les DOM-TOM sur demande.",
  },
  {
    question: 'Combien de temps à l\'avance faut-il réserver un déménageur à Besançon ?',
    answer:
      "Pour un déménagement standard à Besançon, nous recommandons de réserver 3 à 4 semaines à l'avance. En haute saison (mai-septembre, fins de mois), prévoyez 6 à 8 semaines. Pour les urgences (départ imposé, sinistre, succession), nous faisons notre maximum pour vous caler dans la semaine — n'hésitez pas à nous appeler.",
  },
  {
    question: 'Que faut-il préparer avant l\'arrivée des déménageurs ?',
    answer:
      "Si vous avez choisi un déménagement « clé en main » (avec emballage), rien à faire : on s'occupe de tout. Sinon, prévoyez vos cartons étiquetés, le démontage des meubles si vous le faites vous-même, et la libération des allées et accès. Côté administratif : pensez à réserver l'ascenseur si nécessaire, et à demander un arrêté de stationnement à la mairie de Besançon pour réserver une place camion devant chez vous.",
  },
  {
    question: 'Êtes-vous assurés en cas de casse ?',
    answer:
      "Oui, EN PAYS WÊ est une entreprise de déménagement assurée. Tous vos biens sont couverts pendant le transport et la manutention. La déclaration de valeur peut être ajustée pour les objets de valeur (piano, œuvres d'art, électronique haut de gamme). On vous explique tout au moment du devis.",
  },
  {
    question: 'Proposez-vous le démontage et remontage du mobilier ?',
    answer:
      "Oui, c'est inclus dans notre prestation standard. Notre équipe démonte et remonte armoires, lits, bureaux, étagères et mobilier complexe. On fournit même les outils et la quincaillerie de remplacement si besoin. Pour les meubles très volumineux ou anciens, on adapte le matériel (sangles, housses, papier bulle, ouate de calage).",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Déménagement à Besançon', path: PATH },
    ]),
    serviceJsonLd(
      'Déménagement à Besançon',
      DESCRIPTION,
      PATH
    ),
    faqJsonLd(faqs),
  ],
}

export default function DemenagementBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Besançon · Doubs · Franche-Comté"
        h1="Déménagement à Besançon"
        subtitle="L'entreprise locale qui prend en charge votre déménagement de A à Z, du premier carton au dernier meuble installé."
        heroImage="https://i.ibb.co/FLYSvbKS/IMG-1922.jpg"
        bullets={[
          'Devis gratuit & sans engagement sous 24h',
          'Équipe locale basée à Besançon (25000)',
          'Démontage / remontage inclus',
          'Matériel pro & camions adaptés au volume',
          'Assurance incluse · 5,0/5 sur Google',
          'Intervention 7j/7 dans tout le Doubs',
        ]}
        intro={
          <>
            <p>
              Vous cherchez une entreprise de <strong>déménagement à Besançon</strong> sérieuse, à
              l&apos;écoute et qui tient ses délais ? EN PAYS WÊ est une société de déménagement
              bisontine spécialisée dans le transport de biens des particuliers comme des
              professionnels. Implantés au 25 rue Hector Berlioz à Besançon, nous intervenons
              chaque semaine dans toute la Franche-Comté et le Grand Est, du studio étudiant
              en centre-ville aux grandes villas familiales.
            </p>
            <p className="mt-4">
              Notre métier de <strong>déménageur à Besançon</strong>, c&apos;est avant tout
              écouter votre projet : volume, contraintes d&apos;accès, calendrier, objets
              fragiles. Nous adaptons ensuite l&apos;équipe, le camion et le matériel pour que
              votre déménagement se passe sans stress. Cartons, scotch, papier bulle, housses
              mobilier, sangles : tout le matériel professionnel est fourni. Sur demande, on
              s&apos;occupe également de l&apos;emballage et du démontage des meubles, du
              vidage de cave et du débarras complet.
            </p>
          </>
        }
        sections={[
          {
            h2: "Un déménagement à Besançon adapté à votre situation",
            body: (
              <>
                <p>
                  Chaque <strong>déménagement à Besançon</strong> est unique. Notre équipe
                  intervient aussi bien dans les immeubles haussmanniens de la Boucle que
                  dans les pavillons de Planoise, Chateaufarine, Saint-Claude ou Palente.
                  Étages élevés sans ascenseur, ruelles étroites de la vieille ville,
                  stationnement compliqué : nous connaissons la ville et préparons l&apos;accès
                  bien en amont (demande d&apos;arrêté de stationnement, monte-meubles si
                  besoin).
                </p>
                <p>
                  Que vous quittiez Besançon, que vous y arriviez ou que vous y déménagiez
                  d&apos;un quartier à l&apos;autre, on prend en charge l&apos;intégralité de
                  la prestation : emballage, démontage, chargement, transport, déchargement,
                  remontage, installation. Vous voulez ne gérer qu&apos;une partie ? Sur
                  mesure aussi : on intervient sur l&apos;étape qui vous coince.
                </p>
              </>
            ),
          },
          {
            h2: "Pourquoi choisir EN PAYS WÊ comme déménageur à Besançon",
            body: (
              <>
                <p>
                  EN PAYS WÊ, c&apos;est une équipe à taille humaine, formée et sérieuse. Pas
                  de sous-traitance opaque : ce sont nos propres déménageurs qui interviennent
                  chez vous, avec notre matériel et nos camions. Nous sommes notés{' '}
                  <strong>5,0 / 5 sur Google</strong> par nos clients particuliers et
                  professionnels du secteur de Besançon. Nous travaillons 7j/7 (Lun-Sam 9h-19h,
                  Dim 8h-16h) pour caler vos déménagements même les week-ends.
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>Devis gratuit, clair et détaillé sous 24h, sans engagement.</li>
                  <li>Équipe en interne : pas de sous-traitance.</li>
                  <li>Matériel professionnel inclus (housses, sangles, monte-meubles).</li>
                  <li>Assurance incluse, déclaration de valeur ajustable.</li>
                  <li>Intervention à Besançon, dans tout le Doubs et le Grand Est.</li>
                </ul>
              </>
            ),
          },
          {
            h2: "Combien coûte un déménagement à Besançon ?",
            body: (
              <>
                <p>
                  Le tarif d&apos;un <strong>déménagement à Besançon</strong> dépend
                  principalement du volume (m³), de la distance à parcourir, des étages et
                  accès, et des prestations choisies. Un studio entre deux étages bas en
                  centre-ville bisontin sera nettement moins onéreux qu&apos;une maison T5 à
                  remonter à un troisième étage sans ascenseur à 200 km. Pour vous donner un
                  prix juste, nous établissons un <strong>devis gratuit sous 24h</strong>{' '}
                  après votre demande, en tenant compte de tous les paramètres réels.
                </p>
                <p>
                  Nos engagements : aucune surfacturation cachée, le devis est ferme, et les
                  prix annoncés sont ceux que vous payez le jour J. Nous proposons aussi des
                  formules différenciées (économique, standard, premium clé en main) afin que
                  vous puissiez choisir le niveau de prise en charge qui correspond à votre
                  budget — voir nos <a href="/formules" className="text-primary underline-offset-4 hover:underline">formules de déménagement</a>.
                </p>
              </>
            ),
          },
          {
            h2: "Zones de déménagement autour de Besançon",
            body: (
              <>
                <p>
                  Depuis notre base à Besançon, nous intervenons en moins d&apos;une heure
                  dans tout le Doubs (Pontarlier, Montbéliard, Audincourt, Baume-les-Dames,
                  Quingey, Ornans, Pirey, Saône, Pelousey, Chalezeule…) et dans le Grand
                  Est : Dijon, Vesoul, Belfort, Lons-le-Saunier, Dôle, Mâcon, Chalon-sur-Saône,
                  Mulhouse, Strasbourg, Bourg-en-Bresse. Nous prenons aussi en charge les
                  déménagements longue distance vers Paris, Lyon, Lille, Marseille, Toulouse,
                  Bordeaux, Nantes, Rennes et toutes les grandes villes françaises.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/entreprise-demenagement-besancon', label: 'Entreprise de déménagement à Besançon' },
          { href: '/demenageur-besancon', label: 'Déménageur à Besançon' },
          { href: '/demenagement-pas-cher-besancon', label: 'Déménagement pas cher à Besançon' },
          { href: '/demenagement-bureaux-besancon', label: 'Déménagement de bureaux à Besançon' },
          { href: '/services', label: 'Tous nos services de déménagement' },
          { href: '/formules', label: 'Formules de déménagement' },
        ]}
      />
    </>
  )
}
