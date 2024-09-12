getComputerChoice = () => {
    // Choose a random number between 1 and 3
    let choiceNum = Math.round(Math.random() * 2) + 1;
    // Translate that number into rock, paper, or scissors and return it
    if(choiceNum == 1) {
        return "rock";
    }
    else if(choiceNum == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

getHumanChoice = () => {
    // Prompt the user for the choice
    let humanChoice = prompt("Choose between rock, paper, or scissors.")
    // If it's a valid choice, return
    // Else flag it as invalid input
    if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    }
    else {
        return "Invalid input";
    }
}

// Declare the variables for the score and initialize them to 0
let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();

console.log(getHumanChoice());