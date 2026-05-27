'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor } from '@/components/admin/field-editor'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'

const defaults = {
  eyebrow: 'Témoignages',
  title: 'Ils nous ont confié leur déménagement',
  description: 'Particuliers et professionnels partout en Franche-Comté et dans le Grand Est : la confiance se mesure aux retours de nos clients.',
  testimonials: [
    { name: 'Sid Malle', company: 'Déménagement · Avril 2026', text: "Très bonne expérience ! L'équipe a été ponctuelle, dynamique et très professionnelle. Ils ont pris soin de tous mes biens et ont travaillé rapidement tout en restant efficaces pour les déménageurs ENPAYSWE", stars: 5 },
    { name: 'Adama Konate', company: 'Déménagement · Mars 2026', text: 'Très satisfait du service ! Déménagement réalisé rapidement et avec beaucoup de professionnalisme. Équipe sérieuse, ponctuelle et soigneuse. Je recommande fortement !', stars: 5 },
    { name: 'Mamadou Tounkara', company: 'Déménagement · Mars 2026', text: "Un grand merci pour ce déménagement ! Équipe très sympa, efficace et à l'écoute. Tout s'est passé parfaitement, sans stress. Je referai appel à vous sans hésiter !", stars: 5 },
    { name: 'Aboudramane Bamba', company: 'Déménagement · Mars 2026', text: "Très bonne expérience ! L'équipe a été ponctuelle, dynamique et très professionnelle. Ils ont pris soin de tous mes biens et ont travaillé rapidement tout en restant efficaces. Le déménagement s'est déroulé sans aucun souci. Je recommande vivement !", stars: 5 },
    { name: 'Fatoumata Kini', company: 'Déménagement · Mars 2026', text: 'Bonne entreprise déménagement. En pays wê est une bonne entreprise déménagement. Mes objets sont biens protéger et je suis contente.', stars: 5 },
    { name: 'Souleymane Sanogo', company: 'Déménagement · Mars 2026', text: 'Jeune entrepreneur sympathique et professionnel et très gentil. Mes biens sont très bien protégés. Service idéal.', stars: 5 },
  ],
}

export default function AdminTestimonialsPage() {
  return (
    <PageEditor pageId="testimonials" title="Témoignages" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="En-tête">
            <FieldEditor label="Accroche" value={content.eyebrow} onChange={(v) => update('eyebrow', v)} />
            <FieldEditor label="Titre" value={content.title} onChange={(v) => update('title', v)} />
            <FieldEditor label="Description" value={content.description} onChange={(v) => update('description', v)} type="textarea" />
          </SectionEditor>

          <SectionEditor title="Liste des témoignages">
            {content.testimonials?.map((t: any, i: number) => (
              <div key={i} className="p-4 border border-border/30 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Témoignage {i + 1}</span>
                  <button
                    onClick={() => {
                      const items = content.testimonials.filter((_: any, j: number) => j !== i)
                      update('testimonials', items)
                    }}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <FieldEditor label="Nom" value={t.name} onChange={(v) => {
                    const items = [...content.testimonials]
                    items[i] = { ...items[i], name: v }
                    update('testimonials', items)
                  }} />
                  <FieldEditor label="Entreprise" value={t.company} onChange={(v) => {
                    const items = [...content.testimonials]
                    items[i] = { ...items[i], company: v }
                    update('testimonials', items)
                  }} />
                </div>
                <FieldEditor label="Témoignage" value={t.text} onChange={(v) => {
                  const items = [...content.testimonials]
                  items[i] = { ...items[i], text: v }
                  update('testimonials', items)
                }} type="textarea" />
                <FieldEditor label="Étoiles (1-5)" value={String(t.stars)} onChange={(v) => {
                  const items = [...content.testimonials]
                  items[i] = { ...items[i], stars: Math.min(5, Math.max(1, parseInt(v) || 5)) }
                  update('testimonials', items)
                }} />
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => {
                update('testimonials', [...(content.testimonials || []), { name: '', company: '', text: '', stars: 5 }])
              }}
            >
              <Plus className="size-4" />
              Ajouter un témoignage
            </Button>
          </SectionEditor>
        </>
      )}
    </PageEditor>
  )
}
