let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (!choices.includes(playerSelection)) {
    displayResult('Invalid choice. Please choose Rock, Paper, or Scissors.');
    return;
  }

  determineWinner(playerSelection, computerSelection);
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayResult('It\'s a tie! Play again.');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    displayResult(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScore++;
  } else {
    displayResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
    computerScore++;
  }

  displayScore();
}

function displayResult(message) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = message;
}

function displayScore() {
  const playerScoreSpan = document.getElementById('player-score');
  const computerScoreSpan = document.getElementById('computer-score');
  
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    displayResult(`Congratulations! ${winner} wins the game.`);
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayScore();
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
