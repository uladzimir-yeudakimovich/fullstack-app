import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import VisibilityFilter from './visibility-filter'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter)
  const filter = useSelector(state => state.filter)
  const hide = { display: 'none' }
  const show = {
    display: '',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <>
      <VisibilityFilter />
      <Table striped>
        <tbody>
          <tr style={filter === 'ALL' || filter === 'GOOD' ? show : hide}>
            <td>good:</td>
            <td>{count.good}</td>
          </tr>
          <tr style={filter === 'ALL' ? show : hide}>
            <td>ok:</td>
            <td>{count.ok}</td>
          </tr>
          <tr style={filter === 'ALL' || filter === 'BAD' ? show : hide}>
            <td>bad:</td>
            <td>{count.bad}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => dispatch({ type: 'GOOD' })}>good</Button>{' '}
      <Button variant="primary" onClick={() => dispatch({ type: 'OK' })}>ok</Button>{' '}
      <Button variant="primary" onClick={() => dispatch({ type: 'BAD' })}>bad</Button>
    </>
  )
}

export default Counter
