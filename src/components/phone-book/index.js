import React, { useState } from 'react'

import Filter from './filter'
import PersonForm from './person-form'
import Persons from './persons'

import users from '../../mock/phone-book'

const PhoneBook = () => {
  const [ persons, setPersons] = useState(users)
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ personsToShow, setPersonsToShow ] = useState([...persons])

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
    <div>
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
    </div>
  )
}

export default PhoneBook
