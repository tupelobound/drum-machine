"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Ensure FCC test suite is set to correct project
var projectName = "drum-machine";
localStorage.setItem("example_project", "Drum Machine");

// Define variables to hold each bank of pads
var bankOne = [{
  id: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  name: "Heater 1"
}, {
  id: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  name: "Heater 2"
}, {
  id: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  name: "Heater 3"
}, {
  id: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  name: "Heater 4"
}, {
  id: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  name: "Clap"
}, {
  id: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  name: "Open HH"
}, {
  id: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  name: "Kick n' Hat"
}, {
  id: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  name: "Kick"
}, {
  id: "C",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  name: "Closed HH"
}];
var bankTwo = [{
  id: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  name: "Chord-1"
}, {
  id: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  name: "Chord-2"
}, {
  id: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  name: "Chord-3"
}, {
  id: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  name: "Shaker"
}, {
  id: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  name: "Open-HH"
}, {
  id: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  name: "Closed-HH"
}, {
  id: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  name: "Punchy-Kick"
}, {
  id: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  name: "Side-Stick"
}, {
  id: "C",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  name: "Snare"
}];

// Define variable for all HTML audio elements
var clips = document.getElementsByClassName("clip");

// Create class to wrap app
var DrumMachine = /*#__PURE__*/function (_React$Component) {
  _inherits(DrumMachine, _React$Component);
  var _super = _createSuper(DrumMachine);
  function DrumMachine(props) {
    var _this;
    _classCallCheck(this, DrumMachine);
    _this = _super.call(this, props);

    // Set initial state
    _this.audioInit = window.onload = function () {
      var _iterator = _createForOfIteratorHelper(clips),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var j = _step.value;
          j.volume = 0.5;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    _this.clickTrigger = function (event) {
      if (_this.state.power) {
        // check pad is powered on
        if (event.target.className == "drum-pad") {
          // check div, not p is being clicked on
          document.getElementById(event.target.id).children[1].currentTime = 0; // reset the audio
          document.getElementById(event.target.id).children[1].play(); // play the child audio element
          var element = _this.state.activeBank.filter(
          // get the name of the pad from the bank
          function (item) {
            return item.id == document.getElementById(event.target.id).children[1].id;
          });
          _this.setState({
            displayContent: element[0].name // set display to name of pad
          });
        } else {
          // if the p is being clicked on
          event.target.parentNode.children[1].currentTime = 0; // reset the audio
          event.target.parentNode.children[1].play(); // play the child audio element
          var _element = _this.state.activeBank.filter(
          // get the name of the pad from the bank
          function (item) {
            return item.id == event.target.parentNode.children[1].id;
          });
          _this.setState({
            displayContent: _element[0].name // set display to name of pad
          });
        }
      }
    };
    _this.keyTrigger = document.addEventListener("keydown", function (event) {
      if (_this.state.power) {
        // check that power is on
        document.getElementById(event.key.toUpperCase() + "-wrapper").classList.add("active");
        document.getElementById(event.key.toUpperCase()).currentTime = 0; // reset the audio to beginning
        document.getElementById(event.key.toUpperCase()).play(); // play the matching audio
        var element = _this.state.activeBank.filter(
        // get the name of the pad from the bank
        function (item) {
          return item.id == document.getElementById(event.key.toUpperCase()).id;
        });
        _this.setState({
          displayContent: element[0].name // set display to name of pad
        });
      }
    });
    _this.keyUp = document.addEventListener("keyup", function (event) {
      document.getElementById(event.key.toUpperCase() + "-wrapper").classList.remove("active");
    });
    _this.changeBank = function () {
      if (_this.state.power) {
        // check power is on
        if (_this.state.activeBank == bankOne) {
          // if bank one is activated:
          _this.setState({
            activeBank: bankTwo,
            // change to bank two and
            displayContent: "Smooth Piano Kit" // display bank name
          });
        } else {
          // if bank two is activated:
          _this.setState({
            activeBank: bankOne,
            // change to bank one and
            displayContent: "Heater Kit" // display bank name
          });
        }
      }
    };
    _this.powerOnOff = function (event) {
      if (_this.state.power) {
        // check if power is on, and if so:
        var _iterator2 = _createForOfIteratorHelper(clips),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var i = _step2.value;
            // reduce volume, pause and reset all audio clips
            i.volume = 0;
            i.pause();
            i.currentTime = 0;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        document.getElementById("volume-slider").value = 50; // set slider value to 50, and
        document.getElementById("volume-slider").disabled = true; // disable the slider
        document.getElementsByClassName("slider-2")[0].classList.remove("active"); // dim the bank switch
        _this.setState({
          power: false,
          // change app state
          displayContent: "" // remove content from display
        });
      } else {
        // if app power is off:
        var _iterator3 = _createForOfIteratorHelper(clips),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _i = _step3.value;
            // set volume of clips to 50
            _i.volume = 0.5;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        document.getElementsByClassName("slider-2")[0].classList.add("active"); // light up the bank switch
        document.getElementById("volume-slider").disabled = false; // re-enable the slider
        _this.setState({
          power: true,
          // change app state
          displayContent: "Welcome back" // display welcome message
        });
      }
    };
    _this.handleVolumeChange = function (event) {
      if (_this.state.power) {
        // check app power is on
        _this.setState({
          volume: event.target.value,
          // set the app volume state
          displayContent: "Volume: " + event.target.value // display volume
        });
        var _iterator4 = _createForOfIteratorHelper(clips),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var i = _step4.value;
            // change volume level of all clips using state
            i.volume = _this.state.volume / 100;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    };
    _this.state = {
      power: false,
      activeBank: bankOne,
      displayContent: "",
      volume: 50
    };

    // Bind functions
    _this.clickTrigger = _this.clickTrigger.bind(_assertThisInitialized(_this));
    _this.changeBank = _this.changeBank.bind(_assertThisInitialized(_this));
    _this.handleVolumeChange = _this.handleVolumeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  // Function to initialize volume of audio elements to match slider
  _createClass(DrumMachine, [{
    key: "render",
    value:
    // Render the app
    function render() {
      var _this2 = this;
      // Dynamically create drum pad elements by mapping over array held in state
      var pads = this.state.activeBank.map(function (item) {
        return /*#__PURE__*/React.createElement(Pad, {
          id: item.id,
          url: item.url,
          click: _this2.clickTrigger
        });
      });
      return /*#__PURE__*/React.createElement("div", {
        id: "drum-machine"
      }, /*#__PURE__*/React.createElement("div", {
        id: "pad-container"
      }, pads), /*#__PURE__*/React.createElement("div", {
        id: "controls-container"
      }, /*#__PURE__*/React.createElement("h2", null, "fCC Drum Machine"), /*#__PURE__*/React.createElement(Display, {
        name: this.state.displayContent
      }), /*#__PURE__*/React.createElement("p", {
        className: "machine-text"
      }, "Power on/off:"), /*#__PURE__*/React.createElement(Power, {
        power: this.powerOnOff
      }), /*#__PURE__*/React.createElement("p", {
        className: "machine-text"
      }, "Change bank:"), /*#__PURE__*/React.createElement(Switch, {
        change: this.changeBank
      }), /*#__PURE__*/React.createElement("p", {
        className: "machine-text"
      }, "Volume:"), /*#__PURE__*/React.createElement(Volume, {
        change: this.handleVolumeChange
      })));
    }
  }]);
  return DrumMachine;
}(React.Component); // Define functional component for each drum pad
var Pad = function Pad(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drum-pad",
    id: props.id + "-wrapper",
    onClick: props.click
  }, /*#__PURE__*/React.createElement("p", null, props.id), /*#__PURE__*/React.createElement("audio", {
    className: "clip",
    id: props.id,
    src: props.url
  })));
};

// Define functional component for the display
var Display = function Display(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "display"
  }, /*#__PURE__*/React.createElement("p", null, props.name));
};

// Define functional component for the bank switch
var Switch = function Switch(props) {
  return /*#__PURE__*/React.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/React.createElement("input", {
    id: "bank-switch",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    onClick: props.change,
    className: "slider-2 round"
  }));
};

// Define functional component for the power switch
var Power = function Power(props) {
  return /*#__PURE__*/React.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/React.createElement("input", {
    id: "power-switch",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    onClick: props.power,
    className: "slider round"
  }));
};

// Define functional component for the volume slider
var Volume = function Volume(props) {
  return /*#__PURE__*/React.createElement("input", {
    disabled: true,
    id: "volume-slider",
    type: "range",
    min: "1",
    max: "100",
    onChange: props.change
  });
};

// Render the app to the DOM
var rootNode = document.getElementById('app');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(DrumMachine));