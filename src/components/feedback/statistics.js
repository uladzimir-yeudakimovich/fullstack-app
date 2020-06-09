import React from 'react'
import { Table } from 'react-bootstrap'

const Statistics = ({ allFeedbacks }) => {
  const { good, neutral, bad } = allFeedbacks
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>
  }

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + ' %'

  return (
    <Table striped>
      <tbody>
        <tr>
          <td>good:</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral:</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad:</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all:</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average:</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive:</td>
          <td>{positive}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Statistics
