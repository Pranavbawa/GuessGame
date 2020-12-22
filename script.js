'use strict';
let secretNumber = randomNum();
let score = 20;
let highScore = 0;
console.log(secretNumber);
function randomNum() {
  return Math.trunc(Math.random() * 20 + 1);
}

function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess === secretNumber) {
    if (score > 1) {
      displayMessage('🍾 You Won!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#7FFF02';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too High!' : '⬇️ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💢 You Lost!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = randomNum();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
