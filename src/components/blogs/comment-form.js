import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

import { useField } from '../../hooks/index'
import { addComment } from '../../reducers/blog-reducer'

const CommentForm = ({ id }) => {
  const { value: comment, bind: bindComment, reset: commentReset } = useField('comment', 'text')
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    dispatch(addComment(id, comment))
    commentReset()
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <InputGroup className="mb-3">
          <FormControl {...bindComment} />
        </InputGroup>
        <Button variant="primary" type="submit">add comment</Button>
      </Form.Group>
    </Form>
  )
}

export default CommentForm