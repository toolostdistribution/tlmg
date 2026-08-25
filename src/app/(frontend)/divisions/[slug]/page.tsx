import Link from 'next/link'
import { getCompanyBySlug, getAllCompanySlugs, type Company } from '@/payload/queries'
import { notFound } from 'next/navigation'

const divisionLogos: Record<string, string> = {
  'too-lost': '/text-2.png',
  'gyro': '/logos/gyro.png',
  'group-speed': '/logos/group-speed.png',
  'distrodirect': '/logos/distrodirect.png',
  'soothe-sounds': '/logos/soothe-sounds.png',
  'florecilla': '/logos/florecilla.png',
  'tlx': '/logos/tlx.png',
  'songearnings': '/logos/songearnings.png',
  'songlink': '/logos/songlink.png',
}

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
          <Link href="/divisions" className="dp-back">← Back to Divisions</Link>
          <div className="dp-hero-grid">
            <div className="dp-hero-left">
              {(company.logo?.url || divisionLogos[company.slug]) ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={company.logo?.url || divisionLogos[company.slug]}
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
