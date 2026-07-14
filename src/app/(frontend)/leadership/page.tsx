import Link from 'next/link'

export const metadata = { title: 'Leadership — Too Lost Music Group' }

export default function LeadershipPage() {
  return (
    <main>
      <div className="page-hero">
        <Link href="/" className="page-back">← back</Link>
        <h1 className="page-title">Executive Team</h1>
        <p className="page-desc">
          The people behind Too Lost Music Group.
        </p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Leadership</h2>
            </div>
          </div>
          <div className="cards-grid">
            <div className="card">
              <p className="card-tag">office of the ceo</p>
              <h3 className="card-title">Bjarki Lárusson</h3>
              <p className="card-desc">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
