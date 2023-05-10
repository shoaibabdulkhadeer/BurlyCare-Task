import './App.css';
import Form from './components/Form';
import Happy from './components/Happy';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Numbers from './components/Numbers';
import Services from './components/Services';
import Why from './components/Why';
import Feedback from './components/Feedback';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Why />
      <Numbers />
      <Happy />
      <Form />
      <Faq />
      <Feedback />
      <Footer />

    </div>
  );
}

export default App;
