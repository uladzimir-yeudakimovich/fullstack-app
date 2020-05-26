import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import LoginForm from './login-form'

test('<LoginForm /> updates parent state and calls onSubmit', () => {
  const submit = jest.fn()
  const setLogin = jest.fn()
  const setPassword = jest.fn()
  const component = render(
    <LoginForm
      login=''
      setLogin={setLogin}
      password=''
      setPassword={setPassword}
      submit={submit}
    />
  )
  const inputLogin = component.container.querySelector('input[name=\'login\']')
  const inputPassword = component.container.querySelector('input[name=\'password\']')
  const form = component.container.querySelector('form')

  fireEvent.change(inputLogin, {
    target: { value: 'login' }
  })
  fireEvent.change(inputPassword, {
    target: { value: 'password' }
  })
  fireEvent.submit(form)

  expect(submit.mock.calls).toHaveLength(1)
})
