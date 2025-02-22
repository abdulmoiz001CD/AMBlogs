import { NextResponse, type NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const isDraft = path.startsWith('/Blogs');

//   if (isDraft) {
//     const authToken = request.cookies.get('auth-token')?.value;
//     if (!authToken) {
//       return NextResponse.redirect(new URL('/Home', request.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Apply to all /drafts/* routes
// export const config = {
//   matcher: ['/Blogs/:path*'],
  
// };
import { clerkMiddleware } from "@clerk/nextjs/server";

export async function middleware(request:NextRequest) {
 
  
}

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };


export const config = {
  matcher:[
    '/About','/Blogs'
  ]
}