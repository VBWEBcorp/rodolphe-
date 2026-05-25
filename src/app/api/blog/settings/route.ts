import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogSettings } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const DEFAULTS = {
  enabled: true,
  eyebrow: 'Blog',
  title: 'Conseils & actualités déménagement',
  description:
    "Nos astuces pour organiser votre déménagement sereinement, nos retours d'expérience et les actualités de l'entreprise.",
  heroImage: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
  categories: ['Conseils', 'Déménagement', 'Transport', 'Pro'],
}

export async function GET() {
  try {
    await connectDB()
    const settings = await BlogSettings.findOne().lean()
    return NextResponse.json(settings || DEFAULTS)
  } catch {
    return NextResponse.json(DEFAULTS)
  }
}

export async function PUT(request: NextRequest) {
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    await connectDB()
    const body = await request.json()
    delete body._id
    const settings = await BlogSettings.findOneAndUpdate({}, body, {
      new: true,
      upsert: true,
    })
    return NextResponse.json(settings)
  } catch (error) {
    console.error('Blog settings error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
