import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'

// import Anecdotes from './components/anecdotes/index'
// import Blogs from './components/blogs/index'
// import Countries from './components/countries/index'
// import Course from './components/course/index'
import Feedback from './components/feedback/index'
// import PhoneBook from './components/phone-book/index'

import counterReducer from './reducers/counter-reducer'

const store = createStore(counterReducer)

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
