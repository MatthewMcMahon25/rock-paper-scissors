function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice;

    let randomNum = getRandomNumber(3);

    if (randomNum === 0) {
        choice = "rock";
    }
      else if (randomNum === 1) {
        choice = "paper";
    }
      else {
        choice = "scissors";
      }
    return choice;
}

function getHumanChoice() {
    return prompt("rock, paper or scissors? ");
}

// A function that simulate a single round
function playRound(humanChoice, computerChoice) {
    // Converting the humanChoice variable to lowercase
    humanChoice = humanChoice.toLowerCase();

    // Tie Case: Rock vs. Rock || Paper vs. Paper || Scissor vs. Scissor
    if (humanChoice === computerChoice) {
        return 0;
    }

    // Win 1: Rock vs. Scissor
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return 1;
    }

    // Win 2: Paper vs. Rock
    else if (humanChoice === "paper" && computerChoice === "rock") {
        return 1;
    }

    // Win 3: Scissor vs. Paper
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return 1;
    }

    // Otherwise you lose
    else {
        return 2;
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("The game is over! Congratulations, you won!");
    }

    else if (humanScore < computerScore) {
        console.log("The game is over... and I'm sorry, but you've lost the game.")
    }

    else {
        console.log("The game ends and it's a tie!")
    }
}

function playGame() {
    let roundCounter = 0, humanScore = 0, computerScore = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let result = playRound(humanSelection, computerSelection);

    
    if (result === 0) {
        console.log("It's a tie!")
        console.log(humanScore);
        console.log(computerScore);
    } else if (result === 1) {
        humanScore++;
        console.log("You win!");
        console.log(humanScore);
        console.log(computerScore);
    } else if (result === 2) {
        computerScore++;
        console.log("You lose!");
        console.log(humanScore);
        console.log(computerScore);
        }
        
    getWinner(humanScore, computerScore);
}

playGame();

