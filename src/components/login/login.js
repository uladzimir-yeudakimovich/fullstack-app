import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import service from '../shared/service'
import Header from '../shared/header'
import Button from '../shared/button'
import Notification from '../shared/notification'
import { useField } from '../../hooks/index'

const Login = ({ onLogin }) => {
  const [ errorMessage, setErrorMessage ] = useState(null)
  const history = useHistory()
  const userLogin = useField('login', 'text')
  const userPassword = useField('password', 'password')

  const onSubmit = async (event) => {
    event.preventDefault()
    const login = userLogin.value
    const password = userPassword.value
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
  }

  return (
    <div>
      <Header name='login' />
      <Notification message={errorMessage} />
      <form onSubmit={onSubmit}>
        <div>
          login <input {...userLogin} />
        </div>
        <div>
          password <input {...userPassword} />
        </div>
        <Button type="submit" text="submit" />
      </form>
    </div>
  )
}

export default Login