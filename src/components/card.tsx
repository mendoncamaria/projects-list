import React from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import LanguageIcon from './languageIcon';

interface Language {
  name: string;
  filename: string;
}
interface CardProps {
  title: string;
  description: string;
  language: Language[];
  liveUrl?: string;
  gitUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, language, liveUrl, gitUrl }) => {
  const [showDescription, setshowDescription] = React.useState(false);

  return (
    <div className="bg-white rounded-md shadow-md p-6 flex flex-col gap-4">
      <h1 className="2xl:text-3xl xl:text-2xl text-3xl font-semibold font-serif mb-4 text-center">{title}</h1>
      <div className="flex justify-center items-center">
        <LanguageIcon languages={language} />
      </div>
      <div className="flex justify-center gap-5 items-center">
        <a href={gitUrl} className="text-black-500 hover:underline" target="_blank">
          <FaGithubSquare size={40} />
        </a>
        {liveUrl ? <a href={liveUrl ?? ''} className="text-blue-500 hover:underline" target="_self">
          <FaExternalLinkAlt size={25} />
        </a> : null}
      </div>
      <div>
        <p className="text-gray-600 mb-2 font-serif">
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
