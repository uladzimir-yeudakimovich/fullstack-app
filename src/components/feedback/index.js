import React, { useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Button, Card } from 'react-bootstrap'

import Statistics from './statistics'
import Counter from './counter'
import counterReducer from '../../reducers/counter-reducer'
import filterReducer from '../../reducers/filter-reducer'
import NewCounter from './new-counter'

const reducer = combineReducers({
  counter: counterReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

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
    <Provider store={store}>
      <Card>
        <Card.Header as="h5" className="text-center">Give feedback</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={increaseGood}>good</Button>{' '}
          <Button variant="primary" onClick={increaseNeutral}>neutral</Button>{' '}
          <Button variant="primary" onClick={increaseBad}>bad</Button>
          <Card.Header as="h5">Statistics</Card.Header>
          <Statistics allFeedbacks={allFeedbacks} />
        </Card.Body>
        <Card.Header as="h5">Counter</Card.Header>
        <Card.Body>
          <Counter />
        </Card.Body>
        <Card.Header as="h5">New counter</Card.Header>
        <Card.Body>
          <NewCounter />
        </Card.Body>
      </Card>
    </Provider>
  )
}

export default Feedback
