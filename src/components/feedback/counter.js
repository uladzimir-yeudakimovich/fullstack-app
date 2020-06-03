import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../shared/button'
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
      <div
        style={filter === 'ALL' || filter === 'GOOD' ? show : hide}>
        good: {count.good}
      </div>
      <div
        style={filter === 'ALL' ? show : hide}>
        ok: {count.ok}
      </div>
      <div
        style={filter === 'ALL' || filter === 'BAD' ? show : hide}>
        bad: {count.bad}
      </div>
      <Button handleClick={() => dispatch({ type: 'GOOD' })} text='good' />
      <Button handleClick={() => dispatch({ type: 'OK' })} text='ok' />
      <Button handleClick={() => dispatch({ type: 'BAD' })} text='bad' />
    </>
  )
}

export default Counter
