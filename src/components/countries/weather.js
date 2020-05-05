import React from 'react'

const Weather = ({ weather }) => {
  if (weather) {
    return (
      <>
        <p><strong>temperature:</strong> {weather.temperature} Celcius</p>
        <img style={{height:'40px'}} src={weather.weather_icons} alt='weather' />
        <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
      </>
    )
  }
  return <></>
}

export default Weather