import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import service from '../shared/service'
import Header from '../shared/header'
import Button from '../shared/button'
import Notification from '../shared/notification'

const Login = ({ onLogin }) => {
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const history = useHistory()

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const user = await service.getToken('login', { login, password })
      window.localStorage.setItem('_at', JSON.stringify(user.token))
      window.localStorage.setItem('userLogin', JSON.stringify(login))
      service.setToken(user.token)
      onLogin(login)
      history.push('/')
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
    setLogin('')
    setPassword('')
  }

  return (
    <div>
      <Header name='login' />
      <Notification message={errorMessage} />
      <form onSubmit={onSubmit}>
        <div>
          login <input
            id='login'
            type="text"
            value={login}
            name="login"
            onChange={({ target }) => setLogin(target.value)}
          />
        </div>
        <div>
          password <input
            id='password'
            type="password"
            value={password}
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button type="submit" text="submit" />
      </form>
    </div>
  )
}

export default Login