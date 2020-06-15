import service from '../components/shared/service'

const loginReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN_USER': {
    state = action.data
    console.log(state)
    return state
  }
  case 'REGISTRATION_USER': {
    state = action.data
    console.log(state)
    return state
  }
  default:
    return state
  }
}

export const loginUser = (login, password) => {
  return async dispatch => {
    try {
      const user = await service.getToken('login', { login, password })
      if (user) {
        window.localStorage.setItem('_at', JSON.stringify(user.token))
        window.localStorage.setItem('userLogin', JSON.stringify(login))
        service.setToken(user.token)
      }
      dispatch({
        type: 'LOGIN_USER',
        data: user,
      })
    } catch (error) {
      window.localStorage.clear()
    }
  }
}

export const registrationUser = (login, name, password) => {
  return async dispatch => {
    try {
      const user = await service.getToken('registration', { login, name, password })
      if (user.status !== 400) {
        window.localStorage.setItem('_at', JSON.stringify(user.token))
        window.localStorage.setItem('userLogin', JSON.stringify(login))
        service.setToken(user.token)
      }
      dispatch({
        type: 'REGISTRATION_USER',
        data: user,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default loginReducer