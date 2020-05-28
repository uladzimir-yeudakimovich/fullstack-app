import React from 'react'
import store from '../../store'
import Button from '../shared/button'

const Counter = () => {
  return (
    <>
      <div>{store.getState()}</div>
      <Button handleClick={() => store.dispatch({ type: 'INCREMENT' })} text='plus' />
      <Button handleClick={() => store.dispatch({ type: 'DECREMENT' })} text='minus' />
      <Button handleClick={() => store.dispatch({ type: 'ZERO' })} text='zero' />
    </>
  )
}

export default Counter
