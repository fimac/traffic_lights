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

// Function to remove green and turn light orange

var lightOrange = function() {
  $green.css({
    background: "none"
  });
  $orange.css({
    background: "orange"
  });
};

// Function to remove orange and turn light red
var lightRed = function() {
  $orange.css({
    background: "none"
  });
  $red.css({
    background: "red"
  });
};

// Function to remove red light and turn green

var lightGreen = function() {
  $red.css({
    background: "none"
  });
  $green.css({
    background: "green"
  });
};

// Timers

// Light to orange to be called after 4 mins 30 secs (for testing purposes set to 20 secs)
// Kick off light red timer function
var traffic_light_orange = function() {
  window.setTimeout(lightOrange, 20000);
  window.setTimeout(traffic_light_red, 20000);
};

// Light to red to be called after 30 secs (for testing 10 secs)
// Kick off light green timer function
var traffic_light_red = function() {
  window.setTimeout(lightRed, 10000);
  window.setTimeout(traffic_light_green, 10000);
};

// Light green to be called after 5 mins ( for testing 30 second)
// Kick off light orange function
var traffic_light_green = function() {
  window.setTimeout(lightGreen, 30000);
  window.setTimeout(traffic_light_orange, 30000);
};
