import React from 'react'
import { Table } from 'react-bootstrap'

const Total = ({ parts }) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>
            <strong>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Total
