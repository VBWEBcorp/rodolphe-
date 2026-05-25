import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogPost } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

// La visibilité dépend de la date du jour (publication automatique) → jamais de cache.
export const dynamic = 'force-dynamic'

// Liste des articles. ?all=1 + admin authentifié → renvoie aussi les articles programmés.
export async function GET(request: NextRequest) {
  const all = new URL(request.url).searchParams.get('all') === '1'
  try {
    await connectDB()

    if (all) {
      const { authenticated, user } = await verifyAuth(request)
      if (authenticated && user?.role === 'admin') {
        const posts = await BlogPost.find()
          .sort({ publishedAt: -1, createdAt: -1 })
          .lean()
        return NextResponse.json(posts)
      }
    }

    // Public : uniquement les articles publiés dont la date est passée.
    const posts = await BlogPost.find({
      published: true,
      publishedAt: { $lte: new Date() },
    })
      .sort({ publishedAt: -1 })
      .lean()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog list error:', error)
    return NextResponse.json([])
  }
}

// Création d'un article (admin).
export async function POST(request: NextRequest) {
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    await connectDB()
    const body = await request.json()
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: 'Titre et adresse (slug) requis' }, { status: 400 })
    }
    if (await BlogPost.findOne({ slug: body.slug })) {
      return NextResponse.json({ error: 'Cette adresse existe déjà' }, { status: 409 })
    }
    if (body.published && !body.publishedAt) body.publishedAt = new Date()
    const post = await BlogPost.create(body)
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
