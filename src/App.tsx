// import Card from './components/card';
import Page from './container/Page';
// import { cardsData } from './data/arrayConstants';

function App() {
  return (
    <>
      <div className="wrapper">
        <Page />
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
