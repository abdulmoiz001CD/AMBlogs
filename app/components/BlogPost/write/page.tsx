// 'use client'
// import { client } from '@/sanity/lib/client';
// import { useState } from 'react';

// interface BlogType {
//   title: string;
//   content: string;
//   image: {
//     asset: {
//       _ref?: string;
//       _type?: string;
//       url?: string;
//     };
//   };
//   author: string;
//   publishedDate: string;
// }

// const BlogCreatePage: React.FC = () => {
//   const [blog, setBlog] = useState<BlogType>({
//     title: '',
//     content: '',
//     image: { asset: { url: '' } },
//     author: '',
//     publishedDate: new Date().toISOString(),
//   });

//   const [status, setStatus] = useState<string>('')

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setBlog(prev => ({
//         ...prev,
//         image: { asset: { url: imageUrl } }
//       }));
//     }
//   };



//   const handleSubmit = async () => {
//     try {
   
//       const blogDocument = {
//         _type: 'post', 
//         title: blog.title,
//         content: blog.content,
//         author: blog.author,
//         publishedDate: blog.publishedDate,
        
//       };

     
//       const result = await client.create(blogDocument);
//       setStatus(`Blog "${result.title}" created successfully! ID: ${result._id}`);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       setStatus('Failed to create blog. Check console for details.');
//     }
//   };
  

  
//   return (
//     <div className="min-h-screen max-w-4xl mx-auto px-4">
//       <div className="py-8">
//         <div className="space-y-6">
//           {/* Image Upload Section */}
//           <div className="relative w-full h-[400px] mb-8">
//             {blog.image?.asset?.url ? (
//               <img
//                 src={blog.image.asset.url}
//                 alt="Blog preview"
//                 className="w-full h-[400px] object-center rounded-lg mb-8"
//               />
//             ) : (
//               <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center mb-8">
//                 <span className="text-gray-500">No image selected</span>
//               </div>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mt-2 text-sm text-gray-600"
//             />
//           </div>

//           {/* Title Input */}
//           <input
//             type="text"
//             value={blog.title}
//             onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))}
//             placeholder="Enter blog title"
//             className="w-full text-4xl font-bold text-gray-900 dark:text-white bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-2"
//           />

//           {/* Author and Date Section */}
//           <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
//             <div className="flex-1">
//               <input
//                 type="text"
//                 value={blog.author}
//                 onChange={(e) => setBlog(prev => ({ ...prev, author: e.target.value }))}
//                 placeholder="Your name"
//                 className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-1"
//               />
//               <label className="text-xs">Author</label>
//             </div>
//             <div className="flex-1">
//               <input
//                 type="date"
//                 value={blog.publishedDate.split('T')[0]}
//                 onChange={(e) => setBlog(prev => ({ ...prev, publishedDate: e.target.value }))}
//                 className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-1"
//               />
//               <label className="text-xs">Date</label>
//             </div>
//           </div>

//           {/* Content Input */}
//           <textarea
//             value={blog.content}
//             onChange={(e) => setBlog(prev => ({ ...prev, content: e.target.value }))}
//             placeholder="Write your blog content here..."
//             className="w-full min-h-[300px] prose max-w-none dark:prose-invert bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg p-4 focus:outline-none focus:border-blue-500"
//           />

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Save Blog
//           </button>
//           {status && <p className="mt-2 text-sm">{status}</p>}
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default BlogCreatePage;





'use client'
import { useState } from 'react';
import { client } from '@/sanity/lib/client';  // Adjust path to your client file

interface BlogType {
  title: string;
  content: string;
  image?: { asset?: { url?: string } };
  author: string;
  publishedDate: string;
}

const BlogCreatePage: React.FC = () => {
  const [blog, setBlog] = useState<BlogType>({
    title: '',
    content: '',
    image: { asset: { url: '' } },
    author: '',
    publishedDate: new Date().toISOString(),
  });
  const [status, setStatus] = useState<string>(''); // For feedback

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBlog(prev => ({
        ...prev,
        image: { asset: { url: imageUrl } },
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Prepare the document for Sanity
      const blogDocument = {
        _type: 'post', // Must match your schema name
        title: blog.title,
        content: blog.content,
        author: blog.author,
        publishedDate: blog.publishedDate,
        // For image, you’d need to upload it first (see Step 4)
      };

      // Create the document in Sanity
      const result = await client.create(blogDocument);
      setStatus(`Blog "${result.title}" created successfully! ID: ${result._id}`);
    } catch (error) {
      console.error('Error creating blog:', error);
      setStatus('Failed to create blog. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4">
      <div className="py-8">
        <div className="space-y-6">
          <div className="relative w-full h-[400px] mb-8">
            {blog.image?.asset?.url ? (
              <img
                src={blog.image.asset.url}
                alt="Blog preview"
                className="w-full h-[400px] object-center rounded-lg mb-8"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center mb-8">
                <span className="text-gray-500">No image selected</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 text-sm text-gray-600"
            />
          </div>

          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter blog title"
            className="w-full text-4xl font-bold text-gray-900 dark:text-white bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-2"
          />

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={blog.author}
                onChange={(e) => setBlog(prev => ({ ...prev, author: e.target.value }))}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-1"
              />
              <label className="text-xs">Author</label>
            </div>
            <div className="flex-1">
              <input
                type="date"
                value={blog.publishedDate.split('T')[0]}
                onChange={(e) => setBlog(prev => ({ ...prev, publishedDate: e.target.value }))}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 py-1"
              />
              <label className="text-xs">Date</label>
            </div>
          </div>

          <textarea
            value={blog.content}
            onChange={(e) => setBlog(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Write your blog content here..."
            className="w-full min-h-[300px] prose max-w-none dark:prose-invert bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg p-4 focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Save Blog
          </button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogCreatePage;