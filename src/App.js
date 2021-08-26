import './App.css';
import "./css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './jsx/header';
import Footer from './jsx/footer';
import Home from './jsx/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
