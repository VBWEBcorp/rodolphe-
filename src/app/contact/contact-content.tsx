'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
  const [sent, setSent] = useState(false)

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
            Envoyer un message
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Remplissez le formulaire, nous revenons vers vous rapidement avec une estimation claire et gratuite.
          </p>

          {sent ? (
            <div className="mt-8 rounded-2xl border border-[oklch(0.72_0.18_42/0.3)] bg-[oklch(0.72_0.18_42/0.1)] p-8 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[oklch(0.72_0.2_42)] text-white shadow-lg">
                <CheckCircle2 className="size-6" aria-hidden />
              </div>
              <p className="mt-4 font-display text-base font-semibold text-white">
                Message bien envoyé
              </p>
              <p className="mt-1.5 text-sm text-white/70">
                Merci ! On vous recontacte rapidement pour échanger sur votre projet.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="firstname"
                    className="text-[11px] font-medium uppercase tracking-wider text-white/60"
                  >
                    Prénom
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="Jean"
                    autoComplete="given-name"
                    className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="lastname"
                    className="text-[11px] font-medium uppercase tracking-wider text-white/60"
                  >
                    Nom
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Dupont"
                    autoComplete="family-name"
                    className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-[11px] font-medium uppercase tracking-wider text-white/60"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jean@entreprise.fr"
                  autoComplete="email"
                  className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-[11px] font-medium uppercase tracking-wider text-white/60"
                >
                  Téléphone <span className="text-white/35 normal-case tracking-normal">(optionnel)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  autoComplete="tel"
                  className="h-11 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-[11px] font-medium uppercase tracking-wider text-white/60"
                >
                  Votre message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet en quelques mots…"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm leading-relaxed text-white transition-colors placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="group mt-1 w-full bg-[oklch(0.68_0.2_42)] text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.2_42/0.8)] hover:bg-[oklch(0.62_0.2_42)]"
              >
                Envoyer le message
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>

              <p className="pt-1 text-center text-[11px] text-white/45">
                Ou appelez-nous directement au{' '}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="font-semibold text-white/80 underline-offset-2 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </form>
          )}
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
