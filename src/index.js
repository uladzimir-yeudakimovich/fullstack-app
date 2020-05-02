import React from 'react'
import ReactDOM from 'react-dom'

import Course from './components/course/index'
import Feedback from './components/feedback/index'
import Anecdotes from './components/anecdotes/index'

const App = () => {
  return (
    <>
      <Course />
      <Feedback />
      <Anecdotes />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
