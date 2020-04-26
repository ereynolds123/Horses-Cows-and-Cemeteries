
/* All screens
boiler plate code
*/

/*
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
*/

/* The screen order
start --> teamName
teamName--> gameState
gameState--> congratulations || betterLuckNextTime
congratulations --> start
betterLuckNextTime --> start
*/

let states = {
  "start": {canChangeTo: ["teamName"]},
  "teamName": {canChangeTo: ["gameState"]},
  "gameState": {canChangeTo: ["congratulations", "betterLuckNextTime"]},
  "congratulations": {canChangeTo: ["start"]},
  "betterLuckNextTime": {canChangeTo: ["start"]},
}

/* Potential code to switch states. Really, I need to connect the
state to the clicked button.

let currentState = "start";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  }
*/


/* teamName screen
input teamName
pick which side if in teamName state
*/

/* gameState screen
let points for both teams start at 0
if horse is clicked, add 10 points
if cow is clicked, subtract 1 point
if cemetery is clicked, subtract 100 points
keep a running tally of points
*/

/*congratulations
maybe a balloon animation feature eventually
*/

/*betterLuckNextTime
maybe an animation eventually
*/

function startGame(){
  var teamName = document.forms["start-game"]["team-name"].value;
  var sideOfCar=document.forms["start-game"]["side-of-car"].value;
  alert("Your team name is "+ teamName + ". You are on the " + sideOfCar + " side of the car.");
}