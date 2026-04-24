import { NextResponse } from 'next/server'

import { DEMO_POSTS } from '@/lib/demo-posts'

type Params = Promise<{ slug: string }>

// Démo : mock single blog post (base de données non branchée).
export async function GET(_request: Request, { params }: { params: Params }) {
  const { slug } = await params
  const post = DEMO_POSTS.find((p) => p.slug === slug)
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
  return NextResponse.json(post)
}

export async function PUT() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}
