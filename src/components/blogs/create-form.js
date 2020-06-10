import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap'

import { createNewBlog } from '../../reducers/blog-reducer'
import Notification from '../shared/notification'
import ShowForm from './show-form'
import { useField } from '../../hooks/index'

const CreateForm = () => {
  const dispatch = useDispatch()
  const [ errorMessage, setErrorMessage ] = useState(null)
  const { value: title, bind: bindTitle, reset: titleReset } = useField('title', 'text')
  const { value: author, bind: bindAuthor, reset: authorReset } = useField('author', 'text')
  const { value: url, bind: bindUrl, reset: urlReset } = useField('url', 'text')

  const createBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    try {
      dispatch(createNewBlog({ title, author, url, likes: 0 }))
      setErrorMessage({ success: `a new blog ${title} ${author} added` })
      setTimeout(() => setErrorMessage(null), 5000)
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
    titleReset()
    authorReset()
    urlReset()
  }

  const blogFormRef = React.createRef()

  return (
    <Card.Body>
      <Notification message={errorMessage} />
      <ShowForm buttonLabel='create new blog' ref={blogFormRef}>
        <Form onSubmit={createBlog}>
          <Card.Title>Create new</Card.Title>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>title:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindTitle} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>author:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindAuthor} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>url:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindUrl} />
            </InputGroup>
            <Button variant="primary" type="submit">create</Button>
          </Form.Group>
        </Form>
      </ShowForm>
    </Card.Body>
  )
}

export default CreateForm