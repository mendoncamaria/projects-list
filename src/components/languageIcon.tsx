interface Language {
  name: string;
  filename: string;
}

interface LanguageIconProps {
  languages: Language[];
}

export const LanguageIcon: React.FC<LanguageIconProps> = ({ languages }) => {
  return (
    <div className="flex">
      {languages.map((language) => (
        <img src={language.filename} alt={language.name} key={language.name} />
      ))}
    </div>
  );
};
