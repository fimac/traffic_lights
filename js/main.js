// You are required to provide the code for an application that simulates a set of traffic lights at
//
// an intersection.
//
// The traffic lights are designated (N, S) and (E, W) like a compass.
//
// Requirements
//
// The lights change automatically every 5 minutes.
//
// When switching from green to red, the yellow light must be displayed for 30 seconds prior to it
//
// switching to red and the opposite direction switching to green from red.
//
// You're not required to optimize, just focus on a functional approach to requirements Provide
//
// the output for the light changes which occur during the period between 9am and 9:30am.
//
// You should provide unit tests for your solution.

// Plan of attack
// Create one traffic light, that changes from green to orange to red, within specified times
// Add simple css to have a visual guide
// Unit test one traffic light. Create output for one traffic light for period between 9am and 9:30am.
// Then duplicate this for other traffic light.
// Use same function for EW traffic lights, opposite color switching

// Declare variables for lights

var $green = $(".green");
var $orange = $(".orange");
var $red = $(".red");

// Function to turn light green

var lightGreen = function() {
  console.log("light green");
  $green.css({
    background: "green"
  });
};

// Function to remove green light

var removeGreen = function() {
  console.log("no green");
  $green.css({
    background: "none"
  });
};
