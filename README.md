# drum-machine

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/62a5c1e27f7140278de6fa2de30ca314)](https://www.codacy.com/gh/tupelobound/drum-machine/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tupelobound/drum-machine&amp;utm_campaign=Badge_Grade)

freeCodeCamp Front End Development Libraries project - Build a Drum Machine

This project was completed as part of freeCodeCamp's Front End Development Libraries certificate, focused on learning front end libraries such as React.

The project brief was to fulfill the following user stories:

1.  I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
2.  Within #drum-machine I can see an element with a corresponding id="display".
3.  Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4.  Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
5.  When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
6.  When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
7.  When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

I originally built this project using a Codepen starter project and then built a version locally, adding React via script tags. Original version used a class component to wrap the app. This version was created using create-react-app, and uses functional components and hooks.

Work is needed on this site due to issues with HTML5 audio elements on Safari desktop and mobile devices. Will revisit at some point to learn more about AudioContext.

