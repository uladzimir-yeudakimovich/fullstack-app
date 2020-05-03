import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'

const PhoneBook = () => {
  const [ persons, setPersons] = useState([])
  const [ personsToShow, setPersonsToShow ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setPersonsToShow(response.data)
      })
  }, [])

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewPhoneChange = (event) => setNewPhone(event.target.value)
  const searchNameChange = (event) => {
    setPersonsToShow(persons.filter(person => person.name.includes(event.target.value)))
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    const findPerson = persons.find(person => person.name === newName);
    if (findPerson) return alert(`${newName} is already added to phonebook`)
    setPersons(persons.concat(personObject))
    setPersonsToShow(personsToShow.concat(personObject))
    setNewName('')
    setNewPhone('')
  }

  return (
    <>
      <h2>Phonebook</h2>
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
      <Persons persons={personsToShow}/>
    </>
  )
}

export default PhoneBook
