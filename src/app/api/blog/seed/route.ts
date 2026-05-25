import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogPost, BlogSettings } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'
import { DEMO_POSTS } from '@/lib/demo-posts'

// Réinitialise le blog avec les 10 articles EN PAYS WÊ (réservé admin).
// À déclencher une fois : POST /api/blog/seed avec un token admin.
export async function POST(request: NextRequest) {
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    await BlogPost.deleteMany({})

    const docs = DEMO_POSTS.map((post) => {
      const { _id, updatedAt, ...rest } = post
      void _id
      void updatedAt
      return {
        ...rest,
        publishedAt: new Date(post.publishedAt),
      }
    })
    await BlogPost.insertMany(docs)

    const categories = Array.from(new Set(DEMO_POSTS.map((p) => p.category)))
    await BlogSettings.findOneAndUpdate(
      {},
      {
        enabled: true,
        eyebrow: 'Blog',
        title: 'Conseils & actualités déménagement',
        description:
          "Nos astuces pour organiser votre déménagement sereinement, nos retours d'expérience et les actualités de l'entreprise.",
        heroImage: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
        categories,
      },
      { upsert: true, new: true }
    )

    const now = new Date()
    const visibleNow = docs.filter((d) => d.published && d.publishedAt <= now)

    return NextResponse.json({
      success: true,
      inserted: docs.length,
      visibleNow: visibleNow.map((d) => d.slug),
      scheduled: docs.length - visibleNow.length,
      categories,
    })
  } catch (error) {
    console.error('Blog seed error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur serveur' },
      { status: 500 }
    )
  }
}
