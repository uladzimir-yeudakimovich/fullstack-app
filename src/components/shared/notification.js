import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const error = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBtom: '10px'
  }
  const success = {...error, color: 'green'}

  if (message.success) {
    return (
      <div style={success}>
        {message.success}
      </div>
    )
  }
  return (
    <div style={error}>
      {message}
    </div>
  )
}

export default Notification