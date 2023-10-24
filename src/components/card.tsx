import React from 'react';

interface CardProps {
  title: string;
  description: string;
  language: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, description, language, url }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 h-64">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 mb-2">{`Language: ${language}`}</p>
      <a href={url} className="text-blue-500 hover:underline" target='_blank'>
        View details
      </a>
    </div>
  );
};

export default Card;
