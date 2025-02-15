// Gets a random number based on a "max" input
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Gets the computers choice and returns either Rock, Paper or Scissors
function getComputerChoice() {
    let choice;

    // Creates a random number: 0 (Rock), 1 (Paper) or 2 (Scissors)
    randomNum = getRandomNumber(3);

    // If the number equals 0, the computer's choice is Rock
    if (randomNum === 0) {
        choice = "rock";
    }
    // If the number equals 1, the computer's choice is Paper
      else if (randomNum === 1) {
        choice = "paper";
    }

    // Else the number equals 2, the computer's choice is Scissors
      else {
        choice = "scissors";
      }

    // Returns the computer's choice
    return choice;
}

function getHumanChoice() {
    // Prompt user for input
    let choice = prompt("rock, paper or scissors? ");   

    // Return human's choice
    return choice;
}

// A function that simulate a single round
function playRound(humanChoice, computerChoice) {
    // Converting the humanChoice variable to lowercase
    humanChoice.toLowerCase();

    // Tie Case: Rock vs. Rock || Paper vs. Paper || Scissor vs. Scissor
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    // Win 1: Rock vs. Scissor
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win!";
    }

    // Win 2: Paper vs. Rock
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win!";
    }

    // Win 3: Scissor vs. Paper
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win!";
    }

    // Otherwise you lose
    else {
        return "You lose";
    }
}

// Update the score function
function updateScore(result, humanScore, computerScore) {
    // if human wins
    if (result === "You win!") {
        return humanScore + 1;
    }

    // if computer wins
    else if (result === "You lose") {
        return computerScore + 1;
    }
}

// Creating a function called playGame
function playGame() {
    // Initializing round counter
    let roundCounter = 0;

    // Initializing score variables
    let humanScore = 0, computerScore = 0;

    // Creating a loop that lasts 5 rounds
    while (roundCounter < 5){
        // Get the human choice
        let humanSelection = getHumanChoice();

        // Get the computer choice
        let computerSelection = getComputerChoice();

        //Play the round by calling the playRound function and print the result
        let result = (playRound(humanSelection, computerSelection));
        console.log(result);

        //Update the score
        humanScore = updateScore(result, humanScore, computerScore);
        computerScore = updateScore(result, humanScore, computerScore);
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();

// There needs to be a check that the player correctly inputs rock, paper or scissors
// The program adjust for case-sensite cases. I.e., "Rock" will be read as "rock"
// However, the current program assumes an incorrect input results in a loss
// A graphical interfac that allows for the user to select rock, paper or scissors seems like
// a fun option for the adjustment of this case.