import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createNewBlog } from '../../reducers/blog-reducer'
import Header from '../shared/header'
import Button from '../shared/button'
import Notification from '../shared/notification'
import ShowForm from './show-form'

const CreateForm = () => {
  const dispatch = useDispatch()
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  const createBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    try {
      dispatch(createNewBlog({ title, author, url, likes: 0 }))
      setTitle('')
      setAuthor('')
      setUrl('')
      setErrorMessage({ success: `a new blog ${title} ${author} added` })
      setTimeout(() => setErrorMessage(null), 5000)
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const blogFormRef = React.createRef()

  return (
    <>
      <Notification message={errorMessage} />
      <ShowForm buttonLabel='create new blog' ref={blogFormRef}>
        <form onSubmit={createBlog}>
          <Header name='create new' />
          <div>
            title <input
              type="text"
              value={title}
              name="title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            author <input
              type="text"
              value={author}
              name="author"
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            url <input
              type="text"
              value={url}
              name="url"
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <Button type="submit" text="create" />
        </form>
      </ShowForm>
    </>
  )
}

export default CreateForm