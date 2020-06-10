import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const Filter = ({ searchChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>search</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl onChange={searchChange} />
    </InputGroup>
  )
}

export default Filter