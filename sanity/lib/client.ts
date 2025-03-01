import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// Configure Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: 'v2023-05-03', 
  useCdn: true, 
  token: process.env.SANITY_TOKEN 
});

// // Initialize the image URL builder
// const builder = imageUrlBuilder(client);

// // Correct urlFor function (returns the builder instance)
// export function urlFor(source:any) {
//   return builder.image(source);
// }





