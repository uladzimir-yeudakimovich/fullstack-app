import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Button from './button'

test('renders content', () => {
  const text = 'submit'
  const mockHandler = jest.fn()
  const component = render(<Button onClick={mockHandler} text={text} />)

  const element = component.getByText('submit')
  expect(element).toBeDefined()

  const button = component.container.querySelector('button')
  console.log(prettyDOM(button))
  expect(button).toHaveTextContent('submit')

  fireEvent.click(element)
  // expect(mockHandler.mock.calls).toHaveLength(1)
})
