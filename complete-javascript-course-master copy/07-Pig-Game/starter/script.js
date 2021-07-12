'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  //Game condition
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  activePlayer = 0;

  //Starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
};

init();

//function to switch Player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice fucntionality
rollBtn.addEventListener('click', function () {
  //Generating random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    console.log(dice);
    diceEl.classList.remove('hidden');
    //showing image as per the random number
    diceEl.src = `dice-${dice}.png`;
    //Check rolled is 1; if true switch player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      //Switch to next player
      //  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
      switchPlayer(); // toggle switches like on and off
    }
  }
});
holdBtn.addEventListener('click', function () {
  //Add current score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //Check if Players score is >=100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      console.log(activePlayer);
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      rollBtn.disable = true;
      holdBtn.disable = true;
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);

//I tried this didn't work please check init function
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent = 0;
//   document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//   document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
//   switchPlayer();
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent = 0;
