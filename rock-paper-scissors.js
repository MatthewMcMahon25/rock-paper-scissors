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

console.log(getComputerChoice());
console.log(getHumanChoice());