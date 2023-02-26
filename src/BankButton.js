import { bankOne, bankTwo } from "./Banks";

const BankButton = ({ bank, setBank, powerStatus, setDisplayMessage }) => {
    // Function to toggle between sound banks
    const changeBank = () => {
        // check power is on
        if (powerStatus) {
            if (bank === bankOne) {
                // if bank one is activated:
                setBank(bankTwo) // change to bank two and
                setDisplayMessage("Smooth Piano Kit") // display bank name
            } else {
                // if bank two is activated:
                setBank(bankOne) // change to bank two and
                setDisplayMessage("Heater Kit") // display bank name
            }
        }
    };
    
    return (
        <label className="switch">
            <input id="bank-switch" type="checkbox" />
            <span onClick={changeBank} className="slider-2 round"></span>
        </label>
    )
}

export default BankButton;