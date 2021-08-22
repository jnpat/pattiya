import './App.css';
import Header from './jsx/header';
import "./css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
