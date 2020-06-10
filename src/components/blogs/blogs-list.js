import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
// import { useRouteMatch } from 'react-router-dom'

import ShowBlogInfo from './show-blog-info'
import { initializeBlogs, removeBlog, addLikeForBlog } from '../../reducers/blog-reducer'
import service from '../shared/service'

const BlogsList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state)
  // const match = useRouteMatch('/blogs/:id')
  // const blog = match
  //   ? blogs.find(el => el.id === Number(match.params.id))
  //   : null

  useEffect(() => {
    service.setToken(JSON.parse(window.localStorage.getItem('_at')))
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

  const userLogin = JSON.parse(window.localStorage.getItem('userLogin'))
  const showButton = { display: ''  }
  const hideButton = { display: 'none' }

  return (
    <Card.Body>
      {blogs.map(blog =>
        <Blog key={blog.id}>
          <span>{blog.title} {blog.author}</span>{' '}
          <ShowBlogInfo id={blog.id} buttonLabel="view">
            <div>{blog.url}</div>
            <div>
              {blog.likes}{' '}
              <Button variant="primary" onClick={() => addLike(blog)}>like</Button>
            </div>
            <div>{blog.user.name}</div>
            <Button
              style={userLogin === blog.user.login ? showButton : hideButton}
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