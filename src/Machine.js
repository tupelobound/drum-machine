import Controls from "./Controls";
import './Machine.css';
import Pad from "./Pad";
import { useState } from "react";
import { bankOne } from './Banks';
import { useEffect } from "react";

const Machine = () => {
    const [powerStatus, setPowerStatus] = useState(false); // handle state for power
    const [bank, setBank] = useState(bankOne); // handle state for bank selection
    const [displayMessage, setDisplayMessage] = useState(""); // handle state for display message
    
    // useEffect for keyup and keydown event listeners so repetition of events is avoided
    useEffect(() => {
        // function for handling key down triggering of samples
        const keyTrigger = (e) => {
            // check that power is on
            if (powerStatus) {
                // only execute if the keys required for app are pressed
                if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(e.key.toUpperCase())) {
                    document.getElementById(e.key.toUpperCase() + "-wrapper").classList.add("active");
                    document.getElementById(e.key.toUpperCase()).currentTime = 0; // reset the audio to beginning
                    document.getElementById(e.key.toUpperCase()).play(); // play the matching audio

                    // filter the bank object to get the name of sample that matches the key being pressed
                    const element = bank.filter(
                        // get the name of the pad from the bank
                        item => item.id === document.getElementById(e.key.toUpperCase()).id
                    );
                    // Show name of sample in display
                    setDisplayMessage(element[0].name);
                }
            }
        }

        // Function to listen for keyup to reset appearance of pads
        const keyUp = (e) => {
            // only execute if the keys required for app are pressed
            if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(e.key.toUpperCase())) {
                document.getElementById(e.key.toUpperCase() + "-wrapper").classList.remove("active");
            }
        };

        // Add listeners
        document.addEventListener("keydown", keyTrigger);
        document.addEventListener("keyup", keyUp);

        // Remove listeners
        return () => {
            document.removeEventListener("keydown", keyTrigger);
            document.removeEventListener("keyup", keyUp);
        }
    })

    // Dynamically create drum pad elements by mapping over array held in state
    const pads = bank.map(item => {
        return <Pad key={item.name} id={item.id} url={item.url} powerStatus={powerStatus} bank={bank} setDisplayMessage={setDisplayMessage} />;
    });

    //return JSX component
    return (
        <div id="drum-machine">
            <div id="pad-container">{pads}</div>
            <Controls
                bank={bank}
                setBank={setBank}
                powerStatus={powerStatus}
                setPowerStatus={setPowerStatus}
                displayMessage={displayMessage}
                setDisplayMessage={setDisplayMessage}
            />
        </div>
    )
}

export default Machine;