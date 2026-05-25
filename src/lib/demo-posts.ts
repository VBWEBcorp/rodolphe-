export type DemoPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  published: boolean
  /** Date de mise en ligne. Tant qu'elle est dans le futur, l'article reste "programmé". */
  publishedAt: string
  updatedAt?: string
  /** Mot-clé principal (référence SEO / RankMath) */
  focusKeyword?: string
  metaTitle?: string
  metaDescription?: string
}

const AUTHOR = 'Équipe EN PAYS WÊ'

export const DEMO_POSTS: DemoPost[] = [
  {
    _id: 'post-01',
    slug: 'prix-demenagement-2026',
    focusKeyword: "prix d'un déménagement",
    title: "Prix d'un déménagement en 2026 : le guide complet",
    metaTitle: "Prix d'un déménagement 2026 : tarifs et budget",
    metaDescription:
      "Quel est le prix d'un déménagement en 2026 ? Tarifs au volume, facteurs de coût et astuces pour payer le juste prix. Devis gratuit en Franche-Comté.",
    excerpt:
      "Combien coûte un déménagement en 2026 ? On détaille les tarifs au volume, ce qui fait monter la facture et comment payer le juste prix.",
    coverImage: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    category: 'Déménagement',
    tags: ['Prix', 'Budget', 'Devis'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-05-22T08:00:00.000Z',
    updatedAt: '2026-05-22T08:00:00.000Z',
    content: `
<p>Le <strong>prix d'un déménagement</strong> est la première question que tout le monde se pose, et c'est normal : c'est un poste de dépense qui peut varier du simple au triple. Pour vous aider à y voir clair, voici comment se calcule un devis en 2026 et comment éviter de payer trop cher.</p>

<h2>Ce qui détermine le prix d'un déménagement</h2>
<p>Aucun déménagement ne se ressemble. Un devis sérieux repose sur quelques critères concrets :</p>
<ul>
  <li><strong>Le volume</strong> à transporter, exprimé en mètres cubes (m³)</li>
  <li><strong>La distance</strong> entre le logement de départ et celui d'arrivée</li>
  <li><strong>L'accessibilité</strong> : étage, ascenseur, distance de portage, stationnement du camion</li>
  <li><strong>La formule choisie</strong> : économique, standard ou clé en main avec emballage</li>
  <li><strong>La période</strong> : la fin de mois et l'été sont les créneaux les plus chers</li>
</ul>

<h2>Les tarifs moyens au volume</h2>
<p>À titre indicatif, pour un déménagement local en Franche-Comté, comptez en 2026 :</p>
<ul>
  <li>Studio / petit T1 (10 à 15 m³) : à partir de 350 à 600 €</li>
  <li>Appartement T2/T3 (20 à 30 m³) : 700 à 1 400 €</li>
  <li>Maison T4/T5 (35 à 50 m³) : 1 500 à 3 000 €</li>
</ul>
<p>Ces fourchettes augmentent avec la distance et le niveau de service. Une formule clé en main, où l'équipe emballe et déballe tout, représente un surcoût mais un gain de temps considérable.</p>

<h2>Comment payer le juste prix de votre déménagement</h2>
<p>Quelques réflexes simples font baisser la facture sans rogner sur la qualité :</p>
<ul>
  <li><strong>Triez avant d'emballer</strong> : moins de volume, c'est moins cher</li>
  <li><strong>Évitez la fin de mois</strong> et les samedis si vous le pouvez</li>
  <li><strong>Demandez plusieurs devis</strong> détaillés et comparez ce qui est inclus</li>
  <li><strong>Méfiez-vous des prix trop bas</strong> : assurance, démontage ou portage sont parfois "oubliés"</li>
</ul>

<h2>Devis gratuit ou estimation à distance ?</h2>
<p>Un professionnel sérieux propose toujours une estimation gratuite, par visite à domicile ou en visio. C'est le seul moyen d'obtenir un tarif fiable plutôt qu'une fourchette approximative. Découvrez d'ailleurs nos <a href="/formules">formules de déménagement</a> adaptées à chaque budget.</p>

<blockquote>Le bon prix, ce n'est pas le moins cher : c'est celui qui couvre réellement votre besoin, assurance comprise.</blockquote>

<p>Vous préparez un déménagement à Besançon ou ailleurs en Franche-Comté ? <a href="/contact">Demandez votre devis gratuit</a> : nous étudions votre volume et vous proposons un tarif clair, sans surprise.</p>
    `,
  },
  {
    _id: 'post-02',
    slug: 'demenagement-besancon',
    focusKeyword: 'déménagement à Besançon',
    title: 'Déménagement à Besançon : le guide pour tout réussir',
    metaTitle: 'Déménagement à Besançon : le guide complet',
    metaDescription:
      "Organiser un déménagement à Besançon : quartiers, stationnement, prix et conseils d'un déménageur local. Demandez votre devis gratuit sous 24h.",
    excerpt:
      "Stationnement, quartiers en pente, autorisations de voirie : réussir un déménagement à Besançon demande de connaître la ville. Voici notre guide local.",
    coverImage: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
    category: 'Conseils',
    tags: ['Besançon', 'Local', 'Organisation'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-06-24T08:00:00.000Z',
    updatedAt: '2026-06-24T08:00:00.000Z',
    content: `
<p>Un <strong>déménagement à Besançon</strong> ne s'improvise pas. Entre la Boucle historique, les rues étroites du centre et les quartiers en pente, connaître la ville change tout le jour J. Voici nos conseils de déménageur local.</p>

<h2>Le stationnement, le vrai sujet d'un déménagement à Besançon</h2>
<p>Dans le centre et la Boucle, impossible de garer un camion n'importe où. Pensez à demander une <strong>autorisation de stationnement</strong> à la mairie au moins 10 jours avant : elle permet de réserver un emplacement devant votre immeuble et d'éviter un portage de 50 mètres avec vos meubles.</p>

<h2>Adapter le camion au quartier</h2>
<ul>
  <li><strong>Centre / Boucle</strong> : rues étroites, privilégiez un camion de taille moyenne</li>
  <li><strong>Battant, La Bouloie</strong> : pentes et accès parfois délicats</li>
  <li><strong>Planoise, Châteaufarine</strong> : voies larges, accès facile mais grands immeubles</li>
  <li><strong>Quartiers résidentiels (Saint-Ferjeux, Velotte)</strong> : maisons, attention aux jardins et portails</li>
</ul>

<h2>Anticiper les étages et l'ascenseur</h2>
<p>Beaucoup d'immeubles bisontins anciens n'ont pas d'ascenseur, ou un ascenseur trop petit pour un canapé. Dans ce cas, un <a href="/services">monte-meuble</a> fait gagner des heures et évite les accidents. Signalez toujours l'étage et la présence d'ascenseur lors du devis.</p>

<h2>Combien coûte un déménagement à Besançon ?</h2>
<p>Le prix dépend du volume, de l'étage et de la formule. Pour avoir une idée précise des tarifs pratiqués, consultez notre article dédié au <a href="/blog/prix-demenagement-2026">prix d'un déménagement en 2026</a>. En local, un T3 se situe généralement entre 700 et 1 400 €.</p>

<h2>Les démarches à ne pas oublier</h2>
<p>Pensez à la réexpédition du courrier, au changement d'adresse auprès des impôts et de votre assurance. La plupart se font en ligne via <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a> en quelques minutes.</p>

<p>Vous déménagez prochainement dans la capitale comtoise ? <a href="/contact">Contactez notre équipe</a> pour un devis gratuit sous 24h, pensé pour les spécificités de Besançon.</p>
    `,
  },
  {
    _id: 'post-03',
    slug: 'demenagement-entreprise-sans-interruption',
    focusKeyword: "déménagement d'entreprise",
    title: "Déménagement d'entreprise : réussir sans interrompre l'activité",
    metaTitle: "Déménagement d'entreprise : guide sans interruption",
    metaDescription:
      "Réussir le déménagement d'entreprise sans perdre en productivité : planning, matériel informatique, équipe dédiée. Conseils pour vos locaux pro.",
    excerpt:
      "Continuité de service, sécurité des données, planning serré : le déménagement d'entreprise obéit à ses propres règles. Voici comment l'organiser.",
    coverImage: 'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    category: 'Pro',
    tags: ['Bureaux', 'Entreprises', 'IT'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-07-23T08:00:00.000Z',
    updatedAt: '2026-07-23T08:00:00.000Z',
    content: `
<p>Un <strong>déménagement d'entreprise</strong> n'a rien à voir avec un déménagement de particulier. L'enjeu n'est pas seulement de transporter du mobilier : c'est de redémarrer l'activité le plus vite possible, sans perdre une donnée ni un client.</p>

<h2>Planifier le déménagement d'entreprise 2 à 3 mois avant</h2>
<p>Plus la structure est grande, plus l'anticipation est décisive. Idéalement, lancez le projet 2 à 3 mois en amont :</p>
<ul>
  <li>Visite technique des locaux de départ et d'arrivée</li>
  <li>Inventaire des postes, du mobilier et du matériel informatique</li>
  <li>Désignation d'un référent interne unique</li>
  <li>Planning des opérations, souvent sur un week-end</li>
</ul>

<h2>Intervenir le week-end ou la nuit</h2>
<p>Démonter le vendredi soir et remonter le dimanche permet un redémarrage le lundi matin, sans heure de production perdue. Pour les grands volumes, le travail de nuit est aussi une option.</p>

<h2>Sécuriser le matériel informatique</h2>
<p>Serveurs, postes, imprimantes : chaque équipement est emballé individuellement, étiqueté et transporté dans des caisses dédiées. Prévoyez une sauvegarde complète des données avant le jour J, par précaution.</p>

<h2>Un code couleur par service</h2>
<p>Étiqueter les cartons par pôle (compta, commercial, direction, accueil) avec un code couleur permet à chaque collaborateur de retrouver ses affaires à sa place dès l'arrivée. Le gain de temps au redémarrage est énorme.</p>

<h2>Un chef de chantier dédié</h2>
<p>Sur chaque transfert professionnel, un interlocuteur unique coordonne les équipes, vous tient informé et gère les imprévus. Découvrez nos <a href="/services">prestations pour les professionnels</a> et le rôle de notre équipe dédiée.</p>

<p>Vous envisagez un déménagement d'entreprise à Besançon, Dijon ou ailleurs en Grand Est ? <a href="/contact">Parlons de votre projet</a> : nous construisons un planning sur mesure pour préserver votre activité.</p>
    `,
  },
  {
    _id: 'post-04',
    slug: 'garde-meuble-besancon',
    focusKeyword: 'garde-meuble à Besançon',
    title: 'Garde-meuble à Besançon : la solution pour stocker vos affaires',
    metaTitle: 'Garde-meuble à Besançon : stockage sécurisé',
    metaDescription:
      "Besoin d'un garde-meuble à Besançon ? Volumes, tarifs, durée et conseils pour stocker vos affaires en sécurité entre deux déménagements.",
    excerpt:
      "Vente avant achat, mutation, travaux : un garde-meuble à Besançon dépanne dans bien des situations. Volumes, prix et bonnes pratiques de stockage.",
    coverImage: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
    category: 'Déménagement',
    tags: ['Stockage', 'Garde-meuble', 'Besançon'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-08-22T08:00:00.000Z',
    updatedAt: '2026-08-22T08:00:00.000Z',
    content: `
<p>Il arrive qu'on ait besoin de stocker ses affaires entre deux logements. Le <strong>garde-meuble à Besançon</strong> est alors la solution idéale : vos biens restent au sec, en sécurité, le temps qu'il faut.</p>

<h2>Quand a-t-on besoin d'un garde-meuble à Besançon ?</h2>
<ul>
  <li>Vous vendez avant d'avoir acheté votre nouveau logement</li>
  <li>Une mutation professionnelle vous éloigne temporairement</li>
  <li>Des travaux de rénovation vous obligent à vider une pièce ou la maison</li>
  <li>Une succession demande du temps avant le partage des biens</li>
</ul>

<h2>Quel volume de stockage prévoir ?</h2>
<p>Comme pour un déménagement, tout se raisonne en mètres cubes. À titre indicatif :</p>
<ul>
  <li>Le contenu d'un studio : 5 à 10 m³</li>
  <li>Un appartement T3 : 20 à 30 m³</li>
  <li>Une maison familiale : 40 m³ et plus</li>
</ul>
<p>Mieux vaut estimer un peu large pour pouvoir circuler et accéder à vos cartons sans tout démonter.</p>

<h2>Combien coûte un garde-meuble ?</h2>
<p>Le tarif dépend du volume et de la durée. Le stockage en box ou en conteneur bois se loue au mois. Sur une courte durée, le conteneur scellé est souvent plus économique et plus sûr, car il n'est ouvert que par vous.</p>

<h2>Bien préparer ses affaires avant stockage</h2>
<ul>
  <li>Emballez dans des <a href="/blog/cartons-de-demenagement">cartons adaptés</a> et étiquetez tout</li>
  <li>Démontez les meubles volumineux pour gagner de la place</li>
  <li>Protégez matelas et canapés avec des housses contre la poussière</li>
  <li>Ne stockez ni denrées, ni produits inflammables</li>
</ul>

<p>Besoin de stocker vos affaires le temps d'un déménagement à Besançon ou dans le Doubs ? <a href="/contact">Contactez-nous</a> : nous vous conseillons sur le volume et la durée les plus adaptés à votre situation.</p>
    `,
  },
  {
    _id: 'post-05',
    slug: 'monte-meuble-demenagement',
    focusKeyword: 'monte-meuble',
    title: "Monte-meuble : quand et pourquoi y recourir pour son déménagement",
    metaTitle: "Monte-meuble : quand l'utiliser en déménagement",
    metaDescription:
      "Le monte-meuble facilite les déménagements en étage élevé. Quand le prévoir, comment ça fonctionne et combien ça coûte. Nos conseils de pros.",
    excerpt:
      "Étage élevé, escalier étroit, meuble trop large : le monte-meuble évite bien des galères. On vous explique quand il devient indispensable.",
    coverImage: 'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    category: 'Transport',
    tags: ['Monte-meuble', 'Étage', 'Matériel'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-09-24T08:00:00.000Z',
    updatedAt: '2026-09-24T08:00:00.000Z',
    content: `
<p>Vous habitez au 4e sans ascenseur, ou votre canapé ne passe pas dans la cage d'escalier ? Le <strong>monte-meuble</strong> est la réponse. Cet ascenseur extérieur sur échelle hisse vos affaires directement par la fenêtre ou le balcon.</p>

<h2>Quand le monte-meuble devient indispensable</h2>
<ul>
  <li>Logement situé à un <strong>étage élevé sans ascenseur</strong></li>
  <li>Escalier étroit, en colimaçon ou avec des paliers serrés</li>
  <li>Meubles volumineux : canapé d'angle, armoire, électroménager</li>
  <li>Objets lourds ou fragiles qu'on ne veut pas risquer dans les escaliers</li>
</ul>

<h2>Comment fonctionne un monte-meuble ?</h2>
<p>Une échelle motorisée est déployée depuis le camion jusqu'à la fenêtre ou le balcon. Une plateforme monte et descend les charges en quelques secondes. L'opération est rapide, sécurisée et ménage le dos des déménageurs comme vos murs de cage d'escalier.</p>

<h2>Combien coûte un monte-meuble ?</h2>
<p>Le monte-meuble est généralement facturé en supplément, selon la hauteur et la durée d'utilisation. Mais il fait gagner tellement de temps qu'il réduit souvent la durée totale du chantier. Sur un étage élevé, il devient vite rentable face au portage manuel.</p>

<h2>Préparer l'intervention</h2>
<p>Il faut un espace dégagé devant l'immeuble pour stabiliser l'engin, d'où l'importance d'une <a href="/blog/demenagement-besancon">autorisation de stationnement</a> en ville. Signalez aussi tout obstacle : lignes électriques, arbres, store-banne.</p>

<p>Un déménagement en étage élevé à prévoir ? <a href="/contact">Demandez un devis</a> en précisant l'étage et la présence d'ascenseur : nous vous dirons si le monte-meuble est recommandé.</p>
    `,
  },
  {
    _id: 'post-06',
    slug: 'checklist-demenagement',
    focusKeyword: 'checklist déménagement',
    title: 'Checklist déménagement : la to-do liste complète semaine par semaine',
    metaTitle: 'Checklist déménagement : la to-do liste complète',
    metaDescription:
      "La checklist déménagement complète : de 6 semaines avant le jour J jusqu'à l'installation. Démarches, cartons, accès. Suivez nos conseils de pros.",
    excerpt:
      "Pour ne rien oublier, rien ne vaut une bonne checklist déménagement. Voici la to-do liste semaine par semaine, des démarches au jour J.",
    coverImage: 'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    category: 'Conseils',
    tags: ['Organisation', 'Checklist', 'Planning'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-10-23T08:00:00.000Z',
    updatedAt: '2026-10-23T08:00:00.000Z',
    content: `
<p>Un déménagement réussi, c'est d'abord un déménagement bien organisé. Cette <strong>checklist déménagement</strong> vous accompagne semaine par semaine pour ne rien laisser au hasard.</p>

<h2>6 semaines avant : on anticipe</h2>
<ul>
  <li>Demander plusieurs devis et réserver votre déménageur</li>
  <li>Trier pièce par pièce : garder, donner, jeter</li>
  <li>Prévenir le propriétaire ou déposer le préavis</li>
  <li>Commander le matériel d'emballage</li>
</ul>

<h2>4 semaines avant : les démarches</h2>
<ul>
  <li>Changement d'adresse : impôts, CAF, banque, assurance, employeur</li>
  <li>Réexpédition du courrier auprès de La Poste</li>
  <li>Résiliation ou transfert des contrats énergie et internet</li>
  <li>Réserver l'ascenseur et l'autorisation de stationnement si besoin</li>
</ul>

<h2>2 semaines avant : on emballe</h2>
<p>Commencez par ce que vous utilisez le moins (livres, déco, vaisselle de réception). Numérotez chaque carton et notez son contenu. Pour bien choisir vos contenants, voyez notre guide des <a href="/blog/cartons-de-demenagement">cartons de déménagement</a>.</p>

<h2>La dernière semaine avant le jour J</h2>
<ul>
  <li>Vider et dégivrer le réfrigérateur et le congélateur</li>
  <li>Préparer une "box essentielle" : papiers, chargeurs, trousse de toilette, change</li>
  <li>Confirmer l'horaire et l'accès avec votre déménageur</li>
  <li>Faire le plein de la voiture, prévoir de quoi grignoter</li>
</ul>

<h2>Le jour du déménagement</h2>
<p>Relevez les compteurs, faites un dernier tour des placards, et restez disponible pour répondre aux questions de l'équipe. Le reste, laissez les professionnels s'en charger.</p>

<p>Envie d'être accompagné de A à Z ? Découvrez nos <a href="/formules">formules clé en main</a> ou <a href="/contact">demandez votre devis gratuit</a> dès maintenant.</p>
    `,
  },
  {
    _id: 'post-07',
    slug: 'demenager-un-piano',
    focusKeyword: 'déménager un piano',
    title: "Déménager un piano : comment s'y prendre sans risque",
    metaTitle: 'Déménager un piano : méthode et précautions',
    metaDescription:
      "Déménager un piano droit ou à queue demande du matériel et du savoir-faire. Précautions, monte-meuble et tarifs : tout ce qu'il faut savoir.",
    excerpt:
      "Lourd, fragile et précieux : déménager un piano ne s'improvise pas. Voici la méthode des pros pour le transporter sans une fausse note.",
    coverImage: 'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    category: 'Transport',
    tags: ['Piano', 'Objet lourd', 'Fragile'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-11-25T08:00:00.000Z',
    updatedAt: '2026-11-25T08:00:00.000Z',
    content: `
<p>Un piano peut peser de 200 à plus de 400 kg, tout en étant extrêmement sensible aux chocs et à l'humidité. <strong>Déménager un piano</strong> est donc l'une des opérations les plus délicates d'un déménagement : voici comment s'y prendre.</p>

<h2>Pourquoi déménager un piano demande des pros</h2>
<p>Au-delà du poids, c'est la répartition des masses qui rend l'exercice dangereux. Un piano mal tenu bascule en une seconde et peut blesser, ou se dérégler durablement. Les déménageurs spécialisés disposent du matériel et des gestes adaptés.</p>

<h2>Le matériel indispensable</h2>
<ul>
  <li>Sangles de portage et chariot à roulettes renforcé</li>
  <li>Couvertures épaisses et film pour protéger la caisse et le vernis</li>
  <li>Planche à piano (skid board) pour les modèles à queue</li>
  <li>Un <a href="/blog/monte-meuble-demenagement">monte-meuble</a> si l'escalier est étroit ou l'étage élevé</li>
</ul>

<h2>Les précautions avant le transport</h2>
<ul>
  <li>Fermer et verrouiller le clavier</li>
  <li>Démonter et emballer séparément les pieds et le pupitre d'un piano à queue</li>
  <li>Sécuriser le piano debout, jamais couché pour un piano droit</li>
  <li>Éviter les écarts de température qui font travailler le bois</li>
</ul>

<h2>Et après le déménagement ?</h2>
<p>Un piano a besoin de quelques semaines pour se stabiliser dans son nouvel environnement. Il est recommandé de patienter avant de le faire accorder par un professionnel.</p>

<h2>Combien coûte le déménagement d'un piano ?</h2>
<p>Le tarif dépend du modèle (droit ou à queue), de l'accès et de la distance. C'est une prestation spécifique, souvent ajoutée au devis de déménagement principal.</p>

<p>Vous devez transporter un piano ou un autre objet de valeur ? <a href="/contact">Parlez-nous de votre instrument</a> : nous prévoyons le matériel et l'équipe adaptés pour un transport sans risque.</p>
    `,
  },
  {
    _id: 'post-08',
    slug: 'debarras-maison-besancon',
    focusKeyword: 'débarras de maison',
    title: 'Débarras de maison : étapes, prix et conseils avant de se lancer',
    metaTitle: 'Débarras de maison : étapes, prix et conseils',
    metaDescription:
      "Débarras de maison après succession ou avant vente : étapes, tri, prix et cas de débarras gratuit. Intervention sous 48h en Franche-Comté.",
    excerpt:
      "Succession, vente ou départ en maison de retraite : un débarras de maison se prépare. Étapes, tri des papiers, prix et cas de débarras gratuit.",
    coverImage: 'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    category: 'Conseils',
    tags: ['Débarras', 'Succession', 'Vidage'],
    author: AUTHOR,
    published: true,
    publishedAt: '2026-12-23T08:00:00.000Z',
    updatedAt: '2026-12-23T08:00:00.000Z',
    content: `
<p>Un <strong>débarras de maison</strong> arrive souvent dans un moment chargé en émotions : succession, vente, départ en maison de retraite. Une bonne préparation aide à traverser cette étape plus sereinement.</p>

<h2>Évaluer le volume avant le débarras de maison</h2>
<p>Tout commence par une visite gratuite : elle permet d'estimer le volume total, d'identifier les pièces à conserver et de repérer les objets qui peuvent avoir de la valeur. Cette étape conditionne le prix et la durée de l'intervention.</p>

<h2>Trier en trois catégories</h2>
<ul>
  <li><strong>À conserver</strong> : mobilier, souvenirs, papiers et objets de famille</li>
  <li><strong>À donner ou revendre</strong> : meubles en bon état, électroménager fonctionnel</li>
  <li><strong>À évacuer</strong> : encombrants, déchets, mobilier abîmé, mise en déchèterie</li>
</ul>

<h2>Ne négligez pas les papiers</h2>
<p>Avant tout débarras, faites le tour des documents : factures, contrats, correspondance. Certains doivent être conservés plusieurs années. En cas de doute, les durées légales sont consultables sur <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>.</p>

<h2>Un logement rendu vide et propre</h2>
<p>L'équipe se charge du chargement, du transport et de la mise en déchèterie. À la fin, vous récupérez un logement vide, prêt à être vendu, loué ou rénové.</p>

<h2>Combien coûte un débarras de maison ?</h2>
<p>Le tarif dépend du volume, de l'accessibilité et du type de déchets. Bonne nouvelle : un débarras peut être <strong>partiellement compensé, voire gratuit</strong>, si le logement contient du mobilier ou des objets revendables. Chaque situation mérite une estimation dédiée.</p>

<p>Besoin d'un débarras à Besançon, Pontarlier, Dôle ou Lons-le-Saunier ? <a href="/contact">Demandez une visite gratuite</a> : nous intervenons généralement sous 48h.</p>
    `,
  },
  {
    _id: 'post-09',
    slug: 'demenagement-longue-distance',
    focusKeyword: 'déménagement longue distance',
    title: 'Déménagement longue distance au départ de la Franche-Comté',
    metaTitle: 'Déménagement longue distance : guide et prix',
    metaDescription:
      "Déménagement longue distance depuis la Franche-Comté : organisation, groupage, délais et prix. Nos conseils pour un transport longue distance serein.",
    excerpt:
      "Changer de région ne s'organise pas comme un déménagement local. Groupage, délais, assurance : nos conseils pour un déménagement longue distance réussi.",
    coverImage: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    category: 'Transport',
    tags: ['Longue distance', 'France', 'Transport'],
    author: AUTHOR,
    published: true,
    publishedAt: '2027-01-22T08:00:00.000Z',
    updatedAt: '2027-01-22T08:00:00.000Z',
    content: `
<p>Partir vivre à l'autre bout de la France change la donne. Un <strong>déménagement longue distance</strong> demande plus d'anticipation qu'un déménagement local : voici comment l'aborder sereinement au départ de la Franche-Comté.</p>

<h2>Anticiper davantage qu'un déménagement local</h2>
<p>Sur longue distance, les plannings se réservent plus tôt et les marges de manœuvre sont réduites le jour J. Lancez les devis 6 à 8 semaines avant, surtout en haute saison estivale.</p>

<h2>Le groupage : la solution économique</h2>
<p>Si votre volume est modeste et que vous n'êtes pas pressé, le <strong>groupage</strong> permet de partager le camion avec d'autres clients sur le même axe. Le prix baisse nettement, en échange d'une fenêtre de livraison plus large.</p>

<h2>Bien gérer les délais</h2>
<ul>
  <li>Prévoyez une "box essentielle" qui voyage avec vous, pas dans le camion</li>
  <li>Confirmez la fenêtre de livraison et un créneau d'accès à l'arrivée</li>
  <li>Anticipez le stationnement et l'autorisation de voirie côté arrivée</li>
</ul>

<h2>L'assurance, encore plus importante sur longue distance</h2>
<p>Plus la distance est longue, plus les manipulations sont nombreuses. Vérifiez le niveau de couverture proposé et déclarez les objets de valeur. Un professionnel sérieux vous explique clairement ce qui est inclus.</p>

<h2>Combien coûte un déménagement longue distance ?</h2>
<p>Le prix combine le volume et le kilométrage. Pour comprendre comment se construit un devis, consultez notre guide du <a href="/blog/prix-demenagement-2026">prix d'un déménagement</a>. Le groupage reste le levier d'économie le plus efficace.</p>

<p>Vous quittez la Franche-Comté pour une autre région ? <a href="/contact">Demandez votre devis longue distance</a> : nous organisons le transport de bout en bout.</p>
    `,
  },
  {
    _id: 'post-10',
    slug: 'cartons-de-demenagement',
    focusKeyword: 'cartons de déménagement',
    title: 'Cartons de déménagement : combien, quels types et où les trouver',
    metaTitle: 'Cartons de déménagement : types, nombre, achat',
    metaDescription:
      "Quels cartons de déménagement choisir et combien en prévoir ? Types, calcul du nombre, où les acheter ou les récupérer. Le guide matériel complet.",
    excerpt:
      "Simple, double cannelure, livres, penderie : tous les types de cartons de déménagement expliqués, avec une méthode pour estimer le bon nombre.",
    coverImage: 'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    category: 'Déménagement',
    tags: ['Cartons', 'Emballage', 'Matériel'],
    author: AUTHOR,
    published: true,
    publishedAt: '2027-02-24T08:00:00.000Z',
    updatedAt: '2027-02-24T08:00:00.000Z',
    content: `
<p>Un carton mal choisi, c'est un carton qui lâche dans l'escalier. Bien s'équiper en <strong>cartons de déménagement</strong> est la base d'un emballage réussi. Tour d'horizon des types, du nombre à prévoir et des bons plans.</p>

<h2>Les différents types de cartons de déménagement</h2>
<ul>
  <li><strong>Carton simple cannelure</strong> : le standard, pour le linge, les vêtements et les objets légers (jusqu'à 10 kg)</li>
  <li><strong>Carton double cannelure</strong> : renforcé, indispensable pour la vaisselle, les livres et les objets lourds (jusqu'à 25-30 kg)</li>
  <li><strong>Carton "livres"</strong> : petit format pour éviter les caisses trop lourdes à porter</li>
  <li><strong>Carton barrel</strong> : pour les objets longs (lampadaires, petits tapis)</li>
  <li><strong>Penderie</strong> : carton vertical avec barre, pour suspendre les vêtements sur cintres</li>
</ul>

<h2>Combien de cartons prévoir ?</h2>
<p>Une estimation simple : comptez environ 10 à 15 cartons pour une personne seule, 20 à 30 pour un couple, et 40 à 60 et plus pour une famille. Mieux vaut en prévoir quelques-uns d'avance que d'en manquer la veille.</p>

<h2>Où trouver ses cartons ?</h2>
<ul>
  <li><strong>Achat neuf</strong> : la qualité est garantie, idéal pour les objets fragiles</li>
  <li><strong>Récupération</strong> : commerces, pharmacies ou plateformes de dons</li>
  <li><strong>Fournis par le déménageur</strong> : avec les formules clé en main, le matériel est inclus</li>
</ul>

<h2>Le matériel à ne pas oublier</h2>
<p>Au-delà des cartons : papier bulle, papier kraft, housses de matelas, scotch large marron et marqueur permanent. De quoi protéger et étiqueter sans improviser. Retrouvez tout l'enchaînement dans notre <a href="/blog/checklist-demenagement">checklist déménagement</a>.</p>

<p>Vous préférez confier l'emballage à des pros ? Nos <a href="/formules">formules avec emballage</a> incluent le matériel et le savoir-faire. <a href="/contact">Demandez votre devis gratuit</a>.</p>
    `,
  },
]

/** Un article est visible publiquement si il est publié ET que sa date de mise en ligne est passée. */
export function isPostVisible(post: DemoPost, now: Date = new Date()): boolean {
  return post.published && new Date(post.publishedAt).getTime() <= now.getTime()
}

/** Articles actuellement visibles sur le site, du plus récent au plus ancien. */
export function getVisiblePosts(now: Date = new Date()): DemoPost[] {
  return DEMO_POSTS.filter((p) => isPostVisible(p, now)).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/** Tous les articles (visibles + programmés), du plus récent au plus ancien — usage admin. */
export function getAllPosts(): DemoPost[] {
  return [...DEMO_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): DemoPost | undefined {
  return DEMO_POSTS.find((p) => p.slug === slug)
}
