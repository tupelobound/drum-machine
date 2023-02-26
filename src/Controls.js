import './Controls.css'
import PowerButton from './PowerButton'
import Display from './Display'
import BankButton from './BankButton'
import Volume from './Volume'
import React from 'react'
import PropTypes from 'prop-types'

const Controls = ({ bank, setBank, powerStatus, setPowerStatus, displayMessage, setDisplayMessage }) => {
  Controls.propTypes = {
    bank: PropTypes.array.isRequired,
    setBank: PropTypes.func.isRequired,
    powerStatus: PropTypes.bool.isRequired,
    setDisplayMessage: PropTypes.func.isRequired,
    setPowerStatus: PropTypes.func.isRequired,
    displayMessage: PropTypes.string.isRequired
  }
  // return JSX component
  return (
        <div id="controls-container">
            <h2>fCC Drum Machine</h2>
            <Display name={displayMessage} />
            <p className="machine-text">Power on/off:</p>
            <PowerButton
                powerStatus={powerStatus}
                setPowerStatus={setPowerStatus}
                setDisplayMessage={setDisplayMessage}
            />
            <p className="machine-text">Change bank:</p>
            <BankButton
                bank={bank}
                setBank={setBank}
                powerStatus={powerStatus}
                setDisplayMessage={setDisplayMessage}
            />
            <p className="machine-text">Volume:</p>
            <Volume
                powerStatus={powerStatus}
                setDisplayMessage={setDisplayMessage}
            />
        </div>
  )
}

export default Controls
