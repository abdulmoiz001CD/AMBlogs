import React from 'react';

interface ClientFeedbackCardProps {
  name: string;
  feedback: string;
  image: string;
}

const ClientFeedbackCard: React.FC<ClientFeedbackCardProps> = ({ name, feedback, image }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h4>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{feedback}</p>
    </div>
  );
};

export default ClientFeedbackCard;
