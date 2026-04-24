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
  publishedAt: string
  metaTitle?: string
  metaDescription?: string
}

export const DEMO_POSTS: DemoPost[] = [
  {
    _id: 'post-01',
    slug: 'reussir-son-demenagement-a-besancon',
    title: 'Réussir son déménagement à Besançon : nos 10 conseils',
    excerpt:
      "Anticiper, trier, emballer, réserver la bonne équipe : tous nos conseils d'experts pour un déménagement sans stress à Besançon.",
    coverImage: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    category: 'Conseils',
    tags: ['Besançon', 'Particuliers', 'Organisation'],
    author: 'Équipe EN PAYS WÊ',
    published: true,
    publishedAt: '2026-03-18T09:00:00.000Z',
    content: `
<p>Un déménagement bien préparé, c'est 80 % du stress en moins le jour J. Voici nos dix conseils éprouvés sur des centaines d'interventions à Besançon et dans le Doubs.</p>

<h2>1. Anticipez au moins 4 à 6 semaines</h2>
<p>Commencer tôt, c'est se donner le temps de trier, comparer les devis et éviter les prestataires surchargés en fin de mois. Les créneaux de fin juin, juillet et août sont les plus tendus.</p>

<h2>2. Triez vraiment avant d'emballer</h2>
<p>Inutile de transporter ce dont vous ne vous servez plus. Séparez en trois tas : <strong>je garde</strong>, <strong>je donne / vends</strong>, <strong>je jette</strong>. Ce tri réduit souvent le volume de 20 à 30 %.</p>

<h2>3. Faites un inventaire par pièce</h2>
<p>Numérotez les cartons et notez leur contenu sur une feuille récapitulative. Au déballage, vous gagnerez un temps précieux pour retrouver l'essentiel (chargeur, cafetière, brosse à dents…).</p>

<h2>4. Prévoyez du matériel de qualité</h2>
<ul>
  <li>Cartons double cannelure pour les objets lourds (livres, vaisselle)</li>
  <li>Papier bulle et papier kraft pour les fragiles</li>
  <li>Housses pour les matelas et canapés</li>
  <li>Scotch large et marqueur permanent</li>
</ul>

<h2>5. Protégez les meubles de valeur</h2>
<p>Coins renforcés, housses, film étirable : chaque pièce fragile mérite une protection spécifique. Pour les pianos et objets très lourds, faites appel à des professionnels équipés d'un monte-meubles.</p>

<h2>6. Pensez aux démarches administratives</h2>
<p>Prévenez votre assurance, la CAF, Pôle Emploi, les impôts, la Poste (réexpédition du courrier), votre fournisseur d'énergie. La plupart se gèrent en ligne en moins de 10 minutes par démarche.</p>

<h2>7. Préparez une « box essentielle » pour le jour J</h2>
<p>Un carton facilement identifiable avec : vêtements pour 2 jours, trousse de toilette, médicaments, papiers importants, chargeurs, une bouteille d'eau et de quoi grignoter.</p>

<h2>8. Coordonnez l'accès aux logements</h2>
<p>Stationnement du camion, autorisation de voirie si nécessaire, ascenseur réservé, horaires d'accès : ces détails peuvent coûter cher s'ils sont oubliés.</p>

<h2>9. Choisissez une entreprise transparente</h2>
<p>Méfiez-vous des devis sans visite ou bien trop bas. Un professionnel sérieux vous pose des questions, évalue le volume et vous explique ce qui est inclus (emballage, démontage, assurance).</p>

<h2>10. Gardez votre calme le jour du déménagement</h2>
<p>Vous avez bien préparé, faites confiance à votre équipe. Restez disponible pour répondre aux questions mais laissez les déménageurs faire leur métier. C'est pour ça que vous les avez appelés.</p>

<blockquote>Un déménagement réussi, c'est un déménagement où vous arrivez détendu dans votre nouveau logement, et où tout est arrivé en bon état.</blockquote>

<p>Vous préparez votre déménagement à Besançon ou dans le Doubs ? Contactez-nous pour un devis gratuit : nous étudions votre projet et vous proposons la formule la mieux adaptée.</p>
    `,
  },
  {
    _id: 'post-02',
    slug: 'transfert-de-bureaux-sans-interrompre-activite',
    title: 'Transfert de bureaux : comment ne pas interrompre votre activité',
    excerpt:
      "Réussir le déménagement de vos locaux professionnels sans perdre une heure de productivité : planning, matériel, équipe dédiée.",
    coverImage: 'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    category: 'Pro',
    tags: ['Bureaux', 'Entreprises', 'Organisation'],
    author: 'Équipe EN PAYS WÊ',
    published: true,
    publishedAt: '2026-02-28T09:00:00.000Z',
    content: `
<p>Déménager des bureaux, ce n'est pas déménager une maison. Les enjeux sont différents : continuité de service, sécurité des données, matériel informatique, planning serré.</p>

<h2>Planifier en amont, au moins 2 mois avant</h2>
<p>Un transfert de bureaux réussi commence longtemps avant le camion. Dans l'idéal, 2 à 3 mois avant la date prévue :</p>
<ul>
  <li>Visite technique des locaux de départ et d'arrivée</li>
  <li>Cartographie des postes, du mobilier et du matériel IT</li>
  <li>Désignation d'un référent côté entreprise</li>
  <li>Planning des opérations, idéalement sur un week-end long</li>
</ul>

<h2>Le week-end ou la nuit : pourquoi c'est la meilleure option</h2>
<p>Intervenir sur un week-end permet de démonter vendredi soir et de remonter dimanche, pour un redémarrage lundi matin sans perte de temps. Pour les grosses structures, nous travaillons également de nuit.</p>

<h2>Sécuriser le matériel informatique</h2>
<p>Serveurs, postes de travail, imprimantes, disques durs : chaque équipement est emballé individuellement, étiqueté et transporté dans des caisses dédiées. Vos données restent sous votre contrôle.</p>

<h2>Cartons et étiquettes par pôle</h2>
<p>Nous utilisons un code couleur par service (compta, commercial, direction, accueil…). Chaque collaborateur retrouve ses affaires à sa place dès le lundi matin.</p>

<h2>Un chef de chantier dédié</h2>
<p>Sur chaque transfert de bureaux, un chef de chantier coordonne les équipes, vous tient informé et règle les imprévus. Un seul interlocuteur, pas de dispersion.</p>

<p>Vous envisagez un transfert de bureaux à Besançon, Dijon, Strasbourg ou ailleurs en Grand Est ? Nous intervenons sur toute la région avec une équipe dédiée aux déménagements professionnels.</p>
    `,
  },
  {
    _id: 'post-03',
    slug: 'que-faire-avant-un-debarras-de-maison',
    title: 'Débarras de maison : ce qu\'il faut savoir avant de se lancer',
    excerpt:
      "Succession, vente, travaux : le débarras complet d'une maison se prépare. Voici les étapes et nos conseils pour éviter les pièges.",
    coverImage: 'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    category: 'Conseils',
    tags: ['Débarras', 'Succession', 'Vidage'],
    author: 'Équipe EN PAYS WÊ',
    published: true,
    publishedAt: '2026-02-10T09:00:00.000Z',
    content: `
<p>Un débarras complet de maison arrive souvent dans un moment émotionnellement chargé : succession, vente, départ en maison de retraite. Une bonne préparation permet de traverser cette étape plus sereinement.</p>

<h2>Évaluer le volume et le contenu</h2>
<p>Avant toute intervention, une visite gratuite permet d'estimer le volume total, d'identifier les pièces à conserver et de repérer les objets qui peuvent avoir de la valeur.</p>

<h2>Trier en trois catégories</h2>
<ul>
  <li><strong>À conserver</strong> : mobilier, souvenirs, papiers importants, objets familiaux</li>
  <li><strong>À donner ou revendre</strong> : mobilier en bon état, électroménager fonctionnel</li>
  <li><strong>À évacuer</strong> : encombrants, déchets, mobilier abîmé, mise en déchèterie</li>
</ul>

<h2>L'importance des papiers</h2>
<p>Avant un débarras, nous recommandons toujours de faire le tour des papiers (factures, contrats, correspondance). Certains documents doivent être conservés plusieurs années, d'autres peuvent être détruits.</p>

<h2>Un logement rendu propre et vide</h2>
<p>Notre équipe se charge du chargement, du transport et de la mise en déchèterie. À la fin de l'intervention, vous récupérez un logement vide, prêt à être vendu, loué ou rénové.</p>

<h2>Combien ça coûte ?</h2>
<p>Le tarif dépend du volume, de l'accessibilité (étage, parking), et du type de déchets. Certains débarras peuvent être gratuits ou partiellement compensés si la maison contient du mobilier ou des objets revendables. Chaque situation mérite une estimation dédiée.</p>

<p>Besoin d'un devis pour un débarras à Besançon, Pontarlier, Dôle ou Lons-le-Saunier ? Nous intervenons sous 48h pour une visite gratuite.</p>
    `,
  },
  {
    _id: 'post-04',
    slug: 'bien-choisir-ses-cartons-de-demenagement',
    title: 'Bien choisir ses cartons : la check-list de l\'emballage',
    excerpt:
      'Simple, double cannelure, livres, barrel, penderie : tous les types de cartons expliqués pour protéger efficacement vos affaires.',
    coverImage: 'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    category: 'Déménagement',
    tags: ['Emballage', 'Cartons', 'Matériel'],
    author: 'Équipe EN PAYS WÊ',
    published: true,
    publishedAt: '2026-01-22T09:00:00.000Z',
    content: `
<p>Un carton mal choisi, c'est un carton qui lâche dans l'escalier. Petit tour d'horizon des différents types de cartons et à quoi ils servent.</p>

<h2>Carton standard simple cannelure</h2>
<p>Le plus courant. Parfait pour : vêtements, linge, jouets, objets légers et peu fragiles. Capacité jusqu'à 10 kg environ.</p>

<h2>Carton double cannelure</h2>
<p>Plus épais, plus résistant. Obligatoire pour : vaisselle, livres, bibelots, objets lourds. Capacité jusqu'à 25-30 kg sans risque.</p>

<h2>Carton « livres »</h2>
<p>Plus petit format spécialement conçu pour éviter de transformer la caisse en haltère. Limitez-vous à un carton plein de livres par étage.</p>

<h2>Carton barrel (rond)</h2>
<p>Utile pour les objets longs et fins : lampadaires, ustensiles, petits tapis.</p>

<h2>Penderie</h2>
<p>Carton vertical avec une barre : on y suspend les vêtements directement sur cintres. Gain de temps énorme au déballage, plus de chemises froissées.</p>

<h2>Ce qu'il ne faut pas oublier</h2>
<ul>
  <li>Papier bulle pour la vaisselle et les cadres</li>
  <li>Papier kraft pour caler à l'intérieur</li>
  <li>Housses matelas et canapé (résistantes à l'humidité)</li>
  <li>Scotch large marron (pas le scotch de bureau !)</li>
  <li>Marqueur permanent pour étiqueter</li>
</ul>

<h2>Et si vous préférez nous confier l'emballage ?</h2>
<p>Nos équipes réalisent l'emballage complet de votre logement : matériel fourni, emballage soigné, gain de temps considérable. Sur demande lors du devis.</p>
    `,
  },
]
