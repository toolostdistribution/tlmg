import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCompanyBySlug, getAllCompanySlugs } from '@/payload/queries'

function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, '').split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase()
  return words.map(w => w[0]).join('').toUpperCase().slice(0, 3)
}

export async function generateStaticParams() {
  const slugs = await getAllCompanySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)

  if (!company) return { title: 'Not Found' }

  return {
    title: `${company.name} — Too Lost Music Group`,
  }
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)

  if (!company) notFound()

  return (
    <main className="company-page">
      <div className="company-page-inner">
        <Link href="/divisions" className="company-page-back">
          ← Back to Divisions
        </Link>

        <div className="company-page-logo">
          {company.logo?.url ? (
            <Image
              src={company.logo.url}
              alt={company.name}
              width={64}
              height={64}
            />
          ) : (
            <span>{getInitials(company.name)}</span>
          )}
        </div>

        <p className="company-page-type">{company.type}</p>
        <h1 className="company-page-name">{company.name}</h1>
        <p className="company-page-desc">{company.shortDescription}</p>

        {company.clients && (
          <p className="company-page-clients">
            <strong>{company.clientsLabel || 'Clients:'}</strong> {company.clients}
          </p>
        )}

        {company.website && (
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="company-page-website">
            Visit Website →
          </a>
        )}
      </div>
    </main>
  )
}
