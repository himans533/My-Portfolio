import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import FloatingCTA from './components/FloatingCTA';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Achievements />
      <Portfolio />
      <Education />
      <Contact />
      <SocialLinks />
      <FloatingCTA />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;