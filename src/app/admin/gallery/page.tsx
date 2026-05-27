'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Trash2,
  Eye,
  EyeOff,
  ArrowLeft,
  Check,
  ChevronDown,
  Loader2,
  ImagePlus,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageField } from '@/components/admin/field-editor'

interface GalleryImage {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
  active: boolean
}

interface GallerySettings {
  enabled: boolean
  title: string
  description?: string
  eyebrow?: string
  heroImage?: string
}

export default function AdminGalleryPage() {
  const router = useRouter()
  const [settings, setSettings] = useState<GallerySettings>({
    enabled: true,
    title: 'Nos réalisations',
    eyebrow: 'Galerie',
    description: '',
    heroImage: '',
  })
  const [images, setImages] = useState<GalleryImage[]>([])
  const [newImage, setNewImage] = useState({ title: '', imageUrl: '' })
  const [loading, setLoading] = useState(true)
  const [adding, setAdding] = useState(false)
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)

  const token = () => (typeof window !== 'undefined' ? localStorage.getItem('authToken') : null)

  const notify = (msg: string, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 2600)
  }

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      router.push('/admin/login')
    }
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const t = token()
        const [settingsRes, imagesRes] = await Promise.all([
          fetch('/api/gallery/settings'),
          fetch('/api/gallery/images', {
            headers: t ? { Authorization: `Bearer ${t}` } : {},
          }),
        ])
        setSettings(await settingsRes.json())
        setImages(await imagesRes.json())
      } catch {
        notify('Impossible de charger la galerie', false)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const saveSettings = async (next: GallerySettings, silent = false) => {
    setSettings(next)
    try {
      const res = await fetch('/api/gallery/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
        body: JSON.stringify(next),
      })
      if (res.ok && !silent) notify('Enregistré ✓')
    } catch {
      notify('Erreur lors de l’enregistrement', false)
    }
  }

  const addImage = async () => {
    if (!newImage.imageUrl) {
      notify('Choisissez d’abord une photo', false)
      return
    }
    setAdding(true)
    try {
      const res = await fetch('/api/gallery/images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
        body: JSON.stringify({
          title: newImage.title.trim() || 'Photo',
          imageUrl: newImage.imageUrl,
        }),
      })
      if (res.ok) {
        const image = await res.json()
        setImages((prev) => [...prev, image])
        setNewImage({ title: '', imageUrl: '' })
        notify('Photo ajoutée ✓')
      } else {
        notify('Erreur lors de l’ajout', false)
      }
    } catch {
      notify('Erreur réseau', false)
    } finally {
      setAdding(false)
    }
  }

  const deleteImage = async (id: string) => {
    if (!confirm('Supprimer cette photo définitivement ?')) return
    try {
      const res = await fetch(`/api/gallery/images/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token()}` },
      })
      if (res.ok) {
        setImages((prev) => prev.filter((img) => img._id !== id))
        notify('Photo supprimée')
      }
    } catch {
      notify('Erreur lors de la suppression', false)
    }
  }

  const toggleImage = async (img: GalleryImage) => {
    const next = { ...img, active: !img.active }
    setImages((prev) => prev.map((i) => (i._id === img._id ? next : i)))
    try {
      await fetch(`/api/gallery/images/${img._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
        body: JSON.stringify(next),
      })
    } catch {
      notify('Erreur', false)
    }
  }

  const renameImage = async (img: GalleryImage) => {
    try {
      await fetch(`/api/gallery/images/${img._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
        body: JSON.stringify(img),
      })
    } catch {
      /* silencieux */
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 p-8 text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Chargement…
      </div>
    )
  }

  const visibleCount = images.filter((i) => i.active).length

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8 space-y-6">
      {/* En-tête */}
      <div className="flex items-center gap-3 pt-8 md:pt-0">
        <Link
          href="/admin/dashboard"
          className="flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Galerie photos</h1>
          <p className="text-sm text-muted-foreground">
            Ajoutez les photos de vos chantiers. Elles apparaissent sur la page « Galerie » du site.
          </p>
        </div>
      </div>

      {/* Visible sur le site ? */}
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-card p-5">
        <div>
          <p className="font-semibold text-foreground">Afficher la galerie sur le site</p>
          <p className="text-sm text-muted-foreground">
            {settings.enabled
              ? 'La page Galerie est visible par vos visiteurs.'
              : 'La page Galerie est masquée pour le moment.'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => saveSettings({ ...settings, enabled: !settings.enabled })}
          className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
            settings.enabled ? 'bg-primary' : 'bg-muted-foreground/30'
          }`}
          aria-label="Afficher la galerie"
        >
          <span
            className={`absolute top-1 left-1 size-5 rounded-full bg-white shadow transition-transform ${
              settings.enabled ? 'translate-x-5' : ''
            }`}
          />
        </button>
      </div>

      {/* Ajouter une photo */}
      <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-5 space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ImagePlus className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Ajouter une photo</p>
            <p className="text-sm text-muted-foreground">
              Glissez une image depuis votre ordinateur, ou collez un lien.
            </p>
          </div>
        </div>

        <ImageField
          label="Photo"
          value={newImage.imageUrl}
          onChange={(v) => setNewImage((p) => ({ ...p, imageUrl: v }))}
        />

        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Nom de la photo (facultatif)
          </label>
          <Input
            value={newImage.title}
            onChange={(e) => setNewImage((p) => ({ ...p, title: e.target.value }))}
            placeholder="Ex : Déménagement à Besançon"
          />
        </div>

        <Button onClick={addImage} disabled={adding || !newImage.imageUrl} className="w-full gap-2" size="lg">
          {adding ? <Loader2 className="size-4 animate-spin" /> : <ImagePlus className="size-4" />}
          {adding ? 'Ajout…' : 'Ajouter à la galerie'}
        </Button>
      </div>

      {/* Photos */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-foreground">
            Mes photos <span className="text-muted-foreground font-normal">({images.length})</span>
          </h2>
          {images.length > 0 && (
            <span className="text-xs text-muted-foreground">{visibleCount} visible(s) sur le site</span>
          )}
        </div>

        {images.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-muted-foreground">
            Aucune photo pour l’instant. Ajoutez-en une ci-dessus 👆
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {images.map((img) => (
              <motion.div
                key={img._id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`group overflow-hidden rounded-xl border bg-card transition-all ${
                  img.active ? 'border-border/50' : 'border-border/40 opacity-60'
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.imageUrl} alt={img.title} className="size-full object-cover" />
                  {!img.active && (
                    <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                      Masquée
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => deleteImage(img._id)}
                    title="Supprimer"
                    className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-lg bg-black/55 text-white opacity-0 transition-opacity hover:bg-red-600 group-hover:opacity-100"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
                <div className="space-y-2 p-2.5">
                  <input
                    value={img.title}
                    onChange={(e) =>
                      setImages((prev) =>
                        prev.map((i) => (i._id === img._id ? { ...i, title: e.target.value } : i))
                      )
                    }
                    onBlur={() => renameImage(img)}
                    className="w-full rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm font-medium text-foreground outline-none transition-colors hover:border-border/60 focus:border-ring focus:bg-background"
                  />
                  <button
                    type="button"
                    onClick={() => toggleImage(img)}
                    className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-colors ${
                      img.active
                        ? 'bg-muted/60 text-foreground hover:bg-muted'
                        : 'bg-primary/10 text-primary hover:bg-primary/15'
                    }`}
                  >
                    {img.active ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                    {img.active ? 'Masquer' : 'Afficher'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Réglages avancés (facultatif) */}
      <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
        <button
          type="button"
          onClick={() => setAdvancedOpen((o) => !o)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <p className="font-semibold text-foreground">Textes de la page Galerie</p>
            <p className="text-sm text-muted-foreground">Titre et introduction affichés en haut de la page (facultatif).</p>
          </div>
          <ChevronDown className={`size-5 text-muted-foreground transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>
          {advancedOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 border-t border-border/40 p-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Titre de la page</label>
                  <Input
                    value={settings.title}
                    onChange={(e) => setSettings({ ...settings, title: e.target.value })}
                    placeholder="Nos réalisations"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Texte d’introduction</label>
                  <textarea
                    value={settings.description || ''}
                    onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                    rows={2}
                    placeholder="Quelques mots pour présenter vos photos…"
                    className="w-full resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>
                <ImageField
                  label="Image de fond (en haut de la page)"
                  value={settings.heroImage || ''}
                  onChange={(v) => setSettings({ ...settings, heroImage: v })}
                />
                <Button onClick={() => saveSettings(settings)} className="gap-2">
                  <Check className="size-4" />
                  Enregistrer les textes
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg ${
              toast.ok ? 'bg-emerald-600' : 'bg-red-600'
            }`}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
