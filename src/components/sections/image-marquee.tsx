'use client'

import { useEffect, useState } from 'react'

// Bande d'images qui defile automatiquement en boucle, sous le hero.
// Les photos viennent de la Galerie partagee (/api/gallery/images), comme
// la GalleryCarousel — UN SEUL endroit dans l'admin pour gerer les photos.

interface GalleryImageDoc {
  imageUrl: string
  active?: boolean
}

export function ImageMarquee() {
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
        /* silencieux : la section sera juste masquee si rien ne charge */
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Aucune photo dans la Galerie : on masque la bande, plutot que d'afficher du
  // vide ou des placeholders en dur.
  if (images.length === 0) return null

  const loop = [...images, ...images, ...images]
  // Le keyframe `marquee-left` translate la bande de 0 a -100%. Pour garder la
  // meme vitesse PERCUE quel que soit le nombre de photos (sinon plus il y en a,
  // plus ca defile vite), on fixe ~10 secondes par photo — ce qui correspond a
  // l'ancien tempo de reference (60s pour 6 photos).
  const animationDuration = `${Math.max(60, images.length * 10)}s`

  return (
    <section
      aria-hidden
      className="relative w-full overflow-hidden border-y border-border/60 bg-background"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
      />

      <div className="group flex">
        <div
          className="flex shrink-0 gap-3 py-4 animate-marquee-left sm:gap-5 sm:py-5 lg:gap-6"
          style={{ animationDuration }}
        >
          {loop.map((src, i) => (
            <div
              key={`a-${i}`}
              className="relative h-40 w-60 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-[var(--shadow-sm)] sm:h-48 sm:w-72 lg:h-56 lg:w-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 gap-3 py-4 animate-marquee-left sm:gap-5 sm:py-5 lg:gap-6"
          style={{ animationDuration }}
        >
          {loop.map((src, i) => (
            <div
              key={`b-${i}`}
              className="relative h-40 w-60 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-[var(--shadow-sm)] sm:h-48 sm:w-72 lg:h-56 lg:w-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
