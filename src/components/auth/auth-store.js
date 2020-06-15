import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import authReducer from '../../reducers/auth-reducer'

const authStore = createStore(
  authReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default authStore