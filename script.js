'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
// number.textContent = secretNumber;
const currentScore = document.querySelector('.score');
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeBackgroundColor('#60b347');
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highscore.textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      currentScore.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      currentScore.textContent = 0;
      changeBackgroundColor('#FF595B');
      number.style.width = '30rem';
      number.textContent = secretNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  currentScore.textContent = 20;
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#222');
  number.textContent = '?';
});
