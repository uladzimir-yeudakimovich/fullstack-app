import React from 'react'

import Button from '../shared/button'

const Persons = ({ persons, deletePerson }) => {
  const btn = {
    margin: '5px 10px'
  }

  return (
    <ul>
      {persons.map((person, i) =>
        <li key={i}>
          {person.name} {person.number}
          <Button
            style={btn}
            handleClick={() => deletePerson(person.id)}
            text="delete"
          />
        </li>
      )}
    </ul>
  )
}

export default Persons