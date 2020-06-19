import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'

import service from '../shared/service'

const BlogsUsers = () => {
  const [ users, setUsers] = useState([])

  useEffect(() => {
    service.getAll('users')
      .then(response => {
        setUsers(response)
      })
  }, [])

  return (
    <Card.Body>
      <Card.Header as="h5">Users</Card.Header>
      <Table striped>
        <tbody>
          <tr>
            <td></td>
            <td>blogs created</td>
          </tr>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default BlogsUsers