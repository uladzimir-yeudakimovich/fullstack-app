import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ShowOne from './show-one'

const ShowMany = ({ showInfo, countries, showCountry, index }) => {
  if (!showInfo) {
    return (
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
    )
  }

  return (
    <>
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
    </>
  )
}

export default ShowMany