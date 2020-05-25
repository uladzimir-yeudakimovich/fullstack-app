import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './header'

test('renders content', () => {
  const name = 'Component testing is done with react-testing-library'
  const component = render(<Header name={name} />)

  const element = component.getByText(
    'Component testing is done with react-testing-library'
  )
  expect(element).toBeDefined()

  const h1 = component.container.querySelector('h1')
  expect(h1).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})
