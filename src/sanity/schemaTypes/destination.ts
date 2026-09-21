export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'region',
      title: 'Region / State (e.g. Andaman & Nicobar, Kashmir, North East)',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Hero Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Overview Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit (Months)',
      type: 'string',
    },
    {
      name: 'topAttractions',
      title: 'Top Attractions & Key Spots',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Show on Popular Destinations Carousel',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    },
  ],
};
