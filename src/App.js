import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import QuizIndexPage from './components/QuizIndexPage';

function App() {
  const baseURL = "http://127.0.0.1:3000"
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/quizzes"><QuizIndexPage baseURL={baseURL} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
