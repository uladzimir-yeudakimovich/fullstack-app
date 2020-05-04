import React, { useState } from 'react'

import ShowOne from './show-one'
import ShowMany from './show-many'

const Display = ({ countries }) => {
  const [ showInfo, setShowInfo ] = useState(false)
  const [ index, setIndex ] = useState()

  const showCountry = (event) => {
    setIndex(+event.target.id)
    setShowInfo(!showInfo)
  }

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length === 1) {
    return (
      <ShowOne index={0} countries={countries}/>
    )
  } else {
    return (
      <ShowMany
        showInfo={showInfo}
        countries={countries}
        showCountry={showCountry}
        index={index}
      />
    )
  }
}

export default Display