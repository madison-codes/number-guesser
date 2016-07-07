
var randNum = numberRandom();
var box = document.getElementById('box');
var guess = document.querySelector('.guess');
var guessInput = document.getElementById('guess-input');
var reset = document.querySelector('.reset');
var recentGuess = document.getElementById('recent-guess');
var displayHint = document.getElementById('hint');
var inputMin = document.getElementById('min-input');
var inputMax = document.getElementById('max-input');
guessInput.value

var max = maxInput.value;
var min = minInput.value;

// specify minimum and maximum numbers.
// When win increase maximum number by 10.
// When wins a round decrease the minimum number by 10.

function numberRandom() {
  var tmp = Math.floor(Math.random()*100);
  return tmp;
}

function disableButton() {
  guess.disabled = (guessInput.value === '');
}

// guessInput.addEventListener('keyup', disableButton);
// disableButton();


function setLatestGuess(guess) {
  box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";
}

reset.addEventListener('click', function(){
  randNum = numberRandom();
  guessInput.value = "";
  disableButton();
  setLatestGuess('');
  displayHint.innerHTML = "";
  reset.disabled = true;
});

<<<<<<< HEAD
function clearInputFieldValue() {
  guessInputField.value = "";
}
// generates random number
function numberRandom() {
  return Math.floor(Math.random()*100);
}

// disables the guessButton
function disableButton() {
  guessButton.disabled = (guessInputField.value === '');
}
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



// function clearInputField(selector, inputField) {
//   selector.disabled = (inputField.value === '');
// }
// clearInputField(guess, guessInput);

//  “min” and a “max” attributes
// display an error message if the guess is not a number (e.g. parseInt() returns NaN).
// The application should display an error if the guess is outside of the range of possible answers.
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.

=======
guess.addEventListener('click', function() {
  displayHint.innerHTML = getHint();
  reset.disabled = !isGameOver();
>>>>>>> master

  if(isValidGuess()) {
    setLatestGuess(guessInput.value);
    guessInput.value = "";
  }
});

function getHint() {
  var guess = parseInt(guessInput.value);
  if (Number.isNaN(guess)) return "This is not a number.";
  if (guess < min) return "Your guess is below accepted range."
  if (guess > max) return "Your guess is above accepted range."
  if (guess > randNum) return "Your guess is too high! Try again.";
  if (guess < randNum) return "Your guess is too low! Please try again!";
  return "You Won!! Nice Work!";
}
function isValidGuess() {
  var guess = parseInt(guessInput.value);
  return (!Number.isNaN(guess) && guess >= min && guess < max);
}
function isGameOver() {
  var guess = parseInt(guessInput.value);
  return (guess === randNum);
  var min = inputMin + 10;
  var max = inputMax - 10;
}
reset.disabled = true;
