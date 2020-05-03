import React from 'react'
import ReactDOM from 'react-dom'

// import Course from './components/course/index'
// import Feedback from './components/feedback/index'
// import Anecdotes from './components/anecdotes/index'
// import PhoneBook from './components/phone-book/index'
import Countries from './components/countries/index'

const App = () => {
  return (
    <>
      {/* <Course /> */}
      {/* <Feedback /> */}
      {/* <Anecdotes /> */}
      {/* <PhoneBook /> */}
      <Countries />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
