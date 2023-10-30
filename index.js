var computerChoice = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var playerSelection = "paper";
var computerSelection = getComputerChoice();

// Function to get a Random Computer choice between the 3 strings in the var computerChoice

function getComputerChoice() {
  var i = Math.floor(Math.random() * 3);
  return (computerSelection = computerChoice[i]);
}

// Function to play one round of rock paper scissors

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "paper beats rock, you fuckin Looooser !";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "paper beats rock, you got it ! ";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "rock beats scissors, go hang yourself !";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "rock beats scissors, good job !";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "scissors beats paper, you loose boy!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "scissors beats paper, good job !";
  }
}

// Function to play as many rounds as the player inserts
var result;

function game(rounds) {
  for (i = 0; i < rounds; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("insert selection").toLocaleLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Computer: " + computerSelection);
    console.log("You: " + playerSelection);
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
  }
  if (playerScore > computerScore) {
    result = "You won the GAME!";
  } else if (playerScore === computerScore) {
    result = "Same Score, play again!";
  } else {
    result = "You Loooose boy!";
  }
  playerScore = 0;
  computerScore = 0;
  return result;
}
