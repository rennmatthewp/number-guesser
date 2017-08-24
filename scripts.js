var min = 0;
var max = 100;
var randomNumber = randomNumber(min, max);
console.log(randomNumber);

//Event Listeners

document.querySelector('#user-guess').addEventListener('input', function() {
  var inputGuess = document.getElementById('user-guess').value;
  document.querySelector('#clear-button').disabled = false;
  document.querySelector('#reset-button').disabled = false;
  if (inputGuess.length === 0)  {
    document.querySelector('#guess-prompt').innerText = ''
    document.querySelector('#submit-button').disabled = true;
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
    document.querySelector('#guess-prompt').innerText = 'Your last guess was'
  }
});

document.querySelector('#submit-button').addEventListener('click', function(e) {
  e.preventDefault();
  var userGuess = document.getElementById('user-guess').value;
  document.getElementById('guess-prompt').innerText = 'Your last guess was'
  document.getElementById('last-guess').innerHTML = userGuess;
  checkGuess(userGuess)
  document.getElementById('user-guess').value = '';
  document.querySelector('#submit-button').disabled = true;
  document.querySelector('#clear-button').disabled = true;
});

document.querySelector('#clear-button').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('user-guess').value = '';
  document.querySelector('#clear-button').disabled = true;
  document.querySelector('#submit-button').disabled = true;
});

//Functions

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

//parse int to use min max comparrison
//use strict equals for comparrison fucntion
