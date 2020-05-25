import React from 'react'

import Notification from '../shared/notification'

const Weather = ({ weather, errorMessage }) => {
  if (weather.length) {
    console.log(weather)
    return (
      <>
        <p><strong>temperature:</strong> {weather.temperature} Celcius</p>
        <img style={{ height:'40px' }} src={weather.weather_icons} alt='weather' />
        <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
      </>
    )
  }
  return (
    <Notification message={errorMessage} />
  )
}

export default Weather