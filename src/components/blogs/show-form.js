import React, { useState, useImperativeHandle } from 'react'

import Button from '../shared/button'

const ShowForm = React.forwardRef((props, ref) => {
  const [ visible, setVisible ] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  const showFormStyle = {
    marginTop: '20px'
  }

  return (
    <div style={showFormStyle}>
      <div style={hideWhenVisible}>
        <Button handleClick={toggleVisibility} text={props.buttonLabel} />
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button handleClick={toggleVisibility} text="cancel" />
      </div>
    </div>
  )
})

export default ShowForm