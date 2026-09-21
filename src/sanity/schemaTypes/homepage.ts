export default {
  name: 'homepage',
  title: 'Homepage Sections & Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title / Identifier',
      type: 'string',
      initialValue: 'Homepage Main',
      readOnly: true,
    },
    {
      name: 'heroSlides',
      title: 'Hero Slider Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tagline', title: 'Tagline / Badge', type: 'string' },
            { name: 'title', title: 'Slide Title / Heading', type: 'string' },
            { name: 'subtext', title: 'Subtext / Price / Duration', type: 'string' },
            {
              name: 'packageRef',
              title: 'Linked Tour Package',
              type: 'reference',
              to: [{ type: 'tourPackage' }],
            },
            {
              name: 'customImage',
              title: 'Custom Hero Image (overrides package cover)',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'primaryButtonText', title: 'Primary Button Label', type: 'string', initialValue: 'View Package Details' },
            { name: 'secondaryButtonText', title: 'Secondary Button Label', type: 'string', initialValue: 'Book on WhatsApp' },
          ],
        },
      ],
    },
    {
      name: 'promotionalBanner',
      title: 'Seasonal Promotional Banner (Below Hero)',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Show Banner', type: 'boolean', initialValue: true },
        { name: 'badge', title: 'Badge Label', type: 'string', initialValue: 'Special Offer' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subtext', title: 'Subtext / Pricing Info', type: 'string' },
        {
          name: 'featuredPackage',
          title: 'Featured Package',
          type: 'reference',
          to: [{ type: 'tourPackage' }],
        },
        { name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Book Fare →' },
      ],
    },
    {
      name: 'popularDestinationsSection',
      title: 'Popular Destinations Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Popular Destinations' },
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Dynamic seasonal rates for current month departures' },
        {
          name: 'selectedPackages',
          title: 'Selected Destination Packages',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'tourPackage' }] }],
        },
      ],
    },
    {
      name: 'featuredPackagesSection',
      title: 'Featured Tour Packages Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Upcoming Departures' },
        { name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Featured Tour Packages' },
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Hand-picked upcoming destinations with seasonal pricing' },
        {
          name: 'packages',
          title: 'Featured Packages List',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'tourPackage' }] }],
        },
      ],
    },
    {
      name: 'whyChooseUsSection',
      title: 'Why Choose Us Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Identifier (Shield, Award, Map, Users)', type: 'string' },
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },
    {
      name: 'ctaSection',
      title: 'Call To Action Banner',
      type: 'object',
      fields: [
        { name: 'heading', title: 'CTA Heading', type: 'string', initialValue: 'Ready for your next adventure?' },
        { name: 'subheading', title: 'CTA Subheading', type: 'string', initialValue: 'Contact us today and let us plan the perfect holiday for you.' },
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Book on WhatsApp' },
        { name: 'whatsappMessage', title: 'Custom WhatsApp Pre-filled Message', type: 'string' },
      ],
    },
  ],
};
