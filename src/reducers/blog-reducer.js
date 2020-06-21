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
  case 'ADD_COMMENT': {
    console.log(action.data)
    // const id = action.data.id
    // const newBlog = action.data
    return state
  }
  default:
    return state
  }
}

export const initializeBlogs = () => {
  service.setToken(JSON.parse(window.localStorage.getItem('_at')))
  return async dispatch => {
    try {
      const blogs = await service.getAll('blogs')
      dispatch({
        type: 'INIT_BLOGS',
        data: blogs,
      })
    } catch (error) {
      console.log(error)
      window.localStorage.clear()
    }
  }
}

export const createNewBlog = blog => {
  return async dispatch => {
    try {
      const newBlog = await service.create('blogs', blog)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog,
      })
    } catch (error) {
      console.log(error)
    }
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

export const addComment = (id, comment) => {
  return async dispatch => {
    const blogComment = await service.create(`blogs/${id}/comments`, { comment })
    dispatch({
      type: 'ADD_COMMENT',
      data: blogComment,
    })
  }
}

export default blogReducer
