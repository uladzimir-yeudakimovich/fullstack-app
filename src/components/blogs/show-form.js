import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

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

  const Section = styled.div`
    margin-top: 20px;
  `

  return (
    <Section>
      <Button variant="primary" style={hideWhenVisible} onClick={toggleVisibility}>{props.buttonLabel}</Button>
      <div style={showWhenVisible}>
        {props.children}
        <Button variant="primary" onClick={toggleVisibility}>cancel</Button>
      </div>
    </Section>
  )
})

ShowForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

ShowForm.displayName = 'ShowForm'

export default ShowForm