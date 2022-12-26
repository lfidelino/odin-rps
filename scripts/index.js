/**
 *
 * @param {int} scoreToWin
 */
let game = (scoreToWin) => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < scoreToWin && computerScore < scoreToWin) {
    let playerChoice = getPlayerChoice(playerScore, computerScore);
    let computerChoice = getComputerChoice();

    if (getWinner(playerChoice, computerChoice) === "player") playerScore += 1;
    else if (getWinner(playerChoice, computerChoice) === "computer") computerScore += 1;

    alert(getMessage(playerChoice, playerScore, computerChoice, computerScore, scoreToWin));
  }
};

/**
 *
 * @returns string
 */
let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
};

/**
 *
 * @param {int} playerScore
 * @param {int} computerScore
 * @returns string
 */
let getPlayerChoice = (playerScore, computerScore) => {
  let playerChoice = "";

  while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
    playerChoice = prompt(`Score: ${playerScore} - ${computerScore}

Rock, Paper, or Scissors?`).toLowerCase();
  }

  return playerChoice;
};

/**
 *
 * @param {string} playerChoice
 * @param {string} computerChoice
 * @returns string
 */
let getWinner = (playerChoice, computerChoice) => {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  )
    return "player";
  else if (playerChoice === computerChoice) {
    return "";
  } else return "computer";
};

/**
 *
 * @param {string} playerChoice
 * @param {int} playerScore
 * @param {string} computerChoice
 * @param {int} computerScore
 * @param {int} scoreToWin
 * @returns string
 */
let getMessage = (playerChoice, playerScore, computerChoice, computerScore, scoreToWin) => {
  let message = "";

  message += `${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} vs ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;

  if (
    (playerChoice === "rock" || computerChoice === "rock") &&
    (playerChoice === "paper" || computerChoice === "paper")
  )
    message += "\n\n" + (playerChoice === "paper" ? "You win!" : "You lose.") + " Paper covers rock.";
  else if (
    (playerChoice === "paper" || computerChoice === "paper") &&
    (playerChoice === "scissors" || computerChoice === "scissors")
  )
    message += "\n\n" + (playerChoice === "scissors" ? "You win!" : "You lose.") + " Scissors cut paper.";
  else if (
    (playerChoice === "scissors" || computerChoice === "scissors") &&
    (playerChoice === "rock" || computerChoice === "rock")
  )
    message += "\n\n" + (playerChoice === "rock" ? "You win!" : "You lose.") + " Rock crushes scissors.";
  else message += "\n\nIt's a tie.";

  message += `\n\nScore: ${playerScore} - ${computerScore}`;

  if (playerScore === scoreToWin) message += "\n\nVICTORY!";
  else if (computerScore === scoreToWin) message += "\n\nDEFEAT!";
  return message;
};

game(3);
