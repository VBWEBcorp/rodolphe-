import { NextResponse } from 'next/server'

import { DEMO_POSTS } from '@/lib/demo-posts'

// Démo : mock blog posts (base de données non branchée).
export async function GET() {
  return NextResponse.json(DEMO_POSTS.filter((p) => p.published))
}

export async function POST() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}
