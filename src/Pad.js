import React from 'react'
import PropTypes from 'prop-types'

const Pad = ({ id, url, powerStatus, bank, setDisplayMessage }) => {
  // Function to trigger sample when pad is clicked on using mouse
  const clickTrigger = event => {
    // check pad is powered on
    if (powerStatus) {
      // check div, not p is being clicked on
      if (event.target.className === 'drum-pad') {
        document.getElementById(event.target.id).children[1].currentTime = 0 // reset the audio
        document.getElementById(event.target.id).children[1].play() // play the child audio element
        const element = bank.filter(
          item => item.id === document.getElementById(event.target.id).children[1].id
        )
        setDisplayMessage(element[0].name)
      } else {
        // if the p is being clicked on
        event.target.parentNode.children[1].currentTime = 0 // reset the audio
        event.target.parentNode.children[1].play() // play the child audio element
        const element = bank.filter(
          // get the name of the pad from the bank
          item => item.id === event.target.parentNode.children[1].id
        )
        setDisplayMessage(element[0].name)
      }
    }
  }

  Pad.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bank: PropTypes.array.isRequired,
    powerStatus: PropTypes.bool.isRequired,
    setDisplayMessage: PropTypes.func.isRequired
  }

  return (
    <a href="#">
      <div
        className="drum-pad"
        id={id + '-wrapper'}
        onClick={clickTrigger}
      >
        <p>{id}</p>
        <audio className="clip" id={id} src={url} />
      </div>
    </a>
  )
}

export default Pad
