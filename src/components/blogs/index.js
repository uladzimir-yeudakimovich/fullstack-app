import React, { useState, useEffect } from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import service from '../shared/service'
import Header from '../shared/header'
import LoginForm from './login-form'
import BlogsList from './blogs-list'
import CreateForm from './create-form'
import Notification from '../shared/notification'
import Button from '../shared/button'
import ShowForm from './show-form'
import blogReducer from '../../reducers/blog-reducer'
import { initializeBlogs } from '../../reducers/blog-reducer'

const store = createStore(
  blogReducer,
  composeWithDevTools()
)

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
    if (_at) {
      service.setToken(JSON.parse(_at))
      getBlogs()
    }
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

  const getBlogs = async () => await service.getAll('blogs').then(data => {
    setBlogs(sort(data))
    store.dispatch(initializeBlogs(data))
  })

  const sort = (sortArr) => sortArr.sort((a, b) => a.likes - b.likes).reverse()

  const createBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    try {
      const newBlog = await service.create('blogs', { title, author, url })
      setBlogs(blogs.concat(newBlog))
      store.dispatch({ type: 'NEW_BLOG', data: { title, author, url, likes: 0 } })
      setTitle('')
      setAuthor('')
      setUrl('')
      setErrorMessage({ success: `a new blog ${title} ${author} added` })
      setTimeout(() => setErrorMessage(null), 5000)
    } catch (error) {
      setErrorMessage(error.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const blogFormRef = React.createRef()

  const addLike = async blog => {
    blog.likes += 1
    setBlogs(sort(blogs.map(el => el.id !== blog.id ? el : blog)))
    store.dispatch({ type: 'ADD_LIKE', data: blog })
    await service.update('blogs', blog.id, blog)
  }

  const deleteBlog = async blog => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      service.remove('blogs', blog.id)
      setBlogs(blogs.filter(el => el.id !== blog.id))
      store.dispatch({ type: 'DELETE_BLOG', data: blog })
    }
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
      <Notification message={errorMessage} />
      <ShowForm buttonLabel='create new blog' ref={blogFormRef}>
        <CreateForm
          createBlog={createBlog}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          url={url}
          setUrl={setUrl}
        />
      </ShowForm>
      <BlogsList blogs={blogs} addLike={addLike} deleteBlog={deleteBlog} />
    </Provider>
  )
}

export default Blogs
