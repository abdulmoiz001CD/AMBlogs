'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import Themebtn from '@/app/components/Themebtn'
import { IoMdMenu } from "react-icons/io";
import { useClerk } from '@clerk/nextjs';
import { useUser, UserButton } from '@clerk/nextjs';

import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,
} from "@/app/components/ui/sheet"
import { useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/Store';

function Navbar() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    console.log('Cart Items:', cartItems); // Debug log
    const {openSignUp,openSignIn} = useClerk()
    // const { isSignedIn } = useUser();

    return (
        <nav className="sticky top-0 z-10 p-6 mx-auto border-[1px] shadow-md border-b-[#8080807a] backdrop-blur">
           <div className="container mx-auto flex items-center justify-between">
                 <Link href='/Home' id='Rye' className="font-bold text-xl"><span id='Agwo' className='dark:text-[yellow] text-[#0b456afe]'>AM</span>Blogs</Link>
                 <ul className="hidden md:flex justify-between space-x-4 items-center gap-3">
                     <li><Link href="/Home" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Home</Link></li>
                     <li><Link href="/Blogs" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Blogs</Link></li>
                     <li><Link href="/About" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>About</Link></li>
                     <li><Link href="/Contact" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Contact</Link></li>
                     <div className='flex items-center gap-4'>
                     <Button onClick={() => openSignIn()}>Login</Button>
                     <Button onClick={() => openSignUp()}>Sign Up</Button>
            <div className="relative">
                <Link href="/Shop" className="relative inline-block">
                    Shop
                    <span className="absolute top-[-8px] right-[-12px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {cartItems?.length || 0}
                    </span>
                </Link>
            </div>
            <Themebtn />
            </div>
            </ul>
              {/* {isSignedIn ? (
          <>
            <Link href="/Contact">Contact</Link>
            <Link href="/about">About</Link>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <Link href="/contsct">Contact</Link>
            <Link href="/sign-in?redirect_url=/about">About</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </>
        )} */}

            <div className='md:hidden'>
                  <Sheet>
                      <div className='flex gap-3'>
                          <Themebtn />
                          <SheetTrigger><IoMdMenu size={25} /></SheetTrigger>
                      </div>


                      <SheetContent>
                          <SheetHeader>
                              <SheetTitle className='text-[2rem] pt-12 pb-6'>Blog</SheetTitle>
                              <SheetDescription className='flex flex-col gap-4'>
                                  <li><Link href="/Home" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Home</Link></li>
                                  <li><Link href="/Blogs" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Blogs</Link></li>
                                  <li><Link href="/About" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>About</Link></li>
                                  <li><Link href="/Contact" className='hover:border-b-2 hover:border-yellow-500  hover:scale-105 hover:font-bold transition-transform duration-350'>Contact</Link></li>

                                  <Button>Login</Button>
                                  <Button>Sign</Button>
                              </SheetDescription>
                          </SheetHeader>
                      </SheetContent>
                  </Sheet>

              </div>






           </div>

        </nav>
    );
}

export default Navbar;