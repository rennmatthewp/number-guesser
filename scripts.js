var randomNumber = randomNumber(0, 100);
console.log(randomNumber);

//Event Listeners

document.querySelector('#submit-button').addEventListener('click', function(e) {
  e.preventDefault();
  var userGuess = document.getElementById('user-guess').value;
  document.getElementById('user-guess').value = '';
  document.getElementById('last-guess').innerHTML = userGuess;
  checkGuess(userGuess)   
});

//Functions

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *  (max - min + 1)) + min;
}

function checkGuess(guess) {
  var feedback = document.getElementById('guess-feedback').innerHTML
  if (guess < randomNumber){
    guessFeedback = 'That is too low'
  };
  if (guess > randomNumber){
    guessFeedback = 'That is too high'
  };
  return guessFeedback = 'BOOM!'
};
