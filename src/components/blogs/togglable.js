import React, { useState, useImperativeHandle } from 'react'

import Button from '../shared/button'

const Togglable = React.forwardRef((props, ref) => {
  const [ visible, setVisible ] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <>
      <div style={hideWhenVisible}>
        <Button handleClick={toggleVisibility} text={props.buttonLabel} />
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button handleClick={toggleVisibility} text="cancel" />
      </div>
    </>
  )
})

export default Togglable