import './App.css';
import Nav from './component/Nav';
import Intro from './component/Intro'
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </div>
  );
}

const Home = () => {
  return (
      <div>
        <Intro />
        <Project />
        <Contact />
      </div>
  )
};


export default App;
