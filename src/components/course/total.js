import React from 'react'

const Total = ({ parts }) => {
  return (
    <>
      <strong>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
    </>
  )
}

export default Total
