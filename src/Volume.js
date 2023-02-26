import { clips } from './Banks'
import React from 'react'
import PropTypes from 'prop-types'

const Volume = ({ powerStatus, setDisplayMessage }) => {
  // Function to handle volume change
  const handleVolumeChange = (e) => {
    // check app power is on
    if (powerStatus) {
      setDisplayMessage(`Volume: ${e.target.value}`)
      for (const i of clips) {
        // change volume level of all clips using state
        i.volume = e.target.value / 100
      }
    }
  }

  Volume.propTypes = {
    powerStatus: PropTypes.bool.isRequired,
    setDisplayMessage: PropTypes.func.isRequired
  }

  return (
        <input disabled id="volume-slider" type="range" min="1" max="100" onChange={handleVolumeChange} />
  )
}

export default Volume
