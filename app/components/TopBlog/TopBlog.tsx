import React from 'react';
import BlogCard from '@/app/components/TopBlog/BlogCard'



const TopBlog = () => {
  const blogs = [
    { 
      id: `blog1`,
      title: 'Mastering React in 2024',
      description: 'Optimize your JavaScript code for better performance.',
      image: '/images/blog1.jpg'
    },
    {
      id: `blog2`,
      title: 'Tailwind CSS: Tips',
      description: 'Boost your CSS workflow with Tailwind CSS utilities.',
      image: '/images/blog2.jpg',
    },
    {
      id: `blog3`,  
      title: 'JavaScript Hacks',
      description: 'Optimize your JavaScript code for better performance.',
      image: '/images/blog3.jpg',
    },
  ];

  return (
    <section className="py-16 light:bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold light:text-gray-800">Top Blogs of the Month</h2>
        <p className="mt-4 text-lg light:text-gray-600">
          Explore our most popular blogs and stay updated with the latest trends.
        </p>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
          
          <BlogCard key={index} {...blog} />
     
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlog;
