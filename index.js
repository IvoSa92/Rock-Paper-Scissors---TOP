var computerChoice = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
var playerSelection = "Paper";
var computerSelection = getComputerChoice();

// Function to get a Random Computer choice between the 3 strings in the var computerChoice

function getComputerChoice() {
  var i = Math.floor(Math.random() * 3);
  return (computerSelection = computerChoice[i]);
}

// Function to play one round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore++;
    return "Paper beats Rock, you fuckin Looooser !";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    return "Paper beats Rock, you got it ! ";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore++;
    return "Rock beats Scissors, go hang yourself !";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    return "Rock beats Scissors, good job !";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerScore++;
    return "Scissors beats Paper, you loose boy!";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    return "Scissors beats Paper, good job !";
  }
}

// Function to play as many rounds as the player inserts
var result;

function game(rounds) {
  for (i = 0; i < rounds; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("insert selection");
    playRound(playerSelection, computerSelection);
    console.log("Computer: " + computerSelection);
    console.log("You: " + playerSelection);
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
  }
  if (playerScore > computerScore) {
    result = "You won the GAME!";
  } else if (playerScore === computerScore) {
    result = "play again you have both the same score..";
  } else {
    result = "You Loooose boy!";
  }
  playerScore = 0;
  computerScore = 0;
  return result;
}
