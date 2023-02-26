import { clips } from "./Banks";

const PowerButton = ({ powerStatus, setPowerStatus, setDisplayMessage }) => {
    
    // Function to toggle between power on/off
    const powerOnOff = () => {
        // check power status, if off:
        if (!powerStatus) {
            setPowerStatus(true); // set status to 'on'
            document.getElementsByClassName("slider-2")[0].classList.add("active"); // light up the bank switch
            document.getElementById("volume-slider").disabled = false; // re-enable the slider
            setDisplayMessage("Welcome back") // change display message
            for (const i of clips) {
                // change volume level of all clips
                i.volume = 0.5;
            }
            // if on:
        } else {
            setPowerStatus(false); // set status to 'off'
            document.getElementById("volume-slider").value = 50; // set slider value to 50
            document.getElementById("volume-slider").disabled = true; // disable the slider
            document.getElementsByClassName("slider-2")[0].classList.remove("active"); // dim the bank switch
            setDisplayMessage(""); // clear display message
            for (const i of clips) {
                // reduce volume, pause and reset all audio clips
                i.volume = 0;
                i.pause();
                i.currentTime = 0;
            }
        }
    }

    // return JSX component
    return (
        <label className="switch">
            <input id="power-switch" type="checkbox" />
            <span onClick={powerOnOff} className="slider round"></span>
        </label>
    )
};

export default PowerButton;