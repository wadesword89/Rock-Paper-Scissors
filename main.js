
function game() {
  
    const options = ["rock", "paper", "scissors"];
    let round = 0;
    let userScore = 0;
    let compScore = 0;

    while(round < 5) {
        const computerSelection = getComputerChoice();
        const input = prompt("Please Enter Choice:");
        console.log(playRound(input, computerSelection));
        if(playRound(input, computerSelection) !== "Invalid Selection. Please retry") {
            round++;
        }
    }

    function getComputerChoice() {
      return options[Math.floor(Math.random() * options.length)];
    }

    function playRound(playerSelection, computerSelection) {
        const selection = playerSelection.toLowerCase();
        if(!options.includes(selection)) return "Invalid Selection. Please retry";
        if (selection === computerSelection) return `Draw! You both chose ${selection}!`;
        if (selection === "rock" && computerSelection === "paper") {
            compScore++;
            return `You Lose! ${computerSelection} beats ${selection}`;
        }
        else if (selection === "paper" && computerSelection === "scissors") {
            compScore++;
            return`You Lose! ${computerSelection} beats ${selection}`;
        }
        else if (selection === "scissors" && computerSelection === "rock") {
            compScore++;
            return `You Lose! ${computerSelection} beats ${selection}`;
        }
        else {
            userScore++;
            return `You Win! ${selection} beats ${computerSelection}`;
        }
    }

    const result = userScore > compScore ? "You win!" : userScore < compScore ? "You lose!" : "It's a draw!";
    return `Final score: You: ${userScore}, Computer: ${compScore}\n${result}`;
  }
  
  console.log(game());