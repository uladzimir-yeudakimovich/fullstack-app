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
  const { value: login, bind: bindLogin, reset: loginReset } = useField('login', 'text')
  const { value: password, bind: bindPassword, reset: passwordReset } = useField('password', 'password')

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
    loginReset()
    passwordReset()
  }

  return (
    <>
      <Header name='login' />
      <Notification message={errorMessage} />
      <form onSubmit={onSubmit}>
        <div>
          login <input {...bindLogin} />
        </div>
        <div>
          password <input {...bindPassword} />
        </div>
        <Button type="submit" text="submit" />
      </form>
    </>
  )
}

export default Login