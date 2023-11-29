import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Values from './components/Values';
import Cases from './components/Cases';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import { useRef } from 'react';
const App = () => {
  const mainRef = useRef(null);
  const casesRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = section => {
    let ref;

    switch (section) {
      case 'main':
        ref = mainRef;
        break;
      case 'cases':
        ref = casesRef;
        break;
      case 'contacts':
        ref = contactsRef;
        break;

      default:
        return;
    }

    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
