import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

import ShowBlogInfo from './show-blog-info'
import { initializeBlogs, removeBlog, addLikeForBlog } from '../../reducers/blog-reducer'

const BlogsList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state)

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

  const Blog = styled.div`
    border: 2px solid;
    border-radius: 4px;
    margin: 3px 0;
    padding: 3px;
  `

  const userName = JSON.parse(window.localStorage.getItem('userName'))
  const showButton = { display: ''  }
  const hideButton = { display: 'none' }

  return (
    <Card.Body>
      {blogs.map(blog =>
        <Blog key={blog.id}>
          <Link to={`/blog/${blog.id}`}>{blog.title} {blog.author}</Link>
          <ShowBlogInfo id={blog.id} buttonLabel="view">
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
          </ShowBlogInfo>
        </Blog>
      )}
    </Card.Body>
  )
}

export default BlogsList