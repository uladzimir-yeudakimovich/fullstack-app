import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

import Weather from './weather'
import Notification from '../shared/notification'

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
  }, [country.name])

  return (
    <>
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>capital {country.capital}</Card.Text>
        <Card.Text>population {country.population}</Card.Text>
        <Card.Title>languages</Card.Title>
        <ul>
          {country.languages.map((language, i) =>
            <li key={i}>{language.name}</li>
          )}
        </ul>
        <Card.Img variant="top" style={{ width: '10rem' }} src={country.flag} alt='flag' />
      </Card.Body>
      <Card.Body>
        <Card.Title>Weather in {country.capital}</Card.Title>
        <Weather weather={weather} />
        <Notification message={errorMessage} />
      </Card.Body>
    </>
  )
}

export default ShowOne