import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { r2Enabled, uploadToR2 } from '@/lib/r2'
import { optimizeImage } from '@/lib/optimize-image'

export async function POST(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // En PROD on exige R2 : sans lui, l'URL retournee (`/uploads/...`) ne
    // pointerait vers rien sur Netlify (filesystem non persistant) et casserait
    // l'image. En DEV on autorise le fallback local pour que les tests
    // fonctionnent meme sans R2 configure en .env.local.
    if (!r2Enabled && process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        {
          error:
            "Stockage des images non configuré côté serveur (R2 manquant). Utilisez l'option « Lien » à la place.",
        },
        { status: 503 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Vérifier le type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'File type not allowed' }, { status: 400 })
    }

    // Vérifier la taille (10MB max avant optimisation)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 })
    }

    const rawBuffer = Buffer.from(await file.arrayBuffer())
    const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

    // SVG: pas d'optimisation
    const isSvg = file.type === 'image/svg+xml'

    let finalBuffer: Buffer
    let contentType: string
    let filename: string

    if (isSvg) {
      finalBuffer = rawBuffer
      contentType = 'image/svg+xml'
      filename = `${uniqueId}.svg`
    } else {
      // Optimiser avec Sharp → WebP
      const optimized = await optimizeImage(rawBuffer)
      finalBuffer = optimized.buffer
      contentType = optimized.contentType
      filename = `${uniqueId}.${optimized.ext}`
    }

    let url: string

    if (r2Enabled) {
      url = await uploadToR2(finalBuffer, filename, contentType)
    } else {
      // DEV uniquement (le bloc plus haut interdit ce chemin en prod).
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
      if (!existsSync(uploadsDir)) {
        await mkdir(uploadsDir, { recursive: true })
      }
      await writeFile(path.join(uploadsDir, filename), finalBuffer)
      url = `/uploads/${filename}`
    }

    // Taille avant/après
    const originalSize = (rawBuffer.length / 1024).toFixed(1)
    const optimizedSize = (finalBuffer.length / 1024).toFixed(1)

    return NextResponse.json({
      url,
      filename,
      originalSize: `${originalSize} Ko`,
      optimizedSize: `${optimizedSize} Ko`,
      storage: r2Enabled ? 'cloudflare-r2' : 'local-dev',
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
