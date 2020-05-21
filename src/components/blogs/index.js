import React, { useState, useEffect } from 'react'

import service from '../shared/service'
import Header from '../shared/header'
import LoginForm from './login-form'
import BlogsList from './blogs-list'
import CreateForm from './create-form'
import Notification from '../shared/notification'
import Button from '../shared/button'

const Blogs = () => {
  const [ blogs, setBlogs ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ user, setUser ] = useState(null)
  const [ login, setLogin ] = useState('') 
  const [ password, setPassword ] = useState('')
  const [ title, setTitle ] = useState('') 
  const [ author, setAuthor ] = useState('')
  const [ url, setUrl ] = useState('')

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    const userLogin = window.localStorage.getItem('userLogin')
    if (userLogin) { setUser(JSON.parse(userLogin)) }
    getBlogs()
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await service.getToken('login', { login, password })
      window.localStorage.setItem('_at', JSON.stringify(user.token))
      window.localStorage.setItem('userLogin', JSON.stringify(login))
      service.setToken(user.token)
      getBlogs()
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

  const getBlogs = async () => {
    service.getAll('blogs').then(initialBlogs => setBlogs(initialBlogs))
  }

  const createBlog = async (event) => {
    event.preventDefault()
    try {
      const newBlog = await service.create('blogs', { title, author, url })
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  if (user === null) {
    return (
      <>
        <Header name='log in to application' />
        <Notification message={errorMessage} />
        <LoginForm
          submit={handleLogin}
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
        />
      </>
    )
  }
  return (
    <>
      <Header name='Blogs' />
      <span>{user} logged in</span>
      <Button handleClick={handleLogout} text="log out" />
      <Header name='create new' />
      <Notification message={errorMessage} />
      <CreateForm
        createBlog={createBlog}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        url={url}
        setUrl={setUrl}
      />
      <BlogsList blogs={blogs} />
    </>
  )
}

export default Blogs
