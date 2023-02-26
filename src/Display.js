import './Display.css'
import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ name }) => {
  Display.propTypes = {
    name: PropTypes.string.isRequired
  }
  // return JSX component
  return (
        <div id="display">
            <p>{name}</p>
        </div>
  )
}

export default Display
