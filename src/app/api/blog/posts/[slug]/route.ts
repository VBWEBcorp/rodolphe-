import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogPost } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

type Params = Promise<{ slug: string }>

// Article par slug. ?all=1 + admin → accès même à un article encore programmé (édition).
export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { slug } = await params
  const all = new URL(request.url).searchParams.get('all') === '1'
  try {
    await connectDB()

    if (all) {
      const { authenticated, user } = await verifyAuth(request)
      if (authenticated && user?.role === 'admin') {
        const post = await BlogPost.findOne({ slug }).lean()
        if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
        return NextResponse.json(post)
      }
    }

    const post = await BlogPost.findOne({
      slug,
      published: true,
      publishedAt: { $lte: new Date() },
    }).lean()
    if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog get error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  const { slug } = await params
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    await connectDB()
    const body = await request.json()
    delete body._id
    if (body.published && !body.publishedAt) body.publishedAt = new Date()
    const post = await BlogPost.findOneAndUpdate({ slug }, body, { new: true })
    if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog update error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  const { slug } = await params
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    await connectDB()
    await BlogPost.findOneAndDelete({ slug })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Blog delete error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
