import React from 'react'
import Button from '../shared/button'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  return (
    <>
      <div>good: {count.good}</div>
      <div>ok: {count.ok}</div>
      <div>bad: {count.bad}</div>
      <Button handleClick={() => dispatch({ type: 'GOOD' })} text='good' />
      <Button handleClick={() => dispatch({ type: 'OK' })} text='ok' />
      <Button handleClick={() => dispatch({ type: 'BAD' })} text='bad' />
    </>
  )
}

export default Counter
