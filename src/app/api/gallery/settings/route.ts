import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { GallerySettings } from '@/models/Gallery'
import { verifyAuth } from '@/lib/auth'

const defaultSettings = {
  enabled: true,
  eyebrow: 'Galerie',
  title: 'Nos équipes sur le terrain',
  description:
    "Retrouvez en images quelques-unes de nos interventions : déménagements, transports, transferts de bureaux et débarras partout en Franche-Comté & Grand Est.",
  heroImage: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
}

// GET : paramètres de la galerie (créés avec des valeurs par défaut au 1er usage)
export async function GET() {
  try {
    await connectDB()

    let settings = await GallerySettings.findOne()
    if (!settings) {
      settings = await GallerySettings.create(defaultSettings)
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Gallery settings error:', error)
    return NextResponse.json(defaultSettings)
  }
}

// PUT : mise à jour des paramètres (admin uniquement)
export async function PUT(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const { enabled, title, description, eyebrow, heroImage } = await request.json()

    const settings = await GallerySettings.findOneAndUpdate(
      {},
      { enabled, title, description, eyebrow, heroImage },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    )

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Gallery settings update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
