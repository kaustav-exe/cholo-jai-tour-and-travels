export default {
  name: 'testimonial',
  title: 'Testimonials & Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'City / Location (e.g. Kolkata)',
      type: 'string',
    },
    {
      name: 'tourPackage',
      title: 'Tour Package Taken',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Star Rating (1 to 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'comment',
      title: 'Review / Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Customer Photo / Avatar',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'date',
      title: 'Review Date',
      type: 'date',
    },
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
