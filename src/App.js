import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
