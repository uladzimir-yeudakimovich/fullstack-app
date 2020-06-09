import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Anecdotes from '../anecdotes/index'
import Blogs from '../blogs/index'
import Countries from '../countries/index'
import Course from '../course/index'
import Feedback from '../feedback/index'
import Login from '../login/login'
import PhoneBook from '../phone-book/index'

const Routing = ({ user, login }) => {
  return (
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
  )
}

export default Routing