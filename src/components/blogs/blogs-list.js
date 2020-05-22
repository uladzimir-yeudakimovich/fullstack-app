import React from 'react'

import Button from '../shared/button'
import ShowBlogInfo from './show-blog-info'

const BlogsList = ({ blogs }) => {
  const blogStyle = {
    border: '2px solid',
    borderRadius: '4px',
    margin: '3px 0',
    padding: '3px'
  }

  return (
    <div>
      {blogs.map(blog =>
        <div key={blog.id} style={blogStyle}>
          <span>{blog.title} {blog.author}</span>
          <ShowBlogInfo buttonLabel="view">
            <div>{blog.url}</div>
            <div>
              {blog.likes}
              <Button handleClick={() => console.log(event)} text="like" />
            </div>
            <div>{blog.user.name}</div>
          </ShowBlogInfo>
        </div>
      )}
    </div>
  )
}

export default BlogsList