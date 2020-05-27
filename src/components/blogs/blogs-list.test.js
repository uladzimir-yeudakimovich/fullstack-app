import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogsList from './blogs-list'

test('<BlogsList /> show blogs', () => {
  const blogs = [
    {
      author: 'Michael Chan',
      id: '555898df-a972-44d9-88c3-9df4bc755f74',
      likes: 14,
      title: 'React patterns',
      url: 'https://reactpatterns.com/',
      user: {
        id: 'c4d906c0-4a15-4323-b708-6712b0894610',
        login: 'admin',
        name: 'Uladzimir'
      }
    }
  ]
  const addLike = jest.fn()
  const deleteBlog = jest.fn()
  const component = render(<BlogsList blogs={blogs} addLike={addLike} deleteBlog={deleteBlog} />)
  const blogName = component.getByText('React patterns Michael Chan')
  const buttonView = component.getByText('view')
  const buttonHide = component.getByText('hide')
  const buttonLike = component.getByText('like')
  const urlName = component.getByText('https://reactpatterns.com/')
  const likesNumber = component.getByText('14')

  expect(blogName).toBeDefined()
  expect(buttonView).toBeDefined()
  expect(buttonHide).toBeDefined()
  expect(buttonHide).toHaveStyle('display: none')
  expect(urlName.parentElement).toHaveStyle('display: none')
  expect(likesNumber.parentElement).toHaveStyle('display: none')

  fireEvent.click(buttonView)
  expect(buttonView).toHaveStyle('display: none')
  expect(buttonHide).toHaveStyle('display: inline-block')
  expect(urlName.parentElement).toHaveStyle('display: block')
  expect(likesNumber.parentElement).toHaveStyle('display: block')

  fireEvent.click(buttonLike)
  fireEvent.click(buttonLike)
  expect(addLike).toHaveBeenCalledTimes(2)

  fireEvent.click(buttonHide)
  expect(buttonHide).toHaveStyle('display: none')
  expect(buttonView).toHaveStyle('display: inline-block')
  expect(urlName.parentElement).toHaveStyle('display: none')
  expect(likesNumber.parentElement).toHaveStyle('display: none')
})
