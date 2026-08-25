'use client'

import Link from 'next/link'

interface Company {
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

const externalOnly = new Set(['songearnings', 'songlink'])

const tlSubBrands: Record<string, string> = {
  'too-lost-ventures': 'Ventures',
  'too-lost-publishing': 'Publishing',
  'too-lost-catalog': 'Catalog',
}

function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, '').split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase()
  return words.map(w => w[0]).join('').toUpperCase().slice(0, 3)
}

export function DivisionsGrid({ companies }: { companies: Company[] }) {
  return (
    <>
      <div className="cards-grid">
        {companies.map((company) => {
          const logo = divisionLogos[company.slug] || company.logo?.url
          const isExternal = externalOnly.has(company.slug) && company.website
          const CardTag = isExternal ? 'a' : Link
          const cardProps = isExternal
            ? { href: company.website!, target: '_blank', rel: 'noopener noreferrer' }
            : { href: `/divisions/${company.slug}` }
          return (
            <CardTag
              key={company.id}
              {...cardProps}
              className="card card-link division-card"
            >
              <div className="division-card-logo division-card-logo-centered">
                {tlSubBrands[company.slug] ? (
                  <span className="division-card-subbrand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/too-lost-icon.png" alt="Too Lost" className="division-card-icon" />
                    <span className="division-card-subbrand-name">{tlSubBrands[company.slug]}</span>
                  </span>
                ) : logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo} alt={company.name} data-slug={company.slug} />
                ) : (
                  <span className="division-card-initials">{getInitials(company.name)}</span>
                )}
              </div>
            </CardTag>
          )
        })}
      </div>
    </>
  )
}
