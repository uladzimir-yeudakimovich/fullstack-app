import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'

import service from '../shared/service'
import store from './store'
import Header from '../shared/header'
import LoginForm from './login-form'
import BlogsList from './blogs-list'
import CreateForm from './create-form'
import Notification from '../shared/notification'
import Button from '../shared/button'
import ShowForm from './show-form'

const Blogs = () => {
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ user, setUser ] = useState(null)
  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    const userLogin = window.localStorage.getItem('userLogin')
    if (userLogin) { setUser(JSON.parse(userLogin)) }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await service.getToken('login', { login, password })
      window.localStorage.setItem('_at', JSON.stringify(user.token))
      window.localStorage.setItem('userLogin', JSON.stringify(login))
      service.setToken(user.token)
      setUser(login)
      setLogin('')
      setPassword('')
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const handleLogout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  if (user === null) {
    return (
      <>
        <Header name='log in to application' />
        <Notification message={errorMessage} />
        <ShowForm buttonLabel='login'>
          <LoginForm
            submit={handleLogin}
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
          />
        </ShowForm>
      </>
    )
  }
  return (
    <Provider store={store}>
      <Header name='Blogs' />
      <span>{user} logged in</span>
      <Button handleClick={handleLogout} text="logout" />
      <CreateForm/>
      <BlogsList />
    </Provider>
  )
}

export default Blogs
