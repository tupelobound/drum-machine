// Ensure FCC test suite is set to correct project
const projectName = "drum-machine";
localStorage.setItem("example_project", "Drum Machine");

// Define variables to hold each bank of pads
const bankOne = [
    {
        id: "Q",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        name: "Heater 1"
    },
    {
        id: "W",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        name: "Heater 2"
    },
    {
        id: "E",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        name: "Heater 3"
    },
    {
        id: "A",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        name: "Heater 4"
    },
    {
        id: "S",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        name: "Clap"
    },
    {
        id: "D",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        name: "Open HH"
    },
    {
        id: "Z",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        name: "Kick n' Hat"
    },
    {
        id: "X",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        name: "Kick"
    },
    {
        id: "C",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        name: "Closed HH"
    }
];

const bankTwo = [
    {
        id: "Q",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        name: "Chord-1"
    },
    {
        id: "W",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        name: "Chord-2"
    },
    {
        id: "E",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        name: "Chord-3"
    },
    {
        id: "A",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        name: "Shaker"
    },
    {
        id: "S",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        name: "Open-HH"
    },
    {
        id: "D",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        name: "Closed-HH"
    },
    {
        id: "Z",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        name: "Punchy-Kick"
    },
    {
        id: "X",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        name: "Side-Stick"
    },
    {
        id: "C",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        name: "Snare"
    }
];

// Define variable for all HTML audio elements
const clips = document.getElementsByClassName("clip");

// Create class to wrap app
class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = {
            power: false,
            activeBank: bankOne,
            displayContent: "",
            volume: 50
        };

        // Bind functions
        this.clickTrigger = this.clickTrigger.bind(this);
        this.changeBank = this.changeBank.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    // Function to initialize volume of audio elements to match slider
    audioInit = (window.onload = () => {
        for (const j of clips) {
            j.volume = 0.5;
        }
    });

    // Function to trigger sample when pad is clicked on using mouse
    clickTrigger = event => {
        if (this.state.power) {
            // check pad is powered on
            if (event.target.className == "drum-pad") {
                // check div, not p is being clicked on
                document.getElementById(event.target.id).children[1].currentTime = 0; // reset the audio
                document.getElementById(event.target.id).children[1].play(); // play the child audio element
                const element = this.state.activeBank.filter(
                    // get the name of the pad from the bank
                    item =>
                        item.id == document.getElementById(event.target.id).children[1].id
                );
                this.setState({
                    displayContent: element[0].name // set display to name of pad
                });
            } else {
                // if the p is being clicked on
                event.target.parentNode.children[1].currentTime = 0; // reset the audio
                event.target.parentNode.children[1].play(); // play the child audio element
                const element = this.state.activeBank.filter(
                    // get the name of the pad from the bank
                    item => item.id == event.target.parentNode.children[1].id
                );
                this.setState({
                    displayContent: element[0].name // set display to name of pad
                });
            }
        }
    };

    // Function to listen for keystrokes
    keyTrigger = document.addEventListener("keydown", event => {
        if (this.state.power) {
            // check that power is on
            if ( ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(event.key.toUpperCase()) ) {
                document.getElementById(event.key.toUpperCase() + "-wrapper").classList.add("active");
            }
            document.getElementById(event.key.toUpperCase()).currentTime = 0; // reset the audio to beginning
            document.getElementById(event.key.toUpperCase()).play(); // play the matching audio
            const element = this.state.activeBank.filter(
                // get the name of the pad from the bank
                item => item.id == document.getElementById(event.key.toUpperCase()).id
            );
            this.setState({
                displayContent: element[0].name // set display to name of pad
            });
        }
    });

    // Function to listen for keyup to reset appearance of pads
    keyUp = document.addEventListener("keyup", event => {
        if ( ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(event.key.toUpperCase()) ) {
            document.getElementById(event.key.toUpperCase() + "-wrapper").classList.remove("active");
        }
    });

    // Function to toggle between sound banks
    changeBank = () => {
        if (this.state.power) {
            // check power is on
            if (this.state.activeBank == bankOne) {
                // if bank one is activated:
                this.setState({
                    activeBank: bankTwo, // change to bank two and
                    displayContent: "Smooth Piano Kit" // display bank name
                });
            } else {
                // if bank two is activated:
                this.setState({
                    activeBank: bankOne, // change to bank one and
                    displayContent: "Heater Kit" // display bank name
                });
            }
        }
    };

    // Function to toggle app between on/off state
    powerOnOff = event => {
        if (this.state.power) {
            // check if power is on, and if so:
            for (const i of clips) {
                // reduce volume, pause and reset all audio clips
                i.volume = 0;
                i.pause();
                i.currentTime = 0;
            }
            document.getElementById("volume-slider").value = 50; // set slider value to 50, and
            document.getElementById("volume-slider").disabled = true; // disable the slider
            document.getElementsByClassName("slider-2")[0].classList.remove("active"); // dim the bank switch
            this.setState({
                power: false, // change app state
                displayContent: "" // remove content from display
            });
        } else {
            // if app power is off:
            for (const i of clips) {
                // set volume of clips to 50
                i.volume = 0.5;
            }
            document.getElementsByClassName("slider-2")[0].classList.add("active"); // light up the bank switch
            document.getElementById("volume-slider").disabled = false; // re-enable the slider
            this.setState({
                power: true, // change app state
                displayContent: "Welcome back" // display welcome message
            });
        }
    };

    // Function to handle volume change
    handleVolumeChange = event => {
        if (this.state.power) {
            // check app power is on
            this.setState({
                volume: event.target.value, // set the app volume state
                displayContent: "Volume: " + event.target.value // display volume
            });
            for (const i of clips) {
                // change volume level of all clips using state
                i.volume = this.state.volume / 100;
            }
        }
    };

    // Render the app
    render() {
        // Dynamically create drum pad elements by mapping over array held in state
        const pads = this.state.activeBank.map(item => {
            return <Pad id={item.id} url={item.url} click={this.clickTrigger} />;
        });

        return (
            <div id="drum-machine">
                <div id="pad-container">{pads}</div>
                <div id="controls-container">
                    <h2>fCC Drum Machine</h2>
                    <Display name={this.state.displayContent} />
                    <p className="machine-text">Power on/off:</p>
                    <Power power={this.powerOnOff} />
                    <p className="machine-text">Change bank:</p>
                    <Switch change={this.changeBank} />
                    <p className="machine-text">Volume:</p>
                    <Volume change={this.handleVolumeChange} />
                </div>
            </div>
        );
    }
}

// Define functional component for each drum pad
const Pad = props => {
    return (
        <a href="#">
            <div
                className="drum-pad"
                id={props.id + "-wrapper"}
                onClick={props.click}
            >
                <p>{props.id}</p>
                <audio className="clip" id={props.id} src={props.url} />
            </div>
        </a>
    );
};

// Define functional component for the display
const Display = props => {
    return (
        <div id="display">
            <p>{props.name}</p>
        </div>
    );
};

// Define functional component for the bank switch
const Switch = props => {
    return (
        <label className="switch">
            <input id="bank-switch" type="checkbox" />
            <span onClick={props.change} className="slider-2 round"></span>
        </label>
    )
};

// Define functional component for the power switch
const Power = props => {
    return (
        <label className="switch">
            <input id="power-switch" type="checkbox" />
            <span onClick={props.power} className="slider round"></span>
        </label>
    )
};

// Define functional component for the volume slider
const Volume = props => {
    return (
        <input disabled id="volume-slider" type="range" min="1" max="100" onChange={props.change} />
    );
};

// Render the app to the DOM
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(DrumMachine));