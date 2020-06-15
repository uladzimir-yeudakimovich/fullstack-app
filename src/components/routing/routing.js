import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import store from '../blogs/store'

import Anecdotes from '../anecdotes/index'
import Blogs from '../blogs/index'
import BlogInfo from '../blogs/blog-info'
import Countries from '../countries/index'
import Course from '../course/index'
import Feedback from '../feedback/index'
import Login from '../login/login'
import PhoneBook from '../phone-book/index'
import Registration from '../registration/registration'

const Routing = ({ user, login }) => {
  return (
    <Switch>
      <Route path="/anecdotes">
        <Anecdotes />
      </Route>
      <Route path="/blogs/:id">
        <Provider store={store}>
          {user ? <BlogInfo /> : <Redirect to="/login" />}
        </Provider>
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
      <Route path="/registration">
        <Registration onRegistration={login} />
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