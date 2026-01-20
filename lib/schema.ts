export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'The Acts Foundation',
  alternateName: 'Acts Foundation',
  url: 'https://theactsfoundation.org',
  logo: 'https://theactsfoundation.org/taf_logo_transparent.png',
  description: 'The Acts Foundation serves 1,000+ families monthly through food support, outreach, and faith in action. Fighting food insecurity in Philadelphia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3599 Nottingham Lane Unit K',
    addressLocality: 'Philadelphia',
    addressRegion: 'PA',
    postalCode: '19114',
    addressCountry: 'US'
  },
  telephone: '+1-609-309-4280',
  email: 'theactsfoundationtech@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Philadelphia',
    '@id': 'https://en.wikipedia.org/wiki/Philadelphia'
  },
  sameAs: [
    'https://theactsfoundation.org'
  ],
  foundingDate: '2023',
  nonprofitStatus: '501c3',
  mission: 'Fighting food insecurity in Philadelphia through faith-based community action, providing dignified food support and resources to families in need.'
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Acts Foundation',
  url: 'https://theactsfoundation.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://theactsfoundation.org/?s={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const donationSchema = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  recipient: {
    '@type': 'NonprofitOrganization',
    name: 'The Acts Foundation',
    url: 'https://theactsfoundation.org'
  },
  description: 'Support Philadelphia families facing food insecurity through The Acts Foundation.'
};
