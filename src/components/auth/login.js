import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Notification from '../shared/notification'
import { useField } from '../../hooks/index'
import { loginUser } from '../../reducers/auth-reducer'

const Login = ({ onLogin }) => {
  const [message, setMessage] = useState(null)
  const { value: login, bind: bindLogin, reset: loginReset } = useField('login', 'text')
  const { value: password, bind: bindPassword, reset: passwordReset } = useField('password', 'password')
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = async (event) => {
    event.preventDefault()
    await dispatch(loginUser(login, password))
    if (window.localStorage.getItem('userLogin')) {
      onLogin(login)
      history.push('/')
    } else {
      setMessage('Wrong login or password!')
      setTimeout(() => setMessage(null), 5000)
    }
    loginReset()
    passwordReset()
  }

  return (
    <Card>
      <Card.Header as="h5" className="text-center">login</Card.Header>
      <Card.Body>
        <Notification message={message} />
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>login:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindLogin} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>password:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindPassword} />
            </InputGroup>
            <Button variant="primary" type="submit">login</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login