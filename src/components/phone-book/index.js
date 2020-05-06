import React, { useState, useEffect } from 'react'

import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'
import rest from './rest'
import Notification from '../shared/notification'

const PhoneBook = () => {
  const [ persons, setPersons] = useState([])
  const [ personsToShow, setPersonsToShow ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    rest.getAll()
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
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    const findPerson = persons.find(person => person.name === newName);
    
    if (findPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        rest
          .update(findPerson.id, personObject).then(response => {
            setPersons(persons.map(el => el.id !== findPerson.id ? el : response))
            setPersonsToShow(personsToShow.map(el => el.id !== findPerson.id ? el : response))
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${findPerson.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== findPerson.id))
            setPersonsToShow(persons.filter(n => n.id !== findPerson.id))
          })
      }
    } else {
      rest.create(personObject)
      setPersons(persons.concat(personObject))
      setPersonsToShow(personsToShow.concat(personObject))
      setErrorMessage({
        success: `Added ${personObject.name}`
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

    setNewName('')
    setNewPhone('')
  }

  const deletePerson = id => {
    const person = persons.find(el => el.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      rest.remove(id)
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