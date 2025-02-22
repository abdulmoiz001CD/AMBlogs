import { Rule } from '@sanity/types'; 

export default {
  name: 'post', // Unique identifier for the document type
  title: 'Blog Post', // Human-readable name in Sanity Studio
  type: 'document', // Indicates this is a top-level document
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(), // Explicitly type Rule
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text', // Use 'text' for longer content; 'string' for shorter
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15, // 15-minute increments
      },
      validation: (Rule: Rule)  => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping with a hotspot
      },
    },
  ],
};

