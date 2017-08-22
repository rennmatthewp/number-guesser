var min = 0;
var max = 100;
var randomNumber = randomNumber(min, max);
console.log(randomNumber);
guessRange();

//Event Listeners

document.querySelector('#user-guess').addEventListener('keyup', function() {
  var inputGuess = document.getElementById('user-guess').value;
  if (inputGuess.length === 0)  {
    document.querySelector('#submit-button').disabled = true;
    document.querySelector('#guess-prompt').innerText = ''
  }
  else if (isNaN(inputGuess)) {
    document.querySelector('#submit-button').disabled = true;
    document.querySelector('#guess-prompt').innerText = 'Please enter a number'
  }
  else if (inputGuess > max || inputGuess < min) {
    document.querySelector('#submit-button').disabled = true;
    document.querySelector('#guess-prompt').innerText = `Please enter a number between ${min} and ${max}`;
  }
  else {
    document.querySelector('#submit-button').disabled = false;
  }
});

document.querySelector('#submit-button').addEventListener('click', function(e) {
  e.preventDefault();
  var userGuess = document.getElementById('user-guess').value;
  document.getElementById('user-guess').value = '';
  document.getElementById('guess-prompt').innerHTML = 'Your last guess was'
  document.getElementById('last-guess').innerHTML = userGuess;
  checkGuess(userGuess)
});

document.querySelector('#clear-button').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('user-guess').value = '';
});

document.querySelector('#minimum').addEventListener('keyup', validateGuessRange);
document.querySelector('#maximum').addEventListener('keyup', validateGuessRange);

//Functions

function guessRange() {
  document.getElementById('minimum').value = min;
  document.getElementById('maximum').value = max;
};

function validateGuessRange () {
  var newMin = parseInt(document.getElementById('minimum').value);
  var newMax = parseInt(document.getElementById('maximum').value);
  if (isNaN(newMin) || isNaN(newMax)) {
    document.querySelector('#save').disabled = true;
  }
  else {
    document.querySelector('#save').disabled = false;
}};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *  (max - min + 1)) + min;
};

function checkGuess(guess) {
  var feedback = document.getElementById('guess-feedback');
  if (guess < randomNumber){
    feedback.innerText = 'That is too low'
  }
  else if (guess > randomNumber){
    feedback.innerText = 'That is too high'
  }
  else feedback.innerText = 'BOOM!'
};
