import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import ShowForm from './show-form'

test('<ShowForm /> show login form', () => {
  const component = render(<ShowForm buttonLabel="login" />)
  const buttonLogin = component.getByText('login')
  const buttonCancel = component.getByText('cancel')

  expect(buttonLogin).toBeDefined()
  expect(buttonCancel).toBeDefined()
  expect(buttonLogin.parentElement).toHaveStyle('display: block')
  expect(buttonCancel.parentElement).toHaveStyle('display: none')

  fireEvent.click(buttonLogin)
  expect(buttonLogin.parentElement).toHaveStyle('display: none')
  expect(buttonCancel.parentElement).toHaveStyle('display: block')

  fireEvent.click(buttonCancel)
  expect(buttonLogin.parentElement).toHaveStyle('display: block')
  expect(buttonCancel.parentElement).toHaveStyle('display: none')
})
