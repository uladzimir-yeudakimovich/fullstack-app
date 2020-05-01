import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Content from './components/content'
import Total from './components/total'
import Button from './components/button'
import Statistics from './components/statistics/statistics'

import course from './mock/course'
import anecdotes from './mock/anecdotes'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState({ good: 0, neutral: 0, bad: 0 })
  const [selected, setSelected] = useState(0)

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

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * 10))

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Header course={course.feedback} />
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />     
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <Header course={course.statistics} />
      <Statistics allClicks={allClicks} />
      <div>
        {anecdotes[selected]}
      </div>
      <Button
        handleClick={nextAnecdote}
        text='next anecdote'
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
