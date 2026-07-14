import Link from 'next/link'
import Image from 'next/image'
import type { Company } from '@/payload/queries'

function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, '').split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase()
  return words.map(w => w[0]).join('').toUpperCase().slice(0, 3)
}

export function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        {company.logo?.url ? (
          <Image
            src={company.logo.url}
            alt={company.name}
            width={36}
            height={36}
            style={{ borderRadius: '6px' }}
          />
        ) : (
          <div style={{
            width: 36, height: 36, borderRadius: '6px',
            background: '#f0f0f0', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '0.65rem', fontWeight: 700, color: '#999'
          }}>
            {getInitials(company.name)}
          </div>
        )}
        <p className="card-tag" style={{ margin: 0 }}>{company.type}</p>
      </div>
      <h3 className="card-title">{company.name}</h3>
      <p className="card-desc">{company.shortDescription}</p>
      {company.website && (
        <Link href={company.website} target="_blank" style={{
          fontSize: '0.8rem', color: '#666', marginTop: '0.75rem',
          display: 'inline-block', textDecoration: 'underline'
        }}>
          Visit website →
        </Link>
      )}
    </div>
  )
}
