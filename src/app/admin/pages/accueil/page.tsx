'use client'

import { useRef, useState } from 'react'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { compressImage } from '@/lib/compress-image'
import {
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Link as LinkIcon,
  Loader2,
  Plus,
  Trash2,
} from 'lucide-react'

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
  gallery: {
    eyebrow: 'Galerie',
    title: 'Nos équipes sur le terrain',
  },
  cta: {
    eyebrow: 'Prêt à déménager ?',
    title: 'Votre devis gratuit en 24h',
    description:
      'Décrivez-nous votre projet en quelques mots : volume, adresses, date souhaitée. Nous vous rappelons rapidement avec un devis clair et sans engagement.',
    button: 'Demander mon devis',
  },
}

/**
 * Éditeur de photos visuel pour le client non technique : grille de miniatures
 * avec, sous chaque vignette, trois boutons clairs : ← réordonner avant,
 * → réordonner après, 🗑 supprimer. Pour ajouter une photo, un seul gros bouton
 * « + Ajouter une photo » ouvre la zone d'upload/lien.
 */
function ImageListEditor({
  images,
  onChange,
}: {
  images: string[]
  onChange: (images: string[]) => void
}) {
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= images.length) return
    const next = [...images]
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  const removeAt = (i: number) => {
    const next = [...images]
    next.splice(i, 1)
    onChange(next)
  }

  return (
    <div className="space-y-3">
      <p className="text-xs leading-relaxed text-muted-foreground">
        Les photos défilent dans cet ordre. La photo marquée «&nbsp;1ʳᵉ&nbsp;»
        s&apos;affiche en premier, celle marquée «&nbsp;dernière&nbsp;»
        en dernier. Utilisez les flèches ← → pour les réordonner.
      </p>

      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((img, i) => {
            const isFirst = i === 0
            const isLast = i === images.length - 1 && images.length > 1
            const label = isFirst
              ? '1ʳᵉ'
              : isLast
                ? 'dernière'
                : `${i + 1}ᵉ`
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-border/50 bg-card"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                      (vide)
                    </div>
                  )}
                  <span className="absolute top-1.5 left-1.5 rounded-full bg-black/75 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
                    {label}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1 border-t border-border/30 p-1.5">
                  <div className="flex gap-0.5">
                    <button
                      type="button"
                      onClick={() => move(i, -1)}
                      disabled={isFirst}
                      title="Déplacer plus tôt"
                      aria-label="Déplacer plus tôt"
                      className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => move(i, 1)}
                      disabled={i === images.length - 1}
                      title="Déplacer plus tard"
                      aria-label="Déplacer plus tard"
                      className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAt(i)}
                    title="Supprimer cette photo"
                    aria-label="Supprimer"
                    className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">
          Aucune photo pour le moment.
        </div>
      )}

      <AddPhotoTile onAdd={(url) => onChange([...images, url])} />
    </div>
  )
}

/**
 * Bouton « Ajouter une photo » qui :
 * - via upload : envoie le fichier sur /api/upload et AJOUTE AUTOMATIQUEMENT
 *   l'URL retournée à la galerie (un clic suffit, pas de bouton de confirmation
 *   à oublier après).
 * - via lien : champ texte + bouton « Ajouter » classique.
 * Toute erreur d'upload est affichée en clair sous le bouton.
 */
function AddPhotoTile({ onAdd }: { onAdd: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [linkMode, setLinkMode] = useState(false)
  const [linkValue, setLinkValue] = useState('')

  const handleFile = async (file: File) => {
    setUploading(true)
    setError(null)
    try {
      const token = localStorage.getItem('authToken')
      const compressed = await compressImage(file)
      const fd = new FormData()
      fd.append('file', compressed)
      const r = await fetch('/api/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      })
      if (!r.ok) {
        const d = await r.json().catch(() => ({}))
        setError(d.error || `Erreur serveur (${r.status})`)
        return
      }
      const data = await r.json()
      onAdd(data.url)
    } catch {
      setError("Erreur réseau pendant l'upload. Réessayez.")
    } finally {
      setUploading(false)
    }
  }

  const handleLinkAdd = () => {
    const v = linkValue.trim()
    if (!v) return
    onAdd(v)
    setLinkValue('')
    setLinkMode(false)
  }

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) handleFile(f)
          e.currentTarget.value = ''
        }}
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          size="sm"
          className="gap-2"
        >
          {uploading ? <Loader2 className="size-4 animate-spin" /> : <ImagePlus className="size-4" />}
          {uploading ? 'Upload en cours…' : 'Ajouter une photo (depuis mon ordi)'}
        </Button>
        <button
          type="button"
          onClick={() => setLinkMode((v) => !v)}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          <LinkIcon className="size-3" />
          {linkMode ? 'Annuler le lien' : '… ou coller un lien'}
        </button>
      </div>
      {linkMode && (
        <div className="flex gap-2">
          <Input
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            placeholder="https://…"
            className="flex-1"
          />
          <Button type="button" onClick={handleLinkAdd} disabled={!linkValue.trim()} size="sm" className="gap-2">
            <Plus className="size-4" />
            Ajouter
          </Button>
        </div>
      )}
      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
          <p className="font-semibold">L&apos;upload a échoué</p>
          <p className="mt-0.5">{error}</p>
        </div>
      )}
    </div>
  )
}

export default function AdminHomePage() {
  return (
    <PageEditor pageId="home" title="Page d'accueil" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="Hero (haut de page)">
            <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
            <FieldEditor label="Titre principal" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
            <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Photos en fond du hero (défilent automatiquement)
              </p>
              <ImageListEditor
                images={content.hero?.images || []}
                onChange={(imgs) => update('hero.images', imgs)}
              />
            </div>
          </SectionEditor>

          <SectionEditor title="Notre histoire">
            <FieldEditor label="Accroche" value={content.story?.eyebrow} onChange={(v) => update('story.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.story?.title} onChange={(v) => update('story.title', v)} />
            <FieldEditor label="Paragraphe 1" value={content.story?.paragraph1} onChange={(v) => update('story.paragraph1', v)} type="textarea" />
            <FieldEditor label="Paragraphe 2" value={content.story?.paragraph2} onChange={(v) => update('story.paragraph2', v)} type="textarea" />
            <ImageField label="Image" value={content.story?.image} onChange={(v) => update('story.image', v)} />
          </SectionEditor>

          <SectionEditor title="Carrousel photos (bande qui défile)">
            <FieldEditor label="Petit texte au-dessus" value={content.gallery?.eyebrow} onChange={(v) => update('gallery.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.gallery?.title} onChange={(v) => update('gallery.title', v)} />
            <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
              <p className="text-sm font-semibold text-foreground">
                📷 Les photos viennent de la Galerie
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Toutes les photos que vous ajoutez dans la section
                {' '}<strong>Galerie</strong>{' '}(menu de gauche) défilent
                automatiquement ici. Vous n&apos;avez qu&apos;un seul endroit
                où gérer vos photos.
              </p>
              <a
                href="/admin/gallery"
                className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ouvrir la Galerie →
              </a>
            </div>
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
