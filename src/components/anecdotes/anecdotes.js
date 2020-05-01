import React, { useState } from 'react'

import Header from '../shared/header'
import Button from '../shared/button'

import anecdotes from '../../mock/anecdotes'

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const voteAnecdote = () => {
    allVotes[selected] += 1
    setVotes([ ...allVotes ])
  }

  return (
    <>
      <Header name='Anecdotes of the day' />
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {allVotes[selected]} votes
      </div>
      <Button
        handleClick={voteAnecdote}
        text='vote'
      />
      <Button
        handleClick={nextAnecdote}
        text='next anecdote'
      />
      <Header name='Anecdotes with most votes' />
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {allVotes[selected]} votes
      </div>
    </>
  )
}

export default Anecdotes
