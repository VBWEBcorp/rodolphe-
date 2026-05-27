'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'

const defaults = {
  hero: {
    eyebrow: 'Déménageurs en Franche-Comté & Grand Est',
    title: 'Votre déménagement rapide et soigné',
    description:
      'EN PAYS WÊ accompagne particuliers et professionnels à Besançon, dans le Doubs et partout en Franche-Comté & Grand Est. Un service fiable, rapide et sécurisé, du premier carton au dernier meuble installé.',
    images: [
      'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
      'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
      'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
      'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
      'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
      'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    ],
  },
  story: {
    eyebrow: 'Qui sommes-nous',
    title: 'Un déménagement sans stress',
    paragraph1:
      "EN PAYS WÊ est une entreprise bisontine spécialisée dans le déménagement et le transport. Nous accompagnons particuliers et professionnels avec sérieux, efficacité et soin. Chaque projet est préparé avec attention pour garantir la sécurité de vos biens.",
    paragraph2:
      "Notre équipe expérimentée intervient à Besançon, dans tout le Doubs et partout en Franche-Comté & Grand Est. Notre objectif : rendre votre déménagement simple, organisé et serein, du premier échange jusqu'à la dernière caisse installée.",
    image: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  },
  cta: {
    eyebrow: 'Prêt à déménager ?',
    title: 'Votre devis gratuit en 24h',
    description:
      'Décrivez-nous votre projet en quelques mots : volume, adresses, date souhaitée. Nous vous rappelons rapidement avec un devis clair et sans engagement.',
    button: 'Demander mon devis',
  },
}

export default function AdminHomePage() {
  return (
    <PageEditor pageId="home" title="Page d'accueil" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="Hero">
            <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
            <FieldEditor label="Titre principal" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
            <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Images du slider</p>
              {content.hero?.images?.map((img: string, i: number) => (
                <ImageField
                  key={i}
                  label={`Image ${i + 1}`}
                  value={img}
                  onChange={(v) => {
                    const newImages = [...content.hero.images]
                    newImages[i] = v
                    update('hero.images', newImages)
                  }}
                />
              ))}
            </div>
          </SectionEditor>

          <SectionEditor title="Notre histoire">
            <FieldEditor label="Accroche" value={content.story?.eyebrow} onChange={(v) => update('story.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.story?.title} onChange={(v) => update('story.title', v)} />
            <FieldEditor label="Paragraphe 1" value={content.story?.paragraph1} onChange={(v) => update('story.paragraph1', v)} type="textarea" />
            <FieldEditor label="Paragraphe 2" value={content.story?.paragraph2} onChange={(v) => update('story.paragraph2', v)} type="textarea" />
            <ImageField label="Image" value={content.story?.image} onChange={(v) => update('story.image', v)} />
          </SectionEditor>

          <SectionEditor title="Appel à l'action (CTA)">
            <FieldEditor label="Accroche" value={content.cta?.eyebrow} onChange={(v) => update('cta.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.cta?.title} onChange={(v) => update('cta.title', v)} />
            <FieldEditor label="Description" value={content.cta?.description} onChange={(v) => update('cta.description', v)} type="textarea" />
            <FieldEditor label="Bouton" value={content.cta?.button} onChange={(v) => update('cta.button', v)} />
          </SectionEditor>
        </>
      )}
    </PageEditor>
  )
}
