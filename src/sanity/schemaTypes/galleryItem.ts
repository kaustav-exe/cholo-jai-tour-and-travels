export default {
  name: 'galleryItem',
  title: 'Gallery Media',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Image Title / Caption',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'imageUrl',
      title: 'Fallback Static Image URL (e.g. /images/tour-1.jpeg)',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category Tag (e.g. Mountain, Beach, Heritage, Culture)',
      type: 'string',
      initialValue: 'Travel',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    },
  ],
};
