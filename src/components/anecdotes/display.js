import React from 'react'

const Display = ({ anecdote }) => {
  if (!anecdote) {
    return (<></>)
  }
  return (
    <>
      <div>{anecdote.text}</div>
      <div>has {anecdote.votes} votes</div>
    </>
  )
}

export default Display