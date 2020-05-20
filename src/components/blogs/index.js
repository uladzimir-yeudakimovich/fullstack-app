import React, { useState, useEffect } from 'react'

import service from '../shared/service'
import Header from '../shared/header'
import BlogForm from './blog-form'
import Notification from '../shared/notification'

const Blogs = () => {
  const [ blogs, setBlogs ] = useState([])
  // const [ newBlog, setNewBlog ] = useState('')
  // const [ showAll, setShowAll ] = useState(true)
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ login, setLogin ] = useState('') 
  const [ password, setPassword ] = useState('')

  useEffect(() => {
    const _at = window.localStorage.getItem('_at')
    if (_at) { service.setToken(JSON.parse(_at)) }
    service
      .getAll('blogs').then(initialNotes => {
        setBlogs(initialNotes)
      })
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await service.getToken('login', { login, password })
      window.localStorage.setItem('_at', JSON.stringify(user.token))
      service.setToken(user.token)
      setLogin('')
      setPassword('')
      setErrorMessage({ success: user.message })
      setTimeout(() => setErrorMessage(null), 5000)
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <>
      <Header name='log in to application' />
      <Notification message={errorMessage} />
      <BlogForm
        submit={handleLogin}
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
      />
      {/* <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   */}
    </>
  )
}

export default Blogs
