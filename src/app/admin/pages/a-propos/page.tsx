'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'

const defaults = {
  hero: {
    eyebrow: 'À propos',
    title: 'Le déménagement avec le sourire',
    description:
      "EN PAYS WÊ est une entreprise bisontine spécialisée dans le déménagement et le transport. Nous intervenons à Besançon, dans tout le Doubs et partout en Franche-Comté & Grand Est, auprès des particuliers comme des professionnels.",
    image: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
  },
  values: [
    { title: 'Proximité', description: 'Un interlocuteur dédié, à votre écoute, qui suit votre dossier du devis à la dernière caisse livrée.' },
    { title: 'Soin & sécurité', description: 'Matériel professionnel, emballage adapté, manutention soignée : vos biens voyagent en toute sécurité.' },
    { title: 'Ponctualité', description: 'Horaires tenus, délais respectés. Votre temps est précieux, on le sait et on le respecte.' },
  ],
  gallery: [
    'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
    'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  ],
}

export default function AdminAboutPage() {
  return (
    <PageEditor pageId="about" title="Page À propos" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="Hero">
            <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
            <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
            <ImageField label="Image" value={content.hero?.image} onChange={(v) => update('hero.image', v)} />
          </SectionEditor>

          <SectionEditor title="Valeurs">
            {content.values?.map((val: any, i: number) => (
              <div key={i} className="p-4 border border-border/30 rounded-lg space-y-3">
                <FieldEditor label={`Valeur ${i + 1} - Titre`} value={val.title} onChange={(v) => {
                  const newValues = [...content.values]
                  newValues[i] = { ...newValues[i], title: v }
                  update('values', newValues)
                }} />
                <FieldEditor label="Description" value={val.description} onChange={(v) => {
                  const newValues = [...content.values]
                  newValues[i] = { ...newValues[i], description: v }
                  update('values', newValues)
                }} type="textarea" />
              </div>
            ))}
          </SectionEditor>

          <SectionEditor title="Galerie photos">
            {content.gallery?.map((img: string, i: number) => (
              <ImageField
                key={i}
                label={`Image ${i + 1}`}
                value={img}
                onChange={(v) => {
                  const newGallery = [...content.gallery]
                  newGallery[i] = v
                  update('gallery', newGallery)
                }}
              />
            ))}
          </SectionEditor>
        </>
      )}
    </PageEditor>
  )
}
