import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Anecdotes from './components/anecdotes/index'
import Blogs from './components/blogs/index'
import Countries from './components/countries/index'
import Course from './components/course/index'
import Feedback from './components/feedback/index'
import PhoneBook from './components/phone-book/index'

const App = () => {
  const [page, setPage] = useState('blogs')

  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    if (page === 'anecdotes') {
      return <Anecdotes />
    } else if (page === 'blogs') {
      return <Blogs />
    } else if (page === 'countries') {
      return <Countries />
    } else if (page === 'course') {
      return <Course />
    } else if (page === 'feedback') {
      return <Feedback />
    } else if (page === 'phoneBook') {
      return <PhoneBook />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div>
        <a href="" onClick={toPage('anecdotes')} style={padding}>
          anecdotes
        </a>
        <a href="" onClick={toPage('blogs')} style={padding}>
          blogs
        </a>
        <a href="" onClick={toPage('countries')} style={padding}>
          countries
        </a>
        <a href="" onClick={toPage('course')} style={padding}>
          course
        </a>
        <a href="" onClick={toPage('feedback')} style={padding}>
          feedback
        </a>
        <a href="" onClick={toPage('phoneBook')} style={padding}>
          phoneBook
        </a>
      </div>

      {content()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
