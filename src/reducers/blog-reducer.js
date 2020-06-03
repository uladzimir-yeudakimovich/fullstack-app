const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BLOGS': {
    return action.data
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
    const changedBlog = action.data
    return state.map(blog =>
      blog.id !== id ? blog : changedBlog
    )
  }
  default:
    return state
  }
}

export const initializeBlogs = blogs => {
  return {
    type: 'INIT_BLOGS',
    data: blogs,
  }
}

export default blogReducer
