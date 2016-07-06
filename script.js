
// var newRandNum = randNum();
var randNum = numberRandom();
//last number guessed
var box = document.getElementById('box');
//button press - submit guess
var guess = document.querySelector('.guess');
//input field
var guessInput = document.querySelector('input');
//clear button to clear field
var clear = document.querySelector('.clear');
//button to reset game
var reset = document.querySelector('.reset');

var recentGuess = document.getElementById('recent-guess');
var displayHint = document.getElementById('hint');

function numberRandom() {
  return Math.floor(Math.random()*100);
}
// Input guess
// if statement - returing hint

// Clear

clear.addEventListener('click', function() {
  guessInput.value = "";
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
  displayHint.innerHTML= "";
});
// reset button

reset.addEventListener('click', function(){
  guessInput.value = "";
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
  displayHint.innerHTML= "";
  // function numberRandom()
});

guess.addEventListener('click', function() {
  var guess = guessInput.value;
  box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";

  if (guess===numberRandom) { displayHint.innerHTML="You Won!! Nice Work!"; }
  if (guess>numberRandom) { displayHint.innerHTML="Your guess is too high! Try again."; }
  if (guess<numberRandom) { displayHint.innerHTML="Your guess is too low! Please try again!"; }
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
});


// var grabAndDisplayGuess = function(guess, guessInput,displayHint) {
//   guess.addEventListener('click',function() {
//     var guess = guessInput.value;
//     checkValue(guess,displayHint);
//     box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";
//   });
// };
//
// var checkValue = function (guess, displayHint) {
//   if (guess===numberValue) {
//     displayHint.innerHTML="You Won!! Nice Work!";
//   } if (guess>numberValue) {
//     displayHint.innerHTML="Your guess is too high! Try again.";
//   } if (guess<numberValue) {
//     displayHint.innerHTML="Your guess is too low! Please try again!";
//   }
// };
