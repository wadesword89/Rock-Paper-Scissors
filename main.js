
function game() {
  
    const options = ["rock", "paper", "scissors"];
    function getComputerChoice() {
      return options[Math.floor(Math.random() * options.length)];
    }
    function playRound(playerSelection) {
        const selection = playerSelection.toLowerCase();
        if(!options.includes(selection)) return "Invalid Selection. Please retry";
        if (selection === computerSelection) return `You both chose ${selection}! It's a draw!`;
        if (selection === "rock" && computerSelection === "paper") {
            return `You Lose! ${computerSelection} beats ${selection}`;
        }
        else if (selection === "paper" && computerSelection === "scissors") {
            return`You Lose! ${computerSelection} beats ${selection}`;
        }
        else if (selection === "scissors" && computerSelection === "rock") {
            return `You Lose! ${computerSelection} beats ${selection}`;
        }
        else return `You Win! ${selection} beats ${computerSelection}`;
    }
    const input = prompt("Please Enter Choice:");
    const computerSelection = getComputerChoice();
    return console.log(playRound(input));
  }
  
  game();