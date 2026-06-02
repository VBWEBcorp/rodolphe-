import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import SiteContent from '@/models/SiteContent'
import { verifyAuth } from '@/lib/auth'

// Toujours servir une réponse fraîche : sinon Netlify/le navigateur peuvent
// renvoyer une ancienne version après une sauvegarde admin.
export const dynamic = 'force-dynamic'
export const revalidate = 0

const NO_CACHE = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
}

type Params = Promise<{ pageId: string }>

// GET page content (public)
export async function GET(request: NextRequest, { params }: { params: Params }) {
  try {
    const { pageId } = await params
    await connectDB()

    const page = await SiteContent.findOne({ pageId })
    if (!page) {
      return NextResponse.json({ pageId, content: {} }, { headers: NO_CACHE })
    }

    return NextResponse.json(page, { headers: NO_CACHE })
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT update page content (admin only)
export async function PUT(request: NextRequest, { params }: { params: Params }) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { pageId } = await params
    await connectDB()

    const { content } = await request.json()

    const page = await SiteContent.findOneAndUpdate(
      { pageId },
      { pageId, content },
      { upsert: true, new: true }
    )

    return NextResponse.json(page)
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
