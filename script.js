
// var newRandNum = randNum();
var randNum = numberRandom();
//last number guessed
var box = document.getElementById('box');
//button press - submit guess
var guess = document.querySelector('.guess');
//input field
var guessInput = document.getElementById('guess-input');
//button to reset game
var reset = document.querySelector('.reset');

var recentGuess = document.getElementById('recent-guess');
var displayHint = document.getElementById('hint');

function numberRandom() {
  var tmp = Math.floor(Math.random()*100);
  // console.log(tmp);
  return tmp;
}

function disableButton() {
  guess.disabled = (guessInput.value === '');
}
//  “min” and a “max” attributes
// display an error message if the guess is not a number (e.g. parseInt() returns NaN).
// The application should display an error if the guess is outside of the range of possible answers.
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.
guessInput.addEventListener('keyup', disableButton);
disableButton();

reset.addEventListener('click', function(){
  randNum =  numberRandom();
  guessInput.value = "";
  disableButton();
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
  displayHint.innerHTML = "";
  reset.disabled = true;
});

guess.addEventListener('click', function() {
  var max = 100;
  var min = 0;
  var guess = parseInt(guessInput.value);
  if (!Number.isNaN(guess)) {
    if (guess < min) {
      displayHint.innerHTML="Your guess is too small for the range."
    } else if (guess > max) {
      displayHint.innerHTML="Your guess is too large for the range."
    } else {
      box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";
      if (guess === randNum) {
        displayHint.innerHTML="You Won!! Nice Work!";
        reset.disabled = false;
      } else if (guess > randNum) {
        displayHint.innerHTML="Your guess is too high! Try again.";
      } else {
        displayHint.innerHTML="Your guess is too low! Please try again!";
      }
    }
  } else {
    displayHint.innerHTML="This is not a number."
  }
  box.innerHTML = "<h1 id='latest-guess'>" + guessInput.value + "</h1>";
  guessInput.value = "";
});

reset.disabled = true;
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
