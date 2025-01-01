import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto 5xl:pt-[15rem]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Division */}
        <div className="lg:flex-1">
          <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px]">
            <Image
              src="/images/img.jpeg" 
              alt="Profile Image"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>



        {/* Content Division */}
        <div className="lg:flex-1 space-y-8">
          {/* Header */}
          <div className="text-center lg:text-left">

            <div className='flex items-center gap-3'>
            <Image src='/images/circle.svg' alt='circle' width={20} height={20}/>


            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
              <div className="w-20 h-1 bg-orange-600 mx-auto lg:mx-0 mt-2"></div>
            </h2>
          
            </div>
           

          
          </div>

          {/* Information Tables */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-medium">Bachelor in Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2022</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">University Name</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-medium">High School Diploma</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2016 - 2018</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">School Name</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Experience
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-medium">Senior Developer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2022 - Present</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Company Name</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-medium">Junior Developer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2022</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Company Name</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a passionate web developer with over 4 years of experience in creating modern and responsive web applications. 
            I specialize in frontend development using React and Next.js, with a strong foundation in HTML, CSS, and JavaScript. 
            I am dedicated to writing clean, efficient code and creating user-friendly interfaces that deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
