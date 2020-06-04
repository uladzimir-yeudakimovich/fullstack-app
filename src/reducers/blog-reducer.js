import service from '../components/shared/service'

const sort = (sortArr) => sortArr.sort((a, b) => a.likes - b.likes).reverse()

const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BLOGS': {
    return sort(action.data)
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
    const newBlog = action.data
    return sort(state.map(el => el.id === id ? newBlog : el))
  }
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await service.getAll('blogs')
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const createNewBlog = blog => {
  return async dispatch => {
    const newBlog = await service.create('blogs', blog)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog,
    })
  }
}

export const removeBlog = blog => {
  return async dispatch => {
    service.remove('blogs', blog.id)
    dispatch({
      type: 'DELETE_BLOG',
      data: blog,
    })
  }
}

export const addLikeForBlog = blog => {
  return async dispatch => {
    service.update('blogs', blog.id, blog)
    dispatch({
      type: 'ADD_LIKE',
      data: blog,
    })
  }
}

export default blogReducer
