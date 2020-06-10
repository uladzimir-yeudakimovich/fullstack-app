import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

import Filter from './filter'
import PerconForm from './person-form'
import Persons from './persons'
import service from '../shared/service'
import Notification from '../shared/notification'
import { useField } from '../../hooks/index'

const PhoneBook = () => {
  const [ persons, setPersons] = useState([])
  const [ personsToShow, setPersonsToShow ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null)
  const { value: name, bind: bindName, reset: nameReset } = useField('name', 'text')
  const { value: number, bind: bindNumber, reset: numberReset } = useField('number', 'text')

  useEffect(() => {
    service.getAll('persons')
      .then(response => {
        setPersons(response)
        setPersonsToShow(response)
      })
  }, [])

  const searchNameChange = (event) => {
    setPersonsToShow(persons.filter(person => person.name.includes(event.target.value)))
  }

  const addPerson = event => {
    event.preventDefault()
    const newPerson = { name, number }
    const findPerson = persons.find(person => person.name === name)
    findPerson ? updataPersone(findPerson, newPerson) : createPersone(newPerson)
    nameReset()
    numberReset()
  }

  const updataPersone = (user, data) => {
    if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
      const { id } = user
      service
        .update('persons', id, data).then(response => {
          setPersons(persons.map(el => el.id !== id ? el : response))
          setPersonsToShow(personsToShow.map(el => el.id !== id ? el : response))
        })
        .catch(error => {
          if (error.message.includes('status code 400')) {
            setErrorMessage(`Number is requared for user ${user.name}, enter and try again.`)
          } else {
            setErrorMessage(error.message)
          }
          setTimeout(() => setErrorMessage(null), 5000)
        })
    }
  }

  const createPersone = user => {
    service.create('persons', user).then(response => {
      setPersons(persons.concat(response))
      setPersonsToShow(personsToShow.concat(response))
      setErrorMessage({ success: `Added ${response.name}` })
      setTimeout(() => setErrorMessage(null), 5000)
    })
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => setErrorMessage(null), 5000)
      })
  }

  const deletePerson = id => {
    const person = persons.find(el => el.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      service.remove('persons', id)
      setPersons(persons.filter(el => el.id !== id))
      setPersonsToShow(personsToShow.filter(el => el.id !== id))
    }
  }

  return (
    <Card>
      <Card.Header as="h5">Phonebook</Card.Header>
      <Card.Body>
        <Card.Title>Find person</Card.Title>
        <Filter searchChange={searchNameChange} />
        <Card.Title>Add a new</Card.Title>
        <Notification message={errorMessage} />
        <PerconForm addPerson={addPerson} bindName={bindName} bindNumber={bindNumber} />
        <Card.Title>Numbers</Card.Title>
        <Persons persons={personsToShow} deletePerson={deletePerson} />
      </Card.Body>
    </Card>
  )
}

export default PhoneBook