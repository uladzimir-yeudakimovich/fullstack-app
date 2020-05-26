import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './header'

describe('shared/header', () => {
  test('renders content', () => {
    const name = 'Component testing is done with react-testing-library'
    const component = render(<Header name={name} />)
    const h1 = component.container.querySelector('h1')
    const element = component.getByText(
      'Component testing is done with react-testing-library'
    )

    expect(element).toBeDefined()
    expect(h1).toHaveTextContent(
      'Component testing is done with react-testing-library'
    )
  })
})
