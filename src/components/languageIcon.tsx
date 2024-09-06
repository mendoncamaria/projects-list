import React from 'react';

interface Language {
  name: string;
  filename: string;
}

const LanguageIcon: React.FC<{ languages: Language[] }> = ({ languages }) => {
  return (
    <div className="flex gap-2 items-center">
      <h3 className="text-gray-700 font-semibold">I'm built using</h3>
      <div className="flex gap-1 flex-wrap">
        {languages.map((language) => (
          <span
            key={language.filename}
            className="inline-flex rounded-full px-2 py-1 text-center text-gray-700 bg-gray-200 mr-1"
          >
            {language.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageIcon;
