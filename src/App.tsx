import Card from './components/card';
import { cardsData } from './data/arrayConstants';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 items-center justify-center p-8 height-style">
          <h1 className="text-3xl font-display text-center mb-8">
            PROJECT DASHBOARD
          </h1>

          <div className="relative w-full rounded-lg overflow-hidden ">
            <div className="bg-white w-full p-8 rounded-lg z-10 shadow-md flex flex-wrap">
              {cardsData.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="bg-black text-white text-center py-4">
          &copy;2024{' '}
          <a href="https://maria-mendonca.vercel.app/" target="_self">
            Maria Mendonca
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
