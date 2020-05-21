import React from 'react'

import Button from '../shared/button'

const LoginForm = ({ login, setLogin, password, setPassword, submit }) => {
  return (
    <form>
      <div>
        login <input
          type="text"
          value={login}
          name="login"
          onChange={({ target }) => setLogin(target.value)}
        />
      </div>
      <div>
        password <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button handleClick={submit} text="sign in" />
    </form>
  )
}

export default LoginForm