// Redimensionne et compresse une image dans le navigateur AVANT l'upload.
// Objectif : repasser sous la limite de 4,5 Mo des fonctions serverless
// (et accélérer l'envoi). SVG et GIF sont renvoyés tels quels.

const MAX_WIDTH = 1920
const MAX_HEIGHT = 1080
const QUALITY = 0.82
const SKIP_TYPES = ['image/svg+xml', 'image/gif']

export async function compressImage(file: File): Promise<File> {
  if (SKIP_TYPES.includes(file.type)) return file

  try {
    // imageOrientation 'from-image' applique l'orientation EXIF (photos iPhone)
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })

    const scale = Math.min(1, MAX_WIDTH / bitmap.width, MAX_HEIGHT / bitmap.height)
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return file

    ctx.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/webp', QUALITY)
    )
    if (!blob) return file

    const name = file.name.replace(/\.[^.]+$/, '') + '.webp'
    return new File([blob], name, { type: 'image/webp' })
  } catch {
    // En cas de souci, on retombe sur le fichier original
    return file
  }
}
