'use client'

const IMAGES = [
  'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
  'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
  'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
  'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
]

export function ImageMarquee() {
  const loop = [...IMAGES, ...IMAGES, ...IMAGES]

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
          style={{ animationDuration: '60s' }}
        >
          {loop.map((src, i) => (
            <div
              key={`a-${i}`}
              className="relative h-40 w-60 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-[var(--shadow-sm)] sm:h-48 sm:w-72 lg:h-56 lg:w-80"
            >
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
          style={{ animationDuration: '60s' }}
        >
          {loop.map((src, i) => (
            <div
              key={`b-${i}`}
              className="relative h-40 w-60 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-[var(--shadow-sm)] sm:h-48 sm:w-72 lg:h-56 lg:w-80"
            >
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
