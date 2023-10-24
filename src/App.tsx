import Card from './components/card';

function App() {
  const cardsData = [
    {
      title: 'Example Card 1',
      description: 'This is a reusable card component.',
      language: 'JavaScript',
      url: 'https://example.com/card1',
    },
    {
      title: 'Example Card 1',
      description: 'This is a reusable card component.',
      language: 'JavaScript',
      url: 'https://example.com/card1',
    },
    {
      title: 'Example Card 1',
      description: 'This is a reusable card component.',
      language: 'JavaScript',
      url: 'https://example.com/card1',
    },
    {
      title: 'Example Card 1',
      description: 'This is a reusable card component.',
      language: 'JavaScript',
      url: 'https://example.com/card1',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-wrap items-center justify-center p-8">
      {cardsData.map((card, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}

export default App;
