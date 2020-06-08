import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Header from '../shared/header'
import BlogsList from './blogs-list'
import CreateForm from './create-form'

const Blogs = () => {
  return (
    <Provider store={store}>
      <Header name='Blogs' />
      <CreateForm />
      <BlogsList />
    </Provider>
  )
}

export default Blogs
