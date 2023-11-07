var computerChoice = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var playerSelection;
var computerSelection = getComputerChoice();
const score = document.querySelector("p");
const text = document.querySelector("h2");
const results = document.querySelector("p");

// Function to get a Random Computer choice between the 3 strings in the var computerChoice

function getComputerChoice() {
  var i = Math.floor(Math.random() * 3);
  return (computerSelection = computerChoice[i]);
}

// Function to play one round of rock paper scissors

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    text.textContent = "paper beats rock, you Looooser !";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    text.textContent = "paper beats rock, you got it ! ";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    text.textContent = "rock beats scissors, go hang yourself !";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    text.textContent = "rock beats scissors, good job !";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    text.textContent = "scissors beats paper 😖;
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    text.textContent = "scissors beats paper, good job !";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  } else {
    text.textContent = " It´s a draw!";
    results.textContent =
      "Your score: " + playerScore + "  Computer score: " + computerScore;
  }
  if (playerScore == 5 && computerScore < 5) {
    text.textContent = "YOU WON THE GAME BOY !";
    results.textContent = "";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5 && playerScore < 5) {
    text.textContent = "YOU LOOOSSEEE ...!";
    results.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
}

// Function to play as many rounds as the player inserts
var result;

/*function game(rounds) {
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
}*/

// Add event listener to buttons
// Rock Button

const rock_button = document.querySelector(".rock");
const scissors_button = document.querySelector(".scissors");
const paper_button = document.querySelector(".paper");

rock_button.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
});

// Scissors Button

scissors_button.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
});

// Paper Button

paper_button.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
});
