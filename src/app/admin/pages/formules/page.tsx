'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import { formulas as defaultFormulas } from '@/lib/formulas'

const defaults = {
  hero: {
    eyebrow: 'Nos formules',
    title: 'Le déménagement qui vous correspond',
    description:
      "De la formule économique au service clé en main, nous adaptons notre prestation à votre budget et à votre niveau d'implication.",
    image: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  },
  formulas: defaultFormulas,
}

export default function AdminFormulesPage() {
  return (
    <PageEditor pageId="formules" title="Page Formules" defaultContent={defaults}>
      {(content, update) => {
        const formulas: any[] = content.formulas || []

        const updateFormula = (i: number, patch: Record<string, any>) => {
          const next = [...formulas]
          next[i] = { ...next[i], ...patch }
          update('formulas', next)
        }

        return (
          <>
            <SectionEditor title="Hero">
              <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
              <FieldEditor label="Titre" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
              <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
              <ImageField label="Image" value={content.hero?.image} onChange={(v) => update('hero.image', v)} />
            </SectionEditor>

            {formulas.map((f: any, i: number) => (
              <SectionEditor key={i} title={`Formule ${i + 1}${f.name ? ` — ${f.name}` : ''}`}>
                <div className="flex justify-end">
                  <button
                    onClick={() => update('formulas', formulas.filter((_: any, j: number) => j !== i))}
                    className="flex items-center gap-1 text-xs text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="size-3.5" />
                    Supprimer cette formule
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <FieldEditor label="Emoji" value={f.emoji} onChange={(v) => updateFormula(i, { emoji: v })} />
                  <FieldEditor label="Nom" value={f.name} onChange={(v) => updateFormula(i, { name: v })} />
                  <FieldEditor label="Badge (optionnel)" value={f.badge} onChange={(v) => updateFormula(i, { badge: v })} />
                </div>

                <FieldEditor label="Sous-titre (tagline)" value={f.tagline} onChange={(v) => updateFormula(i, { tagline: v })} />
                <FieldEditor label="Description courte" value={f.description} onChange={(v) => updateFormula(i, { description: v })} type="textarea" />
                <FieldEditor label="Description longue" value={f.longDescription} onChange={(v) => updateFormula(i, { longDescription: v })} type="textarea" />
                <FieldEditor label="Pour qui ?" value={f.forWho} onChange={(v) => updateFormula(i, { forWho: v })} type="textarea" />

                <FieldEditor
                  label="Atouts (un par ligne)"
                  value={(f.features || []).join('\n')}
                  onChange={(v) => updateFormula(i, { features: v.split('\n').map((s) => s.trim()).filter(Boolean) })}
                  type="textarea"
                />
                <FieldEditor
                  label="Ce qui est inclus (un par ligne)"
                  value={(f.included || []).join('\n')}
                  onChange={(v) => updateFormula(i, { included: v.split('\n').map((s) => s.trim()).filter(Boolean) })}
                  type="textarea"
                />

                <div className="space-y-3 pt-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Photos de la formule</p>
                  {(f.images || []).map((img: string, k: number) => (
                    <ImageField
                      key={k}
                      label={`Image ${k + 1}`}
                      value={img}
                      onChange={(v) => {
                        const imgs = [...(f.images || [])]
                        if (v) imgs[k] = v
                        else imgs.splice(k, 1)
                        updateFormula(i, { images: imgs })
                      }}
                    />
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => updateFormula(i, { images: [...(f.images || []), ''] })}
                  >
                    <Plus className="size-4" />
                    Ajouter une photo
                  </Button>
                </div>
              </SectionEditor>
            ))}

            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() =>
                update('formulas', [
                  ...formulas,
                  {
                    slug: `formule-${Date.now()}`,
                    emoji: '📦',
                    name: 'Nouvelle formule',
                    tagline: '',
                    description: '',
                    longDescription: '',
                    features: [],
                    included: [],
                    forWho: '',
                    images: [],
                  },
                ])
              }
            >
              <Plus className="size-4" />
              Ajouter une formule
            </Button>
          </>
        )
      }}
    </PageEditor>
  )
}
