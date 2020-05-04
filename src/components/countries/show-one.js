import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://api.weatherstack.com/current'
const api_key = process.env.REACT_APP_WEATHER_API_KEY

const ShowOne = ({ index, countries }) => {
  const [ weather, setWeather ] = useState([])

  useEffect(() => {
    axios
      .get(`${url}?access_key=${api_key}&query=${countries[index].name}`)
      .then(response => {
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
      <img style={{height:'70px'}} src={countries[index].flag} alt='flag' />
      <h2>Weather in {countries[index].capital}</h2>
      <div>
        <p><strong>temperature:</strong> {weather.temperature} Celcius</p>
        <img style={{height:'40px'}} src={weather.weather_icons} alt='weather' />
        <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
      </div>
    </>
  )
}

export default ShowOne