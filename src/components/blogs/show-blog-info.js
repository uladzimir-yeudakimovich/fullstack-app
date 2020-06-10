import React, { useState, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

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
      <Link to={`/blogs/${props.id}`}>
        <Button variant="primary" style={hideWhenVisible} onClick={toggleVisibility}>{props.buttonLabel}</Button>
        <Button variant="primary" style={showWhenVisible} onClick={toggleVisibility}>hide</Button>
      </Link>
      <div style={showWhenVisible}>{props.children}</div>
    </>
  )
})

ShowBlogInfo.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

ShowBlogInfo.displayName = 'ShowBlogInfo'

export default ShowBlogInfo