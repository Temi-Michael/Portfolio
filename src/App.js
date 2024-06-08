import './App.css';
import Nav from './component/Nav';
import Intro from './component/Intro';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav project='Projects' contact='Contact Me' />
      <Intro />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
