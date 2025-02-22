'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { useDispatch } from 'react-redux';  // Use regular useDispatch for now
import { addtoCart } from '@/app/Redux/CartSlice';

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
            id,
            title,
            description,
            image,
        };
        console.log('Dispatching item:', item); // Debug log
        dispatch(addtoCart(item));
    };

    return (
        <div className="p-6 h-[28rem] lg:h-[23rem] xl:h-[28rem] bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <Link href={`/components/BlogPost/${id}`}>
                <Image src={image} alt={title} width={100} height={100} priority className="w-full h-60 lg:h-[10rem] xl:h-60 object-cover rounded-t-lg" />
                <div className='flex flex-col text-start items-start'>
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="mt-2 text-gray-600">{description}...</p>
                </div>
            </Link>
            <Button onClick={handleAddToCart} variant="link" className='w-full pt-[0.90rem] h-[2.8rem]  mt-4 lg:mt-2 xl:mt-4 bg-black text-white text-start items-start'>
                Add to Cart
            </Button>
        </div>
    );
};

export default BlogCard;