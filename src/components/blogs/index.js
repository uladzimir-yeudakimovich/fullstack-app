import React from 'react'
import { Provider } from 'react-redux'
import { Card } from 'react-bootstrap'

import store from './store'
import BlogsList from './blogs-list'
import CreateForm from './create-form'

const Blogs = () => {
  return (
    <Provider store={store}>
      <Card>
        <Card.Header as="h5" className="text-center">Blogs</Card.Header>
        <CreateForm />
        <BlogsList />
      </Card>
    </Provider>
  )
}

export default Blogs
