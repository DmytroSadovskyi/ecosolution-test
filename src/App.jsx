import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Values from './components/Values';
import Cases from './components/Cases';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Values />
        <Cases />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
