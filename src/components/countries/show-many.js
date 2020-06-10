import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ShowOne from './show-one'

const ShowMany = ({ showInfo, countries, showCountry, index }) => {
  if (!showInfo) {
    return (
      <Card.Body>
        <Table striped>
          <tbody>
            {countries.map((country, i) => (
              <tr key={i}>
                <td>{country.name}</td>
                <td>
                  <Link to={`/countries/${country.numericCode}`}>
                    <Button variant="primary" onClick={() => showCountry(i)}>show</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    )
  }

  return (
    <Card.Body>
      <Table striped>
        <tbody>
          <tr>
            <td>{countries[index].name}</td>
            <td>
              <Button variant="primary" onClick={showCountry}>hide</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <ShowOne country={countries[index]}/>
    </Card.Body>
  )
}

export default ShowMany