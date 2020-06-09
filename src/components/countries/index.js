import React from 'react'
import { Form } from 'react-bootstrap'

import { useCountry } from '../../hooks/index'
import Display from './display'

const Countries = () => {
  const { valueToShow, filter } = useCountry('https://restcountries.eu/rest/v2/all')

  return (
    <>
      <Form.Group>
        <Form.Label>find countries:</Form.Label>
        <Form.Control {...filter} />
      </Form.Group>
      <Display countries={valueToShow}/>
    </>
  )
}

export default Countries