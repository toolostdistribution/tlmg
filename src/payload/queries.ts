import { getPayload } from './get-payload'
import { fallbackCompanies, type Company } from './fallback-data'

export type { Company }

export async function getCompanies(): Promise<Company[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'companies',
      sort: 'order',
      limit: 100,
    })

    if (result.docs.length === 0) return fallbackCompanies

    return result.docs.map((doc) => ({
      id: String(doc.id),
      name: doc.name as string,
      slug: doc.slug as string,
      type: doc.type as string,
      shortDescription: doc.shortDescription as string,
      clients: (doc.clients as string) || undefined,
      clientsLabel: (doc.clientsLabel as string) || undefined,
      website: (doc.website as string) || undefined,
      logo: doc.logo ? { url: typeof doc.logo === 'object' && 'url' in doc.logo ? (doc.logo as { url: string }).url : undefined } : undefined,
      order: (doc.order as number) || 0,
    }))
  } catch {
    return fallbackCompanies
  }
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'companies',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })

    if (result.docs.length === 0) {
      return fallbackCompanies.find((c) => c.slug === slug) || null
    }

    const doc = result.docs[0]
    return {
      id: String(doc.id),
      name: doc.name as string,
      slug: doc.slug as string,
      type: doc.type as string,
      shortDescription: doc.shortDescription as string,
      clients: (doc.clients as string) || undefined,
      clientsLabel: (doc.clientsLabel as string) || undefined,
      website: (doc.website as string) || undefined,
      logo: doc.logo ? { url: typeof doc.logo === 'object' && 'url' in doc.logo ? (doc.logo as { url: string }).url : undefined } : undefined,
      order: (doc.order as number) || 0,
    }
  } catch {
    return fallbackCompanies.find((c) => c.slug === slug) || null
  }
}

export async function getAllCompanySlugs(): Promise<string[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'companies',
      limit: 100,
    })

    if (result.docs.length === 0) {
      return fallbackCompanies.map((c) => c.slug)
    }

    return result.docs.map((doc) => doc.slug as string)
  } catch {
    return fallbackCompanies.map((c) => c.slug)
  }
}
