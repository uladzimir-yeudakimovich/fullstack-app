import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

const PerconForm = ({ addPerson, bindName, bindNumber }) => {
  return (
    <Form onSubmit={addPerson}>
      <Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>name:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl {...bindName} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>number:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl {...bindNumber} />
        </InputGroup>
        <Button variant="primary" type="submit">add</Button>
      </Form.Group>
    </Form>
  )
}

export default PerconForm