import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Content from './Content'
import Total from './Total'
import Button from './Button'
import Statistics from './Statistics'

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
    feedback: 'give feedback',
    statistics: 'statistics'
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

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
