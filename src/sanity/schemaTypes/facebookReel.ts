export default {
  name: 'facebookReel',
  title: 'Facebook Reels & Videos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Reel Title / Caption',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'destination',
      title: 'Destination / Location Tag',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'facebookUrl',
      title: 'Direct Facebook Reel / Video URL',
      type: 'string',
      description: 'Direct URL (e.g. https://www.facebook.com/reel/1234567890123456 or https://fb.watch/...)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Custom Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'thumbnailUrl',
      title: 'Fallback Static Thumbnail URL (e.g. /images/hero_kashmir_1783678442997.png)',
      type: 'string',
    },
    {
      name: 'views',
      title: 'Views Display (e.g. 18.4K)',
      type: 'string',
      initialValue: '10K+',
    },
    {
      name: 'likes',
      title: 'Likes Display (e.g. 2.1K)',
      type: 'string',
      initialValue: '1K+',
    },
    {
      name: 'duration',
      title: 'Video Duration (e.g. 0:45)',
      type: 'string',
      initialValue: '0:30',
    },
    {
      name: 'date',
      title: 'Date Tag (e.g. Recent Reel)',
      type: 'string',
      initialValue: 'Recent Reel',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
