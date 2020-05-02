import React from 'react'

const Display = ({ text, number }) => {
  return (
    <>
      <div>{text}</div>
      <div>has {number} votes</div>
    </>
  )
}

export default Display