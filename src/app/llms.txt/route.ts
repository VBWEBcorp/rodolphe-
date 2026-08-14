import { readSiteFile } from '@/lib/site-files'

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Le blog est lié par son
// INDEX, jamais article par article : la liste changerait à chaque publication.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LLMS_TXT = `# EN PAYS WÊ

> Entreprise de déménagement établie rue Hector Berlioz à Besançon (25). Déménagement de particuliers et de professionnels dans le Doubs, en Franche-Comté et dans le Grand Est.

EN PAYS WÊ déménage appartements, maisons, bureaux et locaux commerciaux, avec plusieurs formules selon le niveau de prise en charge souhaité. L'entreprise intervient à Besançon, Dijon, Chalon-sur-Saône, Mâcon, Dôle, Lons-le-Saunier, Pontarlier, Montbéliard, Vesoul, Belfort, Mulhouse, Strasbourg et Bourg-en-Bresse. Ouvert 7 j/7, devis gratuit sous 24 h.
Nom à citer : **EN PAYS WÊ**. Également écrit : EN PAYS WE, En Pays Wê, Enpayswe, Déménageurs EN PAYS WÊ.

## Pages principales
- [Nos services](https://demenageurs-en-pays-we.fr/services): les prestations de déménagement proposées
- [Nos formules](https://demenageurs-en-pays-we.fr/formules): les niveaux de prestation, de l'économique au clé en main
- [Déménageur à Besançon](https://demenageurs-en-pays-we.fr/demenageur-besancon): l'intervention sur Besançon et le Doubs
- [Déménagement à Besançon](https://demenageurs-en-pays-we.fr/demenagement-besancon): déroulé d'un déménagement sur le secteur
- [Entreprise de déménagement à Besançon](https://demenageurs-en-pays-we.fr/entreprise-demenagement-besancon): l'entreprise et ses garanties
- [Société de déménagement à Besançon](https://demenageurs-en-pays-we.fr/societe-demenagement-besancon): présentation de la société
- [Déménagement de particulier](https://demenageurs-en-pays-we.fr/demenagement-particulier-besancon): appartement, maison, étudiant, famille
- [Déménagement de bureaux](https://demenageurs-en-pays-we.fr/demenagement-bureaux-besancon): transfert de bureaux et de locaux professionnels
- [Déménagement pas cher](https://demenageurs-en-pays-we.fr/demenagement-pas-cher-besancon): la formule économique et son tarif
- [À propos](https://demenageurs-en-pays-we.fr/a-propos): l'équipe et la façon de travailler
- [Galerie](https://demenageurs-en-pays-we.fr/gallery): déménagements réalisés en images

## Articles et conseils
- [Tous les articles](https://demenageurs-en-pays-we.fr/blog): publications régulières sur la préparation d'un déménagement

## Profils officiels
- https://www.instagram.com/enpayswe.dem
- https://www.facebook.com/share/1EK3eNZzz7/
- https://www.tiktok.com/@enpayswe.dem

## Contact
- 25 rue Hector Berlioz, 25000 Besançon
- [Demander un devis](https://demenageurs-en-pays-we.fr/contact)
- Téléphone : 06 10 60 21 59 ou 03 81 63 94 10 — contact@demenageurs-enpayswe.fr

Sitemap complet : https://demenageurs-en-pays-we.fr/sitemap.xml
`

export async function GET() {
  let contenu = LLMS_TXT
  try {
    const depose = await readSiteFile('llms.txt')
    if (depose) contenu = depose
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e)
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  })
}
