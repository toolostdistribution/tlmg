import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from './env'

const builder = createImageUrlBuilder({ projectId, dataset })

export function imageUrl(source: SanityImageSource | null | undefined, width: number) {
  if (!source) return undefined
  return builder.image(source).width(width).fit('max').auto('format').url()
}
