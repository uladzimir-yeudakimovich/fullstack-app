import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import ShowOne from './show-one'
import ShowMany from './show-many'

const Display = ({ countries }) => {
  const [ showInfo, setShowInfo ] = useState(false)
  const [ index, setIndex ] = useState()

  const showCountry = id => {
    setIndex(+id)
    setShowInfo(!showInfo)
  }

  if (countries.length > 10) {
    return (
      <Card.Body>
        <Card.Text>Too many matches, specify another filter</Card.Text>
      </Card.Body>
    )
  } else if (countries.length === 1) {
    return (
      <ShowOne country={countries[0]}/>
    )
  } else if (countries.length !== 0) {
    return (
      <ShowMany
        showInfo={showInfo}
        countries={countries}
        showCountry={showCountry}
        index={index}
      />
    )
  } else {
    return (
      <Card.Body>
        <Card.Text>Not found</Card.Text>
      </Card.Body>
    )
  }
}

export default Display