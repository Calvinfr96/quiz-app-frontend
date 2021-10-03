import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import QuizIndexPage from './components/QuizIndexPage';
import Attempt from './components/Attempt';
import { useState } from 'react';
import LogInPage from './components/LogInPage';
import ProfilePage from './components/ProfilePage';
import NewUserFrom from './components/NewUserForm';

function App() {
  const baseURL = "http://127.0.0.1:3000"
  const [user, setUser] = useState(null)
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/login"><LogInPage setUser={setUser} baseURL={baseURL} /></Route>
          <Route path="/signup"><NewUserFrom baseURL={baseURL} /></Route>
          <Route path="/profile"><ProfilePage currentUser={user} setCurrentUser={setUser} baseURL={baseURL} /></Route>
          <Route path="/quizzes" exact><QuizIndexPage baseURL={baseURL} user={user} /></Route>
          <Route path="/quizzes/:id"><Attempt baseURL={baseURL} user={user} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
