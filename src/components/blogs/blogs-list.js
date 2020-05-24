import React from 'react'
import PropTypes from 'prop-types'

import Button from '../shared/button'
import ShowBlogInfo from './show-blog-info'

const BlogsList = ({ blogs, addLike, deleteBlog }) => {
  const blogStyle = {
    border: '2px solid',
    borderRadius: '4px',
    margin: '3px 0',
    padding: '3px'
  }

  const userLogin = JSON.parse(window.localStorage.getItem('userLogin'))
  const showButton = { display: ''  }
  const hideButton = { display: 'none' }

  return (
    <div>
      {blogs.map(blog =>
        <div key={blog.id} style={blogStyle}>
          <span>{blog.title} {blog.author}</span>
          <ShowBlogInfo buttonLabel="view">
            <div>{blog.url}</div>
            <div>
              {blog.likes}
              <Button handleClick={() => addLike(blog)} text="like" />
            </div>
            <div>{blog.user.name}</div>
            <Button
              style={userLogin === blog.user.login ? showButton : hideButton}
              handleClick={() => deleteBlog(blog)}
              text="remove"
            />
          </ShowBlogInfo>
        </div>
      )}
    </div>
  )
}

BlogsList.propTypes = {
  addLike: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired
}

export default BlogsList