const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(path.join(__dirname, 'src/app/globals.css'), 'utf-8')

const html = `<!DOCTYPE html>
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
${css}

/* Static export overrides — make everything visible immediately */
.section, .corp-photo-break, .cta-section,
.cards-grid .card, .divisions-list .division-list-item,
.governance-mission, .governance-block {
  opacity: 1 !important;
  transform: none !important;
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
      <figure class="hero-slide is-active" style="z-index:15;opacity:1;transform:translate3d(-50%,-50%,40px) rotate(0deg) scale(1);filter:grayscale(0%)">
        <img src="images/artists/Flo-Milli.jpg" alt="Flo Milli" draggable="false">
        <figcaption class="hero-slide-caption">01 / flo milli</figcaption>
      </figure>
      <figure class="hero-slide" style="z-index:14;opacity:0.9;transform:translate3d(calc(-50% + 170px),calc(-50% - 14px),-20px) rotate(-5deg) scale(0.975);filter:grayscale(100%)">
        <img src="images/artists/070 Shake.jpg" alt="070 Shake" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:13;opacity:0.8;transform:translate3d(calc(-50% - 150px),calc(-50% - 28px),-40px) rotate(3deg) scale(0.95);filter:grayscale(100%)">
        <img src="images/artists/AlexWarren.jpg" alt="Alex Warren" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:12;opacity:0.7;transform:translate3d(calc(-50% + 80px),calc(-50% - 50px),-60px) rotate(-6deg) scale(0.925);filter:grayscale(100%)">
        <img src="images/artists/currentjoys.jpg" alt="Current Joys" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:11;opacity:0.6;transform:translate3d(calc(-50% - 100px),calc(-50% - 64px),-80px) rotate(4deg) scale(0.9);filter:grayscale(100%)">
        <img src="images/artists/teddyswims.jpg" alt="Teddy Swims" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:10;opacity:0.5;transform:translate3d(calc(-50% + 140px),calc(-50% - 76px),-100px) rotate(-3deg) scale(0.875);filter:grayscale(100%)">
        <img src="images/artists/Princess Nokia.jpg" alt="Princess Nokia" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:9;opacity:0.4;transform:translate3d(calc(-50% - 180px),calc(-50% - 90px),-120px) rotate(5deg) scale(0.85);filter:grayscale(100%)">
        <img src="images/artists/Chief Keef.jpg" alt="Chief Keef" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:8;opacity:0.35;transform:translate3d(calc(-50% + 60px),calc(-50% - 100px),-140px) rotate(-4deg) scale(0.825);filter:grayscale(100%)">
        <img src="images/artists/RoyelOtis.jpg" alt="Royel Otis" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:7;opacity:0.3;transform:translate3d(calc(-50% - 120px),calc(-50% - 112px),-160px) rotate(6deg) scale(0.8);filter:grayscale(100%)">
        <img src="images/artists/Ali Gatie.jpg" alt="Ali Gatie" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:6;opacity:0.3;transform:translate3d(calc(-50% + 200px),calc(-50% - 120px),-180px) rotate(-2deg) scale(0.775);filter:grayscale(100%)">
        <img src="images/artists/Mach-Hommy.jpg" alt="Mach-Hommy" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:5;opacity:0.3;transform:translate3d(calc(-50% - 60px),calc(-50% - 130px),-200px) rotate(3deg) scale(0.75);filter:grayscale(100%)">
        <img src="images/artists/A$AP Ferg.jpg" alt="A$AP Ferg" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:4;opacity:0.3;transform:translate3d(calc(-50% + 110px),calc(-50% - 140px),-220px) rotate(-5deg) scale(0.725);filter:grayscale(100%)">
        <img src="images/artists/pinksweats.jpg" alt="Pink Sweat$" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:3;opacity:0.3;transform:translate3d(calc(-50% - 200px),calc(-50% - 148px),-240px) rotate(4deg) scale(0.7);filter:grayscale(100%)">
        <img src="images/artists/Ichiko Aoba.jpg" alt="Ichiko Aoba" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:2;opacity:0.3;transform:translate3d(calc(-50% + 50px),calc(-50% - 156px),-260px) rotate(-3deg) scale(0.675);filter:grayscale(100%)">
        <img src="images/artists/LilTjay.jpg" alt="Lil Tjay" draggable="false">
      </figure>
      <figure class="hero-slide" style="z-index:1;opacity:0.3;transform:translate3d(calc(-50% - 140px),calc(-50% - 164px),-280px) rotate(5deg) scale(0.65);filter:grayscale(100%)">
        <img src="images/artists/YG.jpg" alt="YG" draggable="false">
      </figure>
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
      <div class="division-list-item"><div class="division-list-logo"><img src="images/too-lost-icon.png" alt="Too Lost"></div><div class="division-list-info"><p class="division-list-name">Too Lost</p><p class="division-list-type">Distribution</p></div><p class="division-list-desc">A leading independent music distribution company, powering hundreds of thousands of artists and millions of recordings globally.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/gyro.png" alt="G.Y.R.O."></div><div class="division-list-info"><p class="division-list-name">G.Y.R.O.</p><p class="division-list-type">Distribution \xb7 ANZ</p></div><p class="division-list-desc">The largest independent artist distribution company in Australia &amp; New Zealand</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLX</span></div><div class="division-list-info"><p class="division-list-name">TLX</p><p class="division-list-type">Copyright Acquisition</p></div><p class="division-list-desc">Sound recording copyright acquisition firm, investing millions into acquiring intellectual property rights from culturally exciting artists and labels.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLV</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Ventures</p><p class="division-list-type">Venture Capital</p></div><p class="division-list-desc">An investment vehicle, deploying capital strategically in media and technology companies shaping the future of the industry.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLP</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Publishing</p><p class="division-list-type">Publishing</p></div><p class="division-list-desc">Publishing administration and sync house in partnership with BMG. Representing thousands of compositions across the world on behalf of artists, publishers, songwriters and studios.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">TLC</span></div><div class="division-list-info"><p class="division-list-name">Too Lost Catalog</p><p class="division-list-type">Catalog Investment</p></div><p class="division-list-desc">An catalog acquisition company in partnership with Pinnacle Financial Partners, an American commercial bank with over $100B in assets under management.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/group-speed.png" alt="Group Speed"></div><div class="division-list-info"><p class="division-list-name">Group Speed</p><p class="division-list-type">Marketing &amp; Artist Services</p></div><p class="division-list-desc">Marketing and artist services organization powering campaigns for artists at every level.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/distrodirect.png" alt="DistroDirect"></div><div class="division-list-info"><p class="division-list-name">DistroDirect</p><p class="division-list-type">Enterprise Distribution</p></div><p class="division-list-desc">White label and enterprise distribution solution powering over 500 distribution companies across 40 regional markets worldwide.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/soothe-sounds.png" alt="Soothe Sounds"></div><div class="division-list-info"><p class="division-list-name">Soothe Sounds</p><p class="division-list-type">Artist Services &amp; Distribution</p></div><p class="division-list-desc">A highly selective artist services &amp; distribution company signing composers with a focus on original neo-classical and contemporary instrumentals.</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/sweat-it-out.png" alt="Sweat It Out"></div><div class="division-list-info"><p class="division-list-name">Sweat It Out</p><p class="division-list-type">Label \xb7 Electronic</p></div><p class="division-list-desc">Culturally significant electronic label in Australia for more than 20 years</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><img src="images/logos/xelon.png" alt="Xelon Entertainment"></div><div class="division-list-info"><p class="division-list-name">Xelon Entertainment</p><p class="division-list-type">Label Distribution</p></div><p class="division-list-desc">A curated label distribution company, with a primary focus on servicing electronic record labels</p><span class="division-list-arrow">\u2192</span></div>
      <div class="division-list-item"><div class="division-list-logo"><span class="division-list-initials">USG</span></div><div class="division-list-info"><p class="division-list-name">Usage</p><p class="division-list-type">Digital Asset Management</p></div><p class="division-list-desc">A digital asset management firm administrating and monetizing copyrights across media platforms like YouTube, TikTok and Facebook/Instagram on behalf of leading independent artists and labels.</p><span class="division-list-arrow">\u2192</span></div>
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
      <div class="card"><p class="card-tag">australia</p><h3 class="card-title">Brisbane</h3><p class="card-desc">GYRO.Group</p></div>
      <div class="card"><p class="card-tag">iceland</p><h3 class="card-title">Reykjav\xedk</h3><p class="card-desc">Too Lost</p></div>
    </div>
  </div>
</section>

<!-- GOVERNANCE -->
<section class="section" id="governance">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Governance</h2></div>
      <a href="#governance" class="section-count section-count-link">\u2192</a>
    </div>

    <div class="divisions-team-photo">
      <img src="images/ny.jpg" alt="Too Lost Music Group">
    </div>

    <div class="governance-mission">
      <p class="governance-mission-text">Our mission is to provide creators, labels, and music businesses with the infrastructure, technology, capital, and global access needed to build, scale, and protect valuable music assets.</p>
      <p class="governance-mission-text">Through a portfolio of music companies, brands, platforms, and owned catalog IP, we operate across distribution, publishing technology, rights management, catalog ownership, and music services.</p>
      <p class="governance-mission-text">Our comprehensive framework empowers the independent music sector to grow efficiently, create long-term value, and maintain control over rights, ownership, and creative independence.</p>
    </div>

    <div class="governance-block">
      <p class="section-tag">/ board of directors</p>
      <div class="cards-grid">
        <div class="card"><div class="card-avatar"><img src="images/team/gregory-hirschhorn.jpg" alt="Gregory Hirschhorn"></div><p class="card-tag">board director</p><h3 class="card-title">Gregory Hirschhorn</h3><p class="card-desc">Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-silverstein.jpg" alt="Alex Silverstein"></div><p class="card-tag">board director</p><h3 class="card-title">Alex Silverstein</h3><p class="card-desc">Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/michael-berk.jpg" alt="Michael S. Berk"></div><p class="card-tag">board director</p><h3 class="card-title">Michael S. Berk</h3><p class="card-desc">TA Associates</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/gabriel-weissmann.jpg" alt="Gabriel Weissmann"></div><p class="card-tag">board director</p><h3 class="card-title">Gabriel Weissmann</h3><p class="card-desc">TA Associates</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/amara-suebsaeng.jpg" alt="Amara Suebsaeng"></div><p class="card-tag">board director</p><h3 class="card-title">Amara Suebsaeng</h3><p class="card-desc">TA Associates</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/charles-goldstuck.jpg" alt="Charles Goldstuck"></div><p class="card-tag">board director</p><h3 class="card-title">Charles Goldstuck</h3><p class="card-desc">GoldState Music</p></div>
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
        <div class="card"><div class="card-avatar"><img src="images/team/gregory-hirschhorn.jpg" alt="Gregory Hirschhorn"></div><p class="card-tag">executive</p><h3 class="card-title">Gregory Hirschhorn</h3><p class="card-desc">Chief Executive Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/bjarki-larusson.jpg" alt="Bjarki L\xe1russon"></div><p class="card-tag">executive</p><h3 class="card-title">Bjarki L\xe1russon</h3><p class="card-desc">Chief Technology Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/bjarki-larusson/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-silverstein.jpg" alt="Alex Silverstein"></div><p class="card-tag">executive</p><h3 class="card-title">Alex Silverstein</h3><p class="card-desc">Chief Operating Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/alex-silverstein-031537129/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/jay-moore.jpg" alt="Jay Moore"></div><p class="card-tag">executive</p><h3 class="card-title">Jay Moore</h3><p class="card-desc">Chief Investment Officer, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jayrmoore/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/jennifer-ferrer.jpg" alt="Jennifer Ferrer"></div><p class="card-tag">executive</p><h3 class="card-title">Jennifer Ferrer</h3><p class="card-desc">Global Director of Commercial Strategy, Too Lost Music Group</p><a href="https://www.linkedin.com/in/jen-ferrer-la/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/andy-irvine.jpg" alt="Andy Irvine"></div><p class="card-tag">executive</p><h3 class="card-title">Andy Irvine</h3><p class="card-desc">Chief Executive Officer, GYRO.Group \xb7 Head of APAC, Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/viv-melish.jpg" alt="Viv Melish"></div><p class="card-tag">executive</p><h3 class="card-title">Viv Melish</h3><p class="card-desc">Chief Marketing Officer, GYRO.Group \xb7 Director of Commercial Strategy APAC, Too Lost Music Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/matthew-rogers.jpg" alt="Matthew Rogers"></div><p class="card-tag">executive</p><h3 class="card-title">Matthew Rogers</h3><p class="card-desc">Chief Commercial Officer, GYRO.Group \xb7 Head of DistroDirect</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/alex-wilson.jpg" alt="Alex Wilson"></div><p class="card-tag">executive</p><h3 class="card-title">Alex Wilson</h3><p class="card-desc">General Manager, GYRO.Group</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/adrian-burke.jpg" alt="Adrian Burke"></div><p class="card-tag">executive</p><h3 class="card-title">Adrian Burke</h3><p class="card-desc">Executive Vice President of Artist Services, GYRO.Group \xb7 Head of Group Speed</p></div>
        <div class="card"><div class="card-avatar"><img src="images/team/aldo-davalos.jpg" alt="Aldo Davalos"></div><p class="card-tag">executive</p><h3 class="card-title">Aldo Davalos</h3><p class="card-desc">Head of Business Development, Too Lost Music Group</p><a href="https://www.linkedin.com/in/aldodavalos/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/marc-emert-hutner.jpg" alt="Marc Emert-Hutner"></div><p class="card-tag">executive</p><h3 class="card-title">Marc Emert-Hutner</h3><p class="card-desc">VP, Artists &amp; Repertoire, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mahutner/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/mark-vanatta.jpg" alt="Mark VanAtta"></div><p class="card-tag">executive</p><h3 class="card-title">Mark VanAtta</h3><p class="card-desc">VP, Finance, Too Lost Music Group</p><a href="https://www.linkedin.com/in/mvanatta/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/deanna-devivo.jpg" alt="Deanna DeVivo"></div><p class="card-tag">executive</p><h3 class="card-title">Deanna DeVivo</h3><p class="card-desc">Director, Human Resources, Too Lost Music Group</p><a href="https://www.linkedin.com/in/deannadevivo/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
        <div class="card"><div class="card-avatar"><img src="images/team/elena-occhipinti.jpg" alt="Elena Occhipinti"></div><p class="card-tag">executive</p><h3 class="card-title">Elena Occhipinti</h3><p class="card-desc">General Counsel, Head of Business Affairs, Too Lost Music Group</p><a href="https://www.linkedin.com/in/eocchipinti/" target="_blank" rel="noopener noreferrer" class="card-linkedin">linkedin \u2192</a></div>
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
    <div class="divisions-team-photo">
      <img src="images/norris-niman-ePB2oGU8mb4-unsplash.jpg" alt="Too Lost Music Group">
    </div>
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">News</h2></div>
    </div>
    <div class="cards-grid">
      <a href="https://www.musicbusinessworldwide.com/jay-moore-appointed-chief-investment-officer-at-too-lost/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.musicbusinessworldwide.com/files/2026/05/Screenshot-2026-05-28-at-15.00.33.jpg" alt="" class="card-thumb">
        <p class="card-tag">may 2026 \xb7 Music Business Worldwide</p>
        <h3 class="card-title">Jay Moore Appointed Chief Investment Officer at Too Lost</h3>
        <p class="card-desc">Moore joins from Position Music to lead investment strategy as Too Lost expands its catalog and capital platform.</p>
      </a>
      <a href="https://www.billboard.com/pro/too-lost-raises-investment-ta-associates-goldstate/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.billboard.com/wp-content/uploads/2026/02/P11DWTP-e1770740562598.jpg?w=1024" alt="" class="card-thumb">
        <p class="card-tag">mar 2026 \xb7 Billboard</p>
        <h3 class="card-title">Too Lost Raises Capital From TA Associates and GoldState</h3>
        <p class="card-desc">Distribution and artist services platform secures strategic investment led by GoldState Music and TA Associates to fuel global expansion.</p>
      </a>
      <a href="https://www.digitalmusicnews.com/2026/03/02/too-lost-profile-defender-feature/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.digitalmusicnews.com/wp-content/uploads/2026/03/too-lost-profile-defender.png" alt="" class="card-thumb">
        <p class="card-tag">mar 2026 \xb7 Digital Music News</p>
        <h3 class="card-title">Too Lost Launches Profile Defender to Shield Artists From AI-Driven Fakes</h3>
        <p class="card-desc">New feature monitors and prevents unauthorized AI-generated content from appearing on artists' streaming profiles.</p>
      </a>
      <a href="https://www.digitalmusicnews.com/2026/01/22/too-lost-2025-milestone-growth/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.digitalmusicnews.com/wp-content/uploads/2026/01/too-lost-greg-hirschhorn-statement-2026.jpeg" alt="" class="card-thumb">
        <p class="card-tag">jan 2026 \xb7 Digital Music News</p>
        <h3 class="card-title">Too Lost Saw 130% Growth Over 2025\u2014Here\u2019s What\u2019s Next</h3>
        <p class="card-desc">CEO Gregory Hirschhorn reflects on major milestones including revenue growth, new ventures, and plans for 2026.</p>
      </a>
      <a href="https://www.digitalmusicnews.com/2025/11/13/too-lost-global-expansion-south-korea-melon/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.digitalmusicnews.com/wp-content/uploads/2025/11/Untitled-design-2025-11-14T140638.028.png" alt="" class="card-thumb">
        <p class="card-tag">nov 2025 \xb7 Digital Music News</p>
        <h3 class="card-title">Too Lost Expands Global Reach With Melon in South Korea</h3>
        <p class="card-desc">Direct partnership with South Korea's largest local streaming platform gives artists access to one of Asia's most important music markets.</p>
      </a>
      <a href="https://www.musicbusinessworldwide.com/too-lost-partners-with-xposure-music-to-co-fund-catalog-acquisitions-with-plans-to-deploy-tens-of-millions-of-dollars-in-upcoming-deals/" target="_blank" rel="noopener noreferrer" class="card card-link">
        <img src="https://www.musicbusinessworldwide.com/files/2025/10/Screenshot-2025-10-30-at-3.19.09-PM-e1761808973797.jpg" alt="" class="card-thumb">
        <p class="card-tag">oct 2025 \xb7 Music Business Worldwide</p>
        <h3 class="card-title">Too Lost Partners with Xposure Music to Co-Fund Catalog Acquisitions</h3>
        <p class="card-desc">Partnership plans to deploy tens of millions of dollars in upcoming catalog deals, combining data-driven valuation with global distribution infrastructure.</p>
      </a>
    </div>
  </div>
</section>

<!-- CAREERS -->
<section class="section" id="careers">
  <div class="section-inner">
    <div class="divisions-team-photo">
      <img src="images/jamie-davies-Hao52Fu9-F8-unsplash.jpg" alt="Too Lost Music Group">
    </div>
    <div class="section-header">
      <div class="section-header-left"><h2 class="section-title">Join Us</h2></div>
      <span class="section-count">11</span>
    </div>
    <div class="cards-grid">
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">a&amp;r \xb7 contractor</p><h3 class="card-title">A&amp;R Manager (Miami)</h3><p class="card-desc">Miami, FL</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">a&amp;r \xb7 contractor</p><h3 class="card-title">A&amp;R Manager (UK)</h3><p class="card-desc">United Kingdom</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">a&amp;r \xb7 contractor</p><h3 class="card-title">A&amp;R Manager (Nashville)</h3><p class="card-desc">Nashville, TN</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">a&amp;r \xb7 contractor</p><h3 class="card-title">A&amp;R Manager (LATAM)</h3><p class="card-desc">Latin America</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">a&amp;r \xb7 contractor</p><h3 class="card-title">A&amp;R Manager (Asia)</h3><p class="card-desc">Asia</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">engineering \xb7 full time</p><h3 class="card-title">Senior Full Stack Developer</h3><p class="card-desc">New York, NY \xb7 $130,000 \u2013 $140,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">operations \xb7 full time</p><h3 class="card-title">UGC Administration Coordinator</h3><p class="card-desc">New York, NY \xb7 $65,000 \u2013 $70,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">partnerships \xb7 full time</p><h3 class="card-title">DSP Relations Manager</h3><p class="card-desc">Los Angeles, CA \xb7 $65,000 \u2013 $75,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">operations \xb7 full time</p><h3 class="card-title">Project Manager</h3><p class="card-desc">New York, NY \xb7 $100,000 \u2013 $110,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">data \xb7 full time</p><h3 class="card-title">Business Intelligence &amp; Product Analyst</h3><p class="card-desc">New York, NY or Los Angeles, CA \xb7 $95,000 \u2013 $100,000</p></a>
      <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer" class="card card-link"><p class="card-tag">finance \xb7 full time</p><h3 class="card-title">Finance &amp; Accounting Manager</h3><p class="card-desc">New York, NY \xb7 $135,000 \u2013 $145,000</p></a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
  <h2>Press Inquiries</h2>
  <a href="mailto:press@tlmg.co" class="cta-link">get in touch \u2192</a>
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
        <a href="#press">Press</a>
        <a href="#careers">Careers</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Divisions</p>
        <a href="https://toolost.com" target="_blank" rel="noopener noreferrer">Too Lost</a>
        <a href="https://gyromusic.com" target="_blank" rel="noopener noreferrer">G.Y.R.O.</a>
        <span class="footer-col-muted">TLX</span>
        <span class="footer-col-muted">Too Lost Ventures</span>
        <span class="footer-col-muted">Too Lost Publishing</span>
        <span class="footer-col-muted">Too Lost Catalog</span>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">&nbsp;</p>
        <span class="footer-col-muted">Group Speed</span>
        <span class="footer-col-muted">DistroDirect</span>
        <a href="https://soothesounds.com" target="_blank" rel="noopener noreferrer">Soothe Sounds</a>
        <a href="https://sweatitout.com" target="_blank" rel="noopener noreferrer">Sweat It Out</a>
        <a href="https://xelonentertainment.com" target="_blank" rel="noopener noreferrer">Xelon Entertainment</a>
        <span class="footer-col-muted">Usage</span>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Contact</p>
        <a href="mailto:info@tlmg.co">info@tlmg.co</a>
        <a href="mailto:press@tlmg.co">press@tlmg.co</a>
        <a href="https://toolost.com/careers" target="_blank" rel="noopener noreferrer">Careers Portal</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">\xa9 2026 Too Lost Music Group. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">about</a>
        <a href="#divisions">divisions</a>
        <a href="#press">press</a>
        <a href="#careers">careers</a>
        <a href="#governance">governance</a>
      </div>
    </div>
  </div>
</footer>

</body>
</html>`

fs.writeFileSync(path.join(__dirname, 'export/index.html'), html, 'utf-8')
console.log('Export built successfully — ' + Math.round(html.length / 1024) + 'KB')
