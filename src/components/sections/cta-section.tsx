'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'Prêt à déménager ?',
  title: 'Votre devis gratuit en 24h',
  description: 'Décrivez-nous votre projet en quelques mots : volume, adresses, date souhaitée. Nous vous rappelons rapidement avec un devis clair et sans engagement.',
  button: 'Demander mon devis',
}

const col1Images = [
  'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
  'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
  'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
  'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
]

const col2Images = [
  'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
  'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
  'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
  'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
]

function ScrollColumn({ images, direction, speed }: { images: string[]; direction: 'up' | 'down'; speed: number }) {
  // Triple the images so there's never a gap
  const tripled = [...images, ...images, ...images]
  // Each image block = height + gap. We need to scroll exactly one set of images.length
  // Using percentage-based: 1 set = 33.333% of tripled container
  const from = direction === 'up' ? '0%' : '-33.333%'
  const to = direction === 'up' ? '-33.333%' : '0%'

  return (
    <div className="w-[130px] lg:w-[150px] shrink-0">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: [from, to] }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {tripled.map((src, i) => (
          <div
            key={`${direction}-${i}`}
            className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CtaSection() {
  const { data } = useContent('home', { cta: defaults })
  const cta = data.cta ?? defaults

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.20_0.06_260)] via-[oklch(0.17_0.05_260)] to-[oklch(0.22_0.07_260)] shadow-[var(--shadow-lg)]"
        >
          {/* Ambient glow */}
          <div aria-hidden className="pointer-events-none absolute -top-40 -left-20 size-[420px] rounded-full bg-[oklch(0.68_0.2_42/0.2)] blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 size-[420px] rounded-full bg-[oklch(0.42_0.1_260/0.3)] blur-[120px]" />

          <div className="relative flex items-stretch min-h-[420px] sm:min-h-[460px]">
            {/* Left - Text content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center p-10 sm:p-14 space-y-6">
              <p className="font-display text-xs font-semibold tracking-[0.22em] text-[oklch(0.82_0.16_42)] uppercase">
                {cta.eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-balance text-3xl tracking-tight text-white sm:text-4xl lg:text-[42px]">
                {cta.title}
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                {cta.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group bg-[oklch(0.68_0.2_42)] text-white hover:bg-[oklch(0.62_0.2_42)]" asChild>
                  <Link href="/contact">
                    {cta.button}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
                  <a href="tel:0610602159">06 10 60 21 59</a>
                </Button>
              </div>
            </div>

            {/* Right - Scrolling images, clipped to card */}
            <div className="hidden md:block relative w-[300px] lg:w-[340px] shrink-0 overflow-hidden">
              {/* Fade top */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[oklch(0.17_0.05_260)] to-transparent z-20" />
              {/* Fade bottom */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[oklch(0.22_0.07_260)] to-transparent z-20" />
              {/* Fade left — smooth blend into text area */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[oklch(0.17_0.05_260)] to-transparent z-20" />

              <div className="absolute inset-0 overflow-hidden">
                <div className="flex gap-3 -rotate-6 translate-x-[10%]" style={{ height: '140%', marginTop: '-20%' }}>
                  <ScrollColumn images={col1Images} direction="up" speed={40} />
                  <ScrollColumn images={col2Images} direction="down" speed={45} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
