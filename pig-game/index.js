//VARIABLES
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const newGameBtn = document.querySelector('.new-game-btn');
const rollDiceBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');


const players = document.querySelectorAll('.player')

const currentScore0El = document.getElementById('current-score-0');
const currentScore1El = document.getElementById('current-score-1');

let currentScore0 = 0;
let currentScore1 = 0;

let currentPlayer = 0;
let score = 0;


//LISTENERS
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newGameBtn.addEventListener('click', newGame);

//FUNCTIONS
function rollDice() {
    //Generate random dice number between 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./dice/dice-six-faces-${dice}.png`;

    if (dice !== 1) {
        score += dice;
        document.getElementById(`score--${currentPlayer}`).textContent = score;
    } else {
        changePlayer();
    }
    
}

function holdScore() {
    if (currentPlayer === 0) {
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
    document.getElementById(`score--${currentPlayer}`).textContent = 0;
    players[0].classList.toggle('player-active');
    players[1].classList.toggle('player-active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
}