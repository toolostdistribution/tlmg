'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function PreviewV1() {
  const mainRef = useRef<HTMLDivElement>(null)

  const initScrollReveal = useCallback(() => {
    const root = mainRef.current
    if (!root) return

    const targets = root.querySelectorAll(
      '.section, .corp-photo-break, .cta-section, .cards-grid .card, .divisions-list .division-list-item, .governance-mission, .governance-block'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    return initScrollReveal()
  }, [initScrollReveal])

  return (
    <div ref={mainRef}>
      <div className="page-grid" aria-hidden="true"><div className="page-grid-inner"></div></div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo"><span className="nav-logo-text">TLMG</span></a>
          <ul className="nav-links">
            <li className="nav-item"><a href="#divisions" className="nav-link">divisions</a></li>
            <li className="nav-item"><a href="#governance" className="nav-link">governance</a></li>
            <li className="nav-item"><a href="#offices" className="nav-link">offices</a></li>
            <li className="nav-item"><a href="#press" className="nav-link">news</a></li>
            <li className="nav-item"><a href="#careers" className="nav-link">careers</a></li>
            <li className="nav-item"><a href="mailto:info@tlmg.co" className="nav-link nav-link-cta">contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-slider">
            <div className="hero-slider-deck">
              <figure className="hero-slide is-active" style={{zIndex:15,opacity:1,transform:'translate3d(-50%,-50%,40px) rotate(0deg) scale(1)',filter:'grayscale(0%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Flo-Milli.jpg" alt="Flo Milli" draggable={false} />
                <figcaption className="hero-slide-caption">01 / flo milli</figcaption>
              </figure>
              <figure className="hero-slide" style={{zIndex:14,opacity:0.9,transform:'translate3d(calc(-50% + 170px),calc(-50% - 14px),-20px) rotate(-5deg) scale(0.975)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/070 Shake.jpg" alt="070 Shake" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:13,opacity:0.8,transform:'translate3d(calc(-50% - 150px),calc(-50% - 28px),-40px) rotate(3deg) scale(0.95)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/AlexWarren.jpg" alt="Alex Warren" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:12,opacity:0.7,transform:'translate3d(calc(-50% + 80px),calc(-50% - 50px),-60px) rotate(-6deg) scale(0.925)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/currentjoys.jpg" alt="Current Joys" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:11,opacity:0.6,transform:'translate3d(calc(-50% - 100px),calc(-50% - 64px),-80px) rotate(4deg) scale(0.9)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/teddyswims.jpg" alt="Teddy Swims" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:10,opacity:0.5,transform:'translate3d(calc(-50% + 140px),calc(-50% - 76px),-100px) rotate(-3deg) scale(0.875)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Princess Nokia.jpg" alt="Princess Nokia" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:9,opacity:0.4,transform:'translate3d(calc(-50% - 180px),calc(-50% - 90px),-120px) rotate(5deg) scale(0.85)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Chief Keef.jpg" alt="Chief Keef" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:8,opacity:0.35,transform:'translate3d(calc(-50% + 60px),calc(-50% - 100px),-140px) rotate(-4deg) scale(0.825)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/RoyelOtis.jpg" alt="Royel Otis" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:7,opacity:0.3,transform:'translate3d(calc(-50% - 120px),calc(-50% - 112px),-160px) rotate(6deg) scale(0.8)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Ali Gatie.jpg" alt="Ali Gatie" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:6,opacity:0.3,transform:'translate3d(calc(-50% + 200px),calc(-50% - 120px),-180px) rotate(-2deg) scale(0.775)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Mach-Hommy.jpg" alt="Mach-Hommy" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:5,opacity:0.3,transform:'translate3d(calc(-50% - 60px),calc(-50% - 130px),-200px) rotate(3deg) scale(0.75)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/A$AP Ferg.jpg" alt="A$AP Ferg" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:4,opacity:0.3,transform:'translate3d(calc(-50% + 110px),calc(-50% - 140px),-220px) rotate(-5deg) scale(0.725)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/pinksweats.jpg" alt="Pink Sweat$" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:3,opacity:0.3,transform:'translate3d(calc(-50% - 200px),calc(-50% - 148px),-240px) rotate(4deg) scale(0.7)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/Ichiko Aoba.jpg" alt="Ichiko Aoba" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:2,opacity:0.3,transform:'translate3d(calc(-50% + 50px),calc(-50% - 156px),-260px) rotate(-3deg) scale(0.675)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/LilTjay.jpg" alt="Lil Tjay" draggable={false} />
              </figure>
              <figure className="hero-slide" style={{zIndex:1,opacity:0.3,transform:'translate3d(calc(-50% - 140px),calc(-50% - 164px),-280px) rotate(5deg) scale(0.65)',filter:'grayscale(100%)'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/v1/artists/YG.jpg" alt="YG" draggable={false} />
              </figure>
            </div>
          </div>
          <h1>Too Lost<br />Music Group</h1>
          <div className="hero-bottom">
            <div className="hero-scroll">
              <span>scroll</span>
              <div className="hero-scroll-line"></div>
            </div>
          </div>
        </section>

        {/* DIVISIONS */}
        <section className="section" id="divisions">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">Divisions</h2></div>
              <span className="section-count">12</span>
            </div>
            {/* eslint-disable @next/next/no-img-element */}
            <div className="cards-grid">
              <div className="card division-card"><div className="division-card-logo"><img src="/v1/logos/too-lost-text.png" alt="Too Lost" /></div><p className="card-tag">distribution</p></div>
              <div className="card division-card"><div className="division-card-logo"><img src="/v1/logos/gyro.png" alt="G.Y.R.O" /></div><p className="card-tag">distribution · anz</p></div>
              <div className="card division-card"><div className="division-card-logo"><span className="division-card-subbrand"><img src="/v1/too-lost-icon.png" alt="Too Lost" className="division-card-icon" /><span className="division-card-subbrand-name">Ventures</span></span></div><p className="card-tag">venture capital</p></div>
              <div className="card division-card"><div className="division-card-logo"><span className="division-card-subbrand"><img src="/v1/too-lost-icon.png" alt="Too Lost" className="division-card-icon" /><span className="division-card-subbrand-name">Publishing</span></span></div><p className="card-tag">publishing</p></div>
              <div className="card division-card"><div className="division-card-logo"><span className="division-card-subbrand"><img src="/v1/too-lost-icon.png" alt="Too Lost" className="division-card-icon" /><span className="division-card-subbrand-name">Catalog</span></span></div><p className="card-tag">catalog investment</p></div>
              <div className="card division-card"><div className="division-card-logo"><span className="division-card-initials">TLX</span></div><p className="card-tag">copyright acquisition</p></div>
              <div className="card division-card"><div className="division-card-logo"><img src="/v1/logos/group-speed.png" alt="Group Speed" /></div><p className="card-tag">marketing &amp; artist services</p></div>
              <div className="card division-card"><div className="division-card-logo"><img src="/v1/logos/distrodirect.png" alt="DistroDirect" /></div><p className="card-tag">enterprise distribution</p></div>
              <div className="card division-card"><div className="division-card-logo"><img src="/v1/logos/soothe-sounds.png" alt="Soothe Sounds" /></div><p className="card-tag">artist services &amp; distribution</p></div>

            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        {/* OFFICES */}
        <section className="section" id="offices">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">Global Presence</h2></div>
              <span className="section-count">7</span>
            </div>
            <div className="cards-grid">
              <div className="card"><p className="card-tag">united states</p><h3 className="card-title">New York, New York</h3><p className="card-desc">Too Lost (HQ)</p></div>
              <div className="card"><p className="card-tag">united states</p><h3 className="card-title">Hollywood, California</h3><p className="card-desc">Too Lost</p></div>
              <div className="card"><p className="card-tag">iceland</p><h3 className="card-title">Reykjavík</h3><p className="card-desc">Too Lost</p></div>
              <div className="card"><p className="card-tag">australia</p><h3 className="card-title">Brisbane</h3><p className="card-desc">GYRO Group</p></div>
              <div className="card"><p className="card-tag">india</p><h3 className="card-title">Mumbai</h3><p className="card-desc">Too Lost</p></div>
              <div className="card"><p className="card-tag">brazil</p><h3 className="card-title">São Paulo</h3><p className="card-desc">Too Lost</p></div>
              <div className="card"><p className="card-tag">canada</p><h3 className="card-title">Toronto</h3><p className="card-desc">GYRO Group</p></div>
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="section" id="governance">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">Governance</h2></div>
              <a href="#governance" className="section-count section-count-link">→</a>
            </div>

            <div className="divisions-team-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/v1/ny.jpg" alt="Too Lost Music Group" />
            </div>

            <div className="governance-mission">
              <p className="governance-mission-text">Our mission is to provide creators, labels, and music businesses with the infrastructure, technology, capital, and global access needed to build, scale, and protect valuable music assets.</p>
              <p className="governance-mission-text">Through a portfolio of music companies, brands, platforms, and owned catalog IP, we operate across distribution, publishing technology, rights management, catalog ownership, and music services.</p>
              <p className="governance-mission-text">Our comprehensive framework empowers the independent music sector to grow efficiently, create long-term value, and maintain control over rights, ownership, and creative independence.</p>
            </div>

            {/* eslint-disable @next/next/no-img-element */}
            <div className="governance-block">
              <p className="section-tag">/ board of directors</p>
              <div className="cards-grid">
                <div className="card"><div className="card-avatar"><img src="/v1/team/gregory-hirschhorn.jpg" alt="Gregory Hirschhorn" /></div><p className="card-tag">board director</p><h3 className="card-title">Gregory Hirschhorn</h3><p className="card-desc">Too Lost Music Group</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/alex-silverstein.jpg" alt="Alex Silverstein" /></div><p className="card-tag">board director</p><h3 className="card-title">Alex Silverstein</h3><p className="card-desc">Too Lost Music Group</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/michael-berk.jpg" alt="Michael S. Berk" /></div><p className="card-tag">board director</p><h3 className="card-title">Michael S. Berk</h3><p className="card-desc">TA Associates</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/gabriel-weissmann.jpg" alt="Gabriel Weissmann" /></div><p className="card-tag">board director</p><h3 className="card-title">Gabriel Weissmann</h3><p className="card-desc">TA Associates</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/amara-suebsaeng.jpg" alt="Amara Suebsaeng" /></div><p className="card-tag">board director</p><h3 className="card-title">Amara Suebsaeng</h3><p className="card-desc">TA Associates</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/charles-goldstuck.jpg" alt="Charles Goldstuck" /></div><p className="card-tag">board director</p><h3 className="card-title">Charles Goldstuck</h3><p className="card-desc">GoldState Music</p></div>
              </div>
            </div>

            <div className="governance-block">
              <p className="section-tag">/ our partners</p>
              <div className="cards-grid">
                <div className="card"><img src="/v1/investors/goldstate.png" alt="GoldState Music" className="card-logo" /><p className="card-tag">Partner</p><h3 className="card-title">GoldState Music</h3><p className="card-desc">Private investment firm with a primary focus on the music sector</p></div>
                <div className="card"><img src="/v1/investors/ta-associates.png" alt="TA Associates" className="card-logo" /><p className="card-tag">Partner</p><h3 className="card-title">TA Associates</h3><p className="card-desc">Leading global growth private equity firm</p></div>
                <div className="card"><img src="/v1/investors/pinnacle.png" alt="Pinnacle Financial Partners" className="card-logo" /><p className="card-tag">Partner</p><h3 className="card-title">Pinnacle Financial Partners</h3><p className="card-desc">Prominent American regional bank and financial holding company</p></div>
              </div>
            </div>

            <div className="governance-block" id="leadership">
              <p className="section-tag">/ leadership</p>
              <div className="cards-grid">
                <div className="card"><div className="card-avatar"><img src="/v1/team/gregory-hirschhorn.jpg" alt="Gregory Hirschhorn" /></div><p className="card-tag">executive</p><h3 className="card-title">Gregory Hirschhorn</h3><p className="card-desc">Chief Executive Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/bjarki-larusson.jpg" alt="Bjarki Lárusson" /></div><p className="card-tag">executive</p><h3 className="card-title">Bjarki Lárusson</h3><p className="card-desc">Chief Technology Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/bjarki-larusson/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/alex-silverstein.jpg" alt="Alex Silverstein" /></div><p className="card-tag">executive</p><h3 className="card-title">Alex Silverstein</h3><p className="card-desc">Chief Operating Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/alex-silverstein-031537129/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/jay-moore.jpg" alt="Jay Moore" /></div><p className="card-tag">executive</p><h3 className="card-title">Jay Moore</h3><p className="card-desc">Chief Investment Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jayrmoore/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/jennifer-ferrer.jpg" alt="Jennifer Ferrer" /></div><p className="card-tag">executive</p><h3 className="card-title">Jennifer Ferrer</h3><p className="card-desc">Global Director of Commercial Strategy, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jen-ferrer-la/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/andy-irvine.jpg" alt="Andy Irvine" /></div><p className="card-tag">executive</p><h3 className="card-title">Andy Irvine</h3><p className="card-desc">Chief Executive Officer, GYRO Group · Head of APAC, Too Lost Music Group</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/viv-melish.jpg" alt="Viv Melish" /></div><p className="card-tag">executive</p><h3 className="card-title">Viv Melish</h3><p className="card-desc">Chief Marketing Officer, GYRO Group · Director of Commercial Strategy APAC, Too Lost Music Group</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/matthew-rogers.jpg" alt="Matthew Rogers" /></div><p className="card-tag">executive</p><h3 className="card-title">Matthew Rogers</h3><p className="card-desc">Chief Commercial Officer, GYRO Group · Head of DistroDirect</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/alex-wilson.jpg" alt="Alex Wilson" /></div><p className="card-tag">executive</p><h3 className="card-title">Alex Wilson</h3><p className="card-desc">General Manager, GYRO Group</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/adrian-burke.jpg" alt="Adrian Burke" /></div><p className="card-tag">executive</p><h3 className="card-title">Adrian Burke</h3><p className="card-desc">Executive Vice President of Artist Services, GYRO Group · Head of Group Speed</p></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/aldo-davalos.jpg" alt="Aldo Davalos" /></div><p className="card-tag">executive</p><h3 className="card-title">Aldo Davalos</h3><p className="card-desc">Head of Business Development, Too Lost Music Group</p><a href="https://www.linkedin.com/in/aldodavalos/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/marc-emert-hutner.jpg" alt="Marc Emert-Hutner" /></div><p className="card-tag">executive</p><h3 className="card-title">Marc Emert-Hutner</h3><p className="card-desc">VP, Artists &amp; Repertoire, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mahutner/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/mark-vanatta.jpg" alt="Mark VanAtta" /></div><p className="card-tag">executive</p><h3 className="card-title">Mark VanAtta</h3><p className="card-desc">VP, Finance, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mvanatta/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/deanna-devivo.jpg" alt="Deanna DeVivo" /></div><p className="card-tag">executive</p><h3 className="card-title">Deanna DeVivo</h3><p className="card-desc">Director, Human Resources, Too Lost Music Group</p><a href="https://www.linkedin.com/in/deannadevivo/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
                <div className="card"><div className="card-avatar"><img src="/v1/team/elena-occhipinti.jpg" alt="Elena Occhipinti" /></div><p className="card-tag">executive</p><h3 className="card-title">Elena Occhipinti</h3><p className="card-desc">General Counsel, Head of Business Affairs, Too Lost Music Group</p><a href="https://www.linkedin.com/in/eocchipinti/" target="_blank" rel="noopener noreferrer" className="card-linkedin">linkedin →</a></div>
              </div>
            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        {/* ORGANIZATION */}
        <section className="section" id="organization">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">Our Organization</h2></div>
              <span className="section-count">150+</span>
            </div>
            <div className="org-section">
              <p className="org-statement">Supported by a team of more than 150 professionals across our portfolio, leadership is focused on building the infrastructure, platforms, and services that empower independent creators, labels, and music businesses worldwide.</p>
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section className="section" id="press">
          <div className="section-inner">
            <div className="divisions-team-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/v1/norris-niman-ePB2oGU8mb4-unsplash.jpg" alt="Too Lost Music Group" />
            </div>
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">News</h2></div>
            </div>
            {/* eslint-disable @next/next/no-img-element */}
            <div className="cards-grid">
              <a href="https://www.musicbusinessworldwide.com/jay-moore-appointed-chief-investment-officer-at-too-lost/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.musicbusinessworldwide.com/files/2026/05/Screenshot-2026-05-28-at-15.00.33.jpg" alt="" className="card-thumb" />
                <p className="card-tag">may 2026 · Music Business Worldwide</p>
                <h3 className="card-title">Jay Moore Appointed Chief Investment Officer at Too Lost</h3>
                <p className="card-desc">Moore joins from Position Music to lead investment strategy as Too Lost expands its catalog and capital platform.</p>
              </a>
              <a href="https://www.billboard.com/pro/too-lost-raises-investment-ta-associates-goldstate/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.billboard.com/wp-content/uploads/2026/02/P11DWTP-e1770740562598.jpg?w=1024" alt="" className="card-thumb" />
                <p className="card-tag">mar 2026 · Billboard</p>
                <h3 className="card-title">Too Lost Raises Capital From TA Associates and GoldState</h3>
                <p className="card-desc">Distribution and artist services platform secures strategic investment led by GoldState Music and TA Associates to fuel global expansion.</p>
              </a>
              <a href="https://www.digitalmusicnews.com/2026/03/02/too-lost-profile-defender-feature/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.digitalmusicnews.com/wp-content/uploads/2026/03/too-lost-profile-defender.png" alt="" className="card-thumb" />
                <p className="card-tag">mar 2026 · Digital Music News</p>
                <h3 className="card-title">Too Lost Launches Profile Defender to Shield Artists From AI-Driven Fakes</h3>
                <p className="card-desc">New feature monitors and prevents unauthorized AI-generated content from appearing on artists&apos; streaming profiles.</p>
              </a>
              <a href="https://www.digitalmusicnews.com/2026/01/22/too-lost-2025-milestone-growth/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.digitalmusicnews.com/wp-content/uploads/2026/01/too-lost-greg-hirschhorn-statement-2026.jpeg" alt="" className="card-thumb" />
                <p className="card-tag">jan 2026 · Digital Music News</p>
                <h3 className="card-title">Too Lost Saw 130% Growth Over 2025—Here&apos;s What&apos;s Next</h3>
                <p className="card-desc">CEO Gregory Hirschhorn reflects on major milestones including revenue growth, new ventures, and plans for 2026.</p>
              </a>
              <a href="https://www.digitalmusicnews.com/2025/11/13/too-lost-global-expansion-south-korea-melon/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.digitalmusicnews.com/wp-content/uploads/2025/11/Untitled-design-2025-11-14T140638.028.png" alt="" className="card-thumb" />
                <p className="card-tag">nov 2025 · Digital Music News</p>
                <h3 className="card-title">Too Lost Expands Global Reach With Melon in South Korea</h3>
                <p className="card-desc">Direct partnership with South Korea&apos;s largest local streaming platform gives artists access to one of Asia&apos;s most important music markets.</p>
              </a>
              <a href="https://www.musicbusinessworldwide.com/too-lost-partners-with-xposure-music-to-co-fund-catalog-acquisitions-with-plans-to-deploy-tens-of-millions-of-dollars-in-upcoming-deals/" target="_blank" rel="noopener noreferrer" className="card card-link">
                <img src="https://www.musicbusinessworldwide.com/files/2025/10/Screenshot-2025-10-30-at-3.19.09-PM-e1761808973797.jpg" alt="" className="card-thumb" />
                <p className="card-tag">oct 2025 · Music Business Worldwide</p>
                <h3 className="card-title">Too Lost Partners with Xposure Music to Co-Fund Catalog Acquisitions</h3>
                <p className="card-desc">Partnership plans to deploy tens of millions of dollars in upcoming catalog deals, combining data-driven valuation with global distribution infrastructure.</p>
              </a>
            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </section>

        {/* CAREERS */}
        <section className="section" id="careers">
          <div className="section-inner">
            <div className="divisions-team-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/v1/jamie-davies-Hao52Fu9-F8-unsplash.jpg" alt="Too Lost Music Group" />
            </div>
            <div className="section-header">
              <div className="section-header-left"><h2 className="section-title">Join Us</h2></div>
              <span className="section-count">11</span>
            </div>
            <div className="cards-grid">
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">a&amp;r · contractor</p><h3 className="card-title">A&amp;R Manager (Miami)</h3><p className="card-desc">Miami, FL</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">a&amp;r · contractor</p><h3 className="card-title">A&amp;R Manager (UK)</h3><p className="card-desc">United Kingdom</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">a&amp;r · contractor</p><h3 className="card-title">A&amp;R Manager (Nashville)</h3><p className="card-desc">Nashville, TN</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">a&amp;r · contractor</p><h3 className="card-title">A&amp;R Manager (LATAM)</h3><p className="card-desc">Latin America</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">a&amp;r · contractor</p><h3 className="card-title">A&amp;R Manager (Asia)</h3><p className="card-desc">Asia</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">engineering · full time</p><h3 className="card-title">Senior Full Stack Developer</h3><p className="card-desc">New York, NY · $130,000 – $140,000</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">operations · full time</p><h3 className="card-title">UGC Administration Coordinator</h3><p className="card-desc">New York, NY · $65,000 – $70,000</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">partnerships · full time</p><h3 className="card-title">DSP Relations Manager</h3><p className="card-desc">Los Angeles, CA · $65,000 – $75,000</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">operations · full time</p><h3 className="card-title">Project Manager</h3><p className="card-desc">New York, NY · $100,000 – $110,000</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">data · full time</p><h3 className="card-title">Business Intelligence &amp; Product Analyst</h3><p className="card-desc">New York, NY or Los Angeles, CA · $95,000 – $100,000</p></a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" className="card card-link"><p className="card-tag">finance · full time</p><h3 className="card-title">Finance &amp; Accounting Manager</h3><p className="card-desc">New York, NY · $135,000 – $145,000</p></a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <h2>Press Inquiries</h2>
          <a href="mailto:press@tlmg.co" className="cta-link">get in touch →</a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              <a href="#">About</a>
              <a href="#governance">Governance</a>
              <a href="#leadership">Leadership</a>
              <a href="#offices">Offices</a>
              <a href="#press">Press</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Divisions</p>
              <a href="https://toolost.com" target="_blank" rel="noopener noreferrer">Too Lost</a>
              <a href="https://www.gyro.music/" target="_blank" rel="noopener noreferrer">G.Y.R.O</a>
              <span className="footer-col-muted">TLX</span>
              <span className="footer-col-muted">Too Lost Ventures</span>
              <span className="footer-col-muted">Too Lost Publishing</span>
              <span className="footer-col-muted">Too Lost Catalog</span>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">&nbsp;</p>
              <span className="footer-col-muted">Group Speed</span>
              <span className="footer-col-muted">DistroDirect</span>
              <a href="https://www.soothesounds.com/" target="_blank" rel="noopener noreferrer">Soothe Sounds</a>

            </div>
            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <a href="mailto:info@tlmg.co">info@tlmg.co</a>
              <a href="mailto:press@tlmg.co">press@tlmg.co</a>
              <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer">Careers Portal</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Too Lost Music Group. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">about</a>
              <a href="#divisions">divisions</a>
              <a href="#press">press</a>
              <a href="#careers">careers</a>
              <a href="#governance">governance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
