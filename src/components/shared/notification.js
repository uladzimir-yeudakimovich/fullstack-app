import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  } else if (message.success) {
    return (
      <Alert variant="success">
        {message.success}
      </Alert>
    )
  } else {
    return (
      <Alert variant="danger">
        {message}
      </Alert>
    )
  }
}

export default Notification