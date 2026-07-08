import Page from './container/Page';

function App() {
  return (
    <div className="wrapper">
      <Page />
      <footer className="bg-black text-white text-center py-4">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://maria-mendonca.vercel.app/" target="_self">
          Maria Mendonca
        </a>
      </footer>
    </div>
  );
}

export default App;
