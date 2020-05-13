import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import Anecdotes from './components/anecdotes/index'
// import Countries from './components/countries/index'
// import Course from './components/course/index'
// import Feedback from './components/feedback/index'
import PhoneBook from './components/phone-book/index'

const App = () => {
  return (
    <>
      {/* <Anecdotes /> */}
      {/* <Countries /> */}
      {/* <Course /> */}
      {/* <Feedback /> */}
      <PhoneBook />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
