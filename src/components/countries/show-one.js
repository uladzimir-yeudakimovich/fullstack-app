import React from 'react'

const ShowOne = ({ index, countries }) => {
  return (
    <>
      <h1>{countries[index].name}</h1>
      <div>
        <p>capital {countries[index].capital}</p>
        <p>population {countries[index].population}</p>
      </div>
      <h3>languages</h3>
      <ul>
        {countries[index].languages.map((language, i) => 
          <li key={i}>{language.name}</li>
        )}
      </ul>
      <img style={{height:'70px'}} src={countries[index].flag} alt='flag' />
    </>
  )
}

export default ShowOne