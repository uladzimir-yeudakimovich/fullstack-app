import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import authStore from '../auth/auth-store'
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

const Routing = ({ user }) => {
  return (
    <Switch>
      <Route path="/anecdotes">
        <Anecdotes />
      </Route>
      <Route path="/blogs/:id">
        {user ?
          <Provider store={blogsStore}>
            <BlogInfo />
          </Provider> :
          <Provider store={authStore}>
            <Redirect to="/login" />
          </Provider>
        }
      </Route>
      <Route path="/blogs">
        {user ?
          <Blogs /> :
          <Provider store={authStore}>
            <Redirect to="/login" />
          </Provider>
        }
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
        <Provider store={authStore}>
          <Login />
        </Provider>
      </Route>
      <Route path="/registration">
        <Provider store={authStore}>
          <Registration />
        </Provider>
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