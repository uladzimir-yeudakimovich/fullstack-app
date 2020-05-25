import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './weather'

const url = 'http://api.weatherstack.com/current'
const api_key = process.env.REACT_APP_WEATHER_API_KEY

const ShowOne = ({ index, countries }) => {
  const [ weather, setWeather ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState('some error happened...')

  useEffect(() => {
    axios
      .get(`${url}?access_key=${api_key}&query=${countries[index].name}`)
      .then(response => {
        console.log(response.data.error.info)
        if (response.data.error) {
          return setErrorMessage(response.data.error.info)
        }
        setWeather(response.data.current)
      })
  })

  return (
    <>
      <h1>{countries[index].name}</h1>
      <div>
        <p>capital {countries[index].capital}</p>
        <p>population {countries[index].population}</p>
      </div>
      <h2>languages</h2>
      <ul>
        {countries[index].languages.map((language, i) =>
          <li key={i}>{language.name}</li>
        )}
      </ul>
      <img style={{ height:'70px' }} src={countries[index].flag} alt='flag' />
      <h2>Weather in {countries[index].capital}</h2>
      <Weather weather={weather} errorMessage={errorMessage} />
    </>
  )
}

export default ShowOne