import Image from 'next/image';
import Price_Sheet from './Price_Sheet';
import ClientFeedbackSection from '@/app/components/ClientFeedback/ClientSection';
import TopBlog from '@/app/components/TopBlog/TopBlog'
import CommitComponent from '../components/Commit/CommitsSec';

const TailwindComponentsSection = () => {
  return (
  <div className='flex flex-col'>
  <section className="container px-6 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        Welcome to <span className="font-semibold" id='Rye'>AMBlogs</span> Where  
          <br className="hidden lg:block" />
         <div className='pt-2'>Knowledge <span id='Rye' className="font-semibold underline decoration-primary">Meets Creativity</span></div>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
        Professional blog templates and tools to showcase your ideas, share insights, and
          <br className="hidden lg:block" />
        captivate readers with engaging and modern designs for every purpose!
        </p>
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          {/* <form
            action="https://www.creative-tim.com/twcomponents/search"
            className="flex flex-wrap justify-between md:flex-row"
          >
            <input
              type="search"
              name="query"
              placeholder="Search Components"
              required
              className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form> */}
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          width={600}
          height={400}
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>

<Price_Sheet/>

<ClientFeedbackSection/>

<TopBlog/>

<CommitComponent/>
  </div>
  );
};

export default TailwindComponentsSection;
