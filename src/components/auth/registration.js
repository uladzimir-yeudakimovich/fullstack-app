import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Notification from '../shared/notification'
import { useField } from '../../hooks/index'
import { registrationUser } from '../../reducers/auth-reducer'

const Registration = ({ onRegistration }) => {
  const [message, setMessage] = useState(null)
  const { value: login, bind: bindLogin, reset: loginReset } = useField('login', 'text')
  const { value: name, bind: bindName, reset: nameReset } = useField('name', 'text')
  const { value: password, bind: bindPassword, reset: passwordReset } = useField('password', 'password')
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = async event => {
    event.preventDefault()
    await dispatch(registrationUser(login, name, password))
    const error = JSON.parse(window.localStorage.getItem('error'))
    if (window.localStorage.getItem('userLogin')) {
      onRegistration(login)
      history.push('/')
    } else if (error) {
      setMessage(error)
      window.localStorage.clear()
      setTimeout(() => setMessage(null), 10000)
    }
    loginReset()
    nameReset()
    passwordReset()
  }

  return (
    <Card>
      <Card.Header as="h5" className="text-center">Registration</Card.Header>
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
                <InputGroup.Text>name:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindName} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>password:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl {...bindPassword} />
            </InputGroup>
            <Button variant="primary" type="submit">registration</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Registration