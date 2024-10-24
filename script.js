const gameBoard = document.getElementById('game-board');
const targetNumberElement = document.getElementById('target-number');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
let score = 0;
let targetNumber;
let numbers = [];
let rows = 4;
let cols = 5;

// Initialize the game
function initGame() {
    resetMessage();
    gameBoard.innerHTML = '';
    numbers = [];
    for (let i = 0; i < rows * cols; i++) {
        const randomNumber = getRandomNumber();
        numbers.push(randomNumber);
        let tileElement = createTile(randomNumber);
        gameBoard.appendChild(tileElement);
    }
    targetNumber = numbers[Math.floor(Math.random() * numbers.length)];
    targetNumberElement.textContent = targetNumber;
}

// Generate random numbers between 1 and 50
function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

// Create a tile and display it
function createTile(value) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = value;
    tile.addEventListener('click', () => checkNumber(value, tile));
    return tile;
}

// Check if the clicked number is the target number
function checkNumber(value, tile) {
    if (value === targetNumber) {
        score += 10;
        scoreElement.textContent = score;
        tile.style.backgroundColor = '#2ecc71'; // Turn green for correct
        setTimeout(() => initGame(), 500); // Load new game after a short delay
    } else {
        messageElement.textContent = 'Wrong number, try again!';
        tile.style.backgroundColor = '#e74c3c'; // Turn red for incorrect
    }
}

// Reset the game
function resetGame() {
    score = 0;
    scoreElement.textContent = score;
    initGame();
}

// Reset the message
function resetMessage() {
    messageElement.textContent = '';
}

// Initialize the game on page load
initGame();
