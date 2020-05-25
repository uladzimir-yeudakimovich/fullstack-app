import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blogs from './index'

test('renders content', () => {
  const blog = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(<Blogs blog={blog} />)

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})
