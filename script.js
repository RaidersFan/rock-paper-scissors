//initialize variables for computerSelection, playerSelection, computerScore, playerScore, round
let computerSelection = ""
let playerSelection = ""
let computerScore = 0
let playerScore = 0
let round = 1;
let result;

//function to test playerSelection is valid, when complete will move on to Choose Winner
const testSelection = playerSelection => {
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    chooseWinner(playerSelection, computerSelection)
  } else {//catch for invalid choices
    playerSelection = prompt(`Round ${round}. Please enter a valid choice. Rock, Paper, or Scissors?`);
    testSelection(playerSelection)
  }
}

//function to determine winner and update score
const chooseWinner = (playerSelection, computerSelection) => {
  //Options where computer wins
  if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++
    result = `Round ${round}. Player choice: ${playerSelection} Computer choice: ${computerSelection}. Computer Wins! Player Score: ${playerScore}. Computer Score: ${computerScore}.`
  } //Options where player wins
  else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++
    result = `Round ${round}. Player choice: ${playerSelection} Computer choice: ${computerSelection}. Player Wins! Player Score: ${playerScore}. Computer Score: ${computerScore}.`
  } //If tie 
  else {
    result = `Round ${round}. Player choice: ${playerSelection} Computer choice: ${computerSelection}. It's a tie! Player Score: ${playerScore}. Computer Score: ${computerScore}.`
  }
}

const oneRound = () => {
  //generate random num 1-3 to choose computerSelection
  let randomNum = Math.floor(Math.random() * 3) + 1
  switch (randomNum) {
    case 1:
      computerSelection = "rock"
      break;
    case 2:
      computerSelection = "paper"
      break;
    case 3:
      computerSelection = "scissors"
      break;
  }
  //ask user input, set value as all lowercase playerSelection
  playerSelection = prompt(`Round ${round}. Rock, Paper, or Scissors?`).toLowerCase()
  //ensure playerSelection is valid and choose a winner
  testSelection(playerSelection)
}

//create function game()
const game = () => {
  //set up loop while round number is less than or equal to 5
  let roundTotal = parseInt(prompt('How many rounds would you like to play?', 5))
  console.clear()
  while (round <= roundTotal) {
    oneRound()
    console.log(result)
    round++
  }
  //Display final total and ask if player wants to play again
  str = `GAME OVER. Final Player Score: ${playerScore}. Computer Score: ${computerScore}. `
  if (playerScore > computerScore) {
    str = (str.concat('Player wins!'))
  } else if (computerScore > playerScore) {
    str = str.concat('Computer Wins :(')
  } else str = str.concat('It\'s a tie!')
  //if player wants to play again, let them
  const ask = () => {
    let playAgain = prompt(str.concat(' Play again?'), "Yes or No").toLowerCase()
    if (playAgain == "yes") {
      //resetting variables once game is over to allow for replay
      round = 1
      playerScore = 0;
      computerScore = 0;
      game()
    } else if (playAgain == "no") {
      console.log(str + " Thanks for playing!")
    } else {
      ask()
    }
  }
  ask()
}
