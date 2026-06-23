import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/demenagement-bureaux-besancon'
const TITLE = 'Déménagement de bureaux à Besançon — Transfert d\'entreprise'
const DESCRIPTION =
  "Transfert de bureaux à Besançon : EN PAYS WÊ gère le déménagement de votre entreprise. Mobilier, matériel informatique, archives — planning adapté pour limiter l'interruption."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'déménagement bureaux Besançon',
    'transfert bureaux Besançon',
    'déménagement entreprise Besançon',
    'déménagement professionnel Besançon',
    'transfert local commercial Besançon',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: 'website' },
}

const faqs = [
  {
    question: 'Comment se passe un déménagement de bureaux à Besançon ?',
    answer:
      "Un déménagement de bureaux à Besançon se déroule en 4 phases : 1) audit sur place (volume, contraintes, planning) ; 2) préparation (étiquetage des postes, protection du matériel informatique, démontage du mobilier) ; 3) transport (camions adaptés, équipe renforcée) ; 4) remise en service (mobilier monté, postes informatiques replacés, archives rangées). Nous travaillons souvent les week-ends pour éviter d'interrompre votre activité.",
  },
  {
    question: 'Combien coûte un déménagement de bureaux à Besançon ?',
    answer:
      "Le tarif d'un transfert de bureaux à Besançon dépend du nombre de postes, du volume mobilier, des archives, du matériel informatique et de la distance. Pour 5 à 10 postes simples avec mobilier standard, comptez entre 1 500 € et 3 500 €. Pour 20+ postes avec serveurs et archives, le devis peut grimper à 8 000-15 000 €. Nous établissons un devis détaillé après une visite sur place.",
  },
  {
    question: 'Pouvez-vous intervenir le week-end pour ne pas interrompre l\'activité ?',
    answer:
      "Oui, c'est même notre recommandation pour les déménagements de bureaux à Besançon. En intervenant le vendredi soir, samedi et dimanche, vos collaborateurs retrouvent leurs postes opérationnels le lundi matin. Nous nous coordonnons avec votre prestataire informatique pour la déconnexion/reconnexion des serveurs et postes.",
  },
  {
    question: 'Que faites-vous du matériel informatique ?',
    answer:
      "Nous protégeons systématiquement les écrans, unités centrales, imprimantes et serveurs avec des housses dédiées et des cartons spécifiques. Chaque poste est étiqueté pour être replacé exactement au bon endroit. Pour les serveurs et baies de brassage, nous coordonnons avec votre équipe IT ou votre prestataire pour respecter les procédures de déconnexion / arrêt / redémarrage.",
  },
  {
    question: 'Que faire des archives et documents confidentiels ?',
    answer:
      "Les archives sont placées dans des cartons scellés et étiquetés (par service, par année). Pour les documents confidentiels (RH, comptabilité, dossiers clients), nous proposons des cartons à fermeture verrouillée et une chaîne de transport sécurisée. Nous pouvons aussi gérer la destruction certifiée d'archives obsolètes si vous le souhaitez.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Déménagement de bureaux à Besançon', path: PATH },
    ]),
    serviceJsonLd('Déménagement de bureaux à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function DemenagementBureauxBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Transfert d'entreprise — B2B"
        h1="Déménagement de bureaux à Besançon"
        subtitle="EN PAYS WÊ accompagne les entreprises bisontines dans leur transfert de locaux : mobilier, informatique, archives. Planning week-end pour zéro interruption."
        heroImage="https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg"
        bullets={[
          'Intervention week-end & soirée possibles',
          'Étiquetage poste par poste',
          'Protection matériel informatique',
          'Gestion des archives & confidentiel',
          'Coordination avec votre IT',
          'Devis détaillé après visite sur site',
        ]}
        intro={
          <>
            <p>
              Le <strong>déménagement de bureaux à Besançon</strong> est un projet qui ne
              s&apos;improvise pas. Une journée d&apos;interruption d&apos;activité, c&apos;est
              du chiffre d&apos;affaires perdu et des collaborateurs frustrés. Chez EN PAYS WÊ,
              nous avons développé une méthode spécifique pour les transferts d&apos;entreprise :
              audit préalable, planification au cordeau, intervention concentrée sur les
              week-ends, coordination avec votre service informatique.
            </p>
            <p className="mt-4">
              Que vous soyez une TPE qui change d&apos;adresse à Besançon, une PME qui
              déménage ses 30 postes vers un nouveau plateau, ou un cabinet libéral qui
              prend de nouveaux locaux dans le Doubs, nous adaptons l&apos;équipe, le
              matériel et le planning à votre activité. Le mot d&apos;ordre : que vos
              collaborateurs retrouvent un environnement de travail fonctionnel dès leur
              arrivée le lundi matin.
            </p>
          </>
        }
        sections={[
          {
            h2: "Notre méthode pour un transfert d'entreprise sans accroc",
            body: (
              <>
                <p>
                  Avant tout transfert de bureaux à Besançon, nous organisons une{' '}
                  <strong>visite sur site</strong> de vos locaux actuels et futurs. C&apos;est
                  l&apos;étape clé : mesurer le volume, identifier les contraintes
                  d&apos;accès (ascenseur, monte-meubles, stationnement), repérer les
                  éléments sensibles (serveurs, archives, matériel cassable, plantes),
                  et caler le planning avec votre direction et votre prestataire
                  informatique.
                </p>
                <p>
                  Le jour J, l&apos;équipe se mobilise selon le plan prévu : protection du
                  mobilier et du matériel informatique, étiquetage des cartons par
                  collaborateur, chargement méthodique, transport rapide entre les deux
                  sites, déchargement et remise en place avec un plan
                  d&apos;implantation pré-établi avec vous.
                </p>
              </>
            ),
          },
          {
            h2: "Protection du matériel informatique et des serveurs",
            body: (
              <>
                <p>
                  Le matériel informatique d&apos;entreprise est la principale source
                  d&apos;inquiétude lors d&apos;un déménagement de bureaux. Notre équipe
                  applique un protocole strict : housses dédiées pour chaque écran et
                  unité centrale, cartons antichocs pour les serveurs et imprimantes,
                  étiquetage par poste avec photos avant déconnexion. Nous travaillons
                  main dans la main avec votre service IT (ou votre prestataire externe)
                  pour respecter les procédures de débranchement et de redémarrage.
                </p>
                <p>
                  Pour les baies de brassage et les serveurs critiques, nous prévoyons
                  un calage spécifique dans le camion et un transport à températures
                  modérées. Aucun temps de transport au soleil derrière les vitres.
                </p>
              </>
            ),
          },
          {
            h2: "Archives, confidentialité et continuité de service",
            body: (
              <>
                <p>
                  Les archives papier de votre entreprise (comptabilité, RH, dossiers
                  clients) sont prises en charge dans des cartons solides, étiquetés par
                  service et par année. Pour les documents confidentiels, nous proposons
                  des cartons à fermeture sécurisée. Notre équipe est tenue à une
                  obligation de discrétion contractuelle.
                </p>
                <p>
                  Si vous souhaitez profiter du déménagement pour faire le tri dans vos
                  archives, nous pouvons coordonner une destruction certifiée avec un
                  prestataire partenaire.
                </p>
              </>
            ),
          },
          {
            h2: "Combien coûte un déménagement de bureaux à Besançon ?",
            body: (
              <>
                <p>
                  Le tarif dépend du nombre de postes, du volume de mobilier, des
                  archives et du matériel informatique. Pour vous donner une fourchette :
                  un transfert de 5-10 postes avec mobilier standard, courte distance à
                  Besançon, se situe entre 1 500 € et 3 500 €. Au-delà de 20 postes,
                  avec serveurs et archives volumineuses, on dépasse souvent les 6 000 €.
                  Le devis est toujours établi après visite sur place — c&apos;est la
                  seule façon de proposer un prix juste.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/entreprise-demenagement-besancon', label: 'Entreprise de déménagement à Besançon' },
          { href: '/services', label: 'Tous nos services' },
          { href: '/contact', label: 'Demander un devis pour mon entreprise' },
        ]}
      />
    </>
  )
}
