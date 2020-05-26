import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import PersonForm from './person-form'

test('<PersonForm /> updates parent state and calls onSubmit', async () => {
  const submit = jest.fn()
  const changeName = jest.fn()
  const changeNumber = jest.fn()
  const component = render(
    <PersonForm
      name=''
      changeName={changeName}
      number=''
      changeNumber={changeNumber}
      submit={submit}
    />
  )
  const inputName = component.container.querySelector('input[name=\'name\']')
  const inputNumber = component.container.querySelector('input[name=\'number\']')
  const form = component.container.querySelector('form')

  fireEvent.change(inputName, {
    target: { value: 'testName' }
  })
  fireEvent.change(inputNumber, {
    target: { value: '107-457-586' }
  })
  await fireEvent.submit(form)

  expect(submit.mock.calls).toHaveLength(1)
})
