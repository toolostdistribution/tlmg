import { defineQuery } from 'next-sanity'
import type { SanityImageSource } from '@sanity/image-url'
import { imageUrl } from './image'
import { sanityFetch } from './live'

export interface NewsArticle {
  title: string
  summary: string
  date: string
  source: string
  url: string
  image?: string
}

export interface Leader {
  name: string
  slug: string
  role: string
  photo: string
  linkedin?: string
  bio?: string[]
}

export interface BoardMember extends Leader {
  tag: string
  bio: string[]
}

export interface Company {
  id: string
  name: string
  slug: string
  type: string
  shortDescription: string
  mission?: string
  metrics?: string[]
  productSuite?: string[]
  clients?: string
  clientsLabel?: string
  website?: string
  socials?: { label: string; url: string }[]
  logo?: { url?: string }
}

async function fetchPublished<T>(query: string, params: Record<string, unknown> = {}) {
  const { data } = await sanityFetch({ query, params, perspective: 'published', stega: false })
  return data as T
}

/* News */

const NEWS_QUERY = defineQuery(`
  *[_type == "newsArticle"] | order(date desc) { title, summary, date, source, url, image }
`)

type NewsDoc = Omit<NewsArticle, 'image'> & { image?: SanityImageSource }

export async function getNews(): Promise<NewsArticle[]> {
  const docs = await fetchPublished<NewsDoc[]>(NEWS_QUERY)
  return docs.map((doc) => ({ ...doc, image: imageUrl(doc.image, 900) }))
}

/* People */

const PERSON_PROJECTION = `name, "slug": slug.current, role, photo, linkedin, "bio": coalesce(bio, [])`

const LEADERS_QUERY = defineQuery(`*[_type == "leader"] | order(orderRank) { ${PERSON_PROJECTION} }`)
const BOARD_QUERY = defineQuery(`
  *[_type == "boardMember"] | order(orderRank) { ${PERSON_PROJECTION}, "tag": coalesce(tag, "") }
`)

type PersonDoc = Omit<Leader, 'photo' | 'bio'> & { photo?: SanityImageSource; bio: string[]; tag?: string }

function toPerson(doc: PersonDoc) {
  return { ...doc, linkedin: doc.linkedin || undefined, photo: imageUrl(doc.photo, 800) ?? '' }
}

export async function getLeaders(): Promise<Leader[]> {
  const docs = await fetchPublished<PersonDoc[]>(LEADERS_QUERY)
  return docs.map(toPerson)
}

export async function getBoardMembers(): Promise<BoardMember[]> {
  const docs = await fetchPublished<PersonDoc[]>(BOARD_QUERY)
  return docs.map((doc) => ({ ...toPerson(doc), tag: doc.tag ?? '' }))
}

/* Brands */

const BRAND_PROJECTION = `
  "id": _id, name, "slug": slug.current, type, shortDescription, mission, metrics, productSuite,
  clients, clientsLabel, website, "socials": socials[]{ label, url }, logo
`

const BRANDS_QUERY = defineQuery(`*[_type == "brand"] | order(orderRank) { ${BRAND_PROJECTION} }`)
const BRAND_QUERY = defineQuery(`*[_type == "brand" && slug.current == $slug][0] { ${BRAND_PROJECTION} }`)

type BrandDoc = Omit<Company, 'logo'> & { logo?: SanityImageSource }

function toCompany(doc: BrandDoc): Company {
  const company: Company = { ...doc, logo: undefined }
  for (const key of Object.keys(company) as (keyof Company)[]) {
    if (company[key] === null) delete company[key]
  }
  const logo = imageUrl(doc.logo, 600)
  return logo ? { ...company, logo: { url: logo } } : company
}

export async function getCompanies(): Promise<Company[]> {
  const docs = await fetchPublished<BrandDoc[]>(BRANDS_QUERY)
  return docs.map(toCompany)
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  const doc = await fetchPublished<BrandDoc | null>(BRAND_QUERY, { slug })
  return doc ? toCompany(doc) : null
}

export async function getAllCompanySlugs(): Promise<string[]> {
  const companies = await getCompanies()
  return companies.map((c) => c.slug)
}
