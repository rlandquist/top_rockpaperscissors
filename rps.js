function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock'     && computerChoice === 'scissors') ||
    (playerChoice === 'paper'    && computerChoice === 'rock')     ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerChoice = prompt(`Round ${i} - Enter rock, paper, or scissors:`);
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);
    console.log(result);

    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }

  console.log(`\nFinal Score — You: ${playerScore} | Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log('🏆 You won the game!');
  } else if (computerScore > playerScore) {
    console.log('💀 Computer won the game!');
  } else {
    console.log("🤝 It's a tie game!");
  }
}

playGame();