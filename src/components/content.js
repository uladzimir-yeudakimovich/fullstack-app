import React from 'react'

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((value, index) => (
        <p key={index}>{value.name + ' ' + value.exercises}</p>
      ))}
    </>
  )
}

export default Content
