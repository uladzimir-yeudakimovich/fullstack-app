import React from 'react'

import Button from '../shared/button'
import { useCounter } from '../../hooks/index'

const NewCounter = () => {
  const counter = useCounter()

  return (
    <>
      <div>{counter.value}</div>
      <Button handleClick={counter.increase} text='plus' />
      <Button handleClick={counter.decrease} text='minus' />
      <Button handleClick={counter.zero} text='zero' />
    </>
  )
}

export default NewCounter
