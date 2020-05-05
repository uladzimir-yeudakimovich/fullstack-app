import React from 'react'

import Button from '../shared/button'

const Persons = ({ persons, deletePerson }) => {
  return (
    <ul>
      {persons.map((person, i) => 
        <li key={i}>
          {person.name} {person.number}
          <Button handleClick={() => deletePerson(person.id)} text="delete" />
        </li>
      )}
    </ul>
  )
}

export default Persons