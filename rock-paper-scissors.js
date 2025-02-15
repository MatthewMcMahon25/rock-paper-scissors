// Gets a random number based on a "max" input
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Gets the computers choice and returns either Rock, Paper or Scissors
function getComputerChoice() {
    let choice;

    // Creates a random number: 0 (Rock), 1 (Paper) or 2 (Scissors)
    let randomNum = getRandomNumber(3);

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

// Creating the getWinner function which finds the winner of the game
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

        //Update the score
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

        // Update Counter
        roundCounter++;
    }
    // prints the winner of the game
    getWinner(humanScore, computerScore);
}

playGame();

// There needs to be a check that the player correctly inputs rock, paper or scissors
// The program adjust for case-sensite cases. I.e., "Rock" will be read as "rock"
// However, the current program assumes an incorrect input results in a loss
// A graphical interfac that allows for the user to select rock, paper or scissors seems like
// a fun option for the adjustment of this case.