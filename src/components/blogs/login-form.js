import React from 'react'

import Button from '../shared/button'

const LoginForm = (props) => {
  return (
    <form>
      <div>
        login <input
          type="text"
          value={props.login}
          name="login"
          onChange={({ target }) => props.setLogin(target.value)}
        />
      </div>
      <div>
        password <input
          type="password"
          value={props.password}
          name="Password"
          onChange={({ target }) => props.setPassword(target.value)}
        />
      </div>
      <Button handleClick={props.submit} text="submit" />
    </form>
  )
}

export default LoginForm