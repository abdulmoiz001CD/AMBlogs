// import React from 'react';
// import BlogCard from '@/app/components/TopBlog/BlogCard'
// import Link from 'next/link';
// import { FaPen } from "react-icons/fa6";
// import { client } from '@/sanity/lib/client';







// interface BlogType {
//   _id: string;
//   title: string;
//   content: string;
//   slug: {
//     current: string;
//   };
 
//   mainImage: {
//     asset: {
//       url: string
//     }
//   };
//   author: string;
//   publishedDate: string;
// }


//     // const blogs = [ //     {
//     //         id: '1',
//     //         title: 'Mastering React in 2024',
//     //         description: 'Learn the latest features and best practices in React.',
//     //         author: 'John Doe',
//     //         dateOfBirth: '1985-03-15',

//     //         image: '/images/blog1.jpg'
//     //     },
//     //     {
//     //         id: '2',
//     //         title: 'Tailwind CSS: Tips and Tricks',
//     //         description: 'Boost your CSS workflow with Tailwind CSS utilities.',
//     //         author: 'Jane Smith',
//     //         dateOfBirth: '1990-06-22',

//     //         image: '/images/blog2.jpg',
//     //     },
//     //     {
//     //         id: '3',
//     //         title: 'JavaScript Performance Hacks',
//     //         description: 'Optimize your JavaScript code for better performance.',
//     //         author: 'Robert Brown',
//     //         dateOfBirth: '1982-11-08',

//     //         image: '/images/blog3.jpg',
//     //     },
//     //     {
//     //         id: '4',
//     //         title: 'Exploring Node.js for Beginners',
//     //         description: 'A beginner-friendly guide to backend development with Node.js.',
//     //         author: 'Alice Johnson',
//     //         dateOfBirth: '1995-02-11',

//     //         image: '/images/blog4.jpg',
//     //     },
//     //     {
//     //         id: '5',
//     //         title: 'Understanding TypeScript',
//     //         description: 'Dive deep into TypeScript and improve your codebase.',
//     //         author: 'Ethan Davis',
//     //         dateOfBirth: '1978-09-25',

//     //         image: '/images/blog5.jpg',
//     //     },
//     //     {
//     //         id: '6',
//     //         title: 'CSS Grid vs Flexbox',
//     //         description: 'Which layout system should you choose and when?',
//     //         author: 'Sophia Wilson',
//     //         dateOfBirth: '1989-12-30',

//     //         image: '/images/blog6.jpg',
//     //     },
//     //     {
//     //         id: '7',
//     //         title: 'AI Trends in 2024',
//     //         description: 'How AI is shaping the tech world in 2024.',
//     //         author: 'Michael Taylor',
//     //         dateOfBirth: '1983-05-17',

//     //         image: '/images/blog7.jpg',
//     //     },
     
//     // ];

// const TopBlog = async() => {



   
//      const query = `*[_type == "post"]{
//       _id,
//         title,
//         content,
       
//          mainImage {
//       asset->{
//         url
//       }
//     },
//         author,
//         publishedDate
//      }`
    
//     const blogs = await client.fetch(query)
//     console.log( "Main Image2",blogs)
//   return (
//     <section className="py-[8rem]">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-5xl font-bold">Expert Insights and Inspiration</h2>
//         <p className="mt-4 text-lg">
//           Explore our most popular blogs and stay updated with the latest trends.
//         </p>
         

// <Link href="/components/BlogPost/write">
//   <div className="relative">
//     <FaPen className="text-[2.4rem] p-2 bg-[#a59393] border border-gray-800 rounded-md hover:bg-white 
//       fixed top-[10rem] right-[3rem] z-10" />
//   </div>
// </Link>


         
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog:any) => (
//           <Link href={`/components/BlogPost/${blog._id}`} key={blog._id}>
//           {/* <BlogCard title={blog.title} id={blog._id} description={blog.content} image={blog.mainImage.asset.url} /> */}
//         </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopBlog;



// import React from 'react';
// import BlogCard from '@/app/components/TopBlog/BlogCard';
// import Link from 'next/link';
// import { FaPen } from 'react-icons/fa6';
// import { client } from '@/sanity/lib/client';
// // import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
// import sanityClient from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'


// const TopBlog = async () => {
//   // Configure your Sanity client
// const client = sanityClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      
//   apiVersion: process.env.NEXT_SANITY_TOKEN,        
//   useCdn: true                
// });


// const builder = imageUrlBuilder(client);
// function urlFor(source:any) {
//   return builder.image(source);
// }
// const imageUrl = urlFor( mainImage).width(400).url();
// console.log(imageUrl);




//   const query = `*[_type == "post"]{
//     _id,
//     title,
//     content,
//     mainImage {
//       asset->{
//         url
//       }
//     },
//     author,
//     publishedDate
//   }`;

//   const blogs = await client.fetch(query);
//   console.log("Main Image2", blogs);

//   return (
//     <section className="py-[8rem]">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-5xl font-bold">Expert Insights and Inspiration</h2>
//         <p className="mt-4 text-lg">
//           Explore our most popular blogs and stay updated with the latest trends.
//         </p>

//         <Link href="/components/BlogPost/write">
//           <div className="relative">
//             <FaPen className="text-[2.4rem] p-2 bg-[#a59393] border border-gray-800 rounded-md hover:bg-white 
//               fixed top-[10rem] right-[3rem] z-10" />
//           </div>
//         </Link>

//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog:any) => (
//             <Link href={`/components/BlogPost/${blog._id}`} key={blog._id}>
//               <BlogCard
//                 title={blog.title}
//                 id={blog._id}
//                 description={blog.content}
//                 image={blog.mainImage?.asset?.url}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopBlog;










import React from 'react';
import BlogCard from '@/app/components/TopBlog/BlogCard';
import Link from 'next/link';
import { FaPen } from 'react-icons/fa6';
import { client } from '@/sanity/lib/client';

const TopBlog = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    content,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    author,
    publishedDate
  }`;

  const blogs = await client.fetch(query);
 console.log(blogs)
  return (
    <section className="py-[8rem]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold">Expert Insights and Inspiration</h2>
        <p className="mt-4 text-lg">
          Explore our most popular blogs and stay updated with the latest trends.
        </p>

        <Link href="/components/BlogPost/write">
          <div className="relative">
            <FaPen className="text-[2.4rem] p-2 bg-[#a59393] border border-gray-800 rounded-md hover:bg-white 
              fixed top-[10rem] right-[3rem] z-10" />
          </div>
        </Link>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog:any) => (
            <Link href={`/components/BlogPost/${blog._id}`} key={blog._id}>
              <BlogCard
                title={blog.title}
                id={blog._id}
                description={blog.content}
                image={blog.mainImage}
          
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlog;