import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Too Lost Music Group',
  description: 'Get in touch with Too Lost Music Group.',
}

const contacts = [
  { tag: 'general', title: 'General Inquiries', email: 'info@tlmg.co' },
  { tag: 'press', title: 'Press & Media', email: 'press@tlmg.co' },
  { tag: 'distribution', title: 'Distribution Support', email: 'support@toolost.com' },
  { tag: 'partnerships', title: 'Business Development', email: 'partnerships@tlmg.co' },
  { tag: 'careers', title: 'Careers', email: 'careers@tlmg.co' },
  { tag: 'legal', title: 'Legal & Rights', email: 'legal@toolost.com' },
]

const offices = [
  { city: 'New York', label: 'HQ', country: 'United States', address: '915 Broadway, 8th Floor, New York NY 10010' },
  { city: 'Hollywood', label: 'West Coast', country: 'United States', address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028' },
  { city: 'Reykjavík', label: 'Europe', country: 'Iceland', address: 'Laugavegur 26, 101 Reykjavík' },
  { city: 'Brisbane', label: 'APAC', country: 'Australia', address: '279 Brunswick St, Fortitude Valley QLD 4006, Australia' },
  { city: 'Mumbai', label: 'APAC', country: 'India', address: '' },
  { city: 'São Paulo', label: 'Americas', country: 'Brazil', address: '' },
  { city: 'Toronto', label: 'Americas', country: 'Canada', address: '' },
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
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Departments</h2>
            </div>
            <span className="section-count">{contacts.length} contacts</span>
          </div>
          <div className="cards-grid">
            {contacts.map((c) => (
              <a key={c.email} href={`mailto:${c.email}`} className="card">
                <p className="card-tag">{c.tag}</p>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.email}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Offices</h2>
            </div>
            <span className="section-count">{offices.length} locations</span>
          </div>
          <div className="offices-grid">
            {offices.map((office) => (
              <div key={office.city} className="office-card">
                <div className="office-card-content">
                  <span className="office-card-label">{office.label}</span>
                  <h3 className="office-card-name">{office.city}</h3>
                  <p className="office-card-country">{office.country}</p>
                  {office.address && <p className="office-card-address">{office.address}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
