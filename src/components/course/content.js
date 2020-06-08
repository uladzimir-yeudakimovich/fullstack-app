import React from 'react'
import { Table } from 'react-bootstrap'

const Content = ({ parts }) => {
  return (
    <Table striped>
      <tbody>
        {parts.map((part, index) => (
          <tr key={index}>
            <td>{part.name}</td>
            <td>{part.exercises}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Content
