import React from 'react'
import Button from '../shared/button'
import { store } from '../../reducers/counter-reducer'

const Counter = () => {
  return (
    <>
      <div>good: {store.getState().good}</div>
      <div>ok: {store.getState().ok}</div>
      <div>bad: {store.getState().bad}</div>
      <Button handleClick={() => store.dispatch({ type: 'GOOD' })} text='good' />
      <Button handleClick={() => store.dispatch({ type: 'OK' })} text='ok' />
      <Button handleClick={() => store.dispatch({ type: 'BAD' })} text='bad' />
    </>
  )
}

export default Counter
