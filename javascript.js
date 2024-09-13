

const getComputerChoice = () => {
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

const getHumanChoice = () => {
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

const playGame = () => {
    // Declare the variables for the score and initialize them to 0
    let humanScore = 0;
    let computerScore = 0;

    // Declare a counter for the loop
    let counter = 0;

    // Declare playRound as a function inside playGame
    const playRound = (humanChoice, computerChoice) => {
        // Lowercase the values so case doesn't matter
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        // Play the game rock-paper-scissors between the human and the computer
        // Go through each possibility one by one until one matches
        // Then increment the corresponding score and return the appropriate string
        if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats rock!";
        }
        else if(humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return "You win! Rock beats scissors!";
        }
        else if(humanChoice == "rock" && computerChoice == "rock") {
            return "Tie game!";
        }
        else if(humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper!";
        }
        else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return "You win! Paper beats rock!";
        }
        else if(humanChoice == "paper" && computerChoice == "paper") {
            return "Tie game!";
        }
        else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors!";
        }
        else if(humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You win! Scissors beats paper!";
        }
        else if(humanChoice == "scissors" && computerChoice == "scissors") {
            return "Tie game!";
        }
        else {
            return "Invalid input";
        }
    }

    // Loop through playRound 5 times
    while(counter < 5) {
        // Get the choices from the humand and the computer
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(humanChoice, computerChoice));
        counter++;
    }

    if(humanScore > computerScore) {
        console.log("You win!")
    }
    else if(humanScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("It's a tie!")
    }
}

playGame();


