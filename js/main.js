//
// You're not required to optimize, just focus on a functional approach to requirements Provide
//
// the output for the light changes which occur during the period between 9am and 9:30am.
//
// You should provide unit tests for your solution.

// Declare variables for North South lights

var $greenOne = $(".greenOne");
var $orangeOne = $(".orangeOne");
var $redOne = $(".redOne");

// Declare variables for East West lights

var $greenTwo = $(".greenTwo");
var $orangeTwo = $(".orangeTwo");
var $redTwo = $(".redTwo");

//North South Traffic Lights color change functions

// Function to remove green and turn light orange

var lightOrangeOne = function() {
  $greenOne.css({
    background: "none"
  });
  $orangeOne.css({
    background: "orange"
  });
};

// Function to remove orange and turn light red
var lightRedOne = function() {
  $orangeOne.css({
    background: "none"
  });
  $redOne.css({
    background: "red"
  });
};

// Function to remove red light and turn green

var lightGreenOne = function() {
  $redOne.css({
    background: "none"
  });
  $greenOne.css({
    background: "green"
  });
};

// East West Traffic Light color change functions

// Function to remove red light and turn green

var lightGreenTwo = function() {
  $redTwo.css({
    background: "none"
  });
  $greenTwo.css({
    background: "green"
  });
};

// Function to remove green and turn light orange

var lightOrangeTwo = function() {
  $greenTwo.css({
    background: "none"
  });
  $orangeTwo.css({
    background: "orange"
  });
};

// Function to remove orange and turn light red
var lightRedTwo = function() {
  $orangeTwo.css({
    background: "none"
  });
  $redTwo.css({
    background: "red"
  });
};

// North and south traffic timers.

// Sets a timeout for light to change from green to orange in 4 mins 30 secs (set to 20 seconds for testing purposes)
// Trigger the next function traffic light red to run after 4 mins 30 secs (set to 20 seconds for testing)

var traffic_light_orange_one = function() {
  window.setTimeout(lightOrangeOne, 20000);
  window.setTimeout(traffic_light_red_one, 20000);
};

// Sets a timeout for the light to chnage from orange to red in 30 secs (set to 10 secs for testing)
// Trigger the next function for the traffic light to go from red to green.

var traffic_light_red_one = function() {
  window.setTimeout(lightRedOne, 10000);
  window.setTimeout(traffic_light_green_one, 10000);
};

// Sets a timeout for the light to change from red to green in 5 mins (30 secs for testing)
// Trigger the next function for the traffic light to go from green to orange.

var traffic_light_green_one = function() {
  window.setTimeout(lightGreenOne, 30000);
  window.setTimeout(traffic_light_orange_one, 30000);
};

// Timer end for north south //

// East and west traffic light timers //

// Sets a timeout for the light to change from red to green in 5 mins (30 secs for testing)
// Trigger the next function for the traffic light to go from green to orange.

var traffic_light_green_two = function() {
  window.setTimeout(lightGreenTwo, 30000);
  window.setTimeout(traffic_light_orange_two, 30000);
};

// Sets a timeout for light to change from green to orange in 4 mins 30 secs (set to 20 seconds for testing purposes)
// Trigger the next function traffic light red to run after 4 mins 30 secs (set to 20 seconds for testing)

var traffic_light_orange_two = function() {
  window.setTimeout(lightOrangeTwo, 20000);
  window.setTimeout(traffic_light_red_two, 20000);
};

// Sets a timeout for the light to chnage from orange to red in 30 secs (set to 10 secs for testing)
// Trigger the next function for the traffic light to go from red to green.

var traffic_light_red_two = function() {
  window.setTimeout(lightRedTwo, 10000);
  window.setTimeout(traffic_light_green_two, 10000);
};

traffic_light_orange_one();
traffic_light_green_two();
