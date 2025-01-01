import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6 pt-[3rem] lg:pt-[5rem] xl:py-[6rem]">
      <div className="text-center mb-[4rem]">
        <h2 className="text-3xl font-bold mb-[1rem]">Contact Us</h2>
        <p className="">Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <img src="/images/map.jpg" className="w-full rounded" alt="Map" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <form action="/action_page.php" className="space-y-4">
            <div>
              <label htmlFor="fname" className="block text-sm font-medium">First Name</label>
              <input 
                type="text" 
                id="fname" 
                name="firstname" 
                placeholder="Your name.." 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" 
              />
            </div>
            <div>
              <label htmlFor="lname" className="block text-sm font-medium">Last Name</label>
              <input 
                type="text" 
                id="lname" 
                name="lastname" 
                placeholder="Your last name.." 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" 
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium">Country</label>
              <select 
                id="country" 
                name="country" 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <textarea 
                id="subject" 
                name="subject" 
                placeholder="Write something.." 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 h-40"
              ></textarea>
            </div>
            <div>
              <input 
                type="submit" 
                value="Submit" 
                className="w-full dark:bg-[#868629] bg-[#1d79ae] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
