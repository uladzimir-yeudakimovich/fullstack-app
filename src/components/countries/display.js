import React from 'react'

import Button from '../shared/button'

const Display = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1 && countries.length <= 10) {
    const showCountry = () => {}

    return (
      <>
        {countries.map((countrie, i) => 
          <>
            <p key={i}>
              {countrie.name}
              <Button handleClick={showCountry} text='show' />
            </p>
          </>
        )}
      </>
    )
  } else if (countries.length === 1) {
    return (
      <>
        <h1>{countries[0].name}</h1>
        <div>
          <p>capital {countries[0].capital}</p>
          <p>population {countries[0].population}</p>
        </div>
        <h3>languages</h3>
        <ul>
          {countries[0].languages.map((language, i) => 
            <li key={i}>{language.name}</li>
          )}
        </ul>
        <img style={{height:'70px'}} src={countries[0].flag} alt='flag' />
      </>
    )
  } else {
    return (
      <p>Not found</p>
    )
  }
}

export default Display