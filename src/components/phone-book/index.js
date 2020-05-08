import React, { useState, useEffect } from 'react'

import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'
import REST from './rest'
import Notification from '../shared/notification'

const PhoneBook = () => {
  const [ persons, setPersons] = useState([])
  const [ personsToShow, setPersonsToShow ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    REST.getAll()
      .then(response => {
        setPersons(response)
        setPersonsToShow(response)
      })
  }, [])

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewPhoneChange = (event) => setNewPhone(event.target.value)
  const searchNameChange = (event) => {
    setPersonsToShow(persons.filter(person => person.name.includes(event.target.value)))
  }

  const addPerson = event => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newPhone
    }
    const findPerson = persons.find(person => person.name === newName);
    findPerson ? updataPersone(findPerson, newPerson) : createPersone(newPerson)
    setNewName('')
    setNewPhone('')
  }

  const updataPersone = (user, data) => {
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const { id, name } = user
      REST
        .update(id, data).then(response => {
          setPersons(persons.map(el => el.id !== id ? el : response))
          setPersonsToShow(personsToShow.map(el => el.id !== id ? el : response))
        })
        .catch(error => {
          if (error.message.includes('status code 400')) {
            setErrorMessage(`Number is requared for user ${name}, enter and try again.`)
          } else {
            setErrorMessage(`${error.message}`)
          }
          setTimeout(() => setErrorMessage(null), 5000)
        })
    }
  }

  const createPersone = user => {
    REST.create(user)
    setPersons(persons.concat(user))
    setPersonsToShow(personsToShow.concat(user))
    setErrorMessage({ success: `Added ${user.name}` })
    setTimeout(() => setErrorMessage(null), 5000)
  }

  const deletePerson = id => {
    const person = persons.find(el => el.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      REST.remove(id)
      setPersons(persons.filter(el => el.id !== id))
      setPersonsToShow(personsToShow.filter(el => el.id !== id))
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter searchChange={searchNameChange} />
      <h3>Add a new</h3>
      <PersonForm
        submit={addPerson}
        name={newName}
        changeName={handleNewNameChange}
        number={newPhone}
        changeNumber={handleNewPhoneChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </>
  )
}

export default PhoneBook