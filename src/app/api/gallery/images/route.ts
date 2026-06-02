import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { GalleryImage } from '@/models/Gallery'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const NO_CACHE = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
}

// Photos par défaut, insérées en base au premier chargement si la galerie est vide.
const defaultImages = [
  {
    title: 'Déménagement à Besançon',
    description: "Prise en charge complète d'un appartement en centre-ville.",
    imageUrl: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    category: 'Déménagement',
    order: 1,
    active: true,
  },
  {
    title: 'Chargement soigné',
    description: 'Cartons et mobilier chargés avec sangles et calages.',
    imageUrl: 'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    category: 'Déménagement',
    order: 2,
    active: true,
  },
  {
    title: 'Sur la route',
    description: 'Transport longue distance vers le Grand Est.',
    imageUrl: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
    category: 'Transport',
    order: 3,
    active: true,
  },
  {
    title: 'Intervention professionnelle',
    description: 'Notre équipe au travail, équipement pro et manutention sécurisée.',
    imageUrl: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
    category: 'Déménagement',
    order: 4,
    active: true,
  },
  {
    title: 'Transfert de bureaux',
    description: "Mobilier et matériel informatique d'une société bisontine.",
    imageUrl: 'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    category: 'Professionnels',
    order: 5,
    active: true,
  },
  {
    title: 'Déchargement & installation',
    description: 'Remontage du mobilier dans le nouveau logement.',
    imageUrl: 'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    category: 'Déménagement',
    order: 6,
    active: true,
  },
]

// GET : liste des images (admin = toutes, public = actives uniquement)
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    // Pré-remplissage au premier usage
    const count = await GalleryImage.countDocuments()
    if (count === 0) {
      await GalleryImage.insertMany(defaultImages)
    }

    const { authenticated, user } = await verifyAuth(request)
    const isAdmin = authenticated && user?.role === 'admin'

    const images = await GalleryImage.find(isAdmin ? {} : { active: true }).sort({
      order: 1,
      createdAt: 1,
    })

    return NextResponse.json(images, { headers: NO_CACHE })
  } catch (error) {
    console.error('Gallery list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST : ajouter une image (admin uniquement)
export async function POST(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const { title, description, imageUrl, category, active } = await request.json()
    if (!title || !imageUrl) {
      return NextResponse.json(
        { error: 'Titre et image requis' },
        { status: 400 }
      )
    }

    const order = await GalleryImage.countDocuments()
    const image = await GalleryImage.create({
      title,
      description,
      imageUrl,
      category: category || 'general',
      order,
      active: active !== false,
    })

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Gallery create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
