import React from 'react';
import ClientFeedbackCard from '@/app/components/ClientFeedback/ClientCard';

const ClientFeedbackSection = () => {
  const clientsFeedback = [
    {
      name: 'John Doe',
      feedback: 'This service transformed my business. The team is professional and efficient!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder image
    },
    {
      name: 'Jane Smith',
      feedback: 'An outstanding experience! Highly recommend their services to anyone.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder image
    },
    {
      name: 'Michael Lee',
      feedback: 'They delivered exactly what we needed. Excellent quality and customer support.',
      image: 'https://randomuser.me/api/portraits/men/24.jpg', // Placeholder image
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          What Our Clients Are Saying
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Our clients love the impact our work has on their businesses. Here’s what they have to say.
        </p>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsFeedback.map((client, index) => (
            <ClientFeedbackCard
              key={index}
              name={client.name}
              feedback={client.feedback}
              image={client.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
