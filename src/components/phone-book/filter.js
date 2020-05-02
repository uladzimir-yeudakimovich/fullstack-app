import React from 'react'

const Filter = ({ searchChange }) => {
  return (
    <>
      filter shown with: <input
        onChange={searchChange}
      />
    </>
  )
}

export default Filter