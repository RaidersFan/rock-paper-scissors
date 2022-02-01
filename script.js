//initialize variables for computerSelection, playerSelection, computerScore, playerScore, round
let computerSelection = ""
let playerSelection = ""
let computerScore = 0
let playerScore = 0
let round = 0;

//add event listener for all buttons to set playerSelection
const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
document.getElementById("playerScore").innerText = playerScore;
document.getElementById("computerScore").innerText = computerScore;
document.getElementById("round").innerText = round;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    oneRound()
  }
  )
})

//function to determine winner and update score
const chooseWinner = (playerSelection, computerSelection) => {
  //Options where computer wins
  if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore++
    results.innerText = `Round ${round}. Player choice: ${playerSelection}. Computer choice: ${computerSelection}. Computer Wins!`
  } //Options where player wins
  else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++
    results.innerText = `Round ${round}. Player choice: ${playerSelection}. Computer choice: ${computerSelection}. Player Wins!`
  } else results.innerText = `Round ${round}. Player choice: ${playerSelection}. Computer choice: ${computerSelection}. It's a tie!`
}



function oneRound() {
  if (playerScore >= 5 || computerScore >= 5) {
    return endGame();
  }
  round++
  //generate random num 1-3 to choose computerSelection
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computerSelection = "Rock";
      break;
    case 2:
      computerSelection = "Paper";
      break;
    case 3:
      computerSelection = "Scissors";
      break;
  }
  chooseWinner(playerSelection, computerSelection);
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("round").innerText = round;
  if (playerScore == 5 || computerScore == 5) {
    endGame();
  }
}

function endGame() {
  //Display final total and ask if player wants to play again
  str = `GAME OVER IN ${round} ROUNDS. Final Player Score: ${playerScore}. Computer Score: ${computerScore}. `;
  if (playerScore > computerScore) {
    str = str.concat('Player wins!');
  } else if (computerScore > playerScore) {
    str = str.concat('Computer Wins :(');
  }
  results.innerText = (str);
  //if player wants to play again, let them
  const ask = () => {
    let playAgain = prompt(str.concat(' Play again?'), "Yes or No").toLowerCase();
    if (playAgain == "yes") {
      //resetting variables once game is over to allow for replay
      round = 0;
      playerScore = 0;
      computerScore = 0;
      document.getElementById("playerScore").innerText = playerScore;
      document.getElementById("computerScore").innerText = computerScore;
      document.getElementById("round").innerText = round;
      results.innerText = ""
    } else if (playAgain == "no") {
      const para = document.createElement('p')
      para.innerText = "Thanks for playing! <3"
      results.appendChild(para)
    } else {
      ask();
    }
  };
  ask();
}