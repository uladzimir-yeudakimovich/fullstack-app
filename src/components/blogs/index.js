import React from 'react'
import { Provider } from 'react-redux'
import { Card } from 'react-bootstrap'

import blogsStore from './blog-store'
import CreateForm from './create-form'
import BlogsList from './blogs-list'
import BlogsUsers from './blog-users'

const Blogs = () => {
  return (
    <Provider store={blogsStore}>
      <Card>
        <Card.Header as="h5" className="text-center">Blogs</Card.Header>
        <CreateForm />
        <BlogsList />
        <BlogsUsers />
      </Card>
    </Provider>
  )
}

export default Blogs
