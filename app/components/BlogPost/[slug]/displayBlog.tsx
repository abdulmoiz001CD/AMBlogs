// // interface BlogType {
// //     title: string;
// //     content: string;
// //     image: {
// //       asset: {
// //         _ref: string;
// //         _type: string;
// //         url: string;
// //       };
// //     };
// //     author: string;
// //     publishedDate: string;
// //   }
  

// interface BlogType {
//     title: string;
//     content: string;
//     image: {
//       asset: {
//         _ref: string;
//         _type: string;
//         url: string;
//       };
//     };
//     author: string;
//     publishedDate: string;
//   }
  

// // const BlogtDetailPage: React.FC<BlogType> = ({ blog }) => {
//   const BlogtDetailPage: React.FC<{ blog: BlogType }> = ({ blog }) => {

//   return (
//     <div className="min-h-screen max-w-4xl mx-auto px-4">
//       <div className="py-8">
//         {blog.image && blog.image.asset && (
//           <div className="relative w-full h-[400px] mb-8">
//             <img
//               src={blog.image.asset.url}
//               alt={blog.title}
//               className="w-full h-[400px] object-center rounded-lg mb-8"
//             />
//           </div>
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

// export default BlogtDetailPage;










import { notFound } from 'next/navigation';

interface BlogType {
  title: string;
  content: string;
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

const BlogtDetailPage: React.FC<{ blog: BlogType }> = ({ blog }) => {
  if (!blog) return notFound();

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4">
      <div className="py-8">
        {blog.image?.asset?.url && (
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

export default BlogtDetailPage;