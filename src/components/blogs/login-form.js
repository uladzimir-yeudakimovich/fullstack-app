import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ login, setLogin, password, setPassword, submit }) => {
  return (
    <form onSubmit={submit}>
      <div>
        login <input
          id='login'
          type="text"
          value={login}
          name="login"
          onChange={({ target }) => setLogin(target.value)}
        />
      </div>
      <div>
        password <input
          id='password'
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm