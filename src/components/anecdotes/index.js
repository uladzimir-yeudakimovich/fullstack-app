import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'

import Display from './display'
import service from '../shared/service'

const Anecdotes = () => {
  const [ index, setIndex ] = useState(0)
  const [ allAnecdotes, setAnecdotes ] = useState([])
  const [ anecdoteToShow, setAnecdoteToShow ] = useState({})
  const [ mostVotes, setMostVotes ] = useState({})

  useEffect(() => {
    service.getAll('anecdotes')
      .then(response => {
        setAnecdotes(response)
        setAnecdoteToShow(response[0])
        setMostVotes(findMostVotes(response))
      })
  }, [])

  const nextAnecdote = () => {
    setIndex(Math.floor(Math.random() * allAnecdotes.length))
    setAnecdoteToShow(allAnecdotes[index])
  }

  const voteAnecdote = () => {
    let updatedOne = anecdoteToShow
    updatedOne.votes += 1
    setAnecdoteToShow(updatedOne)
    let updateAll = [...allAnecdotes]
    updateAll[index] = updatedOne
    setAnecdotes(updateAll)
    setMostVotes(findMostVotes(allAnecdotes))
    service.update('anecdotes', anecdoteToShow.id, updatedOne)
  }

  const findMostVotes = (sortArr) => {
    const sortAnecdotes = sortArr.sort((a, b) => a.votes - b.votes)
    return sortAnecdotes[sortArr.length - 1]
  }

  return (
    <Card>
      <Card.Header as="h5">Anecdotes</Card.Header>
      <Card.Body>
        <Card.Title>Anecdotes of the day</Card.Title>
        <Display anecdote={anecdoteToShow} />
        <Button variant="primary" onClick={voteAnecdote}>vote</Button>{' '}
        <Button variant="primary" onClick={nextAnecdote}>next anecdote</Button>
      </Card.Body>
      <Card.Body>
        <Card.Title>Anecdotes with most votes</Card.Title>
        <Display anecdote={mostVotes} />
      </Card.Body>
    </Card>
  )
}

export default Anecdotes
