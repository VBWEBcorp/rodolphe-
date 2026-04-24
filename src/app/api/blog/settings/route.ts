import { NextResponse } from 'next/server'

// Démo : mock blog settings (base de données non branchée).
export async function GET() {
  return NextResponse.json({
    enabled: true,
    eyebrow: 'Blog',
    title: 'Conseils & actualités déménagement',
    description:
      "Nos astuces pour organiser votre déménagement sereinement, nos retours d'expérience et les actualités de l'entreprise.",
    heroImage: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
    categories: ['Conseils', 'Déménagement', 'Transport', 'Pro'],
  })
}

export async function PUT() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}
