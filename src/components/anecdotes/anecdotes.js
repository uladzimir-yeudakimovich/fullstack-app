import React, { useState } from 'react'

import Button from '../shared/button'

import anecdotes from '../../mock/anecdotes'

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * 10))

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <Button
        handleClick={nextAnecdote}
        text='next anecdote'
      />
    </div>
  )
}

export default Anecdotes
