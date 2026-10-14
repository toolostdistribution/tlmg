import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Too Lost Music Group',
}

const contacts = [
  { tag: '', title: 'General Inquiries and Distribution Support', email: 'support@toolost.com' },
]

export default function ContactPage() {
  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <h1 className="about-headline">
            Contact
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr' }}>
            {contacts.map((c) => (
              <a key={c.email} href={`mailto:${c.email}`} className="card">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.email}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
