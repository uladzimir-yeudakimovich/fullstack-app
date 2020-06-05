import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/button'
import ShowOne from './show-one'

const ShowMany = ({ showInfo, countries, showCountry, index }) => {
  if (!showInfo) {
    return (
      <>
        {countries.map((country, i) =>
          <p key={i}>
            {country.name}
            <Link to={`/countries/${country.numericCode}`}>
              <Button handleClick={() => showCountry(i)} text="show" />
            </Link>
          </p>
        )}
      </>
    )
  }

  return (
    <>
      <p>
        {countries[index].name}
        <Button handleClick={showCountry} text="hide" />
      </p>
      <ShowOne country={countries[index]}/>
    </>
  )
}

export default ShowMany