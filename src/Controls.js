import './Controls.css';
import PowerButton from './PowerButton';
import Display from './Display';
import BankButton from './BankButton';
import Volume from './Volume';

const Controls = ({ bank, setBank, powerStatus, setPowerStatus, displayMessage, setDisplayMessage }) => {
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
    );
}

export default Controls;