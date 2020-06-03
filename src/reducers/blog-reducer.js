const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_BLOGS': {
    return state.concat(action.data)
  }
  case 'NEW_BLOG': {
    return [...state, action.data]
  }
  case 'DELETE_BLOG': {
    const id = action.data.id
    return state.filter(blog => blog.id !== id )
  }
  case 'ADD_LIKE': {
    const id = action.data.id
    const blogToChange = state.find(n => n.id === id)
    const changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }
    return state.map(blog =>
      blog.id !== id ? blog : changedBlog
    )
  }
  default:
    return state
  }
}

export default blogReducer
