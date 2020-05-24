import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import Button from '../shared/button'

const ShowBlogInfo = React.forwardRef((props, ref) => {
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
      <Button style={hideWhenVisible} handleClick={toggleVisibility} text={props.buttonLabel} />
      <Button style={showWhenVisible} handleClick={toggleVisibility} text="hide" />
      <div style={showWhenVisible}>
        {props.children}
      </div>
    </>
  )
})

ShowBlogInfo.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ShowBlogInfo