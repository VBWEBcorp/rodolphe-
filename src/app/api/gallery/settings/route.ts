import { NextResponse } from 'next/server'

// Démo : mock gallery settings (base de données non branchée).
export async function GET() {
  return NextResponse.json({
    enabled: true,
    eyebrow: 'Galerie',
    title: 'Nos équipes sur le terrain',
    description:
      "Retrouvez en images quelques-unes de nos interventions : déménagements, transports, transferts de bureaux et débarras partout en Franche-Comté & Grand Est.",
    heroImage: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  })
}

export async function PUT() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}
