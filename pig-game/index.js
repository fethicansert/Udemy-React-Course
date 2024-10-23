//VARIABLES
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const newGameBtn = document.querySelector('.new-game-btn');
const rollDiceBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

const currentScore0El = document.getElementById('current-score-0');
const currentScore1El = document.getElementById('current-score-1');

let currentScore0 = 0;
let currentScore1 = 0;

let currentPlayer = player0;
let score = 0;


//LISTENERS
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newGameBtn.addEventListener('click', newGame);

//FUNCTIONS
function rollDice() {
    const randonNumber = Math.floor(Math.random() * 5);

    if (randonNumber === 0) return rollDice();

    diceEl.classList.remove('hidden');

    if (randonNumber === 1) {
        changePlayer();
    } else {
        score = score + randonNumber;
        currentPlayer === player0 ?
            score0El.textContent = score : score1El.textContent = score;
    }
    diceEl.src = `./dice/dice-six-faces-${randonNumber}.png`;
}

function holdScore() {
    if (currentPlayer === player0) {
        currentScore0El.textContent = score + parseInt(currentScore0El.textContent);
    } else {
        currentScore1El.textContent = score + parseInt(currentScore1El.textContent);
    }
    changePlayer();
}

function newGame() {
    score = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
}

function changePlayer() {
    score = 0;
    currentPlayer === player0 ?
        score0El.textContent = score : score1El.textContent = score;
    currentPlayer.classList.remove('player-active');
    currentPlayer = currentPlayer === player0 ? player1 : player0;
    currentPlayer.classList.add('player-active');
}