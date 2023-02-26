import { bankOne, bankTwo } from './Banks'
import PropTypes from 'prop-types'
import React from 'react'

const BankButton = ({ bank, setBank, powerStatus, setDisplayMessage }) => {
  // Function to toggle between sound banks
  const changeBank = () => {
    // check power is on
    if (powerStatus) {
      if (bank === bankOne) {
        // if bank one is activated:
        setBank(bankTwo) // change to bank two and
        setDisplayMessage('Smooth Piano Kit') // display bank name
      } else {
        // if bank two is activated:
        setBank(bankOne) // change to bank two and
        setDisplayMessage('Heater Kit') // display bank name
      }
    }
  }

  BankButton.propTypes = {
    bank: PropTypes.array.isRequired,
    setBank: PropTypes.func.isRequired,
    powerStatus: PropTypes.bool.isRequired,
    setDisplayMessage: PropTypes.func.isRequired
  }

  return (
        <label className="switch">
            <input id="bank-switch" type="checkbox" />
            <span onClick={changeBank} className="slider-2 round"></span>
        </label>
  )
}

export default BankButton
