

/* The screen order
start --> teamName
teamName--> gameState
gameState--> congratulations || betterLuckNextTime
congratulations --> start
betterLuckNextTime --> start
*/


/* teamName screen
input teamName
pick which side if in teamName state
*/


/* gameplay screen
let points for both teams start at 0
if horse is clicked, add 10 points
if cow is clicked, subtract 1 point
if cemetery is clicked, subtract 100 points
keep a running tally of points
*/

//This section clicks on the various buttons for Team One and adds to the point total Team One. 
let scoreTeamOne = 
  document.getElementById('horseTeamOne').addEventListener("click", clickedHorseTeamOne);

  function clickedHorseTeamOne() {
    console.log ("horse team one")
  }
  document.getElementById('cowTeamOne').addEventListener("click", clickedCowTeamOne);

  function clickedCowTeamOne() {
    console.log ("cow team one")
  }
  document.getElementById('cemeteryTeamOne').addEventListener("click", clickedCemeteryTeamOne);

  function clickedCemeteryTeamOne() {
    console.log ("cemetery team one")
  }

//This section clicks on the various buttons for Team Two and adds to the point total for Team Two. 
let scoreTeamTwo = 
  document.getElementById('horseTeamTwo').addEventListener("click", clickedHorseTeamTwo);

  function clickedHorseTeamTwo() {
    console.log ("horse team two")
  }
  document.getElementById('cowTeamTwo').addEventListener("click", clickedCowTeamTwo);

  function clickedCowTeamTwo() {
    console.log ("cow team two")
  }
  document.getElementById('cemeteryTeamTwo').addEventListener("click", clickedCemeteryTeamTwo);

  function clickedCemeteryTeamTwo() {
    console.log ("cemetery team two")
  }

/*congratulations
maybe a balloon animation feature eventually
*/

/*betterLuckNextTime
maybe an animation eventually
*/
