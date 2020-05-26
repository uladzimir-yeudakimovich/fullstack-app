import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Notification from './notification'

describe('shared/notification', () => {
  test('renders content and should return sucsses', async () => {
    const message = { success: 'Everything Ok' }
    const component = await render(<Notification message={message} />)
    const element = component.getByText('Everything Ok')
    const div = component.container.querySelector('div')

    expect(element).toBeDefined()
    expect(div).toHaveStyle('color: green')
  })

  test('renders content and should return error', async () => {
    const errorMessage = 'Some error'
    const errorComponent = await render(<Notification message={errorMessage} />)
    const errorElement = errorComponent.getByText('Some error')
    const div = errorComponent.container.querySelector('div')   

    expect(errorElement).toBeDefined()
    expect(div).toHaveStyle('color: red')
  })
})
