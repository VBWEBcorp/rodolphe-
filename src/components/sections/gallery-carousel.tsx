'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

// L'eyebrow et le titre sont pilotés via l'admin Accueil (content "home").
// Les PHOTOS elles-mêmes viennent de la Galerie partagée (/api/gallery/images)
// pour que le client n'ait qu'UN seul endroit où gérer ses photos. Toutes les
// photos actives de la Galerie défilent automatiquement ici.
const defaults: { eyebrow: string; title: string } = {
  eyebrow: 'Galerie',
  title: 'Nos équipes sur le terrain',
}

const GAP = 20
const CARD_WIDTH = 340

interface GalleryImageDoc {
  imageUrl: string
  active?: boolean
}

export function GalleryCarousel() {
  const { data } = useContent('home', { gallery: defaults })
  const gallery = data.gallery ?? defaults

  // Photos chargées depuis la Galerie (API partagée avec /admin/gallery).
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    let cancelled = false
    fetch('/api/gallery/images', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((arr: unknown) => {
        if (cancelled || !Array.isArray(arr)) return
        const urls = (arr as GalleryImageDoc[])
          .filter((img) => img && img.active !== false && img.imageUrl)
          .map((img) => img.imageUrl)
        setImages(urls)
      })
      .catch(() => {
        /* silencieux : la section sera juste masquée */
      })
    return () => {
      cancelled = true
    }
  }, [])

  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const x = useMotionValue(0)
  const progress = useTransform(x, [0, -maxScroll || -1], [0, 1])

  // Remesure quand les images arrivent (changement de scrollWidth).
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      setMaxScroll(Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [images.length])

  const slide = useCallback(
    (dir: -1 | 1) => {
      const current = x.get()
      const step = CARD_WIDTH + GAP
      const next = Math.max(-maxScroll, Math.min(0, current - dir * step))
      animate(x, next, { type: 'spring', stiffness: 300, damping: 35 })
    },
    [x, maxScroll]
  )

  // Pas de photos saisies par le client → on masque entierement la section,
  // plutot que d'afficher un en-tete avec un carrousel vide.
  if (images.length === 0) return null

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-3">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              {gallery.eyebrow}
            </p>
            <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              {gallery.title}
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button type="button" variant="outline" size="icon" className="rounded-full" aria-label="Image précédente" onClick={() => slide(-1)}>
              <ChevronLeft className="size-5" />
            </Button>
            <Button type="button" variant="outline" size="icon" className="rounded-full" aria-label="Image suivante" onClick={() => slide(1)}>
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" role="region" aria-label="Galerie photos">
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.08}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {images.map((src: string, i: number) => (
              <motion.div key={i} className="shrink-0" style={{ width: CARD_WIDTH, marginRight: i < images.length - 1 ? GAP : 0 }}>
                <div className="group overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={src} alt="" loading="lazy" width={720} height={540} className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="h-1 w-32 overflow-hidden rounded-full bg-border">
            <motion.div className="h-full rounded-full bg-primary/60" style={{ scaleX: progress, transformOrigin: 'left' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
