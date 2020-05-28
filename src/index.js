import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import './index.css'

// import Anecdotes from './components/anecdotes/index'
// import Blogs from './components/blogs/index'
// import Countries from './components/countries/index'
// import Course from './components/course/index'
import Feedback from './components/feedback/index'
// import PhoneBook from './components/phone-book/index'

const App = () => {
  return (
    <>
      {/* <Anecdotes /> */}
      {/* <Blogs /> */}
      {/* <Countries /> */}
      {/* <Course /> */}
      <Feedback />
      {/* <PhoneBook /> */}
    </>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
