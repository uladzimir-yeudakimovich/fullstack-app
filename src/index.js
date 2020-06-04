import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import './index.css'

import Anecdotes from './components/anecdotes/index'
import Blogs from './components/blogs/index'
import Countries from './components/countries/index'
import Course from './components/course/index'
import Feedback from './components/feedback/index'
import PhoneBook from './components/phone-book/index'

const App = () => {
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        <Link style={padding} to="/blogs">blogs</Link>
        <Link style={padding} to="/countries">countries</Link>
        <Link style={padding} to="/course">course</Link>
        <Link style={padding} to="/feedback">feedback</Link>
        <Link style={padding} to="/phoneBook">phoneBook</Link>
      </div>

      <Switch>
        <Route path="/anecdotes">
          <Anecdotes />
        </Route>
        <Route path="/blogs">
          <Blogs />
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
        <Route path="/phoneBook">
          <PhoneBook />
        </Route>
        <Route path="/">
          <Blogs />
        </Route>
      </Switch>

      <div>
        <i>Fullstack-app 2020</i>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
