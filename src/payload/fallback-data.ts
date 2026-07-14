export interface Company {
  id: string
  name: string
  slug: string
  type: string
  shortDescription: string
  mission?: string
  metrics?: string[]
  productSuite?: string[]
  clients?: string
  clientsLabel?: string
  website?: string
  socials?: { label: string; url: string }[]
  logo?: { url?: string }
  order?: number
}

export const fallbackCompanies: Company[] = [
  {
    id: '1',
    name: 'Too Lost',
    slug: 'too-lost',
    type: 'Distribution',
    shortDescription: 'Founded in New York in 2019, Too Lost is one of the world\'s largest independent music distribution and rights-management platforms. The company represents more than 500,000 artists and labels, manages over five million recordings, delivers music to more than 450 digital platforms and has paid more than $150 million to artists and rights holders.',
    mission: 'Too Lost supports creators and music businesses at every stage, from emerging artists and independent labels to established acts, catalog owners and enterprise partners.\n\nIts client base includes recordings from Pink Sweat$, Chief Keef, The All-American Rejects, Alex Warren, Royel Otis, Teddy Swims, Lil Tjay, Current Joys, Aaron May, Ayesha Erotica, Ali Gatie and others.\n\nThrough its proprietary technology and global infrastructure, Too Lost provides an integrated suite of distribution, rights management, royalty accounting, analytics, marketing, compliance, publishing administration, catalog management and financing solutions. The company also offers customizable enterprise tools that enable distributors, labels and rights holders to manage catalogs, teams, reporting, payments and client relationships at scale.\n\nToo Lost\'s mission is to provide creators and independent music companies with the technology, infrastructure and capital needed to build scalable businesses while retaining control of their rights and ownership.',
    metrics: [
      '450+ integrated stores & services',
      '500,000+ artists & labels',
      '5M+ recordings',
      '$150M+ paid to rights holders',
      'Founded 2020 · New York, NY',
    ],
    productSuite: [
      'Global distribution',
      'Analytics & trends',
      'Royalty accounting & splits',
      'Artist financing & advances',
      'Publishing administration',
      'YouTube Content ID',
      'White label & enterprise',
      'Marketing tools',
    ],
    clients: 'Pink Sweat$, Chief Keef, The All-American Rejects, Alex Warren, Royel Otis, Teddy Swims, Lil Tjay, Current Joys, Aaron May, Ayesha Erotica, Ali Gatie, Luke Chiang, Fog Lake, Eric Reprid, Ruby Waters, anees, Victor Victor Worldwide, Rebellion Records, Heatwave Records, ThaLightsGlobal, Standard Records, GoldState Music, Studio71, and more',
    clientsLabel: 'Clients & catalog include',
    website: 'https://toolost.com',
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/toolost' },
      { label: 'X', url: 'https://x.com/toolostmusic' },
      { label: 'LinkedIn', url: 'https://linkedin.com/company/too-lost' },
    ],
    order: 1,
  },
  {
    id: '6',
    name: 'G.Y.R.O',
    slug: 'gyro',
    type: 'Distribution · ANZ',
    shortDescription: 'Founded in Brisbane in 2018, GYRO is an independent music distribution and artist-services company built to help artists release music globally while retaining ownership and control of their careers.',
    mission: 'GYRO distributes music to more than 100 digital platforms worldwide, including Spotify, Apple Music, Amazon Music, YouTube Music, TikTok and Meta. Artists receive access to free ISRC codes, automated royalty splits, transparent reporting and direct support from a team with deep experience in the independent music sector.\n\nBeyond distribution, GYRO provides a broader suite of artist services spanning editorial playlist pitching, digital marketing, publicity, radio promotion, social and content strategy, synchronization licensing and publishing administration. Its model is designed to support artists at different stages of development, from emerging acts releasing their first recordings to established independent artists running sophisticated global campaigns.\n\nHeadquartered in Brisbane with a growing international presence, GYRO combines locally informed artist development with global distribution infrastructure and platform relationships. The company has supported artists including Lithe, Emma Memma, Polish Club, Odette, JK-47 and Tom Cardy, alongside a diverse roster of independent artists across Australia, New Zealand and other international markets.\n\nWith an artist-first approach, transparent economics and hands-on support, GYRO has grown into one of Australia\'s leading independent music distribution platforms and a trusted partner for artists seeking to build sustainable careers without giving up ownership of their music.',
    metrics: [
      'Founded 2018 · Brisbane, Australia',
      '100+ digital platforms worldwide',
      'Full-service artist distribution & services',
      'Leading independent distributor in ANZ',
    ],
    clients: 'Lithe, Emma Memma, Polish Club, Odette, JK-47, Tom Cardy',
    clientsLabel: 'Artists include:',
    website: 'https://www.gyro.music/',
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/gyro.music' },
    ],
    order: 2,
  },
  {
    id: '2',
    name: 'TLX',
    slug: 'tlx',
    type: 'Copyright Acquisition',
    shortDescription: 'TLX is the sound recording copyright acquisition and investment division of Too Lost Music Group.',
    mission: 'The company invests millions of dollars in acquiring and financing recorded music rights from culturally significant artists, independent labels and rights holders. TLX focuses on catalogs with enduring audience value, strong digital performance and meaningful cultural relevance, combining disciplined investment underwriting with Too Lost Music Group\'s global distribution, data, rights-management and monetization infrastructure.\n\nTLX\'s approach extends beyond passive catalog ownership. Through active rights administration, platform optimization, marketing, audience development and long-term catalog strategy, the company works to expand the reach and commercial value of the music it acquires while preserving the identity and cultural importance of each body of work.\n\nIts catalog includes works from Pink Sweat$, Eric Reprid, DigBar, Luci4, Ayesha Erotica, Miniature Tigers, Xposure Music, Kalan.FrFr, Fukkit, FLVME, Tskinz, C3six, Fly Rich Double, 100BandXan, Rot Ken, Loick Essien, and Saviii 3rd\n\nAs part of Too Lost Music Group, TLX combines institutional capital, proprietary music data and deep operating expertise to build a diversified portfolio of high-quality recorded music intellectual property.',
    metrics: [
      'Millions invested in IP acquisitions',
      'Focus on culturally significant catalogs',
      'Active rights administration & monetization',
      'Long-term rights ownership',
    ],
    clients: 'Pink Sweat$, Eric Reprid, DigBar, Luci4, Ayesha Erotica, Miniature Tigers, Xposure Music, Kalan.FrFr, Fukkit, FLVME, Tskinz, C3six, Fly Rich Double, 100BandXan, Rot Ken, Loick Essien, Saviii 3rd',
    clientsLabel: 'Catalog:',
    order: 3,
  },
  {
    id: '3',
    name: 'Too Lost Ventures',
    slug: 'too-lost-ventures',
    type: 'Venture Capital',
    shortDescription: 'Too Lost Ventures is an investment vehicle focused on strategically deploying capital across media, music, technology and the broader creator economy.',
    mission: 'The firm invests in companies building the infrastructure, platforms and services shaping the future of how content is created, distributed, financed and monetized. Its approach is informed by Too Lost\'s experience operating at the intersection of music, technology, intellectual property and digital media, allowing it to support businesses with both capital and practical industry expertise.\n\nToo Lost Ventures invests across stages and business models, with a particular interest in founder-led companies developing differentiated technology, financial products, audience platforms and modern infrastructure for artists, creators and media businesses.\n\nIts portfolio includes AntiFragile Music, beehiiv, Backwards Capital, Indify, Mayk.it and beatBread.\n\nBy combining long-term capital with strategic insight and an extensive network across music, media and technology, Too Lost Ventures seeks to partner with ambitious founders building durable, category-defining companies.',
    metrics: [
      'Strategic investments in music, media & tech',
      'Focus on founder-led companies',
      'Capital + industry expertise',
    ],
    clients: 'AntiFragile Music, beehiiv, Backwards Capital, Indify, Mayk.it, beatBread',
    clientsLabel: 'Portfolio:',
    order: 4,
  },
  {
    id: '4',
    name: 'Too Lost Publishing',
    slug: 'too-lost-publishing',
    type: 'Publishing',
    shortDescription: 'Too Lost Publishing is a global publishing administration and synchronization company operated in partnership with BMG.',
    mission: 'The company represents thousands of musical compositions worldwide on behalf of artists, songwriters, producers, publishers, record labels and studios. Through its international administration infrastructure, Too Lost Publishing helps clients register works, collect publishing royalties, manage ownership data and monetize compositions across global markets.\n\nIts services span performance, mechanical and digital royalty administration, copyright registration, catalog management, royalty accounting and neighboring publishing functions. Through its partnership with BMG, Too Lost Publishing provides clients with access to an established global collection network and comprehensive rights-management capabilities.\n\nToo Lost Publishing also operates as a synchronization house, representing music for placement across film, television, advertising, gaming, digital media and branded content. Its team works to identify licensing opportunities, manage clearances and connect culturally relevant music with visual media partners around the world.\n\nAs part of Too Lost Music Group, the company combines global publishing administration with Too Lost\'s broader distribution, data, financing and rights-management infrastructure. This integrated approach allows creators and rights holders to manage both their recordings and compositions through a coordinated global platform while retaining control of their intellectual property.',
    metrics: [
      'Partnership with BMG',
      'Thousands of compositions administered',
      'Global collection across 50+ societies',
      'Synchronization & licensing',
    ],
    order: 5,
  },
  {
    id: '5',
    name: 'Too Lost Catalog',
    slug: 'too-lost-catalog',
    type: 'Catalog Investment',
    shortDescription: 'Too Lost Catalog is a global music rights investment platform formed as a special-purpose vehicle between Too Lost Music Group and Pinnacle Financial Partners.',
    mission: 'The company invests in sound recording and music publishing rights from artists, songwriters, producers, record labels, publishers and other rights holders around the world. Its strategy focuses on acquiring high-quality intellectual property with durable audience demand, attractive long-term cash flows and opportunities for continued growth.\n\nToo Lost Catalog combines dedicated institutional capital with Too Lost Music Group\'s proprietary data, global distribution network and expertise across rights management, royalty accounting, marketing and catalog monetization. This infrastructure allows the company to evaluate music assets with precision and actively manage acquired rights following an investment.\n\nThrough its relationship with Pinnacle Financial Partners, a major U.S. commercial banking institution, Too Lost Catalog has access to the financial resources required to pursue acquisitions across a broad range of genres, territories and transaction sizes.\n\nThe company works with rights holders seeking liquidity, succession planning or a long-term institutional partner, offering flexible transaction structures tailored to each catalog and owner.\n\nAs part of Too Lost Music Group, Too Lost Catalog is building a diversified global portfolio of sound recording and publishing rights while helping preserve, develop and expand the cultural and commercial value of the music it acquires.',
    metrics: [
      'Partnership with Pinnacle Financial Partners',
      'Sound recording & publishing rights acquisitions',
      'Proprietary data & global distribution network',
      'Flexible transaction structures',
    ],
    order: 6,
  },
  {
    id: '7',
    name: 'Group Speed',
    slug: 'group-speed',
    type: 'Marketing & Artist Services',
    shortDescription: 'Group Speed is a boutique artist-services company providing independent artists, labels and music entrepreneurs with distribution, marketing and strategic support designed to accelerate long-term growth.',
    mission: 'Powered by DistroDirect\'s global distribution technology, Group Speed combines sophisticated infrastructure with a highly personalized service model. Its platform provides transparent royalty reporting, flexible payment options, content analytics and the operational tools required to manage releases, catalogues and artist communities at scale.\n\nBeyond distribution, Group Speed works closely with its partners across streaming strategy, digital marketing, content development, audience growth, public relations and release planning. Its team helps artists optimize their presence across major digital platforms, strengthen fan engagement and develop campaigns focused on meaningful conversion rather than passive consumption.\n\nThe company also supports paid media, influencer and community marketing, YouTube monetization, brand partnerships and broader commercial opportunities. Through its distribution and financial infrastructure, Group Speed can provide artist funding, recurring advances and monthly royalty reporting and payments.\n\nIntentionally selective in its approach, Group Speed is designed to offer the capabilities of a global music company while maintaining the attention, flexibility and creative collaboration of an independent partner. The company has worked with artists including Swedish House Mafia, Dom Dolla, ONEFOUR, MOLIY, Boy & Bear, The All-American Rejects, Crooked Colours and a diverse range of emerging independent talent.',
    metrics: [
      'Boutique artist services & distribution',
      'Powered by DistroDirect infrastructure',
      'Artist funding & recurring advances',
      'Streaming strategy & digital marketing',
    ],
    clients: 'Swedish House Mafia, Dom Dolla, ONEFOUR, MOLIY, Boy & Bear, The All-American Rejects, Crooked Colours',
    clientsLabel: 'Artists include:',
    website: 'https://www.groupspeed.co/',
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/groupspeed' },
    ],
    order: 7,
  },
  {
    id: '8',
    name: 'DistroDirect',
    slug: 'distrodirect',
    type: 'Enterprise Distribution',
    shortDescription: 'DistroDirect is a global white-label music distribution platform that enables record labels, artist managers and music businesses to launch and operate digital distribution services under their own brands.',
    mission: 'Founded by Australian independent music company GYRO Group, DistroDirect provides its partners with a fully customizable platform for managing music delivery, catalogues, rights, royalties, payments and artist accounts. Partners can control their own branding, pricing, royalty structures and customer relationships without having to build or maintain proprietary distribution technology.\n\nThrough DistroDirect, music businesses can deliver releases to more than 100 digital platforms worldwide, including Spotify, Apple Music, Amazon Music, YouTube, TikTok and Deezer. The platform also offers royalty splitting, financial reporting, analytics, administrative tools and global customer support, alongside access to optional marketing and promotional services.\n\nHeadquartered in Brisbane and supported by teams across six continents, DistroDirect works with more than 500 independent distribution partners across over 40 markets. Its technology allows local and specialized music companies to scale their artist communities, create new revenue streams and retain control of their brands and commercial relationships.\n\nBy combining global distribution infrastructure with local market expertise, DistroDirect has developed into an important technology provider for the independent music sector and a growing network of boutique distributors, labels and artist-service companies worldwide.',
    metrics: [
      '500+ independent distribution partners',
      '40+ markets worldwide',
      '100+ digital platforms',
      'Headquartered in Brisbane',
    ],
    order: 8,
  },
  {
    id: '9',
    name: 'Soothe Sounds',
    slug: 'soothe-sounds',
    type: 'Artist Services & Distribution',
    shortDescription: 'Soothe Sounds is an invite-only instrumental music program specializing in classical, ambient and contemporary instrumental music.',
    mission: 'Part of GYRO Group and powered by DistroDirect\'s distribution infrastructure, Soothe Sounds works with a curated international community of composers, producers and instrumentalists. The company provides artists with global digital distribution, priority support, editorial playlist pitching and access to additional promotional resources and revenue opportunities.\n\nSoothe Sounds is designed around a selective, service-led model rather than open-access distribution. Its team supports each release throughout the distribution process while working to position instrumental music across leading streaming platforms and relevant editorial and algorithmic listening environments.\n\nThe company also operates and regularly updates its own network of instrumental playlists, helping introduce new releases from its artists to listeners around the world. Its roster spans solo composers, pianists, producers, ensembles and contemporary instrumental artists from a broad range of international markets.\n\nThrough its focused genre expertise, personalized artist support and global distribution capabilities, Soothe Sounds has established itself as a dedicated home for premium instrumental music and the creators working across the classical, ambient and modern wellness-listening landscape.',
    metrics: [
      'Invite-only instrumental music program',
      'Part of GYRO Group',
      'Curated international roster',
      'Proprietary playlist network',
    ],
    website: 'https://www.soothesounds.com/',
    order: 9,
  },
]
