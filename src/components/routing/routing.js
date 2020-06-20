import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import blogsStore from '../blogs/blog-store'

import Anecdotes from '../anecdotes/index'
import Blogs from '../blogs/index'
import BlogInfo from '../blogs/blog-info'
import Countries from '../countries/index'
import Course from '../course/index'
import Feedback from '../feedback/index'
import Login from '../auth/login'
import PhoneBook from '../phone-book/index'
import Registration from '../auth/registration'
import Users from '../users/index'
import UserInfo from '../users/user-info'

const Routing = ({ user }) => {
  if (!user) {
    user = JSON.parse(window.localStorage.getItem('userName'))
  }

  return (
    <Switch>
      <Route path="/anecdotes">
        {user ? <Anecdotes /> : <Redirect to="/login" />}
      </Route>
      <Route path="/blog/:id">
        {user ?
          <Provider store={blogsStore}>
            <BlogInfo />
          </Provider> :
          <Redirect to="/login" />
        }
      </Route>
      <Route path="/blogs">
        {user ? <Blogs /> : <Redirect to="/login" />}
      </Route>
      <Route path="/user/:id">
        {user ? <UserInfo /> : <Redirect to="/login" />}
      </Route>
      <Route path="/users">
        {user ? <Users /> : <Redirect to="/login" />}
      </Route>
      <Route path="/countries/:id">
        {user ? <Countries /> : <Redirect to="/login" />}
      </Route>
      <Route path="/countries">
        {user ? <Countries /> : <Redirect to="/login" />}
      </Route>
      <Route path="/course">
        {user ? <Course /> : <Redirect to="/login" />}
      </Route>
      <Route path="/feedback">
        {user ? <Feedback /> : <Redirect to="/login" />}
      </Route>
      <Route path="/phoneBook">
        {user ? <PhoneBook /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/">
        <Anecdotes />
      </Route>
    </Switch>
  )
}

export default Routing