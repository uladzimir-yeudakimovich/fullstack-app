import React from 'react'

const Display = ({ anecdote }) => {
  return (
    <>
      <div>{anecdote.text}</div>
      <div>has {anecdote.votes} votes</div>
    </>
  )
}

export default Display