var numberValue = (Math.floor(Math.random()*100));
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

document.addEventListener("DOMContentLoaded", function() {


  // recentGuess.innerHTML("WOW")

  // input field to guess number
  //button to submit a guess
  //displays most recent guess
  //element that displays a message to user

  // numberValue (guessInput, reset);
  randomNumberGenerator(numberValue, reset);
  grabAndDisplayGuess(guess, guessInput, displayHint);
  clearGuess(clear, guessInput);

});

var randomNumberGenerator = function (numberValue, reset) {
  reset.addEventListener('click', function() {
  randomNumberGenerator = (numberValue, reset);
});


var clearGuess = function(clear, guessInput) {
  clear.addEventListener('click', function() {
    guessInput.value = "";
  });
}

var grabAndDisplayGuess = function(guess, guessInput,displayHint) {
  guess.addEventListener('click',function(){
    var guess = guessInput.value;
    checkValue(guess,displayHint);
    box.innerHTML = "<h1 id='latest-guess'>" + guess + "</h1>";
});
}

var checkValue = function (guess, displayHint) {
    if (guess===numberValue) {
      displayHint.innerHTML="You Won!! Nice Work!";
    } if (guess>numberValue) {
      displayHint.innerHTML="Your guess is too high! Try again.";
    } if (guess<numberValue) {
      displayHint.innerHTML="Your guess is too low! Please try again!";
    }
}

// console.log (randomNumberGenerator)

  // function giveHint (){
  //   var b = numberPlaceholder
  //   var a = (ParseInt(Math.floor(Math.random()*100)));
  //   if (b = a);
  //     return "You WON! NICE WORK!"
  //   else if (b > a);
  //     return "Your guess is too high! Try again."
  //   else
  //     return "Your guess is too low. Try again."
  // });
//Random number generator

//
//
//
// //button to clearing the input field
//
// //button to resets game
//
//
//
// button.addEventListener ('click', function () {
//   function Reset = (ParseInt(Math.floor(Math.random()*100)))
// }
//
// button.addEventListener ('click', function (){
//   bestGuess = "";
// }
//
//
// function giveHint (){
//   var b = numberPlaceholder
//   var a = (ParseInt(Math.floor(Math.random()*100)));
//   if (b = a);
//     return "You WON! NICE WORK!"
//   else if (b > a);
//     return "Your guess is too high! Try again."
//   else
//     return "Your guess is too low. Try again."
// });
//
// bestGuess.addEventListener('click', function)
// function clearValue(){
//   return = "";
// }
