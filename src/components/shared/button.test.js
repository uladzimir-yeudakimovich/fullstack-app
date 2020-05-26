import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import Button from './button'

describe('shared/button', () => {
  test('renders content and should call props.onClick when clicked', () => {
    const text = 'submit'
    const mockHandler = jest.fn()
    const component = render(<Button handleClick={mockHandler} text={text} />)
    const button = component.container.querySelector('button')
    const element = component.getByText('submit')

    // console.log(prettyDOM(button))
    expect(element).toBeDefined()
    expect(button).toHaveTextContent('submit')

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
