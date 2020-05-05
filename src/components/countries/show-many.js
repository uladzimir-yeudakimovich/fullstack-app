import React from 'react'

import Button from '../shared/button'
import ShowOne from './show-one'

const ShowMany = ({ showInfo, countries, showCountry, index }) => {
  if (!showInfo) {
    return (
      <>
        {countries.map((country, i) => 
          <p key={i}>
            {country.name}
            <Button handleClick={() => showCountry(i)} text="show" />
          </p>
        )}
      </>
    )
  } else {
    return (
      <>
        <p>
          {countries[index].name}
          <Button handleClick={showCountry} text="hide" />
        </p>
        <ShowOne index={index} countries={countries}/>
      </>
    )
  }
}

export default ShowMany