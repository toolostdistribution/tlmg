import Link from 'next/link'
import { getCompanyBySlug, getAllCompanySlugs } from '@/sanity/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllCompanySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)
  if (!company) return {}
  return {
    title: `${company.name} — Too Lost Music Group`,
  }
}

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)
  if (!company) notFound()

  const allText = [company.shortDescription, company.mission].filter(Boolean).join('\n\n')
  const paragraphs = allText.split('\n\n').filter(Boolean)

  return (
    <main className="dp">
      <section className="dp-hero">
        <div className="section-inner">
          <Link href="/brands" className="dp-back">← Back to Brands</Link>
          <div className="dp-hero-grid">
            <div className="dp-hero-left">
              {company.logo?.url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={company.logo.url}
                  alt={company.name}
                  className="dp-logo"
                />
              ) : (
                <h1 className="dp-title">{company.name}</h1>
              )}
            </div>
            {(company.website || (company.socials && company.socials.length > 0)) && (
              <div className="dp-hero-right">
                {company.website && (
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="dp-ext">
                    {company.website.replace(/^https?:\/\//, '')} {'\u2197\uFE0E'}
                  </a>
                )}
                {company.socials?.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dp-social"
                  >
                    {social.label} {'\u2197\uFE0E'}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {paragraphs.length > 0 && (
        <section className="dp-mission">
          <div className="section-inner">
            <div className="dp-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
