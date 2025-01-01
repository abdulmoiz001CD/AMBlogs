import React from 'react'

const Price_Sheet = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
        Choose the Plan That’s Right for You
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        We offer flexible pricing options that are designed to fit your needs, whether you're a small startup or a large enterprise.
      </p>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="hover:border-2 dark:hover:border-[yellow] hover:border-[#b5b523] p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Plan</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">$19/month</p>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
            <li>10GB Storage</li>
            <li>1 Website</li>
            <li>Email Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80">
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="hover:border-2  dark:hover:border-[yellow] hover:border-[#b5b523] p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Standard Plan</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">$49/month</p>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
            <li>50GB Storage</li>
            <li>5 Websites</li>
            <li>Priority Email Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="hover:border-2  dark:hover:border-[yellow] hover:border-[#b5b523] p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Premium Plan</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">$99/month</p>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
            <li>200GB Storage</li>
            <li>Unlimited Websites</li>
            <li>24/7 Priority Support</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Price_Sheet