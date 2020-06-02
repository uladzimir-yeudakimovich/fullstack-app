const blogReducer = (state = [], action) => {
  if (action.type === 'NEW_BLOG') {
    return state.concat(action.data)
  }
  return state
}

export default blogReducer
