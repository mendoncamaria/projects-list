import Card from './components/card';

function App() {
  const cardsData = [
    {
      title: 'Todo List',
      description: 'Todo List',
      language: 'JavaScript, Firebase',
      url: 'https://mariamendonca-todo-app.netlify.app/',
    },
    {
      title: 'Portfolio',
      description: 'Portfolio',
      language: 'NextJS',
      url: 'https://maria-mendonca.vercel.app/',
    },
    {
      title: 'Weather',
      description: 'Weather',
      language: 'ReactJS',
      url: 'https://weather-mendoncamaria.vercel.app/',
    },
    {
      title: 'Sticky Notes',
      description: 'Sticky notes',
      language: 'Typescript',
      url: 'https://stickynotes-mendoncamaria.vercel.app/',
    },
    {
      title: 'Quiz',
      description: 'Quiz',
      language: 'ReactJS',
      url: 'https://quiz-mendoncamaria.vercel.app/',
    },
    {
      title: 'Gradient background',
      description: 'Gradient background',
      language: 'ReactJS',
      url: 'https://gradientbackground-mendoncamaria.netlify.app/',
    },
    {
      title: 'Temperature Conversion',
      description: 'Temperature Conversion',
      language: 'ReactJS',
      url: 'https://temperatureconverter-mendoncamaria.netlify.app/',
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-wrap items-center justify-center p-8">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-black text-white text-center py-4">
        &copy; 2023 Maria Mendonca
      </footer>
    </>
  );
}

export default App;
