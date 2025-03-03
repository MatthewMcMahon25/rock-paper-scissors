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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return 1;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        return 1;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return 1;
    }

    else {
        return 2;
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        displayWinner.textContent = "The game is over! Congratulations, you won!";
    }

    else if (computerScore === 5) {
        displayWinner.textContent = "The game is over... and I'm sorry, but you've lost the game.";
    }   
    body.appendChild(displayWinner);
}

const body = document.querySelector("body");
const para = document.createElement("p");
para.textContent = "Please Choose One Of The Options Below To Play:";

const div = document.createElement("div");
const displayRound = document.createElement("div");
const scoreDiv = document.createElement("div");
const displayWinner = document.createElement("div");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

body.appendChild(para);
body.appendChild(div);
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors); 

let humanScore = 0, computerScore = 0;

let result;
    
rock.addEventListener("click", () => {   
    result = playRound("rock", getComputerChoice());
    updateScore(result);
});

paper.addEventListener("click", () => {   
    result = playRound("paper", getComputerChoice());
    updateScore(result);
});

scissors.addEventListener("click", () => {
    result = playRound("scissors", getComputerChoice());
    updateScore(result);
});

function updateScore(result) {
    
    if (result === 1) {
        displayRound.textContent = "You won this round!";
        humanScore++;
    } else if (result === 2) {
        displayRound.textContent = "You lost this round!";
        computerScore++;
    } else {
        displayRound.textContent = "This round was a tie!";
    }

    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    body.appendChild(displayRound);
    body.appendChild(scoreDiv);

    if (humanScore === 5 || computerScore === 5) {
        getWinner(humanScore, computerScore);
        disableButtons();
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}