import deepFreeze from 'deep-freeze'

import { blogReducer } from './blog-reducer'

describe('blogReducer', () => {
  test('returns new state with action NEW_BLOG', () => {
    const state = []
    const action = {
      type: 'NEW_BLOG',
      title: 'the app state is in redux store new',
      author: 'Uladzimir Yeudakimovich',
      url: 'https://fullstack.com/newstore',
      user: {
        name: 'Uladzimir'
      },
      likes: 9,
      id: 3
    }

    deepFreeze(state)
    const newState = blogReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })
})
