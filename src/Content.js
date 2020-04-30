import React from 'react'

const Content = (props) => {
  return (
    <>
      {props.parts.map((value, index) => (
        <p key={index}>{value.name + ' ' + value.exercises}</p>
      ))}
    </>
  )
}

export default Content;
