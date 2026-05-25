# Stratégie de blog — EN PAYS WÊ

Blog SEO « déménagement » avec **publication automatique d'un article par mois**, sans cron ni intervention manuelle.

## Principe

- **10 articles** sont déjà rédigés et stockés en base (MongoDB).
- Chaque article a une **date de mise en ligne** (`publishedAt`).
- Le site n'affiche **que les articles dont la date est passée**. Un article reste invisible (statut « Programmé ») tant que sa date n'est pas atteinte, puis devient visible automatiquement.
- Au fil des mois, un nouvel article apparaît **entre le 22 et le 25**.

Aucune tâche planifiée n'est nécessaire : la « publication » est simplement un filtre par date appliqué à chaque requête. Les pages utilisent l'ISR (`revalidate = 3600`) pour se régénérer dans l'heure suivant la date de publication.

## Calendrier de publication

| Date | Article | Mot-clé principal | Catégorie |
|------|---------|-------------------|-----------|
| 22/05/2026 | Prix d'un déménagement en 2026 | prix d'un déménagement | Déménagement |
| 24/06/2026 | Déménagement à Besançon | déménagement à Besançon | Conseils |
| 23/07/2026 | Déménagement d'entreprise | déménagement d'entreprise | Pro |
| 22/08/2026 | Garde-meuble à Besançon | garde-meuble à Besançon | Déménagement |
| 24/09/2026 | Monte-meuble | monte-meuble | Transport |
| 23/10/2026 | Checklist déménagement | checklist déménagement | Conseils |
| 25/11/2026 | Déménager un piano | déménager un piano | Transport |
| 23/12/2026 | Débarras de maison | débarras de maison | Conseils |
| 22/01/2027 | Déménagement longue distance | déménagement longue distance | Transport |
| 24/02/2027 | Cartons de déménagement | cartons de déménagement | Déménagement |

## Règles SEO appliquées (RankMath)

Chaque article respecte :

- **Mot-clé principal** présent dans le titre, l'URL (slug), le premier paragraphe, au moins un sous-titre `H2` et la méta-description.
- **Meta title** court (≈ 45-55 caractères).
- **Meta description** unique, ≈ 150 caractères, avec le mot-clé et un appel à l'action.
- **Structure** : un seul `H1` (le titre), hiérarchie `H2`/`H3`, listes à puces, paragraphes courts.
- **Maillage interne** : liens vers `/contact`, `/formules`, `/services` et vers des articles déjà publiés (jamais vers un article encore programmé, pour éviter les liens morts).
- **Lien externe** d'autorité quand pertinent (ex. service-public.fr).
- **Image de couverture** avec `alt` = titre.
- **Données structurées** `BlogPosting` (JSON-LD) générées côté serveur.

## Indexation Google

- Les articles publiés sont automatiquement ajoutés au **sitemap** (`/sitemap.xml`) avec leur date de dernière modification.
- Le sitemap est recalculé chaque heure : un nouvel article y entre dès sa mise en ligne.
- Métadonnées et JSON-LD rendus côté serveur → lus dès le premier passage de Googlebot.

## Où ça vit dans le code

| Élément | Fichier |
|---------|---------|
| Contenu source des 10 articles | `src/lib/demo-posts.ts` |
| Seed en base de données | `POST /api/blog/seed` (`src/app/api/blog/seed/route.ts`) |
| Liste publique / admin | `src/app/api/blog/posts/route.ts` |
| Article par slug | `src/app/api/blog/posts/[slug]/route.ts` |
| Page liste | `src/app/blog/` |
| Page article (SEO + JSON-LD) | `src/app/blog/[slug]/page.tsx` |
| Sitemap | `src/app/sitemap.ts` |
| Administration | `src/app/admin/blog/` |

## Gérer le blog au quotidien

- **Espace admin** (`/admin/blog`) : les 10 articles apparaissent avec leur statut **En ligne** ou **Programmé** (avec la date prévue). On peut filtrer par « En ligne » / « Programmés ».
- **Modifier / publier en avance** : ouvrir l'article dans l'admin, ajuster le contenu ou la date, enregistrer.
- **Re-seeder** (réinitialiser les 10 articles) : `POST /api/blog/seed` avec un token admin. ⚠️ Cette action **supprime puis réinsère** tous les articles — à n'utiliser que pour repartir de zéro.

## Pré-requis technique

- Variable d'environnement `MONGODB_URI` configurée (local : `.env.local` ; production : variables Vercel).
- Base de données MongoDB Atlas (collection `blogposts`).
