import React from 'react'

import ShowOne from './show-one'

const ShowMany = ({ showInfo, countries, showCountry, index }) => {
  if (!showInfo) {
    return (
      <>
        {countries.map((country, i) => 
          <p key={i}>
            {country.name}
            <button id={i} onClick={showCountry}>show</button>
          </p>
        )}
      </>
    )
  } else {
    return (
      <>
        <p>
          {countries[index].name}
          <button onClick={showCountry}>hide</button>
        </p>
        <ShowOne index={index} countries={countries}/>
      </>
    )
  }
}

export default ShowMany