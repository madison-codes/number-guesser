var randNum = numberRandom();
var box = document.getElementById('box');
var recentGuess = document.getElementById('recent-guess');
var displayHint = document.getElementById('hint');
var guessInputField = document.getElementById('guess-input-field');
var guessButton = document.querySelector('.guess-button');
var clearFieldButton = document.querySelector('.clear-field-button');
var resetButton = document.querySelector('.reset-button');
var inputMin = document.getElementById('input-min');
var inputMax = document.getElementById('input-max');
var submitMinMax = document.getElementById('submit-min-and-max');

function getMinValue() {
  return parseInt(inputMin.value) || 1;
}

function getMaxValue() {
  return parseInt(inputMax.value) || 100;
}


function numberRandom() {
  return Math.floor(Math.random()*100);
}

function disableButton() {
  guessButton.disabled = true;
};

function clearInputFieldValue() {
  guessInputField.value = '';
  inputMin.value = '';
  inputMax.value = '';
}

function maxAndMinUp() {
  inputMax.value = inputMax.value + 10
  inputMin.value = inputMin.value - 10
}

guessButton.addEventListener('click', function() {
  var max = getMaxValue();
  var min = getMinValue();
  var guess = parseInt(guessInputField.value);

  if (Number.isNaN(guess)) {
    return displayHint.innerHTML = "This is not a number.";
  }

  if (guess < min) {
    return displayHint.innerHTML = "Your guess is too small for the range."
  }

  if (guess > max) {
    return displayHint.innerHTML = "Your guess is too large for the range."
  }

  box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";

  if (guess < randNum){
    displayHint.innerHTML="Your guess is too low! Please try again!";
  }

  if (guess > randNum) {
    displayHint.innerHTML="Your guess is too high! Try again.";
  }

  displayHint.innerHTML="You Won!! Nice Work!";
    maxAndMinUp
  resetButton.disabled = false;

  box.innerHTML = "<h1 id='latest-guess'>" + guessInputField.value + "</h1>";
  clearInputFieldValue();
});

guessInputField.addEventListener('keydown', function() {
    if (guessInputField.value === '') {
      guessButton.disabled = true;
      return clearFieldButton.disabled = true;
    }
    else {
      clearFieldButton.disabled = false;
      guessButton.disabled = false;
      resetButton.disabled = false;
    }
});

clearFieldButton.addEventListener('click', function() {
  inputMin.value = "";
  inputMax.value = "";
  if (guessInputField.value === "") {
    return clearFieldButton.disabled = true;
  }
});

resetButton.addEventListener('click', function() {
  clearInputFieldValue();
  randNum = numberRandom();
  box.innerHTML = "<h1 id='latest-guess'>" + " " + "</h1>";
  resetButton.disabled = true;
  disableButton();
  displayHint.innerHTML = "";
});

inputMin.addEventListener('keyup', function() {
  submitMinMax.disabled = false;
});

inputMax.addEventListener('keyup', function() {
  submitMinMax.disabled = false;
});

submitMinMax.addEventListener('click', function() {
  inputMin.value = min;
  inputMax.value = max;
  inputMin = "";
  inputMax = "";
});
