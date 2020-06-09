import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import './index.css'

import Navigation from './components/navigation/navigation'
import Routing from './components/routing/routing'
import service from './components/shared/service'

const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    const userLogin = window.localStorage.getItem('userLogin')
    if (userLogin) { setUser(JSON.parse(userLogin)) }
  }, [setUser])

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => setMessage(null), 10000)
  }

  const logout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div className="container">
      {(message &&
        <Alert variant="success">
          {message}
        </Alert>
      )}
      <Navigation user={user} logout={logout} />
      <Routing user={user} login={login} />

      <div>
        <i>Fullstack-app 2020</i>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
