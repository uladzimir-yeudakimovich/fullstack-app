import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CreateForm from './create-form'

test('<CreateForm /> updates parent state and calls onSubmit', async () => {
  const createBlog = jest.fn()
  const setTitle = jest.fn()
  const setAuthor = jest.fn()
  const setUrl = jest.fn()
  const component = render(
    <CreateForm
      title=''
      setTitle={setTitle}
      author=''
      setAuthor={setAuthor}
      url=''
      setUrl={setUrl}
      createBlog={createBlog}
    />
  )
  const inputTitle = component.container.querySelector('input[name=\'title\']')
  const inputAuthor = component.container.querySelector('input[name=\'author\']')
  const inputUrl = component.container.querySelector('input[name=\'url\']')
  const form = component.container.querySelector('form')

  fireEvent.change(inputTitle, {
    target: { value: 'title' }
  })
  fireEvent.change(inputAuthor, {
    target: { value: 'author' }
  })
  fireEvent.change(inputUrl, {
    target: { value: 'url' }
  })
  await fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
})
