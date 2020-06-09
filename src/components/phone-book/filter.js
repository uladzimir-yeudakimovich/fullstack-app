import React from 'react'
import { Form } from 'react-bootstrap'

const Filter = ({ searchChange }) => {
  return (
    <>
      <Form.Label>filter shown with:</Form.Label>
      <Form.Control onChange={searchChange} />
    </>
  )
}

export default Filter