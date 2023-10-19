'use strict';
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // le getElementById  fonctionne de la meme maniere que le querySelector mais il est plus appropprié aux id
const diceELement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
let activePlayer;
let playing;
let currentScore;
let score;
const init = function () {
  activePlayer = 0;
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceELement.classList.add('hidden');
  currentScore = 0;
  score = [0, 0];
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0Element.classList.toggle('player--active'); // le toggle permet de verifier si un attribut existe dans la balise si oui elle retire l'attribut dans le cas contraire elle l'ajoute
  player1Element.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceELement.classList.remove('hidden');
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceELement.src = `dice-${dice}.png`;
    console.log(diceELement.textContent);
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      console.log('Gagneur');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceELement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(
  'click',
  init
  // function () {
  /*playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceELement.classList.remove('hidden');
  currentScore = 0;
  score = [0, 0];
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');*/
  //}
);
