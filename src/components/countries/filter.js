import React from 'react'

const Filter = ({ searchChange }) => {
  return (
    <>
      find countries: <input
        onChange={searchChange}
      />
    </>
  )
}

export default Filter