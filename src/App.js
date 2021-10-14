import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import QuizIndexPage from './components/QuizIndexPage';
import Attempt from './components/Attempt';
import { useState, useEffect } from 'react';
import LogInPage from './components/LogInPage';
import ProfilePage from './components/ProfilePage';
import NewUserFrom from './components/NewUserForm';

function App() {
  const baseURL = "https://damp-island-75764.herokuapp.com"
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    const token =  localStorage.getItem('token')
    const configObj = {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    if (token) {
      const data = await fetch(`${baseURL}/me`, configObj)
      const user = await data.json()
      setUser(user.user)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  function logOut() {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav user={user} logOut={logOut} />
        <Switch>
          <Route path="/" exact><HomePage user={user} /></Route>
          <Route path="/login"><LogInPage setUser={setUser} baseURL={baseURL} /></Route>
          <Route path="/signup"><NewUserFrom baseURL={baseURL} setCurrentUser={setUser} /></Route>
          <Route path="/profile"><ProfilePage currentUser={user} setCurrentUser={setUser} baseURL={baseURL} /></Route>
          <Route path="/quizzes" exact><QuizIndexPage baseURL={baseURL} user={user} /></Route>
          <Route path="/quizzes/:id"><Attempt baseURL={baseURL} user={user} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
