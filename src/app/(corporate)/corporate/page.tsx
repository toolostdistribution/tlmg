import Link from 'next/link'
import { getCompanies } from '@/payload/queries'
import { OfficesMap } from '@/components/OfficesMap'

export const metadata = {
  title: 'Portfolio — Too Lost Music Group',
  description:
    'A network of divisions, labels, and artists powered by shared systems and built for long-term independence.',
}

const divisionLogos: Record<string, string> = {
  'too-lost': '/too-lost-icon.png',
  'tlx': '/logos/tlx.png',
  'too-lost-ventures': '/too-lost-icon.png',
  'too-lost-publishing': '/too-lost-icon.png',
  'too-lost-catalog': '/too-lost-icon.png',
  'gyro': '/logos/gyro.png',
  'group-speed': '/logos/group-speed.png',
  'distrodirect': '/logos/distrodirect.png',
  'soothe-sounds': '/logos/soothe-sounds.png',
}

const artists = [
  { name: 'Flo Milli', img: '/front_slider/7c245f4be0f31b762762b28fc89f3aff.jpg' },
  { name: '070 Shake', img: '/front_slider/338a002fe159190253f65e2e0f14fca0.jpg' },
  { name: 'Saint Levant', img: '/front_slider/df442ac62bc2e4574a137d8f4320f684.jpg' },
  { name: 'Alex Warren', img: '/front_slider/d6c7bb9fb5a4be9109e358802719d015.jpg' },
  { name: 'Lil Tjay', img: '/front_slider/7c245f4be0f31b762762b28fc89f3aff.jpg' },
  { name: 'Dom Dolla', img: '/front_slider/338a002fe159190253f65e2e0f14fca0.jpg' },
  { name: 'Current Joys', img: '/front_slider/df442ac62bc2e4574a137d8f4320f684.jpg' },
  { name: 'Mariah Carey', img: '/front_slider/d6c7bb9fb5a4be9109e358802719d015.jpg' },
]

const leadership = [
  { name: 'Alex Morgan', role: 'Chief Executive Officer' },
  { name: 'Jordan Lee', role: 'Chief Operating Officer' },
  { name: 'Sam Rivera', role: 'Chief Financial Officer' },
  { name: 'Taylor Brooks', role: 'Chief Technology Officer' },
  { name: 'Casey Nguyen', role: 'Head of Artist Relations' },
  { name: 'Morgan Patel', role: 'General Counsel' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const nav = [
  { href: '#divisions', label: 'Divisions' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#artists', label: 'Artists' },
  { href: '#offices', label: 'Offices' },
  { href: '#connect', label: 'About' },
]

export default async function CorporatePage() {
  const companies = await getCompanies()

  return (
    <div className="corp">
      <header className="corp-header">
        <div className="corp-container corp-header-inner">
          <Link href="/corporate" className="corp-logo">
            Too Lost Music Group
          </Link>
          <nav className="corp-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="corp-header-actions">
            <Link href="/" className="corp-textlink">
              Client Login
            </Link>
            <Link href="#connect" className="corp-btn">
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="corp-hero">
          <div className="corp-container">
            <h1 className="corp-hero-title">
              Powering the Next Era of Independent Music
            </h1>
            <p className="corp-hero-lead">
              A group of divisions sharing the systems, capital, and expertise that help
              artists and labels grow — on their own terms.
            </p>
          </div>
        </section>

        <section className="corp-section corp-section-cream" id="divisions">
          <div className="corp-container">
            <h2 className="corp-section-title">Featured Divisions</h2>
            <div className="corp-grid">
              {companies.map((company) => {
                const logo = divisionLogos[company.slug] || company.logo?.url
                return (
                  <Link
                    key={company.id}
                    href={`/divisions/${company.slug}`}
                    className="corp-card"
                  >
                    <div className="corp-card-logo">
                      {logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={logo} alt={company.name} />
                      ) : (
                        <span className="corp-card-mark">{company.name.charAt(0)}</span>
                      )}
                    </div>
                    <h3 className="corp-card-title">{company.name}</h3>
                    <p className="corp-card-desc">{company.shortDescription}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="corp-section" id="leadership">
          <div className="corp-container">
            <h2 className="corp-section-title">Leadership</h2>
            <div className="corp-leaders">
              {leadership.map((person) => (
                <div className="corp-leader" key={person.name}>
                  <div className="corp-leader-avatar">{initials(person.name)}</div>
                  <div className="corp-leader-name">{person.name}</div>
                  <div className="corp-leader-role">{person.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-section corp-section-cream" id="artists">
          <div className="corp-container">
            <h2 className="corp-section-title">Featured Artists</h2>
            <div className="corp-artists">
              {artists.map((artist, i) => (
                <figure className="corp-artist" key={`${artist.name}-${i}`}>
                  <div className="corp-artist-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={artist.img} alt={artist.name} />
                  </div>
                  <figcaption>{artist.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-section" id="offices">
          <div className="corp-container">
            <h2 className="corp-section-title">Offices</h2>
            <OfficesMap />
          </div>
        </section>

        <section className="corp-connect" id="connect">
          <div className="corp-container">
            <h2 className="corp-connect-title">Let&apos;s Connect</h2>
            <p className="corp-connect-text">
              Whether you&apos;re an independent artist looking for a strategic partner — or a
              music entrepreneur building something new — we&apos;d love to hear from you.
            </p>
            <Link href="/press" className="corp-btn corp-btn-lg">
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>

      <footer className="corp-footer">
        <div className="corp-container corp-footer-grid">
          <div className="corp-footer-brand">
            <div className="corp-logo">Too Lost Music Group</div>
            <p>
              Helping artists, labels, and music businesses grow — without giving up what
              matters.
            </p>
          </div>
          <div className="corp-footer-col">
            <h4>Navigation</h4>
            <a href="#divisions">Divisions</a>
            <a href="#artists">Artists</a>
            <Link href="/">Main Site</Link>
          </div>
          <div className="corp-footer-col">
            <h4>Careers</h4>
            <Link href="/careers">TLMG Careers</Link>
            <Link href="/careers">Open Roles</Link>
          </div>
          <div className="corp-footer-col">
            <h4>Connect</h4>
            <Link href="/press">Press</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="corp-container corp-footer-base">
          <p>© {new Date().getFullYear()} Too Lost Music Group. All rights reserved.</p>
          <div className="corp-footer-legal">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
