'use strict';
//DOM - Docment Object Model is representation of HTML document
// Allows JS to access HTML elements and Styles to manipulate them
/* console.log(document.querySelector('.message').textContent); //we call class by '.' and id by '#'
//selecting and Manipulating elements
document.querySelector('.message').textContent = '!!Correct number!!'; // Here we updated the text in HTML directly in JS
document.querySelector('.number').textContent = 25;
document.querySelector('.score').textContent = 5;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); //.value is used to get value from input fields or to push values in to a field */

//event listener - Checks events like mouse clicks
//Check button event listener by using addEventListener(user action, function needed needs to be defined)
//Creating new secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const scoreOnScreen = document.querySelector('.score');
const message = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
let score = 20; //Here we are declaring the high score which we need on screen
let scoreHigh = 0;

check.addEventListener('click', function () {
  const userGuess = Number(guess.value);
  console.log(typeof userGuess, userGuess);
  //if not input by user
  if (!userGuess) {
    //this is to make sure we show a response when we click "Check" button without any value
    message('no number!!!');
  } // If user guesses correct number
  else if (userGuess === secretNumber) {
    message(`🎊 Correct number!!!`);
    number.textContent = secretNumber;
    check.disabled = true;
    body.style.backgroundColor = '#60b347';
    number.style.width = '120rem';
    if (score > scoreHigh) {
      scoreHigh = score;
      highScore.textContent = scoreHigh;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? `📈 Too HIGH!!` : `📉 Too low!!`);
      score--;
      scoreOnScreen.textContent = score;
    } else {
      message(` 😭 You lost the game`);
      scoreOnScreen.textContent = 0;
      check.disabled = true;
      body.style.backgroundColor = 'rgb(247, 24, 24)';
    }
  }
});
again.addEventListener('click', function () {
  check.disabled = false;
  score = 20;
  scoreOnScreen.textContent = score;
  guess.value = '';
  number.textContent = '?';
  message('Start Guessing...');
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';

  console.log('Again button clicked!!!');
});

// If user guesses high number
/* else if (userGuess > secretNumber) {
    if (score > 1) {
      message.textContent = `📈 Too HIGH!!`;
      //If number is high we come here and then we reduce the score
      score--;
      scoreOnScreen.textContent = score;
    } else {
      message.textContent = ` 😭 You lost the game`;
      scoreOnScreen.textContent = 0;
      body.style.backgroundColor = 'rgb(247, 24, 24)';
    }
  } // If user guesses low number
  else if (userGuess < secretNumber) {
    if (score > 1) {
      //If the score reaches 0 then we need to stop so negative numbers can't start coming in for score
      message.textContent = `📉 Too low!!`;
      //If number is high we come here and then we reduce the score
      score--;
      scoreOnScreen.textContent = score;
    } else {
      message.textContent = ` 😭 You lost the game`;
      scoreOnScreen.textContent = 0;
      body.style.backgroundColor = 'rgb(247, 24, 24)';
    } */

//MODAL WINDOW
