export interface BoardMember {
  name: string
  slug: string
  role: string
  tag: string
  photo: string
  linkedin?: string
  bio: string[]
}

export interface Leader {
  name: string
  slug: string
  role: string
  photo: string
  linkedin?: string
  bio?: string[]
}

export const boardMembers: BoardMember[] = [
  {
    name: 'Gregory Hirschhorn',
    slug: 'gregory-hirschhorn',
    role: 'Too Lost Music Group',
    tag: 'board director',
    photo: '/team/gregory-hirschhorn.jpeg',
    linkedin: 'https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/',
    bio: [
      'Gregory Hirschhorn is the Co-Founder and Chief Executive Officer of Too Lost, one of the fastest-growing and largest independent music distributors worldwide. He leads the company\'s global strategy, overseeing a catalog of more than five million songs for over 500,000 artists and labels through technology-driven distribution, publishing, rights management, and artist services.',
      'As CEO, Gregory has played a central role in scaling Too Lost into a global music technology platform serving independent artists, labels, and rights holders across the world. His work spans corporate strategy, M&A, catalog investment, global DSP partnerships, artist and label services, publishing administration, rights management, and the continued development of Too Lost\'s technology infrastructure.',
      'Before co-founding Too Lost, Gregory worked in the major label system for several years. Over the past decade, he has dedicated his career to building, investing in, and elevating artists, labels, and catalogs, helping shape the modern independent music economy.',
      'Gregory has been recognized as a 2025 Billboard 40 Under 40 honoree, a 2025 and 2026 Billboard Indie Power Player, and a 2025 Forbes 30 Under 30 recipient. Under his leadership, Too Lost has been named one of Inc. Magazine\'s Top 100 Fastest-Growing Private Companies in America. Gregory has also worked across numerous RIAA Gold and Platinum certified albums, and has contributed to Grammy-nominated projects.',
      'In addition to his role at Too Lost, Gregory serves as a founding board member of the Music Fights Fraud Alliance. He also sits on the board of AntiFragile Equity Partners, a music catalog acquisition firm, and is a member of the American Association of Independent Music and The Recording Academy.',
    ],
  },
  {
    name: 'Michael S. Berk',
    slug: 'michael-berk',
    role: 'TA Associates',
    tag: 'board director',
    photo: '/team/michael-berk.jpg',
    bio: [
      'Michael S. Berk is a Managing Director at TA Associates and co-head of the firm\'s North America Services Group, where he focuses on investments across business and financial services companies. Since joining TA in 2004, Michael has built more than 25 years of private equity experience, sponsoring 20 TA investments totaling more than $2 billion and helping portfolio companies complete more than 25 add-on acquisitions. He chairs TA\'s Portfolio Committee and also serves on the firm\'s Management and Core Investment Committees.',
      'Michael currently represents TA on the board of Too Lost and several other companies, including Benecon, Fisher Funds, Gong cha, LeadsOnline, OMNIA Partners, PTMA Financial Solutions, The Forge Companies, TouchTunes, and Yarra Capital Management. His experience spans founder-led growth businesses, financial services platforms, business services, consumer brands, and technology-enabled services.',
      'Prior to TA, Michael was a Senior Vice President at Joseph Littlejohn & Levy and an Associate at Frontenac Company.',
      'He holds an MBA from Harvard Business School, a JD cum laude from Harvard Law School, and an AB magna cum laude in East Asian Studies from Harvard College. He also serves on the boards of the American Investment Council, Boston Youth Symphony Orchestras, HBS Alumni Board, and Harvard Cooperative Society.',
    ],
  },
  {
    name: 'Gabriel I. Weissmann',
    slug: 'gabriel-weissmann',
    role: 'TA Associates',
    tag: 'board director',
    photo: '/team/gabriel-weissmann.jpeg',
    linkedin: 'https://www.linkedin.com/in/gabriel-weissmann-54579789/',
    bio: [
      'Gabriel I. Weissmann is a Vice President at TA Associates, based in the firm\'s Boston office, where he focuses on investments in growth-oriented, technology-enabled services and business services companies across North America.',
      'At TA, Gabriel works closely with portfolio companies, founders, and management teams on strategic growth initiatives, operational scaling, acquisitions, capital markets activity, and long-term value creation. He serves on the board of Too Lost as a representative of TA Associates.',
      'Prior to joining TA, Gabriel worked in investment banking at Goldman Sachs, where he was a member of both the Consumer & Retail Group and the Investment Grade Capital Markets Group. His experience spans corporate finance, capital markets, and transactions involving consumer, technology, and services businesses.',
      'Gabriel holds a BA in Economics, magna cum laude, from Middlebury College.',
    ],
  },
  {
    name: 'Amara Suebsaeng',
    slug: 'amara-suebsaeng',
    role: 'TA Associates',
    tag: 'board director',
    photo: '/team/amara-suebsaeng.jpeg',
    linkedin: 'https://www.linkedin.com/in/amara-suebsaeng-a7a14a23/',
    bio: [
      'Amara Suebsaeng is a Director at TA Associates, based in the firm\'s Boston office, where she helps lead investments in technology-enabled services companies across North America. She has experience working with a range of business models, including data and information services, marketplaces, and group purchasing organizations, across end markets such as commerce, media and entertainment, public sector, and law enforcement.',
      'At TA, Amara has been involved in minority and majority investments in founder-owned and founder-led companies, as well as corporate carve-outs and recapitalizations of venture capital and private equity-backed businesses. She actively works with portfolio companies on organic growth initiatives, strategic acquisitions, capital markets financings, and recapitalization transactions.',
      'Amara currently represents TA on the boards of Too Lost, LeadsOnline, OMNIA Partners, PurposeBuilt Brands, Stackline, and TouchTunes, and serves as a board observer for Cast & Crew and PTMA Financial Solutions.',
      'Prior to joining TA, she worked in product management and business development at Logi Analytics and in the Investment Banking Division at Morgan Stanley. She holds an MBA with Distinction from Harvard Business School and a BA in Economics, magna cum laude, from Princeton University.',
    ],
  },
  {
    name: 'Alex Silverstein',
    slug: 'alex-silverstein',
    role: 'Too Lost Music Group',
    tag: 'board director',
    photo: '/team/alex-silverstein.png',
    linkedin: 'https://www.linkedin.com/in/alex-silverstein-031537129/',
    bio: [
      'Alex Silverstein is the Co-Founder and Chief Operating Officer of Too Lost, one of the fastest-growing and largest independent music distributors worldwide. He helps oversee the company\'s global operations, supporting a catalog of more than five million songs for over 500,000 artists and labels through technology-driven distribution, publishing, rights management, and artist services.',
      'As COO, Alex plays a central role in scaling Too Lost\'s operating infrastructure, commercial partnerships, label and artist relationships, and international expansion. He also helps lead the company\'s broader investment and partnership strategy across the independent music ecosystem, including relationships with catalog acquisition firms, artist services platforms, and record label partners.',
      'His work spans catalog acquisition, frontline label partnerships, international market development, artist growth, and the continued expansion of Too Lost\'s global distribution network.',
      'Before co-founding Too Lost, Alex worked at Live Nation and 300 Entertainment. Over the past decade, he has dedicated his career to building, investing in, and elevating artists, labels, and catalogs, helping shape the modern independent music economy.',
      'Alex\'s contributions to the music industry have been recognized through several honors, including being named to Forbes\' 2025 30 Under 30 list and Billboard\'s 2026 Indie Power Players list. Alex has worked across numerous RIAA Gold and Platinum certified albums, and has contributed to Grammy-nominated projects. Under his leadership, Too Lost has been recognized by Inc. Magazine as one of the fastest-growing private companies in America. Alex holds a Bachelor of Arts in Music Business and Entertainment Industry from the University of Miami\'s Frost School of Music.',
    ],
  },
  {
    name: 'Charles Goldstuck',
    slug: 'charles-goldstuck',
    role: 'GoldState Music',
    tag: 'board director',
    photo: '/team/charles-goldstuck.jpeg',
    linkedin: 'https://www.linkedin.com/in/charles-goldstuck-765abb90/',
    bio: [
      'Charles Goldstuck is the founder and Managing Partner of GoldState Music, a private investment firm focused on investing in the music sector. GoldState\'s funds focus primarily on music rights, as well as music-related companies seeking growth and expansion capital.',
      'Charles is a highly accomplished music executive, operator, and investor with deep experience across recorded music, music publishing, media, technology, and music rights. Over the course of his career, he has held senior leadership roles at some of the most influential companies in the music industry, including serving as President and COO of Bertelsmann Music Group, where he oversaw business operations across BMG\'s music labels.',
      'Earlier in his career, Charles served as Executive Vice President and General Manager of Arista Records and Executive Vice President of Capitol Records. In 2000, he co-founded J Records with Clive Davis and helped build the company into RCA Music Group. During his time as a music executive, he worked with and helped develop a wide range of major artists, including Usher, Leona Lewis, Dave Matthews Band, Foo Fighters, Justin Timberlake, Britney Spears, Sarah McLachlan, Avril Lavigne, Rod Stewart, Annie Lennox, and Maroon 5.',
      'In addition to his executive leadership experience, Charles has been an active investor and company builder across the modern music ecosystem. He is the Executive Chairman of TouchTunes Interactive Networks, the world\'s largest out-of-home interactive digital entertainment network, spanning more than 80,000 locations, and has invested in high-growth music companies including Create Music Group.',
      'Charles currently serves on the boards of Too Lost, TouchTunes Interactive Networks, and The Sanctuary at Albany in The Bahamas, a state-of-the-art recording studio and music academy that he founded. He is also actively involved in philanthropic and educational organizations, including City of Hope Children\'s Hospital Foundation, UJA-Federation\'s Entertainment, Media & Communications Division, Bahamas Youth Foundation, and Wake Forest University\'s Parent\'s Council.',
    ],
  },
]

export const leaders: Leader[] = [
  {
    name: 'Gregory Hirschhorn',
    slug: 'gregory-hirschhorn',
    role: 'Chief Executive Officer, Too Lost Music Group',
    photo: '/team/gregory-hirschhorn.jpeg',
    linkedin: 'https://www.linkedin.com/in/gregory-hirschhorn-1a8359267/',
    bio: [
      'Gregory Hirschhorn is the Co-Founder and Chief Executive Officer of Too Lost, one of the fastest-growing and largest independent music distributors worldwide. He leads the company\'s global strategy, overseeing a catalog of more than five million songs for over 500,000 artists and labels through technology-driven distribution, publishing, rights management, and artist services.',
      'As CEO, Gregory has played a central role in scaling Too Lost into a global music technology platform serving independent artists, labels, and rights holders across the world. His work spans corporate strategy, M&A, catalog investment, global DSP partnerships, artist and label services, publishing administration, rights management, and the continued development of Too Lost\'s technology infrastructure.',
      'Before co-founding Too Lost, Gregory worked in the major label system for several years. Over the past decade, he has dedicated his career to building, investing in, and elevating artists, labels, and catalogs, helping shape the modern independent music economy.',
      'Gregory has been recognized as a 2025 Billboard 40 Under 40 honoree, a 2025 and 2026 Billboard Indie Power Player, and a 2025 Forbes 30 Under 30 recipient. Under his leadership, Too Lost has been named one of Inc. Magazine\'s Top 100 Fastest-Growing Private Companies in America. Gregory has also worked across numerous RIAA Gold and Platinum certified albums, and has contributed to Grammy-nominated projects.',
      'In addition to his role at Too Lost, Gregory serves as a founding board member of the Music Fights Fraud Alliance. He also sits on the board of AntiFragile Equity Partners, a music catalog acquisition firm, and is a member of the American Association of Independent Music and The Recording Academy.',
    ],
  },
  {
    name: 'Bjarki Lárusson',
    slug: 'bjarki-larusson',
    role: 'Chief Technology Officer, Too Lost Music Group',
    photo: '/team/bjarki-larusson.jpg',
    linkedin: 'https://www.linkedin.com/in/bjarki-larusson/',
    bio: [
      'Bjarki Larusson is the Co-Founder and Chief Technology Officer of Too Lost, where he leads the company\'s technology strategy, engineering organization, product architecture, and platform infrastructure. He plays a central role in building and scaling the systems that power Too Lost\'s global distribution, publishing, rights management, royalty accounting, analytics, and artist services operations.',
      'As CTO, Bjarki oversees Too Lost\'s engineering team and the continued development of its proprietary technology platform, supporting a catalog of more than five million songs for over 500,000 artists and labels worldwide. His work spans product development, data infrastructure, system architecture, content delivery, royalty processing, DSP integrations, platform security, and the technical operations required to support Too Lost\'s global scale.',
      'Bjarki also leads Too Lost\'s Reykjavík office, helping anchor the company\'s technical operations and engineering presence in Iceland. Before co-founding Too Lost, he held engineering roles across Iceland, working with a range of companies and institutions on software development, digital infrastructure, and technology systems.',
      'Since co-founding Too Lost, Bjarki has helped build the company into a technology-driven music platform serving independent artists, labels, and rights holders around the world. He has been recognized as a Forbes 30 Under 30 recipient, reflecting his contributions to music technology, engineering, and the modern independent music economy.',
    ],
  },
  {
    name: 'Alex Silverstein',
    slug: 'alex-silverstein',
    role: 'Chief Operating Officer, Too Lost Music Group',
    photo: '/team/alex-silverstein.png',
    linkedin: 'https://www.linkedin.com/in/alex-silverstein-031537129/',
    bio: [
      'Alex Silverstein is the Co-Founder and Chief Operating Officer of Too Lost, one of the fastest-growing and largest independent music distributors worldwide. He helps oversee the company\'s global operations, supporting a catalog of more than five million songs for over 500,000 artists and labels through technology-driven distribution, publishing, rights management, and artist services.',
      'As COO, Alex plays a central role in scaling Too Lost\'s operating infrastructure, commercial partnerships, label and artist relationships, and international expansion. He also helps lead the company\'s broader investment and partnership strategy across the independent music ecosystem, including relationships with catalog acquisition firms, artist services platforms, and record label partners.',
      'His work spans catalog acquisition, frontline label partnerships, international market development, artist growth, and the continued expansion of Too Lost\'s global distribution network.',
      'Before co-founding Too Lost, Alex worked at Live Nation and 300 Entertainment. Over the past decade, he has dedicated his career to building, investing in, and elevating artists, labels, and catalogs, helping shape the modern independent music economy.',
      'Alex\'s contributions to the music industry have been recognized through several honors, including being named to Forbes\' 2025 30 Under 30 list and Billboard\'s 2026 Indie Power Players list. Alex has worked across numerous RIAA Gold and Platinum certified albums, and has contributed to Grammy-nominated projects. Under his leadership, Too Lost has been recognized by Inc. Magazine as one of the fastest-growing private companies in America. Alex holds a Bachelor of Arts in Music Business and Entertainment Industry from the University of Miami\'s Frost School of Music.',
    ],
  },
  {
    name: 'Jay Moore',
    slug: 'jay-moore',
    role: 'Chief Investment Officer, Too Lost Music Group',
    photo: '/team/jay-moore.png',
    linkedin: 'https://www.linkedin.com/in/jayrmoore/',
    bio: [
      'Jay Moore is the Chief Investment Officer of Too Lost, where he leads the company\'s investment strategy, catalog acquisition efforts, and broader approach to music rights opportunities. He plays a key role in expanding Too Lost\'s position as both a global technology platform and a capital partner for independent artists, labels, and rights holders.',
      'Jay brings deep experience across music rights investment, catalog acquisitions, artist financing, deal structuring, and financial modeling. His work spans recorded music, publishing, and services businesses, with a focus on identifying high-quality opportunities and building long-term investment strategies across the independent music ecosystem.',
      'Prior to joining Too Lost, Jay served as Vice President, Head of Investments at Position Music, where he helped lead catalog acquisition strategy and investment execution. Before that, he was Chief Investment Officer of Ditto Music, overseeing investment strategy across music rights, catalog opportunities, and artist financing. Earlier in his career, Jay spent several years at Kobalt Music Group, working across its investment platform, managed funds, and AWAL, its recorded music and services division. Jay holds a degree from the University of Colorado Boulder.',
    ],
  },
  {
    name: 'Jennifer Ferrer',
    slug: 'jennifer-ferrer',
    role: 'Director, Commercial Strategy, Too Lost Music Group',
    photo: '/team/jennifer-ferrer.jpeg',
    linkedin: 'https://www.linkedin.com/in/jen-ferrer-la/',
    bio: [
      'Jen Ferrer is the Director of Commercial & Artist Strategy at Too Lost, where she helps lead commercial strategy, product marketing, artist development, and label services across the company\'s global roster. Her work supports independent artists, labels, and partners through release strategy, platform positioning, audience growth, and commercial opportunities across digital music services.',
      'Jen brings deep experience across label management, product strategy, music curation, and artist marketing, with a particular background in dance, electronic, pop, and independent music. Since joining Too Lost, she has played an important role in expanding the company\'s artist and label services capabilities, helping strengthen the connection between Too Lost\'s technology platform, DSP partners, and the creators it serves.',
      'Prior to Too Lost, Jen held senior roles at Warner Music Group\'s ADA Worldwide, where she worked across label and product management. She is also an active DJ, curator, and radio host in Los Angeles, bringing a creator-focused perspective to her work with artists, labels, and music communities.',
    ],
  },
  {
    name: 'Andy Irvine',
    slug: 'andy-irvine',
    role: 'Chief Executive Officer, GYRO.Group • Head of APAC, Too Lost Music Group',
    photo: '/team/andy-irvine.jpeg',
    linkedin: 'https://www.linkedin.com/in/andyirv/',
    bio: [
      'Andy Irvine is the Head of Asia-Pacific at Too Lost Music Group and the Co-Founder and Chief Executive Officer of GYRO.Group, an Australian music company providing distribution, technology, marketing and artist services to independent creators and music businesses around the world.',
      'A music industry entrepreneur and digital distribution specialist, Andy co-founded G.Y.R.O. in Brisbane in 2018 after identifying a need for independent Australian artists to have greater access to local support, global distribution infrastructure and international growth opportunities. Under his leadership, G.Y.R.O. developed from an artist-facing digital distributor into a diversified global music company operating across distribution, artist services, marketing, publishing and music technology.',
      'Andy also led the creation and international expansion of DistroDirect, GYRO.Group\'s white-label distribution platform. DistroDirect enables record labels, managers, studios and music entrepreneurs to operate their own branded distribution businesses and has grown to support hundreds of partners across more than 40 markets.',
      'He has overseen the development of the broader GYRO.Group portfolio, including boutique artist-services company Group Speed, instrumental music program Soothe Sounds and G.Y.R.O.\'s publishing, synchronization and promotional operations. Through these businesses, Andy and his team have supported the careers of independent artists while building technology and infrastructure used by music companies across six continents.',
      'Before founding G.Y.R.O., Andy spent approximately a decade working across major and independent record labels, including Universal Music Group, developing experience in artist management, distribution and the broader recorded music business. He holds a degree from the University of Queensland.',
      'Following GYRO.Group\'s combination with Too Lost Music Group, Andy became Head of Asia-Pacific, leading the company\'s strategy and continued expansion throughout Australia, New Zealand, Asia and other important regional markets. His work remains focused on creating sustainable global opportunities for independent artists, labels and music entrepreneurs while strengthening the infrastructure supporting the international independent music economy.',
    ],
  },
  {
    name: 'Vivienne Mellish',
    slug: 'viv-melish',
    role: 'Chief Marketing Officer, GYRO.Group • Director, Commercial Strategy, APAC, Too Lost Music Group',
    photo: '/team/viv-melish.jpg',
    linkedin: 'https://www.linkedin.com/in/vivienne-mellish-4850a617/',
    bio: [
      'Vivienne Mellish is Chief Marketing Officer of GYRO.Group and Director of Commercial Strategy, APAC at Too Lost Music Group.',
      'As a co-founder of GYRO.Group, Vivienne has played a central role in building the company from an Australian digital distribution business into a global music platform spanning distribution, marketing, artist services, publishing and music technology. In her role as Chief Marketing Officer, she leads the group\'s brand, communications, artist marketing and promotional strategy across its portfolio of businesses.',
      'Vivienne also serves as Director of Commercial Strategy, APAC at Too Lost Music Group, where she supports the company\'s growth and strategic development across Australia, New Zealand and the broader Asia-Pacific region. Her work focuses on commercial partnerships, market expansion, artist and label services, and the integration of GYRO.Group\'s businesses into Too Lost Music Group\'s global infrastructure.',
      'She has helped guide the development of DistroDirect, GYRO.Group\'s white-label distribution technology platform, as well as Group Speed, Soothe Sounds and G.Y.R.O.\'s broader marketing, publishing and synchronization capabilities. Across these businesses, Vivienne has worked to create stronger commercial and promotional opportunities for independent artists, labels and music entrepreneurs around the world.',
      'Before co-founding G.Y.R.O., Vivienne built a career across journalism, publicity, marketing and strategic communications, with experience spanning music, film, theatre, politics and major events. This multidisciplinary background continues to inform her approach to artist storytelling, audience development and brand strategy.',
      'Vivienne is also an active advocate for Australia\'s independent music community and serves on the board of the Australian Independent Record Labels Association (AIR). She also previously served as Chair of Queensland\'s music industry peak body QMusic — the organization behind BIGSOUND and the Queensland Music Awards.',
      'Combining entrepreneurial leadership, marketing expertise and a deep understanding of the independent music sector, Vivienne is focused on expanding Too Lost Music Group\'s presence across APAC and helping artists, labels and music businesses build sustainable global careers.',
    ],
  },
  {
    name: 'Matthew Rogers',
    slug: 'matthew-rogers',
    role: 'Chief Commercial Officer, GYRO.Group • Head of DistroDirect',
    photo: '/team/matthew-rogers.webp',
    linkedin: 'https://www.linkedin.com/in/matthew-rogers-8a908710/',
    bio: [
      'Matthew Rogers is Chief Commercial Officer of GYRO.Group and Head of DistroDirect, the group\'s global white-label music distribution and catalogue-management platform.',
      'In his role as Chief Commercial Officer, Matthew leads GYRO.Group\'s commercial and legal strategy, supporting the development of new products, partnerships and services for independent artists, labels and music businesses. He works closely with the group\'s leadership team on international expansion, strategic planning and the continued growth of its distribution, technology and artist-services operations.',
      'As Head of DistroDirect, Matthew oversees the strategy and expansion of a platform that enables labels, managers, studios and music entrepreneurs to operate fully branded digital distribution businesses. His responsibilities span product development, commercial partnerships, market expansion and the continued enhancement of DistroDirect\'s technology and service offering. The platform supports hundreds of independent distribution partners across more than 40 markets worldwide.',
      'Matthew joined GYRO.Group following 14 years at UNIFIED Music Group, where he served as Chief Operating Officer and played a central role in the development of one of Australia\'s leading independent music companies. During his tenure, he helped oversee the company\'s operations, commercial strategy and growth across recorded music, artist management, touring, festivals, merchandise and other areas of the music business.',
      'Before joining UNIFIED, Matthew worked as a lawyer at Media Arts Lawyers, providing him with a strong foundation in music rights, commercial agreements and intellectual property. His combined legal, operational and commercial experience has made him a trusted adviser to artists, rights holders and independent music companies.',
      'Matthew has also contributed extensively to the broader independent music community. He served for more than seven years on the board of the Australian Independent Record Labels Association and spent four years on the board of the Worldwide Independent Network, including a term as Vice President.',
      'With extensive experience across music, law, operations and corporate strategy, Matthew is focused on scaling DistroDirect\'s global network and creating technology, infrastructure and commercial opportunities that enable independent music businesses to compete internationally.',
    ],
  },
  {
    name: 'Alex Wilson',
    slug: 'alex-wilson',
    role: 'General Manager, GYRO.Group',
    photo: '/team/alex-wilson.jpeg',
    linkedin: 'https://www.linkedin.com/in/alex-wilson-a1798391/',
    bio: [
      'Alex Wilson is General Manager and Co-Founder of GYRO.Group, an Australian music company providing global distribution, technology, marketing and artist services to independent creators, labels and music businesses.',
      'Since co-founding G.Y.R.O. in Brisbane in 2018, Alex has played a central role in building the company\'s operational infrastructure and scaling its services internationally. As General Manager, he oversees day-to-day operations across the group, working closely with its leadership and regional teams to ensure the effective delivery of distribution, rights management, reporting, payments and artist support.',
      'Alex\'s responsibilities span GYRO.Group\'s portfolio of businesses, including artist-facing distribution platform G.Y.R.O., white-label distribution technology company DistroDirect, artist-services business Group Speed and instrumental music program Soothe Sounds. He supports the continued integration and development of these businesses while maintaining the service standards required by artists, labels and distribution partners around the world.',
      'Earlier in the company\'s development, Alex led distribution operations and customer support, overseeing content delivery and helping establish the systems and processes that supported G.Y.R.O.\'s initial growth. His operational leadership has contributed to the company\'s expansion from a locally focused Australian distributor into an international music group with teams and partners across multiple continents.',
      'Alongside his executive career, Alex is an artist and a member of Brisbane indie-rock band Shag Rock. His experience as a working musician gives him a practical understanding of the release process and the operational challenges faced by independent artists.',
      'Combining operational leadership with firsthand creative experience, Alex is focused on building efficient, artist-friendly systems and ensuring that GYRO.Group continues to provide reliable, scalable infrastructure to independent music businesses worldwide.',
    ],
  },
  {
    name: 'Adrian Burke',
    slug: 'adrian-burke',
    role: 'Executive Vice President, Artist Services, GYRO.Group • Head of Group Speed',
    photo: '/team/adrian-burke.png',
    linkedin: 'https://www.linkedin.com/in/adrianfburke/',
    bio: [
      'Adrian Burke is Executive Vice President of Artist Services at GYRO.Group and Head of Group Speed, the company\'s boutique global artist-services and music distribution division.',
      'Adrian leads GYRO.Group\'s artist-services strategy, overseeing the development of high-touch campaigns designed to help independent artists and labels build sustainable global audiences. His work spans A&R, streaming strategy, digital marketing, audience development, release planning, commercial partnerships and premium distribution.',
      'As Head of Group Speed, Adrian is responsible for the division\'s strategic direction, artist roster and international growth. Group Speed combines personalized artist development with GYRO.Group\'s global distribution infrastructure, providing selected artists and labels with dedicated support across DSP strategy, content, marketing, funding and long-term career development.',
      'Before joining GYRO.Group, Adrian spent seven years at Spotify, where he worked in artist and label partnerships in Canada. During his tenure, he developed relationships across the independent music community, led global artist campaigns and implemented data-informed strategies that generated millions of incremental streams for artists around the world.',
      'Since launching Group Speed in 2024, Adrian has assembled an international team of streaming, marketing, A&R and artist-development specialists. Under his leadership, the company has supported campaigns for artists including Lithe, Dom Dolla, Swedish House Mafia, The All-American Rejects and a growing roster of emerging and established independent talent.',
      'Adrian was promoted to Executive Vice President of Artist Services at GYRO.Group in 2026, expanding his leadership across the group\'s broader artist and label services operations. In this role, he works across GYRO.Group\'s portfolio to develop integrated strategies that connect distribution, marketing, data and commercial opportunities.',
      'With extensive experience across streaming platforms, artist development and digital strategy, Adrian is focused on building modern, fan-first growth models that help independent artists compete globally while maintaining ownership and control of their careers.',
    ],
  },
  {
    name: 'Aldo Davalos',
    slug: 'aldo-davalos',
    role: 'Head of Business Development, Too Lost Music Group',
    photo: '/team/aldo-davalos.jpeg',
    linkedin: 'https://www.linkedin.com/in/aldodavalos/',
    bio: [
      'Aldo Davalos is the Head of Business Development at Too Lost, where he helps lead strategic partnerships, artist and label relationships, and commercial growth across the company\'s global platform. His work focuses on expanding Too Lost\'s reach across the independent music ecosystem, building relationships with artists, managers, labels, and rights holders, and identifying new opportunities for growth across distribution, publishing, rights management, and artist services.',
      'Aldo brings more than two decades of music industry experience across recorded music, publishing, A&R, artist management, and business development. Earlier in his career, he held roles at Warner Music Group and Ultra Music, and later helped build the publishing division at Steve Aoki\'s Dim Mak. He has also held senior positions in artist management, working with major artists including Migos.',
      'Since joining Too Lost, Aldo has played an important role in expanding the company\'s presence on the West Coast and strengthening its relationships across the broader artist, manager, label, and creator communities. His background across labels, publishing, management, and independent music gives him a broad perspective on how to support artists and rights holders while building scalable commercial partnerships.',
    ],
  },
  {
    name: 'Marc Emert-Hutner',
    slug: 'marc-emert-hutner',
    role: 'Vice President, Artists & Repertoire, Too Lost Music Group',
    photo: '/team/marc-emert-hutner.png',
    linkedin: 'https://www.linkedin.com/in/mahutner/',
    bio: [
      'Marc Emert-Hutner is the Vice President of A&R at Too Lost, where he helps lead artist, songwriter, and label development across the company\'s global roster. His work focuses on identifying and supporting high-potential talent, building strategic artist and label relationships, and expanding Too Lost\'s role as a long-term partner for independent creators and rights holders.',
      'Marc brings more than two decades of music industry experience across A&R, publishing, songwriter advocacy, artist development, and creative strategy. Prior to joining Too Lost, he spent more than 20 years at ASCAP, where he served as Vice President and Head of Pop/Rock Membership. In that role, he played a key part in signing, retaining, and supporting leading songwriters and publishers, while helping create opportunities for writers across the broader music industry.',
      'Marc is known for his work with top songwriters and artists, including Charli XCX, Adam Levine, and Olivia Rodrigo. Earlier in his career, he was active as a singer, guitarist, songwriter, producer, and performer with bands including Pleasure Club and Bicycle Thief, bringing a creator-first perspective to his work with artists, labels, and music partners.',
    ],
  },
  {
    name: 'Buster Ross',
    slug: 'buster-ross',
    role: 'Director, Artists & Repertoire, Too Lost Music Group',
    photo: '/team/buster-ross.png',
    bio: [
      'Buster Ross is the Director of A&R at Too Lost, where he helps lead artist and label development, catalog acquisitions, financing opportunities, and strategic partnerships across the company.',
      'One of Too Lost\'s earliest A&R hires, Buster has been with the company for more than six years and has played an important role in building and scaling its A&R operation. During his tenure, he has helped bring significant artists, labels, and catalogs to Too Lost, with work spanning releases and partnerships involving Kanye West, YG, Freddie Gibbs, The Game, Offset, Freddie Dredd, 1nonly, Jutes, The All-American Rejects, and others. He has also overseen relationships with music and financing companies including Duetti and beatBread.',
      'Buster has helped pioneer many of the catalog migration, acquisition, and onboarding strategies that Too Lost now deploys at scale. Buster helps artists and labels access financing, marketing, promotional support, and other resources designed to grow their businesses while maintaining independence.',
      'Prior to joining Too Lost, Buster worked with the management team behind multi-platinum recording group Migos and developed experience as a mixing and mastering engineer, including work with Migos and other talent in Los Angeles.',
      'Across his career, Buster has contributed to recordings and projects that have earned more than 20 RIAA Gold and Platinum certifications. He has developed a strong reputation for combining artist relationships, technical knowledge, and commercial expertise to help artists and labels build lasting careers.',
    ],
  },
  {
    name: 'Mark VanAtta',
    slug: 'mark-vanatta',
    role: 'Vice President, Finance, Too Lost Music Group',
    photo: '/team/mark-vanatta.jpeg',
    linkedin: 'https://www.linkedin.com/in/mvanatta/',
    bio: [
      'Mark VanAtta is the Vice President of Finance at Too Lost, where he leads the company\'s finance function and supports financial planning, accounting, reporting, forecasting, and strategic decision-making across the business. His work helps support Too Lost\'s continued growth as a global music technology platform serving independent artists, labels, and rights holders. Mark brings broad finance and operating experience across music, consumer, hospitality, and technology-enabled businesses.',
      'Prior to joining Too Lost, he served as Vice President of Finance at Tree House Brewing Company, where he oversaw finance, accounting, and technology functions while supporting strategic initiatives across a multi-location business. He previously held finance leadership roles at Postcard Cabins, formerly Getaway, where he helped build and scale the company\'s finance function through multiple stages of growth, financing, and its eventual exit to Marriott.',
      'Earlier in his career, Mark held a senior FP&A role at Warner Music Group, giving him direct experience across music industry operations, forecasting, and financial planning. He is a CPA and Certified Fraud Examiner, and holds a degree from Syracuse University\'s Martin J. Whitman School of Management.',
    ],
  },
  {
    name: 'Nate Fisher',
    slug: 'nate-fisher',
    role: 'Vice President, Artist & Label Investments, Too Lost Music Group',
    photo: '/team/nate-fisher.png',
    linkedin: 'https://www.linkedin.com/in/nate-fisher-24abba212/',
    bio: [
      'Nate Fisher is the Vice President of Artist and Label Investments at Too Lost, where he leads the company\'s efforts to identify, evaluate, structure, and execute investments in independent artists, labels, and music rights. His work spans artist and label financing, catalog acquisitions, strategic partnerships, and data-driven opportunity sourcing, helping expand Too Lost\'s relationships across the independent music sector.',
      'Prior to joining Too Lost, Nate served as Senior Director of A&R and Label Acquisition at ADA, Warner Music Group\'s independent distribution and label services division. He previously held artist relations and senior strategy roles at beatBread and Royal, where he worked with artists and industry partners on alternative financing, growth strategy, and new models for funding independent music careers.',
      'Earlier in his career, Nate worked in A&R roles at RCA Records and Sony Music Publishing and gained experience with Atlanta-based labels LVRN and Generation Now. He brings a combination of creative A&R judgment, financial analysis, and strategic dealmaking experience across recorded music, publishing, distribution, and artist financing. Nate holds a bachelor\'s degree from Emory University\'s Goizueta Business School.',
    ],
  },
  {
    name: 'Lucas Billig',
    slug: 'lucas-billig',
    role: 'Vice President, Operations, Too Lost Music Group',
    photo: '/team/lucas-billig.png',
    linkedin: 'https://www.linkedin.com/in/lucas-billig-28294817b/',
    bio: [
      'Lucas Billig is the Vice President of Operations at Too Lost, where he helps lead the company\'s day-to-day operational and administrative functions. His work spans release delivery, catalog management, platform operations, internal workflows, and service execution across the business.',
      'Lucas oversees the operational infrastructure supporting the delivery of nearly 10,000 tracks each day to hundreds of digital stores and services worldwide.',
      'As one of Too Lost\'s first five employees, Lucas has played an important role in building and scaling the systems, processes, and teams that support the company\'s growth. He works closely with Too Lost\'s technology, product, finance, rights management, and artist and label services teams to ensure releases are delivered accurately, efficiently, and at scale.',
      'Lucas brings experience across music distribution, artist and label operations, and business administration. He holds an MBA and a bachelor\'s degree from Ithaca College.',
    ],
  },
  {
    name: 'Deanna DeVivo',
    slug: 'deanna-devivo',
    role: 'Director, Human Resources, Too Lost Music Group',
    photo: '/team/deanna-devivo.png',
    linkedin: 'https://www.linkedin.com/in/deannadevivo/',
    bio: [
      'Deanna DeVivo is the Director of Human Resources at Too Lost, where she leads people operations, recruiting, employee experience, and organizational development across the company. Her work supports Too Lost\'s continued growth by building the hiring processes, talent systems, onboarding programs, and internal HR infrastructure needed to scale a global music technology business.',
      'Prior to joining Too Lost, Deanna served as Director of Talent at Luminate, the entertainment industry data and insights company, where she supported talent strategy, recruiting, and people operations for a business serving the broader music and media ecosystem.',
      'Before Luminate, Deanna was Director of Talent Acquisition at Downtown Music Holdings, where she built and led global talent acquisition during a period of rapid growth from approximately 200 to 600 employees. In that role, she supported Downtown and its subsidiary brands, including Songtrust, Downtown Music Services, FUGA, DashGo, CD Baby, and AdRev, while overseeing recruitment strategy, candidate pipelines, talent programs, retention initiatives, internal mobility, internship programs, and candidate and employee experience.',
      'Earlier in her career, Deanna worked at Gelfand, Rennert & Feldman as a Royalty Auditor and Analyst, supporting royalty audits across planning, strategy, data analysis, fieldwork, source document review, and reporting. She also managed and led the RIAA\'s East Coast Gold, Platinum, and Multi-Platinum Awards Program, auditing sales and working directly with clients. Before that, she worked at SONGS Music Publishing as a Royalty & Copyright Coordinator, processing, analyzing, and reconciling U.S. and international income, and providing weekly cash flow reporting to senior finance leadership.',
      'Deanna began her career in creative and marketing support at Sony International & Creative Entertainment Network. Her background across talent acquisition, HR, royalty audits, music publishing, copyright, and entertainment finance gives her a practical understanding of both the people and operational needs of a scaling music company.',
    ],
  },
  {
    name: 'Elena Occhipinti',
    slug: 'elena-occhipinti',
    role: 'General Counsel, Head of Business Affairs, Too Lost Music Group',
    photo: '/team/elena-occhipinti.png',
    linkedin: 'https://www.linkedin.com/in/eocchipinti/',
    bio: [
      'Elena Occhipinti is General Counsel and Head of Business & Legal Affairs at Too Lost, where she oversees the company\'s legal, rights, licensing, and business affairs functions. Her work supports Too Lost\'s global distribution, publishing, catalog acquisition, artist services, and commercial partnership operations across the independent music ecosystem.',
      'Elena brings more than 25 years of legal experience across entertainment, media, intellectual property, licensing, and business affairs. She plays a central role in structuring, negotiating, and managing agreements with artists, labels, rights holders, strategic partners, DSPs, and acquisition targets. Her work spans distribution agreements, publishing administration, rights management, catalog transactions, licensing, compliance, intellectual property, and broader corporate legal matters.',
      'In addition to her role at Too Lost, Elena leads Occhipinti Law Group, a boutique entertainment and intellectual property law firm based in Los Angeles. Through her legal practice, she has advised institutional and entrepreneurial clients across music, film, television, art, and entertainment-related businesses, bringing a practical and business-minded legal perspective to creators, companies, and rights holders.',
      'Elena is a member of the State Bar of California and has dedicated her time to community and charitable endeavors. She serves on the Board of Advisors for the Chicago Music Commission and has supported organizations including the Western Law Center for Disability Rights, Reading for Kids, and the Cabrini Green Mentoring Program in Chicago. Her background across law, entertainment, intellectual property, and community service brings a broad and experienced perspective to Too Lost\'s leadership team.',
    ],
  },
]
