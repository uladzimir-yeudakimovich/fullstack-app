import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'

import service from '../shared/service'

const UserInfo = () => {
  const [ users, setUsers ] = useState([])
  const match = useRouteMatch('/user/:id')
  const user = match
    ? users.find(el => el.id === match.params.id)
    : null

  useEffect(() => {
    service.setToken(JSON.parse(window.localStorage.getItem('_at')))
    service.getAll('users')
      .then(response => {
        setUsers(response)
      })
  }, [])

  if (!user) {
    return (<></>)
  }

  return (
    <Card>
      <Card.Header as="h5" className="text-center">{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>{user.author}</Card.Title>
        <Card.Title>added blogs</Card.Title>
        <Table striped>
          <tbody>
            {user.blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default UserInfo