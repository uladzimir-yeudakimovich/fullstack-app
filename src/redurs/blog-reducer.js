import { createStore } from 'redux'

const blogReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG') {
    return state.concat(action.data)
  }

  return state
}

const store = createStore(blogReducer)

store.dispatch({
  type: 'NEW_BLOG',
  data: {
    title: 'the app state is in redux store',
    author: 'Uladzimir Yeudakimovich',
    url: 'https://fullstack.com/store',
    user: {
      name: 'Uladzimir'
    },
    likes: 4,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_BLOG',
  data: {
    title: 'state changes are made with actions',
    author: 'Uladzimir Yeudakimovich',
    url: 'https://fullstack.com/action',
    user: {
      name: 'Uladzimir'
    },
    likes: 5,
    id: 2
  }
})

export default store
