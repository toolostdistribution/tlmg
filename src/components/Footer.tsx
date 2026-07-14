import Link from 'next/link'

const divisions = [
  { name: 'Too Lost', url: 'https://toolost.com' },
  { name: 'G.Y.R.O', url: 'https://www.gyro.music/' },
  { name: 'Group Speed', url: 'https://www.groupspeed.co/' },
  { name: 'DistroDirect', url: 'https://home.distro.direct/' },
  { name: 'Soothe Sounds', url: 'https://www.soothesounds.com/' },
]

export function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <p className="footer-cta-label">Press &amp; Media Inquiries</p>
        <a href="mailto:press@tlmg.co" className="footer-cta-link">Email →</a>
      </div>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/about">About</Link>
            <Link href="/contact">Press</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="footer-col">
            {divisions.slice(0, 3).map((d) => (
              <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer">{d.name}</a>
            ))}
          </div>
          <div className="footer-col">
            {divisions.slice(3).map((d) => (
              <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer">{d.name}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Too Lost Music Group Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
