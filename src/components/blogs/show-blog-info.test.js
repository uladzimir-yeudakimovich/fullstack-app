import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import ShowBlogInfo from './show-blog-info'

test('<ShowBlogInfo /> show blogs info', () => {
  const component = render(<ShowBlogInfo buttonLabel="view" />)
  const buttonView = component.getByText('view')
  const buttonHide = component.getByText('hide')

  expect(buttonView).toBeDefined()
  expect(buttonHide).toBeDefined()
  expect(buttonView).toHaveStyle('display: inline-block')
  expect(buttonHide).toHaveStyle('display: none')

  fireEvent.click(buttonView)
  expect(buttonView).toHaveStyle('display: none')
  expect(buttonHide).toHaveStyle('display: inline-block')

  fireEvent.click(buttonHide)
  expect(buttonView).toHaveStyle('display: inline-block')
  expect(buttonHide).toHaveStyle('display: none')
})
