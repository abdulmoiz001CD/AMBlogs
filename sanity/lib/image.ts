// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "./client"; // Import the client

// const builder = imageUrlBuilder(client);

// export const urlFor = (source: any) => builder.image(source);




import imageUrlBuilder from '@sanity/image-url';
import { client } from "./client"; 
const builder = imageUrlBuilder(client);

// Correct urlFor function (returns the builder instance)
export function urlFor(source:any) {
  return builder.image(source);
}

