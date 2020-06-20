import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'

import { initializeBlogs, removeBlog, addLikeForBlog } from '../../reducers/blog-reducer'

const BlogInfo = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state)
  const match = useRouteMatch('/blog/:id')
  const blog = match
    ? blogs.find(el => el.id === match.params.id)
    : null

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  const addLike = async blog => {
    blog.likes += 1
    dispatch(addLikeForBlog(blog))
  }

  const deleteBlog = async blog => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      dispatch(removeBlog(blog))
    }
  }

  const userName = JSON.parse(window.localStorage.getItem('userName'))
  const showButton = { display: ''  }
  const hideButton = { display: 'none' }

  if (!blogs.length) {
    return (<></>)
  }

  return (
    <Card>
      <Card.Body>
        <div>{blog.url}</div>
        <div>
          {blog.likes}{' '}
          <Button variant="primary" onClick={() => addLike(blog)}>like</Button>
        </div>
        <div>{blog.user.name}</div>
        <Button
          style={userName === blog.user.login ? showButton : hideButton}
          variant="danger"
          onClick={() => deleteBlog(blog)}
        >remove</Button>
      </Card.Body>
    </Card>
  )
}

export default BlogInfo