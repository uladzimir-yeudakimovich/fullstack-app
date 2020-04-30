import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Content from './Content'
import Total from './Total'
import Display from './Display'
import Button from './Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive(good / all)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive(good / all)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
    setPositive(good / all)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
    feedback: 'Give feedback',
    statistics: 'Statistics'
  }

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
      <Display name='good' counter={good}/>
      <Display name='neutral' counter={neutral}/>
      <Display name='bad' counter={bad}/>
      <Display name='all' counter={all}/>
      <Display name='average' counter={average}/>
      <Display name='positive' counter={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
