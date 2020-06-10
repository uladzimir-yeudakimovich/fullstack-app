import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

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
      <Button variant="primary" style={hideWhenVisible} onClick={toggleVisibility}>{props.buttonLabel}</Button>

      <div style={showWhenVisible}>
        {props.children}
        <Button variant="primary" onClick={toggleVisibility}>cancel</Button>
      </div>
    </div>
  )
})

ShowForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

ShowForm.displayName = 'ShowForm'

export default ShowForm