'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'

const defaults = {
  hero: {
    eyebrow: 'Nos services',
    title: 'Des prestations complètes, du carton au camion',
    description:
      "Particuliers ou professionnels, chaque déménagement est différent. Nous adaptons nos équipes, notre matériel et nos camions à votre besoin, pour un service fiable, rapide et soigné.",
    image: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  },
  services: [
    {
      title: "Déménagement d'appartements & maisons",
      description:
        'Prise en charge complète : emballage, démontage, chargement, transport, remontage. Du studio au grand volume.',
      points: ['Démontage & remontage inclus', 'Emballage sur demande', 'Toutes distances'],
    },
    {
      title: 'Livraison de meubles & électroménager',
      description:
        "Livraison soignée à domicile, avec mise en place et installation si besoin. Courtes et longues distances.",
      points: ['Mise en place à domicile', 'Étage & accès difficile', 'Rendez-vous sur créneau'],
    },
    {
      title: 'Transport de marchandises',
      description:
        "Transport professionnel de marchandises, matériel ou objets volumineux, avec camion adapté au volume à déplacer.",
      points: ['Véhicule adapté au volume', 'Courte et longue distance', 'Sanglage & calage pro'],
    },
    {
      title: 'Transfert de bureaux & locaux pro',
      description:
        'Organisation complète : mobilier, matériel informatique, archives. Planning optimisé pour limiter les interruptions.',
      points: ['Intervention weekend possible', 'Matériel informatique sécurisé', 'Plan de reprise rapide'],
    },
    {
      title: "Vidage d'appartements & maisons",
      description:
        "Débarras complet avec tri, enlèvement et mise en déchèterie. Pratique pour successions, ventes ou travaux.",
      points: ['Tri & évacuation', 'Mise en déchèterie', 'Logement rendu vide & propre'],
    },
    {
      title: 'Vidage de caves & garages',
      description:
        "On débarrasse, charge et évacue en déchèterie tous les encombrants. Vous récupérez un espace propre et vide.",
      points: ['Encombrants évacués', 'Tri sur place possible', 'Intervention rapide'],
    },
    {
      title: 'Emballage & protection',
      description:
        "Cartons, scotch, papier bulle, housses : matériel adapté à vos objets fragiles. Emballage réalisé par nos équipes sur demande.",
      points: ['Matériel fourni', 'Objets fragiles protégés', 'Prestation optionnelle'],
    },
    {
      title: 'Monte-meubles & gros volumes',
      description:
        "Pour les étages difficiles d'accès ou les objets volumineux, nous mobilisons les équipements et équipes nécessaires.",
      points: ['Monte-meubles', 'Gros électroménager', 'Pianos & coffres-forts'],
    },
  ],
}

export default function AdminServicesPage() {
  return (
    <PageEditor pageId="services" title="Page Services" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="Hero">
            <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
            <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
            <ImageField label="Image" value={content.hero?.image} onChange={(v) => update('hero.image', v)} />
          </SectionEditor>

          <SectionEditor title="Liste des services">
            {content.services?.map((svc: any, i: number) => (
              <div key={i} className="p-4 border border-border/30 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Service {i + 1}</span>
                  <button
                    onClick={() => {
                      const newServices = content.services.filter((_: any, j: number) => j !== i)
                      update('services', newServices)
                    }}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <FieldEditor label="Titre" value={svc.title} onChange={(v) => {
                  const newServices = [...content.services]
                  newServices[i] = { ...newServices[i], title: v }
                  update('services', newServices)
                }} />
                <FieldEditor label="Description" value={svc.description} onChange={(v) => {
                  const newServices = [...content.services]
                  newServices[i] = { ...newServices[i], description: v }
                  update('services', newServices)
                }} type="textarea" />
                <FieldEditor
                  label="Points clés (un par ligne)"
                  value={(svc.points || []).join('\n')}
                  onChange={(v) => {
                    const newServices = [...content.services]
                    newServices[i] = {
                      ...newServices[i],
                      points: v.split('\n').map((p) => p.trim()).filter(Boolean),
                    }
                    update('services', newServices)
                  }}
                  type="textarea"
                />
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => {
                update('services', [...(content.services || []), { title: '', description: '', points: [] }])
              }}
            >
              <Plus className="size-4" />
              Ajouter un service
            </Button>
          </SectionEditor>
        </>
      )}
    </PageEditor>
  )
}
