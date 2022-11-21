import './App.css';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Options from './Components/Options';
import Work from './Components/Work';

function App() {
  return (
    <>
      <Navigation />
      <About />
      <Work />
      <Options />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
