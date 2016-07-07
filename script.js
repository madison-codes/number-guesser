var randNum = numberRandom();
console.log('randNum on line 4: ', randNum);
var box = document.getElementById('box');
var recentGuess = document.getElementById('recent-guess');
var displayHint = document.getElementById('hint');
var guessInputField = document.getElementById('guess-input-field');
var guessButton = document.querySelector('.guess-button');
var clearFieldButton = document.querySelector('.clear-field-button')
var resetButton = document.querySelector('.reset-button');

// rewrite
guessInputField.addEventListener('keyup', disableButton);
disableButton();

guessButton.addEventListener('click', function() {
  var max = 100;
  var min = 0;
  var guess = parseInt(guessInputField.value);
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
  box.innerHTML = "<h1 id='latest-guess'>" + guessInputField.value + "</h1>";
  clearInputFieldValue();
});

clearFieldButton.addEventListener('click', clearInputFieldValue);

resetButton.addEventListener('click', function() {
  randNum = numberRandom();
  console.log('randNum on line 41: ', randNum);
  clearInputFieldValue();
  disableButton();
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
  displayHint.innerHTML = "";
  resetButton.disabled = true;
});

function clearInputFieldValue() {
  guessInputField.value = "";
}

function numberRandom() {
  return Math.floor(Math.random()*100);
}

// disables the guessButton
function disableButton() {
  guessButton.disabled = (guessInputField.value === '');
}





resetButton.disabled = true;
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
