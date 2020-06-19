import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'

import service from '../shared/service'

const Users = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    service.setToken(JSON.parse(window.localStorage.getItem('_at')))
    service.getAll('users')
      .then(response => {
        setUsers(response)
      })
  }, [])

  return (
    <Card>
      <Card.Header as="h5" className="text-center">Users</Card.Header>
      <Card.Body>
        <Table striped>
          <tbody>
            <tr>
              <td></td>
              <td className="text-center">blogs created</td>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className="text-center">{user.blogs.length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default Users