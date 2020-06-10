import React from 'react'
import { Card, FormControl, InputGroup } from 'react-bootstrap'

import { useCountry } from '../../hooks/index'
import Display from './display'

const Countries = () => {
  const { valueToShow, filter } = useCountry('https://restcountries.eu/rest/v2/all')

  return (
    <Card>
      <Card.Header as="h5">Find countries:</Card.Header>
      <Card.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl {...filter} />
        </InputGroup>
      </Card.Body>
      <Display countries={valueToShow}/>
    </Card>
  )
}

export default Countries