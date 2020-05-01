import React from 'react'
import ReactDOM from 'react-dom'

import Course from './components/course/course'
import Feedback from './components/feedback/feedback'
import Anecdotes from './components/anecdotes/anecdotes'

const App = () => {
  return (
    <div>
      <Course />
      <Feedback />
      <Anecdotes />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
