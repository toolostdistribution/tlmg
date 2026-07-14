import Link from 'next/link'
import { notFound } from 'next/navigation'
import { openings, perks } from '@/data/careers'

export function generateStaticParams() {
  return openings.map((o) => ({ id: String(o.id) }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const role = openings.find((o) => String(o.id) === id)
  if (!role) return {}
  return { title: `${role.title} — Careers — Too Lost Music Group` }
}

export default async function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const role = openings.find((o) => String(o.id) === id)
  if (!role) notFound()

  const otherRoles = openings.filter((o) => o.id !== role.id).slice(0, 3)

  return (
    <main className="subpage">
      <div className="career-detail-hero">
        <div className="section-inner">
          <Link href="/careers" className="career-back">
            ← All Positions
          </Link>

          <div className="career-detail-badges">
            <span className="career-badge">{role.type}</span>
            <span className="career-badge">{role.location}</span>
          </div>

          <h1 className="career-detail-title">{role.title}</h1>
          <p className="career-detail-summary">{role.summary}</p>

          <div className="career-detail-meta-row">
            <div className="career-detail-meta-item">
              <span className="career-detail-meta-label">Department</span>
              <span className="career-detail-meta-value">{role.dept}</span>
            </div>
            <div className="career-detail-meta-item">
              <span className="career-detail-meta-label">Type</span>
              <span className="career-detail-meta-value">{role.type}</span>
            </div>
            <div className="career-detail-meta-item">
              <span className="career-detail-meta-label">Location</span>
              <span className="career-detail-meta-value">{role.location}</span>
            </div>
            {role.comp && (
              <div className="career-detail-meta-item">
                <span className="career-detail-meta-label">Compensation</span>
                <span className="career-detail-meta-value">{role.comp}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="career-detail-content">
            <div className="career-detail-body">
              <div className="career-detail-block">
                <h2>About This Role</h2>
                {role.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="career-detail-block">
                <h2>Your Responsibilities</h2>
                <ul>
                  {role.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="career-detail-block">
                <h2>Your Background</h2>
                <ul>
                  {role.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="career-detail-sidebar">
              <div className="career-apply-card">
                <h3>Interested in this role?</h3>
                <p>Apply today and join a team that&apos;s shaping the future of independent music.</p>
                <a
                  href={`https://toolost.com/careers/${role.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="career-apply-btn"
                >
                  Apply For This Position
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <p className="section-tag">Perks & Benefits</p>
              <h2 className="section-title">Why work at Too Lost?</h2>
            </div>
          </div>
          <div className="careers-perks-grid">
            {perks.map((perk) => (
              <div key={perk.title} className="careers-perk">
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Other Open Positions</h2>
            </div>
            <Link href="/careers" className="section-count section-count-link">
              View all →
            </Link>
          </div>
          <div className="careers-list">
            {otherRoles.map((other) => (
              <Link
                key={other.id}
                href={`/careers/${other.id}`}
                className="career-row"
              >
                <div className="career-row-dept">
                  <span className="career-row-dept-label">{other.dept}</span>
                </div>
                <div className="career-row-info">
                  <h3 className="career-row-title">{other.title}</h3>
                  <p className="career-row-summary">{other.summary}</p>
                </div>
                <div className="career-row-meta">
                  <span className="career-row-badge">{other.type}</span>
                  <span className="career-row-location">{other.location}</span>
                </div>
                <span className="career-row-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
