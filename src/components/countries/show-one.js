import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Weather from './weather'
import Notification from '../shared/notification'
import Header from '../shared/header'

const url = 'http://api.weatherstack.com/current'
const api_key = process.env.REACT_APP_WEATHER_API_KEY

const ShowOne = ({ country }) => {
  const [ weather, setWeather ] = useState()
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    axios
      .get(`${url}?access_key=${api_key}&query=${country.name}`)
      .then(response => {
        if (response.data.error) {
          return setErrorMessage(response.data.error)
        }
        setWeather(response.data.current)
      })
  }, [])

  return (
    <>
      <Header name={country.name} />
      <div>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
      </div>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language, i) =>
          <li key={i}>{language.name}</li>
        )}
      </ul>
      <img style={{ height:'70px' }} src={country.flag} alt='flag' />
      <h2>Weather in {country.capital}</h2>
      <Weather weather={weather} />
      <Notification message={errorMessage} />
    </>
  )
}

export default ShowOne