// 'use client'
// import React from 'react';
// import { client } from '@/sanity/lib/client';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';


// interface BlogType {
//   _id: string;
//   title: string;
//   content: string;
//   slug: {
//     current: string;
//   };
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//       url: string;
//     };
//   };
//   author: string;
//   publishedDate: string;
// }

// const Page = () => {
//   const params = useParams();
//   const slug = params.slug;

//   const [blog, setBlog] = useState<BlogType | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchBlog = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         // Fixed GROQ query syntax
//         const data = await client.fetch(
//           `*[_type == "blog" && slug.current == $slug][0] {
//             _id,
//             title,
//             content,
//             slug,
//             image {
//               asset-> {
//                 _ref,
//                 _type,
//                 url
//               }
//             },
//             author,
//             publishedDate
//           }`,
//           { slug } 
//         );
        
//         console.log('Slug:', slug);
//         console.log('Fetched data:', data);
        
//         if (!data) {
//           setError(`No blog found with slug: ${slug}`);
//         } else {
//           setBlog(data);
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//         setError('Failed to fetch blog post');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [slug]);

//   if (loading) {
//     return <div className="text-center p-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600 p-4">{error}</div>;
//   }
  
//   if (!blog) {
//     return (
//       <div className="text-center p-4">
//         <p className="text-gray-600">Blog post not found</p>
//         <p className="text-gray-400">Slug: {slug}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen max-w-4xl mx-auto px-4">
//       <div className="py-8">
//         {blog.image && blog.image.asset && (
//           <img
//             src={blog.image.asset.url}
//             alt={blog.title}
//             className="w-full h-[400px] object-center rounded-lg mb-8"
//           />
//         )}

//         <div className="space-y-6">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//             {blog.title}
//           </h1>

//           <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//             {blog.author && (
//               <span className="mr-4">
//                 <strong>Author:</strong> {blog.author}
//               </span>
//             )}
//             {blog.publishedDate && (
//               <span>
//                 <strong>Date:</strong> {new Date(blog.publishedDate).toLocaleDateString()}
//               </span>
//             )}
//           </div>

//           <div className="prose max-w-none dark:prose-invert">
//             {blog.content}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;



import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

interface BlogType {
  _id: string;
  title: string;
  content: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
      _type: string;
      url: string;
    };
  };
  author: string;
  publishedDate: string;
}

async function getBlogPost(slug: string): Promise<BlogType | null> {
  try {
    const data = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        content,
        slug,
        image {
          asset-> {
            _ref,
            _type,
            url
          }
        },
        author,
        publishedDate
      }`,
      { slug }
    );
    return data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const query = `*[_type == "blog"] {
      "slug": slug.current
    }`;
    const blogs = await client.fetch(query);
    
    // Add error checking and filtering
    return blogs
      .filter((blog: { slug: string }) => blog.slug) // Filter out any null slugs
      .map((blog: { slug: string }) => ({
        slug: blog.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; // Return empty array if there's an error
  }
}

async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await getBlogPost(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4">
      <div className="py-8">
        {blog.image && blog.image.asset && (
          <div className="relative w-full h-[400px] mb-8">
            <img
              src={blog.image.asset.url}
              alt={blog.title}
              className="w-full h-[400px] object-center rounded-lg mb-8"
            />
          </div>
        )}

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {blog.title}
          </h1>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            {blog.author && (
              <span className="mr-4">
                <strong>Author:</strong> {blog.author}
              </span>
            )}
            {blog.publishedDate && (
              <span>
                <strong>Date:</strong> {new Date(blog.publishedDate).toLocaleDateString()}
              </span>
            )}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;