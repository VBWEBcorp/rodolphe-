'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Phone, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { DevisForm } from '@/components/devis-form'
import { ValuesMarquee } from '@/components/sections/values-marquee'
import { SocialLinks } from '@/components/social-links'
import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 5500

const defaults = {
  eyebrow: 'Déménageurs en Franche-Comté & Grand Est',
  title: 'Votre déménagement rapide et soigné',
  description:
    'EN PAYS WÊ accompagne particuliers et professionnels à Besançon, dans le Doubs et partout en Franche-Comté & Grand Est. Un service fiable, rapide et sécurisé, du premier carton au dernier meuble installé.',
  button1: 'Demander un devis gratuit',
  button2: 'Nos services',
  images: [
    'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
    'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
    'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
  ],
}

const bullets = [
  'Devis gratuit sous 24h',
  'Équipe dédiée & matériel pro',
  'Assurance incluse · Transport sécurisé',
]

function QuickQuoteCard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.68_0.2_42/0.25)] via-transparent to-[oklch(0.42_0.1_260/0.2)] blur-3xl"
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/5 backdrop-blur-xl sm:p-7">
        {/* Corner accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[oklch(0.68_0.2_42/0.25)] blur-2xl"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.2_42/0.3)] bg-[oklch(0.72_0.2_42/0.12)] px-3 py-1">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.18_42)] opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.72_0.18_42)]" />
              </span>
              <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-[oklch(0.88_0.14_42)] uppercase">
                Devis gratuit · 24h
              </span>
            </div>
            <SocialLinks
              className="flex items-center gap-3"
              itemClassName="text-white/50 transition-colors hover:text-white"
              iconClassName="size-[17px]"
            />
          </div>

          <h2 className="mt-4 font-display text-[22px] leading-tight tracking-[-0.01em] text-white sm:text-2xl">
            Obtenez votre devis
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
            Décrivez votre déménagement, on vous rappelle sous 24h avec une
            estimation claire et gratuite.
          </p>

          <DevisForm
            theme="dark"
            className="mt-5"
            subject="Demande de devis — Site EN PAYS WÊ"
            submitLabel="Recevoir mon devis"
            successTitle="Demande bien envoyée"
            successText="Merci ! On vous recontacte sous 24h avec une estimation claire et gratuite."
          />
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { data } = useContent('home', { hero: defaults })
  const hero = data.hero ?? defaults
  const cleaned = (hero.images ?? defaults.images).filter(Boolean)
  const images = cleaned.length ? cleaned : defaults.images
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [images.length])

  const titleWords = hero.title.split(' ')
  const accentWords = titleWords.slice(-3).join(' ')
  const leading = titleWords.slice(0, -3).join(' ')

  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.17_0.05_260)]">
      {/* Background image carousel */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.17_0.05_260/0.94)] via-[oklch(0.2_0.06_260/0.82)] to-[oklch(0.25_0.08_260/0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div
          className="pointer-events-none absolute -top-40 -right-20 size-[520px] rounded-full bg-[oklch(0.68_0.2_42/0.18)] blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 size-[420px] rounded-full bg-[oklch(0.42_0.1_260/0.3)] blur-[120px]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        {/* Texte — centré */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.18_42)] opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.72_0.18_42)]" />
            </span>
            <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-white/85 uppercase">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px]">
            {leading}{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="bg-gradient-to-r from-[oklch(0.78_0.16_42)] via-[oklch(0.72_0.2_42)] to-[oklch(0.68_0.22_28)] bg-clip-text text-transparent">
                {accentWords}
              </span>
              <svg
                aria-hidden
                viewBox="0 0 240 12"
                className="absolute -bottom-1 left-0 h-2 w-full text-[oklch(0.72_0.2_42/0.8)]"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8 Q 60 2, 120 7 T 238 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease, delay: 0.5 }}
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>

          {/* Bullets — centrés */}
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-white/85 sm:text-[15px]">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[oklch(0.72_0.2_42/0.2)] ring-1 ring-[oklch(0.72_0.2_42/0.4)]">
                  <CheckCircle2 className="size-3 text-[oklch(0.88_0.14_42)]" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Téléphone direct + avis Google */}
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              asChild
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-[oklch(0.82_0.17_80)] text-[oklch(0.82_0.17_80)]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white/85">5,0 sur Google</span>
            </div>
          </div>
        </motion.div>

        {/* Formulaire de devis — sous le titre, centré (même sur ordinateur) */}
        <motion.div
          className="mt-12 w-full max-w-xl text-left"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <QuickQuoteCard />
        </motion.div>

        {/* Slide dots */}
        <div className="mt-12 flex justify-center gap-2">
          {images.map((_: string, i: number) => (
            <button
              key={i}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-10 bg-[oklch(0.72_0.2_42)]'
                  : 'w-4 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-scrolling values marquee */}
      <div className="relative">
        <ValuesMarquee variant="dark" />
      </div>
    </section>
  )
}
