import './App.css';
import "./css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './jsx/header';
import Footer from './jsx/footer';
import Home from './jsx/home';
import Skill from './jsx/skill';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Skill />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
