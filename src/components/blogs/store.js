import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import blogReducer from '../../reducers/blog-reducer'

const store = createStore(
  blogReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store