import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'

import BlogComments from './blog-comments'
import CommentForm from './comment-form'
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
      <Card.Header as="h5" className="text-center">Blog discription</Card.Header>
      <Card.Body>
        <Card.Title>{blog.title} {blog.author}</Card.Title>
        <a href={blog.url}>{blog.url}</a>
        <div>
          {blog.likes} likes{' '}
          <Button variant="primary" onClick={() => addLike(blog)}>like</Button>
        </div>
        <div>added by {blog.user.name}</div>
        <Button
          style={userName === blog.user.login ? showButton : hideButton}
          variant="danger"
          onClick={() => deleteBlog(blog)}
        >remove</Button>
        <Card.Title style={{ margin: '30px 0 10px' }}>Comments</Card.Title>
        <CommentForm id={blog.id} />
        <BlogComments comments={blog.comments} />
      </Card.Body>
    </Card>
  )
}

export default BlogInfo