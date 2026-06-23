import type { Metadata } from 'next'

import { LocalLandingPage } from '@/components/seo/local-landing-page'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const PATH = '/demenagement-particulier-besancon'
const TITLE = 'Déménagement particulier à Besançon — Sans stress'
const DESCRIPTION =
  "Déménagement particulier à Besançon : appartement, maison, étudiant, famille. EN PAYS WÊ vous accompagne avec soin pour un déménagement serein. Devis gratuit sous 24h."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    'déménagement particulier Besançon',
    'déménagement appartement Besançon',
    'déménagement maison Besançon',
    'déménagement étudiant Besançon',
    'déménagement famille Besançon',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: 'website' },
}

const faqs = [
  {
    question: 'Quelle est la meilleure période pour un déménagement à Besançon en tant que particulier ?',
    answer:
      "La meilleure période est l'automne et l'hiver (octobre à avril) : tarifs plus doux, déménageurs plus disponibles, créneaux plus flexibles. Évitez les fins de mois et les week-ends de juin-juillet-août (haute saison étudiante et familiale, tarifs majorés et créneaux saturés).",
  },
  {
    question: 'Faut-il être présent pendant tout le déménagement ?',
    answer:
      "Idéalement, oui — ou une personne de confiance. Votre présence est utile au début (briefing, identifier les objets fragiles, indiquer ce qui part et ce qui reste) et à la fin (vérification, indiquer où placer les meubles, signature de fin de prestation). Pendant la phase de chargement et de transport, votre présence n'est pas strictement nécessaire.",
  },
  {
    question: 'Que se passe-t-il s\'il pleut le jour du déménagement ?',
    answer:
      "Aucun souci : nos déménageurs sont équipés de housses imperméables pour protéger le mobilier, et nos camions sont fermés. Si la pluie est très forte, on peut ralentir le rythme pour éviter de glisser, mais nous tenons les horaires. Pour les meubles particulièrement sensibles, on peut prévoir un emballage renforcé.",
  },
  {
    question: 'Mes enfants peuvent-ils être présents le jour du déménagement ?',
    answer:
      "Oui, bien sûr, mais on conseille (pour leur sécurité et celle de l'équipe) de prévoir une garde le temps du chargement et du déchargement. Pendant ces phases, il y a beaucoup d'allées-et-venues, de cartons et de mobilier qui circulent. Si garde impossible, prévoyez une pièce calme et libre où ils peuvent rester en sécurité.",
  },
  {
    question: 'Mon chat / mon chien va-t-il être stressé ?',
    answer:
      "Le déménagement est stressant pour les animaux. Pour les chats : prévoyez une pièce fermée avec sa caisse, son eau et sa litière le temps du chargement, puis transportez-le vous-même. Pour les chiens : confiez-le si possible à un proche, ou maintenez-le en laisse hors zone d'activité. Une fois sur place, laissez-leur un coin familier (couverture, jouets) pour qu'ils se sentent en sécurité.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(TITLE, DESCRIPTION, PATH),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Déménagement particulier à Besançon', path: PATH },
    ]),
    serviceJsonLd('Déménagement particulier à Besançon', DESCRIPTION, PATH),
    faqJsonLd(faqs),
  ],
}

export default function DemenagementParticulierBesanconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalLandingPage
        eyebrow="Pour les particuliers à Besançon"
        h1="Déménagement particulier à Besançon"
        subtitle="Studio étudiant, premier appartement, maison familiale ou retraite : EN PAYS WÊ accompagne tous les particuliers à Besançon avec soin et bienveillance."
        heroImage="https://i.ibb.co/BVCwHC4B/D7-E6-C8-D2-A508-4606-9-ABB-D15-ACD22711-E.png"
        bullets={[
          'Studio étudiant à grande maison',
          'Démontage / remontage mobilier inclus',
          'Cartons & matériel fournis sur demande',
          'Assurance incluse · biens couverts',
          'Conseils pratiques avant J',
          'Devis gratuit & sans engagement',
        ]}
        intro={
          <>
            <p>
              Pour un particulier, un <strong>déménagement à Besançon</strong> est un
              moment chargé : nouveau quartier, nouveaux repères, parfois un nouveau
              travail ou une nouvelle école. Le rôle d&apos;une équipe de déménageurs
              comme EN PAYS WÊ, c&apos;est de vous épargner la partie logistique
              fatigante pour que vous puissiez vous concentrer sur le reste. Studio
              étudiant à Planoise, premier appartement de jeune actif en centre-ville,
              maison familiale dans le Haut-Doubs ou départ pour la retraite : nous
              accompagnons toutes les situations.
            </p>
            <p className="mt-4">
              Notre approche pour les <strong>déménagements particuliers à Besançon</strong>{' '}
              : prendre le temps de vous écouter, comprendre votre situation, votre
              budget et vos priorités. Vous voulez tout déléguer pour souffler ? Notre
              formule clé en main s&apos;occupe d&apos;A à Z, emballage compris. Vous
              préférez emballer vous-même pour réduire le tarif ? Pas de souci, on
              s&apos;adapte. L&apos;essentiel, c&apos;est que le jour J se passe sans
              accroc.
            </p>
          </>
        }
        sections={[
          {
            h2: "Étudiants : déménager léger à Besançon",
            body: (
              <>
                <p>
                  Les étudiants bisontins (université de Franche-Comté, UFR Lettres,
                  IUT, écoles d&apos;ingénieurs ENSMM…) déménagent fréquemment : entrée en
                  L1, changement de colocation, départ en stage, retour chez les
                  parents en fin d&apos;année. Pour ces déménagements légers (souvent
                  studio ou T1 meublé), nous proposons des tarifs spécifiques étudiants
                  et des créneaux courts (demi-journée).
                </p>
                <p>
                  Astuce : si vous êtes plusieurs étudiants à déménager dans le même
                  immeuble ou la même rue le même jour, regroupez vos demandes — on
                  peut faire un tarif groupé.
                </p>
              </>
            ),
          },
          {
            h2: "Familles : préparer le déménagement avec les enfants",
            body: (
              <>
                <p>
                  Pour une famille, déménager à Besançon est une vraie organisation.
                  Quelques conseils tirés de notre expérience :
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Impliquez les enfants : faites-leur emballer leur chambre (avec leurs cartons à eux).</li>
                  <li>Préparez une « valise jour J » avec affaires de toilette, pyjamas, doudou, jouets favoris.</li>
                  <li>Prévoyez une garde le jour du chargement et déchargement.</li>
                  <li>Faites visiter l&apos;ancienne maison une dernière fois, et la nouvelle dès l&apos;installation.</li>
                  <li>Replacez d&apos;abord les chambres d&apos;enfants pour qu&apos;ils retrouvent leurs repères vite.</li>
                </ul>
                <p>
                  Nos déménageurs ont l&apos;habitude des familles : on prend le temps,
                  on est patient avec les questions des enfants, on remonte les
                  premières chambres et le coin cuisine pour que vous puissiez passer
                  une première soirée tranquille.
                </p>
              </>
            ),
          },
          {
            h2: "Seniors : un déménagement en douceur",
            body: (
              <>
                <p>
                  Le déménagement vers une résidence senior, un EHPAD ou un logement
                  adapté est un moment émotionnellement chargé. Notre équipe sait
                  prendre le temps, écouter, rassurer. Nous pouvons aussi prendre en
                  charge l&apos;intégralité (emballage, transport, installation) pour
                  que la personne âgée n&apos;ait rien à porter ni à organiser.
                </p>
                <p>
                  Si vous êtes proche aidant et que vous gérez le déménagement de vos
                  parents ou grands-parents à Besançon ou en Franche-Comté, on peut
                  s&apos;adapter complètement à votre cadence et faire le point avec
                  vous à chaque étape.
                </p>
              </>
            ),
          },
          {
            h2: "Préparer son déménagement particulier à Besançon : checklist",
            body: (
              <>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>1 mois avant : choisir le déménageur, signer le devis.</li>
                  <li>3 semaines avant : commencer à trier et à donner ce qu&apos;on ne garde pas.</li>
                  <li>2 semaines avant : faire les changements d&apos;adresse (CAF, impôts, banque, mutuelle, école).</li>
                  <li>1 semaine avant : emballer les affaires non essentielles, étiqueter par pièce.</li>
                  <li>3 jours avant : appeler la mairie de Besançon pour l&apos;arrêté de stationnement si nécessaire.</li>
                  <li>Veille : préparer la valise du lendemain, vérifier les clés.</li>
                  <li>Jour J : vous nous accueillez, on s&apos;occupe du reste !</li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/demenagement-besancon', label: 'Déménagement à Besançon' },
          { href: '/societe-demenagement-besancon', label: 'Société de déménagement à Besançon' },
          { href: '/demenageur-besancon', label: 'Déménageur à Besançon' },
          { href: '/demenagement-pas-cher-besancon', label: 'Déménagement pas cher à Besançon' },
          { href: '/formules', label: 'Voir nos formules' },
          { href: '/contact', label: 'Demander un devis' },
        ]}
      />
    </>
  )
}
