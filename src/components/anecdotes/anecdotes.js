import React, { useState } from 'react'

import Header from '../shared/header'
import Display from './display'
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
  const compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
  const mostValue = [...allVotes].sort(compareNumeric)[anecdotes.length - 1];
  const mostVotes = allVotes.indexOf(mostValue)

  return (
    <>
      <Header name='Anecdotes of the day' />
      <Display text={anecdotes[selected]} number={allVotes[selected]} />
      <Button handleClick={voteAnecdote} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <Header name='Anecdotes with most votes' />
      <Display text={anecdotes[mostVotes]} number={allVotes[mostVotes]} />
    </>
  )
}

export default Anecdotes
