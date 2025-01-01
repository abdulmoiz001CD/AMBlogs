import React from 'react';
import { Button } from '@/app/components/ui/button';
interface TopBlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<TopBlogCardProps> = ({ title, description, image }) => {
  return (
    <div className="p-6 h-[28rem] lg:h-[23rem] xl:h-[28rem] bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full  h-60 lg:h-[10rem] xl:h-60 object-cover rounded-t-lg" />
      <div className='flex flex-col text-start items-start'>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}...</p>
      <Button variant="link" className='mt-4 lg:mt-2 xl:mt-4 bg-black'>Read More</Button>
      </div>
      
    </div>
  );
};

export default BlogCard;
