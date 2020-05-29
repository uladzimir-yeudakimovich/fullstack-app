import deepFreeze from 'deep-freeze'

const blogReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG') {
    return state.concat(action.data)
  }

  return state
}

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
