import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './filter'
import Display from './display'

const Countries = () => {
  const [ countries, setCountries ] = useState([])
  const [ countriesToShow, setCountriesToShow ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setCountriesToShow(response.data)
      })
  }, [])

  const searchNameChange = (event) => {
    setCountriesToShow(countries.filter(countrie => countrie.name.includes(event.target.value)))
  }

  return (
    <>
      <Filter searchChange={searchNameChange} />
      <Display countries={countriesToShow}/>
    </>
  )
}

export default Countries