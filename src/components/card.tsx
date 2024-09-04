import React from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  language: string;
  liveUrl: string;
  gitUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, language, liveUrl, gitUrl }) => {
  const [showDescription, setshowDescription] = React.useState(false);

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div>
        <p className="text-gray-500 mb-2">{`Language: ${language}`}</p>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <a href={gitUrl} className="text-black-500 hover:underline" target="_blank">
          <FaGithubSquare size={40} />
        </a>
        <a href={liveUrl} className="text-blue-500 hover:underline" target="_blank">
          <FaExternalLinkAlt size={25} />
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
          <div className="flex items-center">
            {showDescription ? 'View Less' : 'View More'}
            {showDescription ? (
              <MdOutlineKeyboardDoubleArrowUp />
            ) : (
              <MdOutlineKeyboardDoubleArrowDown />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
