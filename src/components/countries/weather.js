import React from 'react'
import { Card } from 'react-bootstrap'

const Weather = ({ weather }) => {
  if (weather) {
    return (
      <>
        <Card.Text><strong>temperature:</strong> {weather.temperature} Celcius</Card.Text>
        <Card.Img variant="top" style={{ width: '3rem' }} src={weather.weather_icons[0]} alt='weather' />
        <Card.Text><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</Card.Text>
      </>
    )
  }
  return (<></>)
}

export default Weather