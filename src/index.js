import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import Notification from './components/shared/notification'
import Navigation from './components/navigation/navigation'
import Routing from './components/routing/routing'
import Footer from './components/footer/footer'

const App = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('userLogin')))
  const [message, setMessage] = useState(null)

  const login = user => {
    setUser(user)
    setMessage({ success: `Welcome ${user}` })
    setTimeout(() => setMessage(null), 10000)
  }

  const logout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div className="container">
      <Navigation user={user} logout={logout} />
      <Notification message={message} />
      <Routing user={user} login={login} />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
