import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from 'react-router-dom'

import './index.css'

import Anecdotes from './components/anecdotes/index'
import Blogs from './components/blogs/index'
import Button from './components/shared/button'
import Countries from './components/countries/index'
import Course from './components/course/index'
import Feedback from './components/feedback/index'
import Login from './components/login/login'
import PhoneBook from './components/phone-book/index'
import service from './components/shared/service'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    const userLogin = window.localStorage.getItem('userLogin')
    if (userLogin) { setUser(JSON.parse(userLogin)) }
  })

  const login = (user) => {
    setUser(user)
  }

  const logout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  const padding = { padding: 5 }

  return (
    <div className="container">
      <div>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        <Link style={padding} to="/blogs">blogs</Link>
        <Link style={padding} to="/countries">countries</Link>
        <Link style={padding} to="/course">course</Link>
        <Link style={padding} to="/feedback">feedback</Link>
        <Link style={padding} to="/phoneBook">phoneBook</Link>
        {user
          ? <em>
            {user} logged in
            <Button handleClick={logout} text="logout" />
          </em>
          : <Link style={padding} to="/login">login</Link>
        }
      </div>

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
