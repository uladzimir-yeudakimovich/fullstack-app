import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blogs from './index'

test('<Blogs /> show blogs component', () => {
  const component = render(<Blogs />)
  const buttonLogin = component.container.querySelector('button')
  const buttonCancel = component.getByText('cancel')
  const buttonSubmit = component.getByText('submit')

  expect(buttonLogin).toHaveTextContent('login')
  expect(buttonCancel).toBeDefined()
  expect(buttonLogin.parentElement).toHaveStyle('display: block')
  expect(buttonCancel.parentElement).toHaveStyle('display: none')
  expect(buttonSubmit.parentElement.parentElement).toHaveStyle('display: none')

  fireEvent.click(buttonLogin)
  expect(buttonLogin.parentElement).toHaveStyle('display: none')
  expect(buttonCancel.parentElement).toHaveStyle('display: block')
  expect(buttonSubmit.parentElement.parentElement).toHaveStyle('display: block')

  fireEvent.click(buttonCancel)
  expect(buttonLogin.parentElement).toHaveStyle('display: block')
  expect(buttonCancel.parentElement).toHaveStyle('display: none')
  expect(buttonSubmit.parentElement.parentElement).toHaveStyle('display: none')
})
