import Link from 'next/link'
import { getCompanies } from '@/payload/queries'
import { NEWS_ARTICLES } from '@/payload/news-data'
import { boardMembers, leaders } from '@/payload/people-data'
import { NewHeader } from '@/components/new/NewHeader'
import { Reveal } from '@/components/new/Reveal'
import { CountUp } from '@/components/new/CountUp'
import { WorldClocks } from '@/components/new/WorldClocks'
import { DivisionsLedger } from '@/components/new/DivisionsLedger'
import { GovernanceRegister, type Person } from '@/components/new/GovernanceRegister'

const MARQUEE_NAMES = [
  'Alex Warren', '070 Shake', 'Lil Tjay', 'Flo Milli', 'Chief Keef', 'YG',
  'Kanye West', 'A$AP Ferg', 'Teddy Swims', 'Current Joys', 'Princess Nokia',
  'Ichiko Aoba', 'Royel Otis', 'Pink Sweat$', 'Ali Gatie', 'Mach-Hommy',
  'HUGEL', 'Saint Levant', 'All-American Rejects', 'Freddie Gibbs',
  'Diplo', 'Rufus Du Sol', 'Dom Dolla', 'Mariah Carey', 'WILLOW',
]

const PILLARS = [
  {
    num: 'I',
    title: 'Distribution & Technology',
    body: 'Global delivery to 450+ stores and services, powered by proprietary infrastructure for release management, analytics, and royalty accounting at catalog scale.',
  },
  {
    num: 'II',
    title: 'Publishing & Rights',
    body: 'Publishing administration in partnership with BMG, digital asset management, and copyright monetization across YouTube, TikTok, and Meta platforms.',
  },
  {
    num: 'III',
    title: 'Catalog & Capital',
    body: 'Long-term ownership of sound recording and publishing rights through TLX and Too Lost Catalog, backed by institutional partners including Pinnacle Financial Partners.',
  },
  {
    num: 'IV',
    title: 'Ventures & Services',
    body: 'Strategic investments in media and music technology, alongside marketing, A&R, and artist services through Group Speed and our label network.',
  },
]

const OFFICES = [
  { city: 'New York', country: 'United States', address: '915 Broadway, 8th Floor, New York NY 10010', region: 'Americas', hq: true },
  { city: 'Hollywood', country: 'United States', address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028', region: 'Americas' },
  { city: 'Toronto', country: 'Canada', address: '', region: 'Americas' },
  { city: 'São Paulo', country: 'Brazil', address: '', region: 'Americas' },
  { city: 'Reykjavík', country: 'Iceland', address: 'Laugavegur 26, 101 Reykjavík', region: 'EMEA' },
  { city: 'Brisbane', country: 'Australia', address: '279 Brunswick St, Fortitude Valley QLD 4006, Australia', region: 'APAC' },
  { city: 'Mumbai', country: 'India', address: '', region: 'APAC' },
]

const PARTNERS = [
  { name: 'TA Associates', desc: 'Leading global growth private equity firm', logo: '/investors/ta-associates.png' },
  { name: 'GoldState Music', desc: 'Private investment firm focused on the music sector', logo: '/investors/goldstate.png' },
  { name: 'Pinnacle Financial Partners', desc: 'American commercial bank, $100B+ in assets', logo: '/investors/pinnacle.png' },
]

const board: Person[] = boardMembers.map((m) => ({
  name: m.name,
  role: m.role,
  tag: m.tag,
  photo: m.photo,
  linkedin: m.linkedin,
  bio: m.bio,
}))

const executives: Person[] = leaders.map((l) => ({
  name: l.name,
  role: l.role,
  tag: 'Executive',
  photo: l.photo,
  linkedin: l.linkedin,
  bio: l.bio,
}))

export default async function NewHome() {
  const companies = await getCompanies()
  const year = new Date().getFullYear()

  return (
    <>
      <Reveal />
      <NewHeader />

      <main className="nw-main">
        {/* ============ HERO ============ */}
        <section className="nw-hero">
          <div className="nw-container nw-hero-grid">
            <div className="nw-hero-copy">
              <p className="nw-kicker" data-nw-reveal>
                <span className="nw-kicker-rule" />A global music holding company · Est. 2020, New York
              </p>
              <h1 className="nw-hero-title" data-nw-reveal>
                Independent<br />
                music,<br />
                <em>institutional</em><br />
                scale.
              </h1>
              <p className="nw-hero-lead" data-nw-reveal>
                Too Lost Music Group owns and operates companies across distribution,
                publishing, rights management, catalog, and artist services — the
                infrastructure behind more than five million recordings worldwide.
              </p>
              <div className="nw-hero-actions" data-nw-reveal>
                <a href="#divisions" className="nw-btn nw-btn--fill">
                  Explore the group
                </a>
                <a href="#governance" className="nw-btn">
                  Governance
                </a>
              </div>
            </div>

            <figure className="nw-hero-media" data-nw-reveal>
              <div className="nw-hero-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/front_slider/ny.avif" alt="New York City, home of Too Lost Music Group headquarters" />
              </div>
              <figcaption>
                <span>915 Broadway, 8th Floor, New York</span>
                <span>40.7394° N / 73.9897° W</span>
              </figcaption>
              <div className="nw-hero-stamp" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path id="nw-circle-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text>
                    <textPath href="#nw-circle-path">
                      TOO LOST MUSIC GROUP · NYC · LA · LDN · RVK · MEL · BNE ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </figure>
          </div>

          <div className="nw-marquee" aria-hidden="true">
            <div className="nw-marquee-track">
              {[0, 1].map((copy) => (
                <span className="nw-marquee-copy" key={copy}>
                  {MARQUEE_NAMES.map((name) => (
                    <span className="nw-marquee-item" key={name}>
                      {name} <i>✳</i>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="nw-container">
            <WorldClocks />
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="nw-stats">
          <div className="nw-container nw-stats-grid">
            <div className="nw-stat" data-nw-reveal>
              <span className="nw-stat-value"><CountUp value={5} suffix="M+" duration={1200} /></span>
              <span className="nw-stat-label">Recordings under management</span>
            </div>
            <div className="nw-stat" data-nw-reveal>
              <span className="nw-stat-value"><CountUp value={500000} suffix="+" /></span>
              <span className="nw-stat-label">Artists &amp; labels served</span>
            </div>
            <div className="nw-stat" data-nw-reveal>
              <span className="nw-stat-value"><CountUp value={150} prefix="$" suffix="M+" /></span>
              <span className="nw-stat-label">Paid to rights holders</span>
            </div>
            <div className="nw-stat" data-nw-reveal>
              <span className="nw-stat-value"><CountUp value={450} suffix="+" /></span>
              <span className="nw-stat-label">Integrated stores &amp; services</span>
            </div>
          </div>
        </section>

        {/* ============ 01 THE GROUP ============ */}
        <section className="nw-section" id="group">
          <div className="nw-container">
            <header className="nw-section-head" data-nw-reveal>
              <span className="nw-section-num">01</span>
              <h2>The Group</h2>
              <p className="nw-section-sub">Mission &amp; operating model</p>
            </header>

            <div className="nw-group-grid">
              <div className="nw-group-statement" data-nw-reveal>
                <p className="nw-statement">
                  Our mission is to provide creators, labels, and music businesses with the
                  <mark> infrastructure, technology, capital, and global access </mark>
                  needed to build, scale, and protect valuable music assets.
                </p>
                <p className="nw-statement-body">
                  Supported by more than 150 professionals across our portfolio, we operate
                  through a family of companies spanning distribution, publishing technology,
                  rights management, catalog ownership, and music services — a framework that
                  lets the independent sector grow efficiently while retaining control of
                  rights, ownership, and creative independence.
                </p>
              </div>

              <ol className="nw-pillars">
                {PILLARS.map((pillar) => (
                  <li className="nw-pillar" key={pillar.num} data-nw-reveal>
                    <span className="nw-pillar-num">{pillar.num}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ 02 DIVISIONS ============ */}
        <section className="nw-section nw-section--ink" id="divisions">
          <div className="nw-container">
            <header className="nw-section-head" data-nw-reveal>
              <span className="nw-section-num">02</span>
              <h2>Divisions</h2>
              <p className="nw-section-sub">{companies.length} operating companies</p>
            </header>
            <div data-nw-reveal>
              <DivisionsLedger companies={companies} />
            </div>
          </div>
        </section>

        {/* ============ 03 GOVERNANCE ============ */}
        <section className="nw-section" id="governance">
          <div className="nw-container">
            <header className="nw-section-head" data-nw-reveal>
              <span className="nw-section-num">03</span>
              <h2>Governance</h2>
              <p className="nw-section-sub">Board, partners &amp; leadership</p>
            </header>

            <div className="nw-gov-block" data-nw-reveal>
              <GovernanceRegister label="Board of Directors" people={board} />
            </div>

            <div className="nw-gov-block nw-gov-block--partners" data-nw-reveal>
              <p className="nw-register-label">Strategic Partners</p>
              <div className="nw-partners">
                {PARTNERS.map((partner, i) => (
                  <div className="nw-partner" key={partner.name}>
                    <span className="nw-register-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="nw-partner-logo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={partner.logo} alt={partner.name} />
                    </div>
                    <h4>{partner.name}</h4>
                    <p>{partner.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="nw-gov-block" data-nw-reveal>
              <GovernanceRegister label="Executive Leadership" people={executives} />
            </div>
          </div>
        </section>

        {/* ============ 04 OFFICES ============ */}
        <section className="nw-section nw-section--paperdark" id="offices">
          <div className="nw-container">
            <header className="nw-section-head" data-nw-reveal>
              <span className="nw-section-num">04</span>
              <h2>Global Presence</h2>
              <p className="nw-section-sub">9 offices · 3 regions</p>
            </header>

            <div className="nw-offices" data-nw-reveal>
              {OFFICES.map((office) => (
                <div className="nw-office" key={office.city}>
                  <span className="nw-office-region">{office.region}</span>
                  <h3>
                    {office.city}
                    {office.hq && <sup>HQ</sup>}
                  </h3>
                  <p className="nw-office-country">{office.country}</p>
                  {office.address && <p className="nw-office-address">{office.address}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 05 NEWSROOM ============ */}
        <section className="nw-section" id="news">
          <div className="nw-container">
            <header className="nw-section-head" data-nw-reveal>
              <span className="nw-section-num">05</span>
              <h2>Newsroom</h2>
              <p className="nw-section-sub">
                <Link href="/news" className="nw-inline-link">All coverage →</Link>
              </p>
            </header>

            <div className="nw-news" data-nw-reveal>
              {NEWS_ARTICLES.slice(0, 6).map((article) => {
                const d = new Date(article.date)
                const dateLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                return (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nw-news-row"
                  >
                    <span className="nw-news-date">{dateLabel}</span>
                    <span className="nw-news-body">
                      <span className="nw-news-title">{article.title}</span>
                      <span className="nw-news-summary">{article.summary}</span>
                    </span>
                    <span className="nw-news-source">{article.source} ↗</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ 06 CONTACT ============ */}
        <section className="nw-cta" id="contact">
          <div className="nw-container">
            <p className="nw-kicker nw-kicker--light" data-nw-reveal>
              <span className="nw-kicker-rule" />06 · Contact
            </p>
            <h2 className="nw-cta-title" data-nw-reveal>
              Building something<br />in music? <em>Talk to us.</em>
            </h2>
            <div className="nw-cta-links" data-nw-reveal>
              <Link href="/press" className="nw-cta-link">
                <span>Press &amp; media</span>
                <span className="nw-cta-arrow">→</span>
              </Link>
              <Link href="/careers" className="nw-cta-link">
                <span>Careers — 11 open roles</span>
                <span className="nw-cta-arrow">→</span>
              </Link>
              <a href="https://toolost.com" target="_blank" rel="noopener noreferrer" className="nw-cta-link">
                <span>Distribute with Too Lost</span>
                <span className="nw-cta-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="nw-footer">
        <div className="nw-container nw-footer-grid">
          <div className="nw-footer-brand">
            <span className="nw-wordmark-mark nw-wordmark-mark--lg">TL</span>
            <p>
              Too Lost Music Group<br />
              915 Broadway, 8th Floor, New York NY 10010
            </p>
          </div>
          <nav className="nw-footer-col" aria-label="Group">
            <h4>Group</h4>
            <a href="#group">Mission</a>
            <a href="#divisions">Divisions</a>
            <a href="#governance">Governance</a>
            <a href="#offices">Offices</a>
          </nav>
          <nav className="nw-footer-col" aria-label="Resources">
            <h4>Resources</h4>
            <Link href="/news">Newsroom</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/press">Press inquiries</Link>
            <Link href="/">Original site</Link>
          </nav>
          <nav className="nw-footer-col" aria-label="Companies">
            <h4>Companies</h4>
            <a href="https://toolost.com" target="_blank" rel="noopener noreferrer">Too Lost</a>
            <a href="https://www.gyro.music/" target="_blank" rel="noopener noreferrer">G.Y.R.O</a>
          </nav>
        </div>
        <div className="nw-container nw-footer-base">
          <span>© {year} Too Lost Music Group. All rights reserved.</span>
          <span className="nw-footer-motto">Independent by design.</span>
        </div>
      </footer>
    </>
  )
}
