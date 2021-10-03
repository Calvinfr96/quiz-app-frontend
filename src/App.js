import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import QuizIndexPage from './components/QuizIndexPage';
import Attempt from './components/Attempt';

function App() {
  const baseURL = "http://127.0.0.1:3000"
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/quizzes" exact><QuizIndexPage baseURL={baseURL} /></Route>
          <Route path="/quizzes/:id"><Attempt /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
