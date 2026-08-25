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
    name: 'G.Y.R.O.',
    slug: 'gyro',
    type: 'Distribution · ANZ',
    shortDescription: 'Founded in 2018, G.Y.R.O. (formerly known as GYROStream) is Australia’s largest DIY music distribution platform, providing independent artists with the tools, infrastructure and support needed to release and grow their music globally. The company distributes music on behalf of thousands of artists and labels to more than 450 digital platforms worldwide, including Spotify, Apple Music, Amazon Music, YouTube Music, TikTok and Meta.',
    mission: 'Artists retain ownership and control of their music while receiving access to automated royalty splits, transparent reporting and direct support from an experienced local team.\n\nBeyond distribution, G.Y.R.O. offers a range of optional artist services, including playlist pitching, digital marketing, publicity, radio promotion, social and content strategy, synchronization licensing and publishing administration.\n\nHeadquartered in Brisbane, G.Y.R.O. supports a diverse community of independent artists across Australia, New Zealand and international markets. Its accessible technology, transparent economics and artist-first approach have established G.Y.R.O. as a leading platform for independent musicians seeking to build sustainable careers on their own terms.',
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
    shortDescription: 'TLX invests in and finances recorded music rights, focusing on catalogs with durable audience demand, strong digital performance, and long-term cultural and commercial value. The company combines disciplined investment underwriting with Too Lost Music Group’s global distribution, data, rights management, and monetization infrastructure.',
    mission: 'TLX takes an active approach to catalog ownership through rights administration, platform optimization, marketing, audience development, and long-term portfolio strategy. These capabilities are designed to expand the reach and value of acquired rights while preserving the integrity of the underlying works.\n\nAs part of Too Lost Music Group, TLX brings together institutional capital, proprietary music data, and operating expertise to build and manage a diversified portfolio of high-quality recorded music intellectual property.',
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
    shortDescription: 'Too Lost Ventures invests in companies building the infrastructure, platforms, financial solutions and services shaping the future of content creation, distribution, financing and monetization.',
    mission: 'Drawing on TLMG\'s operating experience across music, technology, intellectual property and digital media, the firm provides founders with long-term capital, strategic insight and practical industry expertise.\n\nToo Lost Ventures partners with founder-led businesses across stages, with a focus on differentiated technology, creator and audience platforms, financial products and modern infrastructure serving artists, creators and media companies.\n\nThe firm seeks to support ambitious founders building durable, category-defining businesses across the global media and technology ecosystem.',
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
    shortDescription: 'Too Lost Catalog invests in sound recording and music publishing rights worldwide, focusing on high-quality intellectual property with durable audience demand, attractive long-term cash flows and opportunities for continued growth.',
    mission: 'The company combines institutional capital with Too Lost Music Group’s proprietary data, global distribution network and expertise in rights management, royalty accounting, marketing and catalog monetization. Through its relationship with Pinnacle Financial Partners, Too Lost Catalog has the resources to pursue acquisitions across a wide range of genres, territories and transaction sizes.\n\nToo Lost Catalog offers flexible transaction structures for rights holders seeking liquidity, succession planning or a long-term institutional partner. As part of Too Lost Music Group, the company is building a diversified global portfolio while preserving and expanding the cultural and commercial value of the music it acquires.',
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
    shortDescription: 'Group Speed is an artist and label services agency providing strategic marketing, audience development and campaign support to independent artists, labels and music companies.',
    mission: 'The company works closely with its partners across digital marketing, streaming strategy, release planning, content development, public relations, paid media, influencer and community marketing, YouTube monetization and brand partnerships. Its team develops tailored campaigns designed to strengthen fan engagement, increase visibility and convert audience attention into sustainable commercial growth.\n\nGroup Speed combines the resources and capabilities of a global music company with the flexibility, attention and creative collaboration of an independent agency. It has worked with artists including Swedish House Mafia, Dom Dolla, WILLOW, ONEFOUR, MOLIY, Boy & Bear, The All-American Rejects, Crooked Colours and a broad range of emerging talent.',
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
    shortDescription: 'DistroDirect is a white-label music distribution and rights-management platform built for independent distributors, labels and artist-service companies. Its customizable technology enables partners to manage music delivery, catalogues, royalties, payments and artist accounts under their own brands, while retaining control over pricing, commercial terms and customer relationships.',
    mission: 'The platform supports delivery to more than 450+ digital services worldwide and provides royalty splitting, financial reporting, analytics, administrative tools and global customer support, alongside optional marketing and promotional services.\n\nHeadquartered in Brisbane and serving more than 500 partners across over 40 markets, DistroDirect helps music businesses scale their operations, expand their artist communities and develop new revenue streams without building proprietary distribution infrastructure.',
    metrics: [
      '500+ independent distribution partners',
      '40+ markets worldwide',
      '100+ digital platforms',
      'Headquartered in Brisbane',
    ],
    website: 'https://distro.direct/',
    order: 8,
  },
  {
    id: '9',
    name: 'Soothe Sounds',
    slug: 'soothe-sounds',
    type: 'Artist Services & Distribution',
    shortDescription: 'Soothe Sounds is a record label and distributor focused on premium instrumental music across classical, ambient and wellness-oriented genres. The company works with a curated international roster of composers, producers, pianists, ensembles and contemporary instrumental artists.',
    mission: 'Through a selective, service-led model, Soothe Sounds provides global digital distribution, release support, playlist pitching and promotional opportunities. Its team also manages a network of instrumental playlists designed to introduce new music to listeners worldwide and support long-term audience development.\n\nCombining genre expertise, personalized artist support and global distribution capabilities, Soothe Sounds provides a dedicated platform for instrumental artists to release, grow and monetize their music.',
    metrics: [
      'Invite-only instrumental music program',
      'Part of GYRO.Group',
      'Curated international roster',
      'Proprietary playlist network',
    ],
    website: 'https://www.soothesounds.com/',
    order: 9,
  },
  {
    id: '10',
    name: 'SongEarnings',
    slug: 'songearnings',
    type: 'Data & Analytics',
    shortDescription: 'SongEarnings is a music data and analytics platform that provides earnings estimates, streaming intelligence and financial insights for songs, artists and catalogs across the recorded music industry.',
    website: 'https://songearnings.com',
    order: 10,
  },
  {
    id: '11',
    name: 'SongLink',
    slug: 'songlink',
    type: 'Marketing & Smart Links',
    shortDescription: 'SongLink powers smart release links for the music industry, enabling artists, labels and distributors to share music across all platforms, drive pre-saves and track analytics from a single link.',
    website: 'https://songlink.co',
    order: 11,
  },
]
