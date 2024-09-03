import React from 'react';

interface CardProps {
  title: string;
  description: string;
  language: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, description, language, url }) => {
  const [showDescription, setshowDescription] = React.useState(false);

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div>
        <p className="text-gray-500 mb-2">{`Language: ${language}`}</p>
      </div>
      <div className="flex justify-center gap-4">
        <a href={url} className="text-blue-500 hover:underline" target="_blank">
          Github
        </a>
        <a href={url} className="text-blue-500 hover:underline" target="_blank">
          Live Link
        </a>
      </div>
      <div>
        <p className="text-gray-600 mb-2">
          {showDescription ? description : ''}
        </p>

        <button
          onClick={() => setshowDescription(!showDescription)}
          className="text-blue-500 hover:underline"
        >
          {showDescription ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
