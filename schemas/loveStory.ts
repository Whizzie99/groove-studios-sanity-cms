export default {
  name: 'loveStory',
  type: 'document',
  title: 'Love Story',
  fields: [
    {
      name: 'title',
      type:'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type:'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'previewImage',
      type: 'image',
      title: 'Preview Image',
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
    },
    {
      name: 'hisStory',
      type: 'array',
      title: 'His Story',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'herStory',
      type: 'array',
      title: 'Her Story',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'youtubeVideoId',
      type:'string',
      title: 'Youtube Video ID'
    },
  ]
}