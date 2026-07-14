import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname } from 'path'

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname
const MAX_WIDTH = 1920
const JPEG_QUALITY = 80
const PNG_QUALITY = 80
const WEBP_QUALITY = 80
const AVIF_QUALITY = 65

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(fullPath)))
    } else {
      const ext = extname(entry.name).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase()
  const before = (await stat(filePath)).size

  try {
    let pipeline = sharp(filePath)
    const metadata = await pipeline.metadata()

    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true })
    }

    let buffer
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
        break
      case '.png':
        buffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer()
        break
      case '.webp':
        buffer = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer()
        break
      case '.avif':
        buffer = await pipeline.avif({ quality: AVIF_QUALITY, effort: 6 }).toBuffer()
        break
      default:
        return { filePath, before, after: before, skipped: true }
    }

    if (buffer.length < before) {
      const { writeFile } = await import('fs/promises')
      await writeFile(filePath, buffer)
      return { filePath, before, after: buffer.length, skipped: false }
    }

    return { filePath, before, after: before, skipped: true }
  } catch (err) {
    console.error(`  Error processing ${filePath}: ${err.message}`)
    return { filePath, before, after: before, skipped: true, error: err.message }
  }
}

async function main() {
  console.log('Scanning for images in public/...')
  const images = await getAllImages(PUBLIC_DIR)
  console.log(`Found ${images.length} images\n`)

  let totalBefore = 0
  let totalAfter = 0
  let optimized = 0

  for (let i = 0; i < images.length; i++) {
    const result = await optimizeImage(images[i])
    totalBefore += result.before
    totalAfter += result.after

    const saved = result.before - result.after
    const pct = ((saved / result.before) * 100).toFixed(1)
    const relative = images[i].replace(PUBLIC_DIR, '')

    if (!result.skipped) {
      optimized++
      console.log(`  ✓ ${relative} — ${fmt(result.before)} → ${fmt(result.after)} (${pct}% saved)`)
    }

    if ((i + 1) % 20 === 0) {
      console.log(`  ... ${i + 1}/${images.length} processed`)
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`Total images:    ${images.length}`)
  console.log(`Optimized:       ${optimized}`)
  console.log(`Before:          ${fmt(totalBefore)}`)
  console.log(`After:           ${fmt(totalAfter)}`)
  console.log(`Saved:           ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
}

function fmt(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

main()
