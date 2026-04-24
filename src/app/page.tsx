import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { GalleryCarousel } from '@/components/sections/gallery-carousel'
import { HeroSection } from '@/components/sections/hero-section'
import { ImageMarquee } from '@/components/sections/image-marquee'
import { ProcessSection } from '@/components/sections/process-section'
import { ServicesPreview } from '@/components/sections/services-preview'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesPreview />
      <ImageMarquee />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <GalleryCarousel />
      <CtaSection />
    </>
  )
}
