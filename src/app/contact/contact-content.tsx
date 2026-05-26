'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

import { DevisForm } from '@/components/devis-form'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: {
    eyebrow: 'Contact',
    title: 'Un projet de déménagement ?',
    description:
      'Décrivez-nous votre besoin en quelques lignes : volume, adresses, date souhaitée. Nous vous rappelons sous 24h avec un devis clair et gratuit.',
    image: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  },
  info: {
    phone: siteConfig.phone,
    email: siteConfig.email,
    street: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    city: siteConfig.address.city,
  },
}

function ContactForm() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.68_0.2_42/0.25)] via-transparent to-[oklch(0.42_0.1_260/0.2)] blur-3xl"
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[oklch(0.18_0.05_260/0.92)] p-7 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/5 backdrop-blur-xl sm:p-9">
        {/* Corner accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-[oklch(0.68_0.2_42/0.22)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-10 size-60 rounded-full bg-[oklch(0.42_0.1_260/0.35)] blur-3xl"
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.2_42/0.3)] bg-[oklch(0.72_0.2_42/0.12)] px-3 py-1">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.18_42)] opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.72_0.18_42)]" />
            </span>
            <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-[oklch(0.88_0.14_42)] uppercase">
              Réponse sous 24h
            </span>
          </div>

          <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.01em] text-white sm:text-[28px]">
            Demande de devis
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Décrivez votre déménagement (adresses, dates, volume). Nous revenons
            vers vous sous 24h avec une estimation claire et gratuite.
          </p>

          <DevisForm
            theme="dark"
            className="mt-6"
            subject="Demande de devis — Site EN PAYS WÊ"
            submitLabel="Envoyer ma demande"
            successTitle="Demande bien envoyée"
            successText="Merci ! On vous recontacte sous 24h pour échanger sur votre projet."
          />
        </div>
      </div>
    </div>
  )
}

export function ContactContent() {
  const { data } = useContent('contact', defaults)
  const hero = data.hero ?? defaults.hero
  const info = data.info ?? defaults.info

  const phone = info.phone || siteConfig.phone
  const email = info.email || siteConfig.email
  const street = info.street || siteConfig.address.street
  const postalCode = info.postalCode || siteConfig.address.postalCode
  const city = info.city || siteConfig.address.city

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Contact"
      />

      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="space-y-5"
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Téléphone</p>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-foreground">
                        {phone} <span className="text-xs text-muted-foreground/70">· portable</span>
                      </a>
                      <a href={`tel:${siteConfig.phoneFixe.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-foreground">
                        {siteConfig.phoneFixe} <span className="text-xs text-muted-foreground/70">· fixe</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-foreground">{email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <MapPin className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">{street}<br />{postalCode} {city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-2xl border border-border/80 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <iframe
                  title="EN PAYS WÊ — Besançon"
                  src="https://www.google.com/maps?q=25+rue+Hector+Berlioz,+25000+Besan%C3%A7on&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
