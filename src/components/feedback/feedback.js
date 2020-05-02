import React, { useState } from 'react'

import Header from '../shared/header'
import Button from '../shared/button'
import Statistics from './statistics'

const Feedback = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAll] = useState({ good: 0, neutral: 0, bad: 0 })

  const increaseGood = () => {
    setGood(good + 1)
    setAll({ good: good + 1, neutral: neutral, bad: bad })
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll({ good: good, neutral: neutral + 1, bad: bad })
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll({ good: good, neutral: neutral, bad: bad + 1 })
  }

  return (
    <>
      <Header name='give feedback' />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />     
      <Button handleClick={increaseBad} text='bad' />
      <Header name='statistics' />
      <Statistics allFeedbacks={allFeedbacks} />
    </>
  )
}

export default Feedback
