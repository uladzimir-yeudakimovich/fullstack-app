import React from 'react'
import { Form, Button } from 'react-bootstrap'

const PerconForm = ({ addPerson, bindName, bindNumber }) => {
  return (
    <Form onSubmit={addPerson}>
      <Form.Group>
        <Form.Label>name:</Form.Label>
        <Form.Control {...bindName} />
        <Form.Label>number:</Form.Label>
        <Form.Control {...bindNumber} />
        <Button variant="primary" type="submit">add</Button>
      </Form.Group>
    </Form>
  )
}

export default PerconForm