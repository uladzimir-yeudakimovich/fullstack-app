import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import './index.css'

import Anecdotes from './components/anecdotes/index'
import Blogs from './components/blogs/index'
import Countries from './components/countries/index'
import Course from './components/course/index'
import Feedback from './components/feedback/index'
import Login from './components/login/login'
import PhoneBook from './components/phone-book/index'
import Navigation from './components/navigation/navigation'
import service from './components/shared/service'

const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    const userLogin = window.localStorage.getItem('userLogin')
    if (userLogin) { setUser(JSON.parse(userLogin)) }
  }, [setUser])

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => setMessage(null), 10000)
  }

  const logout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div className="container">
      {(message &&
        <Alert variant="success">
          {message}
        </Alert>
      )}
      <Navigation user={user} logout={logout} />

      <Switch>
        <Route path="/anecdotes">
          <Anecdotes />
        </Route>
        <Route path="/blogs/:id">
          {user ? <Blogs /> : <Redirect to="/login" />}
        </Route>
        <Route path="/blogs">
          {user ? <Blogs /> : <Redirect to="/login" />}
        </Route>
        <Route path="/countries/:id">
          <Countries />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/phoneBook">
          <PhoneBook />
        </Route>
        <Route path="/">
          <Anecdotes />
        </Route>
      </Switch>

      <div>
        <i>Fullstack-app 2020</i>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
