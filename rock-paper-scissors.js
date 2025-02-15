console.log("Hello World");

// Gets a random number 0, 1 or 2
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

// Gets the computers choice and returns either Rock, Paper or Scissors
function getComputerChoice() {
    let choice;

    // Creates a random number: 0 (Rock), 1 (Paper) or 2 (Scissors)
    randomNum = getRandomNumber();
    console.log(randomNum);

    // If the number equals 0, the computer's choice is Rock
    if (randomNum === 0) {
        choice = "Rock";
    }
    // If the number equals 1, the computer's choice is Paper
      else if (randomNum === 1) {
        choice = "Paper";
    }

    // Else the number equals 2, the computer's choice is Scissors
      else {
        choice = "Scissors";
      }

    // Returns the computer's choice
    console.log(choice);
    return choice;
}

getComputerChoice();