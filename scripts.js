document.querySelector('#submit-button').addEventListener('click', function(e) {
  e.preventDefault();
  var userGuess = document.getElementById('user-guess').value;
});

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *  (max - min + 1)) + min;
}
