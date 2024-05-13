
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import LoginForm from './components/LoginForm';
import Blog from './components/Blog';

function App() {

  
  return (
    <div>
       {/* <Router>
      <div className="App">
        <Switch>
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/login" component={LoginForm} />
          {/* Other routes */}
        {/* </Switch> */}
      {/* </div> */}
    {/* // </Router> */} */

      <NavBar />
      <Home />
      <About />
      <Blog />
      <Portfolio />
 
      <Experience />
      <Contact />
      <SocialLinks />
      <LoginForm />
      
    </div>
  );
}

export default App;
