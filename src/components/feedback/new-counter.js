import React from 'react'
import { Table, Button } from 'react-bootstrap'

import { useCounter } from '../../hooks/index'

const NewCounter = () => {
  const counter = useCounter()

  return (
    <>
      <Table striped>
        <tbody>
          <tr>
            <td>result:</td>
            <td>{counter.value}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={counter.increase}>plus</Button>{' '}
      <Button variant="primary" onClick={counter.decrease}>minus</Button>{' '}
      <Button variant="primary" onClick={counter.zero}>zero</Button>
    </>
  )
}

export default NewCounter
