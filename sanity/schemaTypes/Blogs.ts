export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
          source: "title",
          maxLength: 96,
        }
      },
      {
        name: 'publishedDate',
        title: 'Published Date',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  