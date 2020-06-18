import service from '../components/shared/service'

const loginReducer = (state, action) => {
  switch (action.type) {
  case 'INITIALIZE_USER': {
    state = action.data
    return state
  }
  case 'LOGIN_USER': {
    state = action.data
    return state
  }
  case 'REGISTRATION_USER': {
    state = action.data
    return state
  }
  case 'LOGOUT_USER': {
    state = action.data
    return state
  }
  default:
    return state
  }
}

export const initializeUser = () => {
  return async dispatch => {
    const userInfo = JSON.parse(window.localStorage.getItem('_at')) ? {
      token: JSON.parse(window.localStorage.getItem('_at')),
      user: {
        name: JSON.parse(window.localStorage.getItem('userName'))
      }
    } : null
    dispatch({
      type: 'INITIALIZE_USER',
      data: userInfo,
    })
  }
}

export const loginUser = (login, password) => {
  return async dispatch => {
    try {
      const userInfo = await service.getToken('login', { login, password })
      if (userInfo) {
        window.localStorage.setItem('_at', JSON.stringify(userInfo.token))
        const name = userInfo.user.name ? userInfo.user.name : userInfo.user.login
        window.localStorage.setItem('userName', JSON.stringify(name))
        service.setToken(userInfo.token)
      }
      dispatch({
        type: 'LOGIN_USER',
        data: userInfo,
      })
    } catch (error) {
      // console.log(error)
    }
  }
}

export const registrationUser = (login, name, password) => {
  return async dispatch => {
    const userInfo = await service.getToken('registration', { login, name, password })
    if (userInfo.status === 400) {
      window.localStorage.setItem('error', JSON.stringify(userInfo.error))
    } else {
      window.localStorage.setItem('_at', JSON.stringify(userInfo.token))
      const name = userInfo.user.name ? userInfo.user.name : userInfo.user.login
      window.localStorage.setItem('userName', JSON.stringify(name))
      service.setToken(userInfo.token)
    }
    dispatch({
      type: 'REGISTRATION_USER',
      data: userInfo,
    })
  }
}

export const removeUser = () => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch({
      type: 'LOGOUT_USER',
      data: null,
    })
  }
}

export default loginReducer