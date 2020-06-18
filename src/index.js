import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'

import './index.css'
import Notification from './components/shared/notification'
import Navigation from './components/navigation/navigation'
import Routing from './components/routing/routing'
import Footer from './components/footer/footer'
import authStore from './components/auth/auth-store'
import { initializeUser } from './reducers/auth-reducer'

const App = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState(null)
  const user = useSelector(state => state)

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  if (user) {
    if (user.status === 400) {
      setMessage(user.error)
      setTimeout(() => setMessage(null), 10000)
      dispatch(initializeUser())
    } else if (user.message === 'Successful login.' || user.message === 'Successful registration.') {
      const userName = JSON.parse(window.localStorage.getItem('userName'))
      setMessage({ success: `Welcome ${userName}` })
      setTimeout(() => setMessage(null), 10000)
      dispatch(initializeUser())
    }
  }

  return (
    <div className="container">
      <Navigation user={user} />
      <Notification message={message} />
      <Routing user={user} />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={authStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
