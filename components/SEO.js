import Head from 'next/head';
const SEO = ({
  title,
  description,
  path = '',
  type = 'website',
  jsonLd = null,
}) => {
  const siteName = 'Data Harvest Labs';
  const baseUrl = 'https://www.dataharvestlabs.com';
  const fullUrl = `${baseUrl}${path}`;

  const fullTitle = title
    ? `${title} - Data Harvest Labs`
    : 'Data Harvest Labs | Data Analysis & Research Services - Kashmir';

  const defaultDescription =
    'Data Harvest Labs is a data analytics company founded in Srinagar, Kashmir by Faraz Ahmad Naik, Dr. Zafir Ahmad Naik, and Dr. Yasir Mushtaq Wani. We provide data analysis, statistical consulting, PCA, GWAS, report writing, and research services for students, researchers, and professionals worldwide.';

  const metaDescription = description || defaultDescription;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Data Harvest Labs',
        alternateName: ['DataHarvestLabs', 'DHL'],
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/favicon.png`,
        },
        foundingDate: '2023',
        foundingLocation: {
          '@type': 'Place',
          name: 'Srinagar, Jammu & Kashmir, India',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-70060-87884',
          email: 'info@dataharvestlabs.com',
          contactType: 'customer service',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Srinagar',
          addressRegion: 'Jammu & Kashmir',
          postalCode: '190001',
          addressCountry: 'IN',
        },
        founder: [
          {
            '@type': 'Person',
            name: 'Faraz Ahmad Naik',
            alternateName: ['Faraz Naik', 'Faraz Ahmad'],
            jobTitle: 'Co-Founder & Software Engineer',
            url: 'https://www.linkedin.com/in/faraznaik/',
            sameAs: ['https://www.linkedin.com/in/faraznaik/'],
            worksFor: { '@id': `${baseUrl}/#organization` },
          },
          {
            '@type': 'Person',
            name: 'Dr. Zafir Ahmad Naik',
            alternateName: ['Zafir Naik', 'Zafir Ahmad Naik', 'Dr. Zafir Naik'],
            jobTitle: 'Co-Founder & Data Scientist',
            url: 'https://in.linkedin.com/in/zafir-naik',
            sameAs: ['https://in.linkedin.com/in/zafir-naik'],
            worksFor: { '@id': `${baseUrl}/#organization` },
          },
          {
            '@type': 'Person',
            name: 'Dr. Yasir Mushtaq Wani',
            alternateName: ['Yasir Wani', 'Yasir Mushtaq', 'Dr. Yasir Wani'],
            jobTitle: 'Co-Founder & Data Scientist',
            url: 'https://www.linkedin.com/in/dr-yasir-mushtaq-wani-1864831b9/?originalSubdomain=in',
            sameAs: ['https://www.linkedin.com/in/dr-yasir-mushtaq-wani-1864831b9/?originalSubdomain=in'],
            worksFor: { '@id': `${baseUrl}/#organization` },
          },
        ],
        description: metaDescription,
        areaServed: 'Worldwide',
        serviceType: [
          'Data Analysis',
          'Statistical Consulting',
          'PCA Analysis',
          'GWAS Analysis',
          'Research Assistance',
          'Report Writing',
          'Data Visualization',
          'Predictive Analytics',
          'Bioinformatics',
          'Article Writing',
          'Presentation Design',
        ],
        knowsAbout: [
          'Data Analysis',
          'Machine Learning',
          'Statistical Analysis',
          'Plant Genetics',
          'Bioinformatics',
          'R Programming',
          'Python',
          'Data Visualization',
          'Research Methodology',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: siteName,
        publisher: { '@id': `${baseUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${fullUrl}/#webpage`,
        url: fullUrl,
        name: fullTitle,
        description: metaDescription,
        isPartOf: { '@id': `${baseUrl}/#website` },
      },
    ],
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <Head>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="google-site-verification" content="XeETHI2BiOf6v7f74WiWAxt84xIFZYqMX2i-Xnh9HHs" />
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content="data analysis Kashmir, data harvest labs, Faraz Ahmad Naik, Zafir Ahmad Naik, Dr. Yasir Mushtaq Wani, Yasir Wani, Faraz Naik, Faraz Ahmad, Zafir Ahmad, Dr. Zafir Ahmad Naik, Faraz Kashmir, Faraz Srinagar, DataHarvestLabs, Data Srinagar, Data analysis in kashmir, data analytics Srinagar, statistical analysis India, PCA analysis, GWAS analysis, research data analysis, data science Kashmir, report writing, data visualization, bioinformatics, quantitative genetics"
      />
      <meta name="author" content="Faraz Ahmad Naik, Dr. Zafir Ahmad Naik, Dr. Yasir Mushtaq Wani" />
      <link rel="canonical" href={fullUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Data Harvest Labs - Data Analysis & Research Services" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />

      {/* ── Geo (helps local search) ── */}
      <meta name="geo.region" content="IN-JK" />
      <meta name="geo.placename" content="Srinagar, Jammu & Kashmir" />
      <meta name="geo.position" content="34.0837;74.7973" />
      <meta name="ICBM" content="34.0837, 74.7973" />

      {/* ── JSON-LD structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;