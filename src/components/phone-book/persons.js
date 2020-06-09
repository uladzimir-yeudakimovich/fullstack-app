import React from 'react'
import { Table, Button } from 'react-bootstrap'

const Persons = ({ persons, deletePerson }) => {
  const btn = {
    margin: '5px 10px'
  }

  return (
    <Table striped>
      <tbody>
        {persons.map(person => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
              <Button
                style={btn}
                variant="primary"
                type="submit"
                onClick={() => deletePerson(person.id)}
              >delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Persons