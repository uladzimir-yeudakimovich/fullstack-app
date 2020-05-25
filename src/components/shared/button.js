import React from 'react'

const Button = ({ style, handleClick, text }) => {
  return (
    <button style={style} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button