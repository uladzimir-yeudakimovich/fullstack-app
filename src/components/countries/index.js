import React from 'react'

import { useCountry } from '../../hooks/index'
import Display from './display'

const Countries = () => {
  const { valueToShow, filter } = useCountry('https://restcountries.eu/rest/v2/all')

  return (
    <>
      <div>
        find countries: <input {...filter} />
      </div>
      <Display countries={valueToShow}/>
    </>
  )
}

export default Countries