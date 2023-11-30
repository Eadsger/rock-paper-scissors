function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make playerSelection case-insensitive
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
      return 'Invalid choice. Please choose Rock, Paper, or Scissors.';
    }
  
    if (playerSelection === computerSelection) {
      return 'It\'s a tie! Replay the round.';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
  
      // Update scores
      const result = playRound(playerSelection, computerSelection);
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    // Determine the winner of the game
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game.');
    } else {
      console.log('It\'s a tie! No overall winner.');
    }
  }
  
  // Start the game
  game();