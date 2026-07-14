#!/bin/bash
set -e
cd "$(dirname "$0")"

CSS=$(cat src/app/globals.css)

cat > export/index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Too Lost Music Group</title>
<meta name="description" content="A group of divisions shaping the future of music, media, and technology.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{--font-display:'Syne',sans-serif;--font-mono:'Space Mono',monospace;}
HTMLEOF

echo "$CSS" >> export/index.html

cat >> export/index.html << 'HTMLEOF'

/* Static export overrides */
.section, .corp-photo-break, .cta-section,
.cards-grid .card, .divisions-list .division-list-item,
.governance-mission, .governance-block {
  opacity: 1 !important;
  transform: none !important;
  transition: background 0.2s ease !important;
}
</style>
</head>
<body>

<div class="page-grid" aria-hidden="true"><div class="page-grid-inner"></div></div>

<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#" class="nav-logo"><span class="nav-logo-text">TLMG</span></a>
    <ul class="nav-links">
      <li class="nav-item"><a href="#divisions" class="nav-link">divisions</a></li>
      <li class="nav-item"><a href="#governance" class="nav-link">governance</a></li>
      <li class="nav-item"><a href="#offices" class="nav-link">offices</a></li>
      <li class="nav-item"><a href="#press" class="nav-link">news</a></li>
      <li class="nav-item"><a href="#careers" class="nav-link">careers</a></li>
      <li class="nav-item"><a href="mailto:info@tlmg.co" class="nav-link nav-link-cta">contact</a></li>
    </ul>
  </div>
</nav>

<main>

<!-- HERO -->
<section class="hero">
  <div class="hero-slider">
    <div class="hero-slider-deck">
      <figure class="hero-slide" style="z-index:9;opacity:1;transform:translate3d(-50%,-50%,40px) rotate(0deg) scale(1);filter:grayscale(0)"><img src="images/front_slider/7c245f4be0f31b762762b28fc89f3aff.jpg" alt="Flo Milli"></figure>
      <figure class="hero-slide" style="z-index:8;opacity:0.8;transform:translate3d(calc(-50% - 120px),calc(-50% - 18px),-30px) rotate(-3deg) scale(0.96);filter:grayscale(100%)"><img src="images/front_slider/338a002fe159190253f65e2e0f14fca0.jpg" alt="070 Shake"></figure>
      <figure class="hero-slide" style="z-index:7;opacity:0.6;transform:translate3d(calc(-50% + 120px),calc(-50% - 36px),-60px) rotate(2deg) scale(0.92);filter:grayscale(100%)"><img src="images/front_slider/df442ac62bc2e4574a137d8f4320f684.jpg" alt="Saint Levant"></figure>
      <figure class="hero-slide" style="z-index:6;opacity:0.4;transform:translate3d(calc(-50% - 240px),calc(-50% - 54px),-90px) rotate(-4deg) scale(0.88);filter:grayscale(100%)"><img src="images/front_slider/d6c7bb9fb5a4be9109e358802719d015.jpg" alt="Alex Warren"></figure>
      <figure class="hero-slide" style="z-index:5;opacity:0.2;transform:translate3d(calc(-50% + 240px),calc(-50% - 72px),-120px) rotate(3deg) scale(0.84);filter:grayscale(100%)"><img src="images/front_slider/07f4bd90c19d81fb300370d3da0774ad.jpg" alt="Dom Dolla"></figure>
    </div>
  </div>
  <h1>Too Lost<br>Music Group</h1>
  <div class="hero-bottom">
    <div class="hero-scroll">
      <span>scroll</span>
      <div class="hero-scroll-line"></div>
    </div>
  </div>
</section>

<!-- DIVISIONS -->
<section class="section" id="divisions">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Divisions</h2></div>
      <span class="section-count">12</span>
    </div>
    <div class="divisions-list">
      <a class="division-list-item" href="https://toolost.com" target="_blank"><div class="division-list-logo"><img src="images/logos/too-lost-text.png" alt="Too Lost"></div><div class="division-list-info"><p class="division-list-name">Too Lost</p><p class="division-list-type">distribution</p></div><p class="division-list-desc">A leading independent music distribution company, powering hundreds of thousands of artists and millions of recordings globally.</p><span class="division-list-arrow">→</span></a>
      <a class="division-list-item" href="https://gyromusic.com" target="_blank"><div class="division-list-logo"><img src="images/logos/gyro.png" alt="G.Y.R.O"></div><div class="division-list-info"><p class="division-list-name">G.Y.R.O</p><p class="division-list-type">distribution · anz</p></div><p class="division-list-desc">The largest independent artist distribution company in Australia &amp; New Zealand</p><span class="division-list-arrow">→</span></a>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLX</span></div><div class="division-list-info"><p class="division-list-name">TLX</p><p class="division-list-type">copyright acquisition</p></div><p class="division-list-desc">Sound recording copyright acquisition firm, investing millions into acquiring intellectual property rights from culturally exciting artists and labels.</p><span class="division-list-arrow">→</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLV</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Ventures</p><p class="division-list-type">venture capital</p></div><p class="division-list-desc">An investment vehicle, deploying capital strategically in media and technology companies shaping the future of the industry.</p><span class="division-list-arrow">→</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLP</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Publishing</p><p class="division-list-type">publishing</p></div><p class="division-list-desc">Publishing administration and sync house in partnership with BMG. Representing thousands of compositions across the world.</p><span class="division-list-arrow">→</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLC</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Catalog</p><p class="division-list-type">catalog investment</p></div><p class="division-list-desc">A catalog acquisition company in partnership with Pinnacle Financial Partners, an American commercial bank with over $100B in assets under management.</p><span class="division-list-arrow">→</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/group-speed.png" alt="Group Speed"></div><div class="division-list-info"><p class="division-list-name">Group Speed</p><p class="division-list-type">marketing &amp; artist services</p></div><p class="division-list-desc">Marketing and artist services organization powering campaigns for artists at every level.</p><span class="division-list-arrow">→</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/distrodirect.png" alt="DistroDirect"></div><div class="division-list-info"><p class="division-list-name">DistroDirect</p><p class="division-list-type">enterprise distribution</p></div><p class="division-list-desc">White label and enterprise distribution solution powering over 500 distribution companies across 40 regional markets worldwide.</p><span class="division-list-arrow">→</span></div>
      <a class="division-list-item" href="https://soothesounds.com" target="_blank"><div class="division-list-logo"><img src="images/logos/soothe-sounds.png" alt="Soothe Sounds"></div><div class="division-list-info"><p class="division-list-name">Soothe Sounds</p><p class="division-list-type">artist services &amp; distribution</p></div><p class="division-list-desc">A highly selective artist services &amp; distribution company signing composers with a focus on neo-classical and contemporary instrumentals.</p><span class="division-list-arrow">→</span></a>
      <a class="division-list-item" href="https://sweatitout.com" target="_blank"><div class="division-list-logo"><img src="images/logos/sweat-it-out.png" alt="Sweat It Out"></div><div class="division-list-info"><p class="division-list-name">Sweat It Out</p><p class="division-list-type">label · electronic</p></div><p class="division-list-desc">Culturally significant electronic label in Australia for more than 20 years.</p><span class="division-list-arrow">→</span></a>
      <a class="division-list-item" href="https://xelonentertainment.com" target="_blank"><div class="division-list-logo"><img src="images/logos/xelon.png" alt="Xelon Entertainment"></div><div class="division-list-info"><p class="division-list-name">Xelon Entertainment</p><p class="division-list-type">label distribution</p></div><p class="division-list-desc">A curated label distribution company, with a primary focus on servicing electronic record labels.</p><span class="division-list-arrow">→</span></a>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">USG</span></div><div class="division-list-info"><p class="division-list-name">Usage</p><p class="division-list-type">digital asset management</p></div><p class="division-list-desc">A digital asset management firm administrating and monetizing copyrights across YouTube, TikTok and Facebook/Instagram.</p><span class="division-list-arrow">→</span></div>
    </div>
  </div>
</section>

<!-- OFFICES -->
<section class="section" id="offices">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Global Presence</h2></div>
      <span class="section-count">6</span>
    </div>
    <div class="cards-grid">
      <div class="card"><p class="card-tag">united states</p><h3 class="card-title">Hollywood, California</h3><p class="card-desc">Too Lost</p></div>
      <div class="card"><p class="card-tag">united states</p><h3 class="card-title">New York, New York</h3><p class="card-desc">Too Lost</p></div>
      <div class="card"><p class="card-tag">australia</p><h3 class="card-title">Brisbane</h3><p class="card-desc">GYRO Group</p></div>
      <div class="card"><p class="card-tag">iceland</p><h3 class="card-title">Reykjavík</h3><p class="card-desc">Too Lost</p></div>
    </div>
  </div>
</section>

<!-- GOVERNANCE -->
<section class="section" id="governance">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Governance</h2></div>
    </div>

    <div class="governance-mission">
      <p class="governance-mission-text">Our mission is to provide creators, labels, and music businesses with the infrastructure, technology, capital, and global access needed to build, scale, and protect valuable music assets.</p>
      <p class="governance-mission-text">Through a portfolio of music companies, brands, platforms, and owned catalog IP, we operate across distribution, publishing technology, rights management, catalog ownership, and music services.</p>
      <p class="governance-mission-text">Our comprehensive framework empowers the independent music sector to grow efficiently, create long-term value, and maintain control over rights, ownership, and creative independence.</p>
    </div>

    <div class="governance-block">
      <p class="section-tag">/ board of directors</p>
      <div class="cards-grid">
        <div class="card"><div class="card-avatar"><img src="images/team/gregory-hirschhorn.jpeg" alt="Gregory Hirschhorn"></div><p class="card-tag">board director</p><h3 class="card-title">Gregory Hirschhorn</h3><p class="card-desc">Too Lost Music Group</p><a href="https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-silverstein.png" alt="Alex Silverstein"></div><p class="card-tag">board director</p><h3 class="card-title">Alex Silverstein</h3><p class="card-desc">Too Lost Music Group</p><a href="https://www.linkedin.com/in/alex-silverstein-031537129/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/michael-berk.jpg" alt="Michael S. Berk"></div><p class="card-tag">board director</p><h3 class="card-title">Michael S. Berk</h3><p class="card-desc">TA Associates</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/gabriel-weissmann.jpeg" alt="Gabriel Weissmann"></div><p class="card-tag">board director</p><h3 class="card-title">Gabriel Weissmann</h3><p class="card-desc">TA Associates</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/amara-suebsaeng.jpeg" alt="Amara Suebsaeng"></div><p class="card-tag">board director</p><h3 class="card-title">Amara Suebsaeng</h3><p class="card-desc">TA Associates</p><a href="https://www.linkedin.com/in/amara-suebsaeng-a7a14a23/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/charles-goldstuck.jpeg" alt="Charles Goldstuck"></div><p class="card-tag">board director</p><h3 class="card-title">Charles Goldstuck</h3><p class="card-desc">GoldState Music</p><a href="https://www.linkedin.com/in/charles-goldstuck-765abb90/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
      </div>
    </div>

    <div class="governance-block">
      <p class="section-tag">/ our partners</p>
      <div class="cards-grid">
        <div class="card"><img src="images/investors/goldstate.png" alt="GoldState Music" class="card-logo"><p class="card-tag">Partner</p><h3 class="card-title">GoldState Music</h3><p class="card-desc">Private investment firm with a primary focus on the music sector</p></div>
        <div class="card"><img src="images/investors/ta-associates.png" alt="TA Associates" class="card-logo"><p class="card-tag">Partner</p><h3 class="card-title">TA Associates</h3><p class="card-desc">Leading global growth private equity firm</p></div>
        <div class="card"><img src="images/investors/pinnacle.png" alt="Pinnacle Financial Partners" class="card-logo"><p class="card-tag">Partner</p><h3 class="card-title">Pinnacle Financial Partners</h3><p class="card-desc">Prominent American regional bank and financial holding company</p></div>
      </div>
    </div>

    <div class="governance-block" id="leadership">
      <p class="section-tag">/ leadership</p>
      <div class="cards-grid">
        <div class="card"><div class="card-avatar"><img src="images/team/gregory-hirschhorn.jpeg" alt="Gregory Hirschhorn"></div><p class="card-tag">executive</p><h3 class="card-title">Gregory Hirschhorn</h3><p class="card-desc">Chief Executive Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/bjarki-larusson.jpg" alt="Bjarki Lárusson"></div><p class="card-tag">executive</p><h3 class="card-title">Bjarki Lárusson</h3><p class="card-desc">Chief Technology Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/bjarki-larusson/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-silverstein.png" alt="Alex Silverstein"></div><p class="card-tag">executive</p><h3 class="card-title">Alex Silverstein</h3><p class="card-desc">Chief Operating Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/alex-silverstein-031537129/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/jay-moore.png" alt="Jay Moore"></div><p class="card-tag">executive</p><h3 class="card-title">Jay Moore</h3><p class="card-desc">Chief Investment Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jayrmoore/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/jennifer-ferrer.jpeg" alt="Jennifer Ferrer"></div><p class="card-tag">executive</p><h3 class="card-title">Jennifer Ferrer</h3><p class="card-desc">Global Director of Commercial Strategy, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jen-ferrer-la/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/andy-irvine.jpeg" alt="Andy Irvine"></div><p class="card-tag">executive</p><h3 class="card-title">Andy Irvine</h3><p class="card-desc">Chief Executive Officer, GYRO Group · Head of APAC, Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/viv-melish.jpg" alt="Viv Melish"></div><p class="card-tag">executive</p><h3 class="card-title">Viv Melish</h3><p class="card-desc">Chief Marketing Officer, GYRO Group · Director of Commercial Strategy APAC, Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/matthew-rogers.webp" alt="Matthew Rogers"></div><p class="card-tag">executive</p><h3 class="card-title">Matthew Rogers</h3><p class="card-desc">Chief Commercial Officer, GYRO Group · Head of DistroDirect</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-wilson.jpeg" alt="Alex Wilson"></div><p class="card-tag">executive</p><h3 class="card-title">Alex Wilson</h3><p class="card-desc">General Manager, GYRO Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/adrian-burke.png" alt="Adrian Burke"></div><p class="card-tag">executive</p><h3 class="card-title">Adrian Burke</h3><p class="card-desc">Executive Vice President of Artist Services, GYRO Group · Head of Group Speed</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/aldo-davalos.jpeg" alt="Aldo Davalos"></div><p class="card-tag">executive</p><h3 class="card-title">Aldo Davalos</h3><p class="card-desc">Head of Business Development, Too Lost Music Group</p><a href="https://www.linkedin.com/in/aldodavalos/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/marc-emert-hutner.jpeg" alt="Marc Emert-Hutner"></div><p class="card-tag">executive</p><h3 class="card-title">Marc Emert-Hutner</h3><p class="card-desc">VP, Artists &amp; Repertoire, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mahutner/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/mark-vanatta.jpeg" alt="Mark VanAtta"></div><p class="card-tag">executive</p><h3 class="card-title">Mark VanAtta</h3><p class="card-desc">VP, Finance, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mvanatta/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/deanna-devivo.png" alt="Deanna DeVivo"></div><p class="card-tag">executive</p><h3 class="card-title">Deanna DeVivo</h3><p class="card-desc">Director, Human Resources, Too Lost Music Group</p><a href="https://www.linkedin.com/in/deannadevivo/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/elena-occhipinti.png" alt="Elena Occhipinti"></div><p class="card-tag">executive</p><h3 class="card-title">Elena Occhipinti</h3><p class="card-desc">General Counsel, Head of Business Affairs, Too Lost Music Group</p><a href="https://www.linkedin.com/in/eocchipinti/" target="_blank" class="card-linkedin">LinkedIn →</a></div>
      </div>
    </div>
  </div>
</section>

<!-- ORGANIZATION -->
<section class="section" id="organization">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Our Organization</h2></div>
      <span class="section-count">150+</span>
    </div>
    <div class="org-section">
      <p class="org-statement">Supported by a team of more than 150 professionals across our portfolio, leadership is focused on building the infrastructure, platforms, and services that empower independent creators, labels, and music businesses worldwide.</p>
    </div>
  </div>
</section>

<!-- NEWS -->
<section class="section" id="press">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">News</h2></div>
    </div>
    <div class="cards-grid">
      <a href="https://www.billboard.com/photos/indie-power-players-2026-photos-1236269720/" target="_blank" class="card card-link"><p class="card-tag">jun 2026 · Billboard</p><h3 class="card-title">Billboard Indie Power Players 2026</h3><p class="card-desc">Too Lost leadership featured among Billboard's annual Indie Power Players photo gallery.</p></a>
      <a href="https://www.musicbusinessworldwide.com/jay-moore-appointed-chief-investment-officer-at-too-lost/" target="_blank" class="card card-link"><p class="card-tag">may 2026 · Music Business Worldwide</p><h3 class="card-title">Jay Moore Appointed Chief Investment Officer at Too Lost</h3><p class="card-desc">Moore joins from Position Music to lead investment strategy as Too Lost expands its catalog and capital platform.</p></a>
      <a href="https://www.billboard.com/pro/gyro-group-recruits-henry-compton/" target="_blank" class="card card-link"><p class="card-tag">may 2026 · Billboard</p><h3 class="card-title">GYRO Group Recruits Henry Compton</h3><p class="card-desc">Australia's leading indie distributor strengthens leadership team with key hire.</p></a>
      <a href="https://www.musicbusinessworldwide.com/australias-gyro-group-expands-into-latin-america-with-new-office-in-brazil/" target="_blank" class="card card-link"><p class="card-tag">apr 2026 · Music Business Worldwide</p><h3 class="card-title">GYRO Group Expands Into Latin America with New Office in Brazil</h3><p class="card-desc">Australia's largest independent distribution company opens operations in Brazil to serve growing Latin market.</p></a>
      <a href="https://www.billboard.com/pro/too-lost-raises-investment-ta-associates-goldstate/" target="_blank" class="card card-link"><p class="card-tag">mar 2026 · Billboard</p><h3 class="card-title">Too Lost Raises Capital From TA Associates and GoldState</h3><p class="card-desc">Distribution and artist services platform secures strategic investment led by GoldState Music and TA Associates to fuel global expansion.</p></a>
      <a href="https://www.digitalmusicnews.com/2026/01/22/too-lost-2025-milestone-growth/" target="_blank" class="card card-link"><p class="card-tag">jan 2026 · Digital Music News</p><h3 class="card-title">Too Lost Saw 130% Growth Over 2025—Here's What's Next</h3><p class="card-desc">CEO Gregory Hirschhorn reflects on major milestones including revenue growth, new ventures, and plans for 2026.</p></a>
    </div>
  </div>
</section>

<!-- CAREERS -->
<section class="section" id="careers">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Join Us</h2></div>
      <span class="section-count">11</span>
    </div>
    <div class="cards-grid">
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">a&amp;r · contractor</p><h3 class="card-title">A&amp;R Manager (Miami)</h3><p class="card-desc">Miami, FL</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">a&amp;r · contractor</p><h3 class="card-title">A&amp;R Manager (UK)</h3><p class="card-desc">United Kingdom</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">a&amp;r · contractor</p><h3 class="card-title">A&amp;R Manager (Nashville)</h3><p class="card-desc">Nashville, TN</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">a&amp;r · contractor</p><h3 class="card-title">A&amp;R Manager (LATAM)</h3><p class="card-desc">Latin America</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">a&amp;r · contractor</p><h3 class="card-title">A&amp;R Manager (Asia)</h3><p class="card-desc">Asia</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">engineering · full time</p><h3 class="card-title">Senior Full Stack Developer</h3><p class="card-desc">New York, NY · $130,000 – $140,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">operations · full time</p><h3 class="card-title">UGC Administration Coordinator</h3><p class="card-desc">New York, NY · $65,000 – $70,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">partnerships · full time</p><h3 class="card-title">DSP Relations Manager</h3><p class="card-desc">Los Angeles, CA · $65,000 – $75,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">operations · full time</p><h3 class="card-title">Project Manager</h3><p class="card-desc">New York, NY · $100,000 – $110,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">data · full time</p><h3 class="card-title">Business Intelligence &amp; Product Analyst</h3><p class="card-desc">New York, NY or Los Angeles, CA · $95,000 – $100,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" class="card card-link"><p class="card-tag">finance · full time</p><h3 class="card-title">Finance &amp; Accounting Manager</h3><p class="card-desc">New York, NY · $135,000 – $145,000</p></a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
  <h2>Press Inquiries</h2>
  <a href="mailto:press@tlmg.co" class="cta-link">get in touch →</a>
</section>

</main>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-col">
        <p class="footer-col-title">Company</p>
        <a href="#">About</a>
        <a href="#governance">Governance</a>
        <a href="#leadership">Leadership</a>
        <a href="#offices">Offices</a>
        <a href="#press">News</a>
        <a href="#careers">Careers</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Divisions</p>
        <a href="https://toolost.com" target="_blank">Too Lost</a>
        <a href="https://gyromusic.com" target="_blank">G.Y.R.O</a>
        <span class="footer-col-muted">TLX</span>
        <span class="footer-col-muted">Too Lost Ventures</span>
        <span class="footer-col-muted">Too Lost Publishing</span>
        <span class="footer-col-muted">Too Lost Catalog</span>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">&nbsp;</p>
        <span class="footer-col-muted">Group Speed</span>
        <span class="footer-col-muted">DistroDirect</span>
        <a href="https://soothesounds.com" target="_blank">Soothe Sounds</a>
        <a href="https://sweatitout.com" target="_blank">Sweat It Out</a>
        <a href="https://xelonentertainment.com" target="_blank">Xelon Entertainment</a>
        <span class="footer-col-muted">Usage</span>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Contact</p>
        <a href="mailto:info@tlmg.co">info@tlmg.co</a>
        <a href="mailto:press@tlmg.co">press@tlmg.co</a>
        <a href="https://toolost.com/careers" target="_blank">Careers Portal</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Too Lost Music Group. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">about</a>
        <a href="#divisions">divisions</a>
        <a href="#press">news</a>
        <a href="#careers">careers</a>
        <a href="#governance">governance</a>
      </div>
    </div>
  </div>
</footer>

</body>
</html>
HTMLEOF

echo "Export built successfully"
